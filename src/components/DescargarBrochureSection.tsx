import React, { useState } from 'react'

import { MdOutlineFileDownload } from "react-icons/md";
import { swalAlertFire } from "@/core/helpers/SwalHelper";


const BROCHURE_PATH = '/brochure_ktalweb.pdf'

const DescargarBrochureSection = () => {
    const [loading, setLoading] = useState(false)

    // Fallback download: fetch the PDF and create a Blob URL to force download
    const handleDownloadFallback = async (e: React.MouseEvent) => {
        e.preventDefault()
        try {
            setLoading(true)
            const resp = await fetch(BROCHURE_PATH)
            if (!resp.ok) throw new Error(`HTTP ${resp.status}`)
            const blob = await resp.blob()
            const url = window.URL.createObjectURL(blob)
            const a = document.createElement('a')
            a.href = url
            // Set a filename for the downloaded file
            a.download = 'brochure_ktalweb.pdf'
            document.body.appendChild(a)
            a.click()
            a.remove()
            window.URL.revokeObjectURL(url)
        } catch (err: any) {
            // eslint-disable-next-line no-console
            console.error('Error descargando brochure:', err)

            const message = err && err.message ? err.message : String(err)
            try {
                swalAlertFire({
                    html: `No se pudo descargar el brochure. Detalle: ${message}`,
                    icon: 'error',
                    confirmButtonText: 'Cerrar',
                })
            } catch (swalErr) {
                // fallback to alert if SweetAlert fails
                // eslint-disable-next-line no-alert
                alert(`No se pudo descargar el brochure. Detalle: ${message}`)
            }

            // As a last resort, navigate to the file so browser can handle it
            window.location.href = BROCHURE_PATH
        } finally {
            setLoading(false)
        }
    }

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
                    {/* Keep the native anchor with download attribute for best UX.
                        Also add a button that uses fetch+Blob as a fallback for
                        browsers or environments where `download` on cross-origin
                        links doesn't work. */}
                    {/* <a
                        href={BROCHURE_PATH}
                        download
                        target="_blank"
                        rel="noopener noreferrer"
                        type="application/pdf"
                        className="flex items-center gap-2 border-2 border-primary-purple-100 text-primary-purple-100 font-nunito font-semibold px-5 py-2 rounded-full transition hover:bg-primary-purple-100 hover:text-white mr-4"
                    >
                        Abrir / Descargar en nueva pestaña
                        <MdOutlineFileDownload className="text-2xl" />
                    </a> */}

                    <button
                        onClick={handleDownloadFallback}
                        disabled={loading}
                        aria-disabled={loading}
                        className="flex items-center gap-2 border-2 border-primary-purple-100 text-primary-purple-100 font-nunito font-semibold px-5 py-2 rounded-full transition hover:bg-primary-purple-100 hover:text-white"
                        title="Forzar descarga (alternativa)"
                    >
                        {loading ? 'Descargando...' : 'Descargar brochure'}
                        <MdOutlineFileDownload className="text-2xl" />
                    </button>
                </div>
            </section>
        </>
    )
}

export default DescargarBrochureSection