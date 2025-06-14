import React from 'react'

import { MdOutlineFileDownload } from "react-icons/md";


const DescargarBrochureSection = () => {
    return (
        <>
            <section className="pt-12 lg:pt-16 pb-24 container mx-auto bg-white">
                <h2
                    className="text-center font-nunito text-3xl md:text-4xl font-bold text-black mb-8"
                >
                    Descarga nuestro brochure y{" "}

                    <span className='text-primary-purple-100'>conoce más sobre</span>
                    <br />
                    <span className='text-primary-purple-100'>nuestros servicios</span>
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