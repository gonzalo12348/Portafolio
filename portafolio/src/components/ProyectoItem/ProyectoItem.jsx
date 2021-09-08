import React from "react";
import styles from './styles.module.css'

export default function ProyectoItem ({ nameProyecto, linkProyecto, linkGithub, img, puesto}) {

    return (
        <div className={styles.cont_proyecto}>
            <h3 className={styles.title_h3_proyecto}>{nameProyecto}</h3>
            <div className={styles.item_proyectos_1}>
                <img onClick={()=>window.open(linkProyecto)} className={styles.img} src={img} alt="proyecto" />
            </div>
            <h3 className={styles.title_h3_proyecto}>{puesto}</h3>
            <i onClick={()=>window.open(linkGithub)} className={`${styles.button_github} fab fa-github` }></i>
        </div>
    )
}