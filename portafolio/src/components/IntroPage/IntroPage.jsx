import React from "react";
import styles from './styles.module.css'
import BodyPrincipal from "../BodyPrincipal/BodyPrincipal";
import Resumen from "../Resumen/Resumen";

export default function IntroPage () {
    return (
        <div className={styles.cont_main}>
            {/* <Navbar /> */}
            <BodyPrincipal />
            <Resumen />
        </div>
    )
}