import { useForm, ValidationError } from '@formspree/react';
import { IoClose } from "react-icons/io5";
import Button from './Button';
import { useState } from 'react';

interface IModalFormProps {
    isOpen: boolean;
    onClose: () => void;
}

const ModalForm = ({ isOpen, onClose }: IModalFormProps) => {
    const [state, handleSubmit] = useForm("xvgrnrzv");
    const [showSuccess, setShowSuccess] = useState(false);

    if (!isOpen) return null;

    // Mostrar mensaje de éxito y cerrar modal tras unos segundos
    if (state.succeeded && !showSuccess) {
        setShowSuccess(true);
        setTimeout(() => {
            setShowSuccess(false);
            onClose();
        }, 2000);
    }

    return (
        <>
            <div className="fixed inset-0 bg-[rgba(0,0,0,0.75)] flex justify-center items-center z-[70] ">
                <div className="relative bg-white p-6 rounded-lg w-[28rem] h-fit lg:h-[39rem] mx-4 sm:mx-0 ">
                    <div className=" absolute top-3 right-4 cursor-pointer" onClick={() => {
                        onClose();
                    }}>
                        <IoClose className='text-[1.5rem]' />
                    </div>

                    <div className='mt-4 lg:mt-2'>
                        <h2 className='text-center text-[1.5rem] leading-tight font-worksans font-semibold px-10'>
                            Rediseña tu web con nosotros
                        </h2>
                        <p className='text-center  text-[1rem] font-worksans pb-4 mt-4'>
                            Completa estos datos y nos comunicaremos contigo.
                        </p>
                        <div className='p-2'>
                            {showSuccess ? (
                                <div className="text-green-600 text-center font-semibold py-8">
                                    Tu mensaje fue enviado correctamente, pronto nos pondremos en contacto contigo.
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-2 gap-3">
                                    <div className='col-span-2 '>
                                        <input
                                            id="enterprise"
                                            name="enterprise"
                                            type="text"
                                            required
                                            className="w-full border rounded-md p-2 placeholder:text-[0.8rem] "
                                            placeholder='Empresa'
                                        />
                                        <ValidationError prefix="Empresa" field="enterprise" errors={state.errors} />
                                    </div>
                                    <div className='col-span-2 '>
                                        <input
                                            id="link"
                                            name="link"
                                            type="text"
                                            required
                                            className="w-full border rounded-md p-2 placeholder:text-[0.8rem]"
                                            placeholder='Link de tu web'
                                        />
                                        <ValidationError prefix="Link" field="link" errors={state.errors} />
                                    </div>
                                    <div className='col-span-2 '>
                                        <input
                                            id="cellphone"
                                            name="cellphone"
                                            type="text"
                                            required
                                            className="w-full border rounded-md p-2 placeholder:text-[0.8rem]"
                                            placeholder='Celular'
                                        />
                                        <ValidationError prefix="Celular" field="cellphone" errors={state.errors} />
                                    </div>
                                    <div className='col-span-2 '>
                                        <input
                                            id="email"
                                            name="email"
                                            type="email"
                                            required
                                            className="w-full border rounded-md p-2 placeholder:text-[0.8rem]"
                                            placeholder='Correo electrónico'
                                        />
                                        <ValidationError prefix="Email" field="email" errors={state.errors} />
                                    </div>
                                    <div className='col-span-2'>
                                        <textarea
                                            id="message"
                                            name="message"
                                            className="w-full border rounded-md p-2 py-2 placeholder:text-[0.8rem]"
                                            placeholder="Cuéntanos brevemente que te gustaría mejorar de tu página web"
                                            rows={4}
                                        />
                                        <ValidationError prefix="Mensaje" field="message" errors={state.errors} />
                                    </div>
                                    <div className='col-span-2 flex justify-center'>
                                        <Button
                                            typeButton="submit"
                                            text="Enviar"
                                            styles='bg-primary-purple-100 text-white rounded-3xl py-2 px-6 w-fit'
                                            textSizes='text-[1rem] font-worksans font-medium'
                                            isLoading={state.submitting}
                                        />
                                    </div>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </div >
        </>
    );
};

export default ModalForm;