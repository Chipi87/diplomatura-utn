import React from "react";
import face from "./Redes/facebook.svg"
import goo from "./Redes/google.svg"
import insta from "./Redes/instagram.svg"
import linke from "./Redes/linkedin.svg"
import twitt from "./Redes/twitter.svg"
import "./Footer.css";

const Footer = () => {
    return (
        <div className="contenedorFooter">

            <section className="sectionFooter">
                <a className="" href="" role="button">
                    <i className="btn btn-outline-light btn-floating m-1" href="!" role="button" >
                        <img src={face} alt="" /></i>
                </a>


                <a className="btn btn-outline-light btn-floating m-1" href="!" role="button">
                    <i className="fab fa-twitter">
                        <img src={twitt} alt="" /></i>
                </a>

                <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button">
                    <i className="fab fa-google"></i>
                    <img src={goo} alt="" />
                </a>


                <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button">
                    <i className="fab fa-instagram">
                    </i>
                    <img src={insta} alt="" />
                </a>

                <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i
                    className="fab fa-linkedin-in"><img src={linke} alt="" /></i>
                </a>
            </section>
            <div className="reserva">
                <p>Hipólito Yrigoyen 1737. (CP.7000) Mar del Plata. Bs AS. Argentina.  //  RESERVAS TELEFÓNICAS: 0223-495.00.81 y 0800-345.90.90</p>
            </div>
        </div>
        
    );
}

export default Footer; 

