import React from "react";
import styles from './styles.module.css'


export default function Proyectos () {
    return (
        <div className={styles.cont_proyectos}>
            <div className={styles.cont_title_resumen}>
                <h3 className={styles.title_h3}>- Proyectos</h3>
                <h2 className={styles.title}>Proyectos</h2>
            </div>
            <div className={styles.cont_info_proyectos}>
            </div>
            <div className={styles.cont_item_proyectos}>
                <div className={styles.cont_proyecto}>
                    <h3 className={styles.title_h3_proyecto}> Videogame App</h3>
                    <div className={styles.item_proyectos_1}>
                        <img className={styles.img} src="https://github.com/gonzalo12348/gonzalo12348/blob/main/Captura%20de%20pantalla%20(137).png?raw=true" alt="proyecto" />
                    </div>
                    <h3 className={styles.title_h3_proyecto}>Full Stack Developer</h3>
                </div>
                <div className={styles.cont_proyecto}>
                    <h3 className={styles.title_h3_proyecto}> Yoagronomo App</h3>
                    <div className={styles.item_proyectos_1}>
                        <img className={styles.img} src='https://github.com/gonzalo12348/Videojuegos-Proyecto-Individual/blob/main/imgDemo/Yoagronomo.png?raw=true' alt="proyecto" />
                    </div>
                    <h3 className={styles.title_h3_proyecto}>Full Stack Developer(Front-End)</h3>
                </div>

            </div>
        </div>
    )
}