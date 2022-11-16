import React from "react";
import { useForm } from "react-hook-form";
import "./contacto.css";



const Contacto =()=>{
const { register, formState : {errors}, handleSubmit }= useForm("");
const onSubmit = (data) => {
    console.log(data);
}
    return(
        <>
        <h2> Contacto </h2>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
            <label>Nombre</label>
            <input type="text" {...register("nombre",{require:true,maslength:10})} />
            {errors.nombre?.type === "required" && <p> El campo nombre es obligatorio </p>}
            {errors.nombre?.type === "maxlength" && <p> El campo debe contener mas 10 caracteres </p>}
            </div>
            <div>
            <label>Apellido</label>
            <input type="text"{...register("apellido",{require:true,maslength:10})}/>
            </div>
            <div>
            <label>Email</label>
            <input type="text"{...register("email", {pattern: /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/ })}/>
            {errors.nombre?.type === "pattern" && <p> El formato es incorrecto </p>}
            </div>
            <div>
            <label>Tipo de cabaña</label>
            <select>
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