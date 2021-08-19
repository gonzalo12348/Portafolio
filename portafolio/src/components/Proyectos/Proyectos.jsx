import React from "react";
import styles from './styles.module.css'


export default function Proyectos () {
    return (
        <div className={styles.cont_proyectos}>
            <section className={styles.section_proyectos} id='section-proyectos'>
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
                            <img onClick={()=>window.open('https://front-end-videogameapp.herokuapp.com')} className={styles.img} src="https://github.com/gonzalo12348/gonzalo12348/blob/main/Captura%20de%20pantalla%20(137).png?raw=true" alt="proyecto" />
                        </div>
                        <h3 className={styles.title_h3_proyecto}>Full Stack Developer</h3>
                        <i onClick={()=>window.open('https://github.com/gonzalo12348/Videojuegos-Proyecto-Individual')} className={`${styles.button_github} fab fa-github` }></i>
                    </div>
                    <div className={styles.cont_proyecto}>
                        <h3 className={styles.title_h3_proyecto}> Yoagronomo App</h3>
                        <div className={styles.item_proyectos_1}>
                            <img onClick={()=>window.open('https://yoagronomoapp.vercel.app')} className={styles.img} src='https://github.com/gonzalo12348/Videojuegos-Proyecto-Individual/blob/main/imgDemo/Yoagronomo.png?raw=true' alt="proyecto" />
                        </div>
                        <h3 className={styles.title_h3_proyecto}>Full Stack Developer(Front-End)</h3>
                        <i onClick={()=>window.open('https://github.com/gonzalo12348/yoAgronomoApp')} className={`${styles.button_github} fab fa-github` }></i>
                    </div>

                </div>
            </section>
        </div>
    )
}