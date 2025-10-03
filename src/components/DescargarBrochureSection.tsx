import React from 'react'

import { MdOutlineFileDownload } from "react-icons/md";


const DescargarBrochureSection = () => {
    return (
        <>
            <section className="py-[6rem]  container mx-auto bg-white">
                <h2
                    className="text-center font-nunito text-[1.5rem] md:text-3xl font-medium text-black mb-8"
                >
                    Descarga nuestro brochure y{" "}

                    <span className='degradado-c3 font-semibold'>conoce más sobre</span>
                    <br />
                    <span className='degradado-c3 font-semibold'>nuestros servicios</span>
                </h2>
                <div className="flex justify-center">
                    <a
                        href="/brochure_ktalweb.pdf"
                        download="brochure_ktalweb.pdf"
                        type="application/pdf"
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