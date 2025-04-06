"use client"

import Indicators from "@/components/Indicators"
import Header from "../Header"
import { useEffect, useState } from "react";
import axios from "@/lib/axios";

const Home = () => {

    const [acquisitions, setAcquisitions] = useState([]);

    useEffect(() => {
        axios.get('/acquisitions').then((res) => {
            let data = res.data;
            if (data.meta.success) {
                setAcquisitions(data.data);
            }
        })
        .catch(error => {
            console.error(error);
        });
    }, [])

    return (
        <>
            <title>ADRES - Inicio</title>
            <Header title="INDICADORES" />
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">
                            <Indicators
                                requests={acquisitions}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home