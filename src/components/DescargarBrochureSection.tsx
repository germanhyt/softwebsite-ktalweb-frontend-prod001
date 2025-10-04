import React from 'react'

import { MdOutlineFileDownload } from "react-icons/md";


const DescargarBrochureSection = () => {

    const handleDownloadPDF = async () => {
        try {
            // Usar el endpoint API para descargar el PDF
            const response = await fetch('/api/download-brochure');
            
            if (!response.ok) {
                throw new Error(`Error ${response.status}: ${response.statusText}`);
            }
            
            // Obtener el blob del PDF
            const blob = await response.blob();
            
            // Crear URL temporal para el blob
            const url = window.URL.createObjectURL(blob);
            
            // Crear enlace temporal para descargar
            const link = document.createElement('a');
            link.href = url;
            link.download = 'brochure_ktalweb.pdf';
            
            // Añadir al DOM temporalmente
            document.body.appendChild(link);
            
            // Hacer click para iniciar la descarga
            link.click();
            
            // Limpiar
            document.body.removeChild(link);
            window.URL.revokeObjectURL(url);
        } catch (error) {
            console.error('Error al descargar el PDF:', error);
            // Fallback: intentar descarga directa
            try {
                const link = document.createElement('a');
                link.href = '/brochure_ktalweb.pdf';
                link.download = 'brochure_ktalweb.pdf';
                link.target = '_blank';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
            } catch (fallbackError) {
                console.error('Error en fallback:', fallbackError);
                // Último recurso: abrir en nueva pestaña
                window.open('/brochure_ktalweb.pdf', '_blank');
            }
        }
    };



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
                    <button
                        onClick={handleDownloadPDF}
                        className="flex items-center gap-2 border-2 border-primary-purple-100 text-primary-purple-100 font-nunito font-semibold px-5 py-2 rounded-full transition hover:bg-primary-purple-100 hover:text-white"
                    >
                        Descargar brochure
                        <MdOutlineFileDownload className="text-2xl" />
                    </button>
                </div>
            </section>
        </>
    )
}

export default DescargarBrochureSection