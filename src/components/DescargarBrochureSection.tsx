import React from 'react'

import { MdOutlineFileDownload } from "react-icons/md";


const DescargarBrochureSection = () => {
    return (
        <>
            <section className="container mx-auto pt-12 pb-24 bg-white">
                <h2
                    className="text-center font-nunito text-3xl md:text-4xl font-bold text-black mb-8"
                >
                    Descarga nuestro brochure y conoce más sobre<br />nuestros servicios
                </h2>
                <div className="flex justify-center">
                    <a
                        href="/Brochure_Ktalweb.pe.pdf"
                        download
                        className="flex items-center gap-2 border-2 border-primary-purple-100 text-primary-purple-100 font-nunito font-semibold px-5 py-2 rounded-full transition hover:bg-primary-purple-100 hover:text-white"
                    >
                        Descargar brochure
                        <MdOutlineFileDownload className="text-2xl" />
                    </a>
                </div>
            </section>
        </>
    )
}

export default DescargarBrochureSection