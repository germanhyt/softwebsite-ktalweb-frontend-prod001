import React, { useState } from 'react'
import { VscArrowCircleRight } from 'react-icons/vsc'

import k from '@/assets/images/k.webp?url'
import ModalForm from './ModalForm'

const SolicitarCTABannerSection = () => {

    const [isModalOpen, setModalOpen] = useState(false)

    return (
        <>
            <section
                className="px-5 sm:container mx-auto">
                <div className='lg:pl-10 lg:py-0 mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 rounded-xl overflow-hidden'
                    style={{
                        background: 'linear-gradient(90deg, #18003E 40%, #5919C1 90%)',
                        color: '#FFFFFF',
                    }}
                >
                    <div className="py-12 lg:pb-10 lg:w-[40%] max-w-lg 3xl:max-w-2xl text-start px-5 md:px-0">
                        <h2 className="font-nunito text-2xl md:text-3xl xl:text-4xl font-bold mb-2">
                            ¿No estás satisfecho con los resultados de tu web actual?
                        </h2>
                        <p className="font-nunito text-base mb-6">
                            Pide una auditoría gratuita hoy y te ayudaremos a potenciarla.
                        </p>
                        <button
                            className="flex items-center gap-2 bg-primary-purple-200 text-white font-nunito font-semibold px-5 py-2 rounded-full transition bg-primary-purple-100 hover:cursor-pointer hover:scale-105"
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
                    <div className="lg:w-[60%]">
                        <img
                            src={k}
                            alt="Logo K"
                            className=" object-cover w-full h-full"
                        />
                    </div>
                </div>
            </section>


            <ModalForm isOpen={isModalOpen} onClose={() => setModalOpen(false)} />

        </>
    )
}

export default SolicitarCTABannerSection