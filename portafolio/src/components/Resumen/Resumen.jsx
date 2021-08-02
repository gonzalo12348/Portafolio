import React from "react";
import styles from './styles.module.css'


export default function Resumen () {
    return (
        <div className={styles.cont_resumen}>
            <div className={styles.cont_title_resumen}>
                <h3 className={styles.title_h3}>- Resumen</h3>
                <h2 className={styles.title}>Educación</h2>
            </div>
            <div className={styles.cont_educacion}>
                <div className={styles.educacion_item}>
                    <button className={styles.button}></button>
                    <div className={styles.cont_edu_item_info}>
                        <h2 className={styles.title}>2021</h2>
                        <h3 onClick={()=>window.open('https://soyhenry.com')} className={styles.title_h3_redirec}>soyHenry</h3>
                        <h2 className={styles.title}>Full Stack Developer</h2>
                        <p className={styles.parrafo}> +700 horas de programación basado en prácticas y proyectos reales</p>
                    </div>
                </div>
                <div className={styles.educacion_item}>
                    <button className={styles.button}></button>
                    <div className={styles.cont_edu_item_info}>
                        <h2 className={styles.title}>2015-2019</h2>
                        <h3 onClick={()=>window.open('https://www.padrevasquez.com.ar/Caratula/index.php')} className={styles.title_h3_redirec}>Instituto Padre Vasquez</h3>
                        <h2 className={styles.title}>Bachiller Economia y Administracion</h2>
                        <p className={styles.parrafo}>Titulo Secundario Completo</p>
                    </div>
                </div>
            </div>

            <div className={styles.cont_title_resumen}>
                <h3 className={styles.title_h3}>- Resumen</h3>
                <h2 className={styles.title}>Experiencia</h2>
            </div>
            <div className={styles.cont_educacion}>
                <div className={styles.educacion_item}>
                    <button className={styles.button}></button>
                    <div className={styles.cont_edu_item_info}>
                        <h2 className={styles.title}>2021</h2>
                        <h3 onClick={()=>window.open('https://soyhenry.com')} className={styles.title_h3_redirec}>soyHenry</h3>
                        <h2 className={styles.title}>Full Stack Developer</h2>
                        <p className={styles.parrafo}> Desarrollo de Aplicaciones Web tanto individual como grupal (a simulacion laboral real) durante la cursada en la academia</p>
                    </div>
                </div>
                <div className={styles.educacion_item}>
                    <button className={styles.button}></button>
                    <div className={styles.cont_edu_item_info}>
                        <h2 className={styles.title}>2019-2020</h2>
                        <h3 onClick={()=>window.open('https://www.enjoy.cl/#/mendoza')} className={styles.title_h3_redirec}>Casino Enjoy</h3>
                        <h2 className={styles.title}>Croupier Mesa De Juego</h2>
                        <p className={styles.parrafo}>Encargado de dirigir mesas de juegos (Cartas, Ruleta), guiar al cliente en su recorrido en los juegos y en el casino.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}