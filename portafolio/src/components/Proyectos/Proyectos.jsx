import React from "react";
import styles from './styles.module.css'
import ProyectoItem from "../ProyectoItem/ProyectoItem";
// import ResumenItem from "../ResumenItem/ResumenItem";
import 'bootstrap/dist/css/bootstrap.min.css'
import imgCarousel from '../../assets/carousel-app.png'

export default function Proyectos () {
    return (
        <div className={styles.cont_proyectos}>
            <section className={styles.section_proyectos} id='section-proyectos'>
                <div className={styles.cont_title_resumen}>
                    <h3 className={styles.title_h3}>- Proyectos</h3>
                    <h2 className={styles.title}>Proyectos</h2>
                </div>
                {/* <div className={styles.cont_info_proyectos}>
                </div> */}




            <div id="carouselExampleIntervalx" className={`${styles.carousel_cont} carousel slide`} data-bs-ride="carousel">
                <div className={`carousel-inner ${styles.carouselItem_cont}`}>
                    <div className={`${styles.cont_item} carousel-item active`} data-bs-interval="100000">
                        <ProyectoItem 
                            nameProyecto={' Videogame App'}
                            linkProyecto={'https://front-end-videogameapp.herokuapp.com'}
                            linkGithub={'https://github.com/gonzalo12348/Videojuegos-Proyecto-Individual'}
                            img={"https://github.com/gonzalo12348/gonzalo12348/blob/main/Captura%20de%20pantalla%20(137).png?raw=true"}
                            puesto={'Full Stack Developer'}
                        />
                    </div>
                    <div className={`${styles.cont_item} carousel-item`}>
                        <ProyectoItem 
                            nameProyecto={' Yoagronomo App'}
                            linkProyecto={'https://yoagronomoapp.vercel.app'}
                            linkGithub={'https://github.com/gonzalo12348/yoAgronomoApp'}
                            img={'https://github.com/gonzalo12348/Videojuegos-Proyecto-Individual/blob/main/imgDemo/Yoagronomo.png?raw=true'}
                            puesto={'Full Stack Developer (Front-End)'}
                        />
                    </div>
                    <div className={`${styles.cont_item} carousel-item`}>
                        <ProyectoItem 
                            nameProyecto={' Carousel-App'}
                            linkProyecto={'https://github.com/gonzalo12348/Carousel-App'}
                            linkGithub={'https://github.com/gonzalo12348/Carousel-App'}
                            img={imgCarousel}
                            puesto={'Front-End (React-Native)'}
                        />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIntervalx" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIntervalx" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>




                {/* <div className={styles.cont_item_proyectos}>
                    <ProyectoItem 
                        nameProyecto={' Videogame App'}
                        linkProyecto={'https://front-end-videogameapp.herokuapp.com'}
                        linkGithub={'https://github.com/gonzalo12348/Videojuegos-Proyecto-Individual'}
                        img={"https://github.com/gonzalo12348/gonzalo12348/blob/main/Captura%20de%20pantalla%20(137).png?raw=true"}
                        puesto={'Full Stack Developer'}
                    />
                    <ProyectoItem 
                        nameProyecto={' Yoagronomo App'}
                        linkProyecto={'https://yoagronomoapp.vercel.app'}
                        linkGithub={'https://github.com/gonzalo12348/yoAgronomoApp'}
                        img={'https://github.com/gonzalo12348/Videojuegos-Proyecto-Individual/blob/main/imgDemo/Yoagronomo.png?raw=true'}
                        puesto={'Full Stack Developer(Front-End)'}
                    />
                </div> */}

            </section>
        </div>
    )
}