import { useMemo } from "react";

export default function Indicators({ requests = [] }) {
    
    const indicators = useMemo(() => {
        const total = requests.length;
        const totalActives = requests.filter(s => s.status === "1").length;

        const unitsMap = new Map();
        requests.forEach((s) => {
            const unit = s.unit || "Sin unidad";
            unitsMap.set(unit, (unitsMap.get(unit) || 0) + 1);
        });

        return {
            total,
            totalActives,
            units: Array.from(unitsMap.entries()),
        };
    }, [requests]);

    return (
        <div className="space-y-6">
            {/* Fila 1: indicadores */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <CardIndicador
                    label="Total Solicitudes"
                    value={indicators.total}
                    color="text-blue-600"
                />
                <CardIndicador
                    label="Solicitudes Activas"
                    value={indicators.totalActives}
                    color="text-green-600"
                />
            </div>

            {/* Fila 2: lista de unidades */}
            <div>
                <CardLista
                    label="Solicitudes por Unidad"
                    items={indicators.units}
                    color="text-purple-600"
                />
            </div>
        </div>
    );
}

function CardIndicador({ label, value, color = "text-gray-800" }) {
    return (
        <div className="bg-white shadow-md rounded-xl p-5 border border-gray-100">
            <h3 className="text-sm text-gray-500 font-bold mb-1">{label}</h3>
            <p className={`text-3xl font-bold ${color}`}>{value}</p>
        </div>
    );
}

function CardLista({ label, items = [], color }) {
    return (
        <div className="bg-white shadow-md rounded-xl border border-gray-100 overflow-hidden">
            <div className="p-5 border-b border-gray-200">
                <h3 className="text-sm text-gray-500 font-bold">{label}</h3>
            </div>
            <ul className="divide-y divide-gray-100 text-sm">
                {items.map(([unidad, cantidad], idx) => (
                    <li key={idx} className="flex justify-between px-5 py-3">
                        <span className="text-gray-700">{unidad}</span>
                        <span className={`font-semibold ${color}`}>{cantidad}</span>
                    </li>
                ))}
                {items.length === 0 && (
                    <li className="px-5 py-3 text-gray-400 text-center">No hay registros</li>
                )}
            </ul>
        </div>
    );
}
