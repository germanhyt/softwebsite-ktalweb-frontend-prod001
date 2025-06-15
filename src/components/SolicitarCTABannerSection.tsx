import React, { useState } from 'react'
import { VscArrowCircleRight } from 'react-icons/vsc'

import k from '@/assets/images/k.webp?url'
import ModalForm from './ModalForm'

const SolicitarCTABannerSection = () => {

    const [isModalOpen, setModalOpen] = useState(false)

    return (
        <>
            <section
                className=""
                style={{
                    background: 'linear-gradient(90deg, #18003E 40%, #5919C1 90%)',
                    color: '#FFFFFF',
                }}
            >
                <div className='py-12 lg:py-16 container mx-auto flex flex-col md:flex-row items-center justify-between gap-8 rounded-lg'>
                    <div className="max-w-lg 3xl:max-w-2xl text-start flex-1">
                        <h2 className="font-nunito text-3xl md:text-4xl font-bold mb-4">
                            ¿No estás satisfecho con los resultados de tu web actual?
                        </h2>
                        <p className="font-nunito text-base mb-6">
                            Pide una auditoría gratuita hoy y te ayudaremos a potenciarla.
                        </p>
                        <button
                            className="flex items-center gap-2 bg-primary-purple-200 text-white font-nunito font-semibold px-5 py-2 rounded-full transition bg-primary-purple-100 hover:cursor-pointer"
                            onClick={() => {
                                if (isModalOpen) {
                                    setModalOpen(false);
                                } else {
                                    setModalOpen(true);
                                }
                            }}
                        >
                            Solicitar auditoría gratuita

                            <VscArrowCircleRight className="text-2xl" />
                        </button>
                    </div>
                    <div className="flex-1 flex justify-center relative">
                        <img
                            src={k}
                            alt="Logo K"
                            className="rounded-lg object-cover w-full max-w-md h-64 md:h-72"
                        />
                    </div>
                </div>
            </section>


            <ModalForm  isOpen={isModalOpen} onClose={() => setModalOpen(false)}  />

        </>
    )
}

export default SolicitarCTABannerSection