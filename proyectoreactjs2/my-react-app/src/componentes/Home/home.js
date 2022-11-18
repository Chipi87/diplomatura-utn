import React from "react";
import "./Home.css";
import Intro from "../../imagen/playa2.jpg"


const Home = () => {
    return (

        <section className="sectionintro">
            <div className="imgdiv">
                <img src={Intro} className="imgcss" alt="imgintro" />
            </div>
            <div>
                <h2 className="textIntro">
                    <p>
                        Un entorno de ensueño con la naturaleza en todo su esplendor
                    </p>
                </h2>

            </div>

        </section>




    );
}


export default Home;