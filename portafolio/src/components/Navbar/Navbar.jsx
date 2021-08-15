import React from "react";
import styles from './styles.module.css'


export default function Navbar () {
    return (
        <div className={styles.cont_main}>
            <div className={styles.cont_titles}>
                <h2 className={styles.title}> <a href='#section-resumen' className={styles.title_a}>Resumen</a></h2>
                <h2 className={styles.title}><a href='#section-proyectos' className={styles.title_a}>Proyectos</a></h2>
                <h2 className={styles.title}><a href='#section-skills' className={styles.title_a}>Skills</a></h2>
                <h2 className={styles.title}><a href='#section-contactame' className={styles.title_a}>Contáctame</a></h2>
            </div>
        </div>
    )
}