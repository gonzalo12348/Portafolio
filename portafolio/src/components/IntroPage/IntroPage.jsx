import React from "react";
import styles from './styles.module.css'
import BodyPrincipal from "../BodyPrincipal/BodyPrincipal";
import Resumen from "../Resumen/Resumen";
import Proyectos from "../Proyectos/Proyectos";
import Skills from "../Skills/Skills";
import Contactame from "../Contactame/Contactame";

export default function IntroPage () {
    return (
        <div className={styles.cont_main}>
            {/* <Navbar /> */}
            <BodyPrincipal />
            <Resumen />
            <Proyectos />
            {/* <Skills /> */}
            <Contactame />
        </div>
    )
}