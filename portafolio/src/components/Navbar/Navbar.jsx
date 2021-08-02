import React from "react";
import styles from './styles.module.css'


export default function Navbar () {
    return (
        <div className={styles.cont_main}>
            <div className={styles.cont_titles}>
                <h2 className={styles.title}>Sobre mi</h2>
                <h2 className={styles.title}>Proyectos</h2>
                <h2 className={styles.title}>Skills</h2>
                <h2 className={styles.title}>Contáctame</h2>
            </div>
        </div>
    )
}