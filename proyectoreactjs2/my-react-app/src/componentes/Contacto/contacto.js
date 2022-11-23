import React from "react";
import { useForm } from "react-hook-form";
import "./contacto.css";



const Contacto = () => {
    const { register, formState: { errors }, handleSubmit } = useForm("");
    const onSubmit = (data) => {
        console.log(data);
    }
    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)} className="contact">
                <div>
                    <h2> Formulario de Contacto </h2>
                    <label>Nombre:</label>
                    <input type="text" {...register("nombre", { require: true, maslength: 10 })} className="typetext" />
                    {errors.nombre?.type === "required" && <p> El campo nombre es obligatorio </p>}
                    {errors.nombre?.type === "maxlength" && <p> El campo debe contener mas 10 caracteres </p>}
                </div>
                <div>
                    <label>Apellido:  </label>
                    <input type="text"{...register("apellido", { require: true, maslength: 10 })} className="typetext" />
                </div>
                <div>
                    <div><label>Telefono:  </label>
                        <input type="text"{...register("apellido", { require: true, maslength: 10 })} className="typetext" /></div>
                    <div><label> Cantidad de personas:  </label>
                        <input type="text"{...register("apellido", { require: true, maslength: 10 })} className="typetext" /></div>
                    <div>
                        <label> Email:  </label>
                        <input type="text"{...register("email", { pattern: /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/ })} className="typetext" />
                        {errors.nombre?.type === "pattern" && <p> El formato es incorrecto </p>}
                    </div>
                    <label>Tipo de cabaña</label>
                    <select className="tipocab">
                        <option value="cab1"> Cabaña1</option>
                        <option value="cab2"> Cabaña2</option>
                        <option value="cab3"> Cabaña3</option>
                    </select>
                </div>
                <input type="submit" value="Enviar"/>
            </form>


        </>
    )
}

export default Contacto;