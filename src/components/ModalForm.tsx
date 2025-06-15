import * as Yup from 'yup';
import { useForm } from "react-hook-form";
import { IoClose } from "react-icons/io5";
import Button from './Button';
import { yupResolver } from '@hookform/resolvers/yup';
import type FormData from '@/core/domain/FormData';
import { useState } from 'react';
import { swalAlertFire } from '@/core/helpers/SwalHelper';


interface IModalFormProps {
    isOpen: boolean;
    onClose: () => void;
}

const ModalForm = ({ isOpen, onClose }: IModalFormProps) => {

    const [isLoading, setIsLoading] = useState(false);


    const schema: any = Yup.object().shape({
        enterprise: Yup.string().required("El nombre de la empresa es obligatorio"),
        link: Yup.string().required("El enlace es obligatorio"),
        cellphone: Yup.string()
            .matches(/^\d+$/, "El número de celular debe contener solo números")
            .required("El número de celular es obligatorio"),
        email: Yup.string().email("Debe ser un correo válido").required("El correo es obligatorio"),
        message: Yup.string().optional(),
    });


    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm<FormData>({
        resolver: yupResolver(schema), // Uso 'as any' para evitar problemas de tipado

    });


    const onSubmit = async (data: FormData) => {
        // console.log("Form data:", data);


        try {
            setIsLoading(true);
            // const response = await fetch(`/api/send-email`, {
            //     method: "POST",
            //     headers: {
            //         "Content-Type": "application/json",
            //     },
            //     body: JSON.stringify(data),
            // });

            // const result = await response.json();

            // if (!response.ok) {
            //     alert(result.message);
            //     setIsLoading(false);
            //     onClose();
            //     reset();
            //     return;
            // }

            // swalAlertFire({
            //     title:  "¡Gracias por contactarnos!",
            //     html:  "Tu mensaje ha sido enviado correctamente. Nos pondremos en contacto contigo pronto.",
            //     icon: "success",
            //     confirmButtonText: "Cerrar",
            //     buttonsStyling: false,
            // });

            // enviar todo por la api de whatsapp
            const whatsappMessage = `Hola Ktalweb👋. Vi tu página web y me gustaría realizar una auditoría. ¿Me podrían ayudar, por favor? \n\n Empresa: ${data.enterprise} \n Enlace: ${data.link} \n Celular: ${data.cellphone} \n Correo: ${data.email} \n Mensaje: ${data.message}`;

            const whatsappUrl = `https://api.whatsapp.com/send?phone=51923416407&text=${encodeURIComponent(whatsappMessage)}`;

            if (typeof window !== 'undefined') {
                window.open(whatsappUrl, '_blank');
            }

        } catch (error) {
            console.error(error);

        } finally {
            setIsLoading(false);
            onClose();
            reset();
        }
    }




    if (!isOpen) return null;

    return (
        <>
            <div className="fixed inset-0 bg-[rgba(0,0,0,0.75)] flex justify-center items-center z-[70] ">
                <div className="relative bg-white p-6 rounded-lg w-[28rem] h-fit lg:h-[39rem] mx-4 sm:mx-0 ">
                    <div className=" absolute top-3 right-4 cursor-pointer" onClick={() => {
                        onClose();
                        reset();
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
                            <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 lg:grid-cols-2 gap-3">
                                <div className='col-span-2 '>
                                    <input
                                        {...register("enterprise")}
                                        className="w-full border rounded-md p-2 placeholder:text-[0.8rem] "
                                        placeholder='Empresa'
                                    />
                                    {errors.enterprise && <p className="text-red-500 text-[0.7rem]">{errors.enterprise.message}</p>}
                                </div>

                                <div className='col-span-2 '>
                                    <input
                                        {...register("link")}
                                        className="w-full border rounded-md p-2 placeholder:text-[0.8rem]"
                                        placeholder='Link de tu web'
                                    />
                                    {errors.link && <p className="text-red-500 text-[0.7rem]">{errors.link.message}</p>}
                                </div>


                                <div className='col-span-2 '>
                                    <input
                                        {...register("cellphone")}
                                        className="w-full border rounded-md p-2 placeholder:text-[0.8rem]"
                                        placeholder='Celular'
                                    />
                                    {errors.cellphone && <p className="text-red-500 text-[0.7rem]">{errors.cellphone.message}</p>}
                                </div>

                                <div className='col-span-2 '>
                                    <input
                                        type="email"
                                        {...register("email")}
                                        className="w-full border rounded-md p-2 placeholder:text-[0.8rem]"
                                        placeholder='Correo electrónico'
                                    />
                                    {errors.email && <p className="text-red-500 text-[0.7rem]">{errors.email.message}</p>}
                                </div>

                                <div className='col-span-2'>
                                    <textarea
                                        {...register("message")}
                                        className="w-full border rounded-md p-2 py-2 placeholder:text-[0.8rem]"
                                        placeholder="Cuéntanos brevemente que te gustaría mejorar de tu página web"
                                        rows={4}
                                    />
                                    {errors.message && <p className="text-red-500 text-[0.7rem]">{errors.message.message}</p>}
                                </div>



                                <div className='col-span-2 flex justify-center'>
                                    <Button
                                        typeButton="submit"
                                        text="Enviar"
                                        styles='bg-primary-purple-100 text-white rounded-3xl py-2 px-6 w-fit'
                                        textSizes='text-[1rem] font-worksans font-medium'
                                        isLoading={isLoading}
                                    />
                                </div>
                            </form>

                        </div>
                    </div>
                </div>


            </div >
        </>
    );
};

export default ModalForm;