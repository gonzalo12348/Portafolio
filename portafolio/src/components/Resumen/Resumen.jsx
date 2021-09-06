import React from "react";
import styles from './styles.module.css'
import ResumenItem from "../ResumenItem/ResumenItem";
import 'bootstrap/dist/css/bootstrap.min.css'

export default function Resumen () {
    return (
        <div classNameName={styles.cont_resumen}>
            <section className={styles.section} id='section-resumen'>
            <div className={styles.cont_title_resumen}>
                <h3 className={styles.title_h3}>- Resumen</h3>
                <h2 className={styles.title}>Educación</h2>
            </div>

            <div id="carouselExampleInterval" className={`${styles.carousel_cont} carousel slide`} data-bs-ride="carousel">
                <div className={`carousel-inner ${styles.carouselItem_cont}`}>
                    <div className={`${styles.cont_item} carousel-item active`} data-bs-interval="100000">
                        <ResumenItem
                            fecha={2021}
                            empresa={'soyHenry'}
                            linkEmpresa={'https://soyhenry.com'}
                            puesto={'Full Stack Developer'}
                            info={' +700 horas de programación basado en prácticas y proyectos reales'} 
                        />
                    </div>
                    <div className={`${styles.cont_item} carousel-item`}>
                        <ResumenItem
                            fecha={'2020'}
                            empresa={'Universidad Tecnológica Nacional'}
                            linkEmpresa={'https://www.utn.edu.ar/es/'}
                            puesto={'Ingeniería Electromecánica'}
                            info={'Primer año de cursada Incompleto'} 
                        />
                    </div>
                    <div className={`${styles.cont_item} carousel-item`}>
                        <ResumenItem
                            fecha={'2015-2019'}
                            empresa={'Instituto Padre Vasquez'}
                            linkEmpresa={'https://www.padrevasquez.com.ar/Caratula/index.php'}
                            puesto={'Bachiller Economia y Administracion'}
                            info={'Titulo Secundario Completo'} 
                        />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

            <div className={styles.cont_title_resumen}>
                <h3 className={styles.title_h3}>- Resumen</h3>
                <h2 className={styles.title}>Experiencia</h2>
            </div>

            <div id="carouselExampleInterval2" className={`${styles.carousel_cont} carousel slide`} data-bs-ride="carousel">
                <div className={`carousel-inner ${styles.carouselItem_cont}`}>
                    <div className={`${styles.cont_item} carousel-item active`} data-bs-interval="100000">
                        <ResumenItem
                            fecha={2021}
                            empresa={'soyHenry'}
                            linkEmpresa={'https://soyhenry.com'}
                            puesto={'Full Stack Developer'}
                            info={' Desarrollo de Aplicaciones Web tanto individual como grupal (a simulacion laboral real) durante la cursada en la academia'} 
                        />
                    </div>
                    <div className={`${styles.cont_item} carousel-item`}>
                        <ResumenItem
                            fecha={'2019-2020'}
                            empresa={'Casino Enjoy'}
                            linkEmpresa={'https://www.enjoy.cl/#/mendoza'}
                            puesto={'Croupier Mesa De Juego'}
                            info={'Encargado de dirigir mesas de juegos (Cartas, Ruleta), guiar al cliente en su recorrido en los juegos y en el casino.'} 
                        />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval2" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval2" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>


            {/* <div className={styles.cont_title_resumen}>
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
            </div> */}
            
            </section>
        </div>
    )
}