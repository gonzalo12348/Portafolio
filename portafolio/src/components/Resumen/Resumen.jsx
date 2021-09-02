import React from "react";
import styles from './styles.module.css'
import ResumenItem from "../ResumenItem/ResumenItem";

export default function Resumen () {
    return (
        <div className={styles.cont_resumen}>
            <section className={styles.section} id='section-resumen'>
            <div className={styles.cont_title_resumen}>
                <h3 className={styles.title_h3}>- Resumen</h3>
                <h2 className={styles.title}>Educación</h2>
            </div>
            <div className={styles.cont_educacion}>
                <ResumenItem
                  fecha={2021}
                  empresa={'soyHenry'}
                  linkEmpresa={'https://soyhenry.com'}
                  puesto={'Full Stack Developer'}
                  info={' +700 horas de programación basado en prácticas y proyectos reales'} 
                />
                <ResumenItem
                  fecha={'2015-2019'}
                  empresa={'Instituto Padre Vasquez'}
                  linkEmpresa={'https://www.padrevasquez.com.ar/Caratula/index.php'}
                  puesto={'Bachiller Economia y Administracion'}
                  info={'Titulo Secundario Completo'} 
                />
            </div>

            <div className={styles.cont_title_resumen}>
                <h3 className={styles.title_h3}>- Resumen</h3>
                <h2 className={styles.title}>Experiencia</h2>
            </div>
            <div className={styles.cont_educacion}>
                <ResumenItem
                  fecha={2021}
                  empresa={'soyHenry'}
                  linkEmpresa={'https://soyhenry.com'}
                  puesto={'Full Stack Developer'}
                  info={' Desarrollo de Aplicaciones Web tanto individual como grupal (a simulacion laboral real) durante la cursada en la academia'} 
                />
                <ResumenItem
                  fecha={'2019-2020'}
                  empresa={'Casino Enjoy'}
                  linkEmpresa={'https://www.enjoy.cl/#/mendoza'}
                  puesto={'Croupier Mesa De Juego'}
                  info={'Encargado de dirigir mesas de juegos (Cartas, Ruleta), guiar al cliente en su recorrido en los juegos y en el casino.'} 
                />
            </div>
            </section>
        </div>
    )
}