"use client"

import Header from "../Header"
import axios from '@/lib/axios'
import { Fragment, useEffect, useState } from "react"
import Loading from "../Loading"
import { Dialog, Transition } from "@headlessui/react"
import ModalHistoryChanges from "@/components/ModalHistoryChanges"

const Acquisition = () => {

    const [acquisitions, setAcquisitions] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    const [formData, setFormData] = useState({
        budget: "",
        unit: "",
        type: "",
        quantity: "",
        unit_value: "",
        date: "",
        supplier: "",
        documentation: ""
    });

    const [formSearch, setFormSearch] = useState({
        init_date: "",
        end_date: "",
        supplier: "",
        status: ""
    });

    const [errors, setErrors] = useState({});
    const [reload, setReload] = useState(false);
    const [editMode, setEditMode] = useState(false);
    const [showConfirmModal, setShowConfirmModal] = useState(false);
    const [currentAcquisition, setCurrentAcquisition] = useState({});
    const [showHistory, setShowHistory] = useState(false);
    const [currentAudit, setCurrentAudit] = useState([]);
    const [suppliers, setSuppliers] = useState([]);
    const [loading, setLoadin] = useState(false);

    const columnsNames = {
        budget: "Presupuesto",
        unit: "Unidad",
        type: "Tipo de Bien o Servicio",
        quantity: "Cantidad",
        unit_value: "Valor Unitario",
        date: "Fecha de Adquisición",
        supplier: "Proveedor",
        documentation: "Documentación",
        status: "Estado"
    }

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors({});

        if (editMode && formData.id) {
            update();
        } else {
            save();
        }
    };

    const handleSearchChange = (e) => {
        console.log(e.target.value);
        
        setFormSearch({ ...formSearch, [e.target.name]: e.target.value });

        console.log(formSearch);
        
    };

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        setReload(prev => !prev);
    };

    const clearFormSearch = () => {
        setFormSearch({
            init_date: "",
            end_date: "",
            supplier: "",
            status: ""
        });
        setReload(prev => !prev);
    }

    const save = () => {
        axios.post('/acquisitions', formData)
            .then((res) => {
                let data = res.data;

                if (!data.meta.success) {
                    setErrors(data.meta.errors);
                } else {
                    closeModal();
                    setReload(prev => !prev);
                }
            })
            .catch(error => {
                //console.error(error);
            });
    }

    const update = () => {
        formData._method = "PUT";

        axios.post(`/acquisitions/${formData.id}`, formData)
            .then((res) => {
                let data = res.data;

                if (!data.meta.success) {
                    setErrors(data.meta.errors);
                } else {
                    closeModal();
                    setReload(prev => !prev);
                }
            })
            .catch(error => {
                //console.error(error);
            });
    }

    const openModal = () => {
        setEditMode(false);
        setIsOpen(true)
    }

    const closeModal = () => {
        setErrors({});
        setIsOpen(false);
        clearForm();
    }

    const clearForm = () => {
        setFormData({
            budget: "",
            unit: "",
            type: "",
            quantity: "",
            unit_value: "",
            date: "",
            supplier: "",
            documentation: ""
        });
    }

    useEffect(() => {
        setLoadin(true);
        axios.get('/acquisitions', {
            params: {
                search: formSearch
            }
        }).then((res) => {
            let data = res.data;
            if (data.meta.success) {
                setAcquisitions(data.data);
            }
        })
        .catch(error => {
            console.error(error);
        });

        axios.get('/get-suppliers')
        .then((res) => {
            let data = res.data;
            setSuppliers(data);
            setLoadin(false);
        })
        .catch(error => {
            console.error(error);
            setLoadin(false);
        });
    }, [reload])

    const edit = (acquisition) => {
        setEditMode(true)
        setIsOpen(true)
        setFormData({
            id: acquisition.id,
            budget: acquisition.budget,
            unit: acquisition.unit,
            type: acquisition.type,
            quantity: acquisition.quantity,
            unit_value: acquisition.unit_value,
            date: acquisition.date,
            supplier: acquisition.supplier,
            documentation: acquisition.documentation
        });
    }

    const changeState = (acquisition) => {
        setShowConfirmModal(true);
        setCurrentAcquisition(acquisition);
    }

    const handleConfirm = async () => {
        setShowConfirmModal(false);

        console.log(currentAcquisition);
        console.log(!currentAcquisition.status);
        if (currentAcquisition?.id) {
            updateStatus();
        }
    }

    const closeConfirmModal = () => {
        setShowConfirmModal(false);
        setCurrentAcquisition({});
    }

    const updateStatus = () => {
        axios.post(`/change-status/${currentAcquisition.id}`, { status: currentAcquisition.status == '1' ? 0 : 1 })
            .then((res) => {
                let data = res.data;

                if (!data.meta.success) {
                    //setErrors(data.meta.errors);
                } else {
                    closeConfirmModal();
                    setReload(prev => !prev);
                }
            })
            .catch(error => {
                //console.error(error);
                closeConfirmModal();
            });
    }

    const viewAudit = (acquisition) => {
        if (acquisition.audits.length) {
            acquisition.audits.forEach(audit => {
                let oldValues = Object.keys(audit.old_values).map((key) => [key, audit.old_values[key]]);
                let newValues = Object.keys(audit.new_values).map((key) => [key, audit.new_values[key]]);

                let created_at = new Date(audit.created_at);
                let oldValue = oldValues[0][0] == 'status' ? (oldValues[0][1] == '1' ? 'Activo' : 'Inactivo') : oldValues[0][1];
                let newValue = oldValues[0][0] == 'status' ? (newValues[0][1] == '1' ? 'Activo' : 'Inactivo') : newValues[0][1];

                let structure = {
                    field: columnsNames[oldValues[0][0]],
                    oldValue: oldValue,
                    newValue: newValue,
                    date: created_at.toLocaleString(),
                }
                currentAudit.push(structure)
            });
        }
        setShowHistory(true);
    }

    const closeModalHistory = () => {
        setShowHistory(false)
        setCurrentAudit([]);
    }

    return (
        <>
            <title>ADRES - Solicitudes</title>
            <Header title="GESTIÓN DE ADQUISICIONES" />
            <div className="py-8">
                <div className="max-w-12/12 mx-auto sm:px-6 lg:px-8">
                    <div className="overflow-hidden sm:rounded-lg mb-2 mr-1.5 text-right">
                        <button onClick={() => openModal()} type="button" className="focus:outline-none text-white hover:bg-green-800 focus:ring-4 bg-emerald-500 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5" >
                            Nueva Solicitud
                        </button>
                    </div>
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg mb-3">
                        <div className="p-6 bg-white border-b border-gray-200">
                            <form
                                onSubmit={handleSearchSubmit}
                                className="bg-white p-6 rounded-xl shadow-md border border-gray-200"
                            >
                                <div className="flex flex-wrap gap-6 items-end">
                                    <div className="flex flex-col">
                                        <label htmlFor="init_date" className="text-sm font-semibold text-gray-700 mb-1">
                                            Fecha Inicial
                                        </label>
                                        <input
                                            type="date"
                                            id="init_date"
                                            name="init_date"
                                            value={formSearch.init_date}
                                            onChange={handleSearchChange}
                                            className="w-44 px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                                        />
                                    </div>
                                    <div className="flex flex-col">
                                        <label htmlFor="end_date" className="text-sm font-semibold text-gray-700 mb-1">
                                            Fecha Final
                                        </label>
                                        <input
                                            type="date"
                                            id="end_date"
                                            name="end_date"
                                            value={formSearch.end_date}
                                            onChange={handleSearchChange}
                                            className="w-44 px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                                        />
                                    </div>

                                    <div className="flex flex-col">
                                        <label htmlFor="q_supplier" className="text-sm font-semibold text-gray-700 mb-1">
                                            Proveedor
                                        </label>
                                        <select
                                            id="q_supplier"
                                            name="supplier"
                                            value={formSearch.supplier}
                                            onChange={handleSearchChange}
                                            className="w-52 px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                                        >
                                            <option value="">Todos</option>
                                            {suppliers.map((supplier, index) => (
                                                <option key={index} value={supplier.supplier}>{supplier.supplier}</option>
                                            ))}
                                        </select>
                                    </div>

                                    {/* Estado */}
                                    <div className="flex flex-col">
                                        <label htmlFor="status" className="text-sm font-semibold text-gray-700 mb-1">
                                            Estado
                                        </label>
                                        <select
                                            id="status"
                                            name="status"
                                            value={formSearch.status}
                                            onChange={handleSearchChange}
                                            className="w-44 px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                                        >
                                            <option value="">Todos</option>
                                            <option value="1">Activo</option>
                                            <option value="0">Inactivo</option>
                                        </select>
                                    </div>

                                    {/* Botón de búsqueda */}
                                    <div className="flex">
                                        <button
                                            type="submit"
                                            className="mr-1 mt-1 px-3 py-2 bg-indigo-600 text-white hover:bg-indigo-800 rounded-lg font-semibold shadow transition"
                                        >
                                            Buscar
                                        </button>
                                        <button
                                            type="button"
                                            onClick={() => clearFormSearch()}
                                            className="mt-1 px-3 py-2 bg-gray-400 text-white hover:bg-gray-500 rounded-lg font-semibold shadow transition"
                                        >
                                            Limpiar
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="p-3 bg-white border-b border-gray-200 sm:rounded-lg">
                        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                            {loading ? <Loading /> : (
                                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                        <tr>
                                            <th scope="col" className="px-4 py-3 text-center">
                                                Presupuesto
                                            </th>
                                            <th scope="col" className="px-4 py-3 text-center">
                                                Unidad
                                            </th>
                                            <th scope="col" className="px-4 py-3 text-center">
                                                Tipo de Bien o Servicio
                                            </th>
                                            <th scope="col" className="px-4 py-3 text-center">
                                                Cantidad
                                            </th>
                                            <th scope="col" className="px-4 py-3 text-center">
                                                Valor Unitario
                                            </th>
                                            <th scope="col" className="px-4 py-3 text-center">
                                                Valor Total
                                            </th>
                                            <th scope="col" className="px-4 py-3 text-center">
                                                Fecha
                                            </th>
                                            <th scope="col" className="px-4 py-3 text-center">
                                                Proveedor
                                            </th>
                                            <th scope="col" className="px-4 py-3 text-center">
                                                Documentación
                                            </th>
                                            <th scope="col" className="px-4 py-3 text-center">
                                                Estado
                                            </th>
                                            <th scope="col" className="px-4 py-3 text-center"></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {acquisitions.length ? acquisitions.map((acquisition, i) => (
                                            <tr key={i} className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200">
                                                <th scope="row" className="px-5 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                    {acquisition.budget}
                                                </th>
                                                <td className="px-5 py-2">
                                                    {acquisition.unit}
                                                </td>
                                                <td className="px-5 py-2">
                                                    {acquisition.type}
                                                </td>
                                                <td className="px-5 py-2">
                                                    {acquisition.quantity}
                                                </td>
                                                <td className="px-5 py-2">
                                                    {acquisition.unit_value}
                                                </td>
                                                <td className="px-5 py-2">
                                                    {acquisition.unit_value * acquisition.quantity}
                                                </td>
                                                <td className="px-5 py-2">
                                                    {acquisition.date}
                                                </td>
                                                <td className="px-5 py-2">
                                                    {acquisition.supplier}
                                                </td>
                                                <td className="px-5 py-2">
                                                    {acquisition.documentation}
                                                </td>
                                                <td className="px-5 py-2">
                                                    {acquisition.status == '1' ? 'ACTIVO' : 'INACTIVO'}
                                                </td>
                                                <td className="px-5 py-2">
                                                    <button type="button" onClick={() => edit(acquisition)} className="text-white hover:bg-green-800 bg-emerald-500 rounded-sm text-xs px-2 py-1 mb-0.5 mr-0.5" >Editar</button>
                                                    <button type="button" onClick={() => changeState(acquisition)} className="text-white hover:bg-blue-800 bg-blue-500 rounded-sm text-xs px-2 py-1 mb-0.5 mr-0.5" >{acquisition.status == '1' ? 'Inactivar' : 'Activar'}</button>
                                                    <button type="button" onClick={() => viewAudit(acquisition)} className="text-white hover:bg-gray-800 bg-gray-600 rounded-sm text-xs px-2 py-1" >Historial</button>
                                                </td>
                                            </tr>
                                        )) : (
                                            <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200">
                                                <td className="px-5 py-2 text-center italic" colSpan={10}>
                                                    <span>¡No se encontraron registros!</span>
                                                </td>
                                            </tr>
                                        )}
                                    </tbody>
                                </table>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            <Transition show={isOpen} as={Fragment}>
                <Dialog onClose={() => { }} className="relative z-50" static>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-200"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-150"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div
                            className="fixed inset-0 bg-black/30 backdrop-blur-sm"
                            aria-hidden="true"
                        />
                    </Transition.Child>

                    <div className="fixed inset-0 flex items-center justify-center p-4">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-200"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-150"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <Dialog.Panel className="relative w-full max-w-3xl rounded-2xl bg-white p-6 shadow-xl transition-all">
                                <button
                                    onClick={() => closeModal()}
                                    className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-2xl font-bold"
                                >
                                    &times;
                                </button>

                                <Dialog.Title className="text-xl font-semibold mb-4">
                                    {editMode ? "Editar Adquisición" : "Registrar Adquisición"}
                                </Dialog.Title>

                                <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm font-medium">Presupuesto</label>
                                            <input
                                                type="text"
                                                name="budget"
                                                value={formData.budget}
                                                onChange={handleChange}
                                                className={`w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2 ${errors.budget ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-blue-500"
                                                    }`}
                                            />
                                            {errors.budget && (
                                                <p className="text-sm text-red-600 mt-1">{errors.budget[0]}</p>
                                            )}
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium">Unidad</label>
                                            <input
                                                type="text"
                                                name="unit"
                                                value={formData.unit}
                                                onChange={handleChange}
                                                className={`w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2 ${errors.unit ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-blue-500"
                                                    }`}
                                            />
                                            {errors.unit && (
                                                <p className="text-sm text-red-600 mt-1">{errors.unit[0]}</p>
                                            )}
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm font-medium">Tipo de Bien o Servicio</label>
                                            <input
                                                type="text"
                                                name="type"
                                                value={formData.type}
                                                onChange={handleChange}
                                                className={`w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2 ${errors.type ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-blue-500"
                                                    }`}
                                            />
                                            {errors.type && (
                                                <p className="text-sm text-red-600 mt-1">{errors.type[0]}</p>
                                            )}
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium">Cantidad</label>
                                            <input
                                                type="text"
                                                name="quantity"
                                                value={formData.quantity}
                                                onChange={handleChange}
                                                className={`w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2 ${errors.quantity ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-blue-500"
                                                    }`}
                                            />
                                            {errors.quantity && (
                                                <p className="text-sm text-red-600 mt-1">{errors.quantity[0]}</p>
                                            )}
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm font-medium">Valor Unitario</label>
                                            <input
                                                type="text"
                                                name="unit_value"
                                                value={formData.unit_value}
                                                onChange={handleChange}
                                                className={`w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2 ${errors.unit_value ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-blue-500"
                                                    }`}
                                            />
                                            {errors.unit_value && (
                                                <p className="text-sm text-red-600 mt-1">{errors.unit_value[0]}</p>
                                            )}
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium">Fecha de Adquisición</label>
                                            <input
                                                type="date"
                                                name="date"
                                                value={formData.date}
                                                onChange={handleChange}
                                                className={`w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2 ${errors.date ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-blue-500"
                                                    }`}
                                            />
                                            {errors.date && (
                                                <p className="text-sm text-red-600 mt-1">{errors.date[0]}</p>
                                            )}
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium">Proveedor</label>
                                        <input
                                            type="text"
                                            name="supplier"
                                            value={formData.supplier}
                                            onChange={handleChange}
                                            className={`w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2 ${errors.supplier ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-blue-500"
                                                }`}
                                        />
                                        {errors.supplier && (
                                            <p className="text-sm text-red-600 mt-1">{errors.supplier[0]}</p>
                                        )}
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium">Documentación</label>
                                        <textarea
                                            name="documentation"
                                            value={formData.documentation}
                                            onChange={handleChange}
                                            className={`w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2 ${errors.documentation ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-blue-500"
                                                }`}
                                            rows={3}
                                        />
                                        {errors.documentation && (
                                            <p className="text-sm text-red-600 mt-1">{errors.documentation[0]}</p>
                                        )}
                                    </div>

                                    <div className="flex justify-end space-x-2">
                                        <button
                                            type="button"
                                            onClick={() => closeModal()}
                                            className="px-4 py-2 border rounded hover:bg-gray-100"
                                        >
                                            Cancelar
                                        </button>
                                        <button
                                            type="submit"
                                            className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-800"
                                        >
                                            {editMode ? "Actualizar" : "Guardar"}
                                        </button>
                                    </div>
                                </form>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </Dialog>
            </Transition>

            {showConfirmModal && (
                <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
                    <div className="bg-white rounded-lg shadow-lg w-96 p-6">
                        <h2 className="text-lg font-semibold mb-4 text-center">Confirmación</h2>
                        <p className="mb-6 text-center">¿Estás seguro que desea cambiar el estado de la solicitud?</p>
                        <div className="flex justify-center gap-4">
                            <button
                                onClick={handleConfirm}
                                className="px-4 py-2  bg-indigo-600 text-white rounded hover:bg-indigo-800"
                            >
                                Sí
                            </button>
                            <button
                                onClick={() => closeConfirmModal()}
                                className="px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400"
                            >
                                Cancelar
                            </button>
                        </div>
                    </div>
                </div>
            )}

            <ModalHistoryChanges
                show={showHistory}
                onClose={() => closeModalHistory()}
                changes={currentAudit}
            />
        </>
    )
}

export default Acquisition