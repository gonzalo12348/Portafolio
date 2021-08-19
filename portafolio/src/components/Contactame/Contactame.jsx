import React, { useState } from "react";
import styles from './styles.module.css'
import imagenDeContacto from '../../assets/img de contacto.png'


export default function Contactame () {
    const [ activador , setActivador] = useState(false)
    
    
    return (
        <div className={styles.cont_main}>
            <section id='section-contactame' className={styles.section_contactame}>
                <div className={styles.cont_title_contactame}>
                    {/* <h3 className={styles.title_h3}>- Contáctame</h3> */}
                    <h2 className={styles.title}>
                        <a className={styles.a}>- </a>
                        Contacto
                    </h2>
                </div>
                <div className={styles.cont_contactame}>
                    <div className={styles.contacto_Img}>

                            <div className={activador? styles.contacto_off : styles.cont_button_contacto}>
                                <button className={styles.button_contacto}>
                                    <h1 onClick={()=>setActivador(true)} className={styles.title_contacto}>Contactame aqui!</h1>
                                </button>
                                <div className={activador? styles.cont_img_off : styles.cont_img}>
                                    <img className={styles.img_contacto} src={imagenDeContacto} alt="pepePicture" />
                                </div>
                            </div>

                            <div className={activador ? styles.contacto_info : styles.contacto_info_off}>
                                <h3 className={styles.title_contact}>Puedes contactarme a través de:</h3>
                                <ul>
                                    <li className={styles.li_item}>
                                        <div className={styles.item}>
                                            <i onClick={()=>window.open('https://www.linkedin.com/in/gonzaloarancibiallobell/')} className={`${styles.button_imgs} fab fa-linkedin`}></i>
                                            https://www.linkedin.com/in/gonzaloarancibiallobell/
                                        </div>
                                    </li>
                                    <li className={styles.li_item}>
                                        <div className={styles.item}>
                                            <a href='mailto:gonzaloarancibia48@gmail.com?Subject=Interesado%20en%20sus%20servicios'>
                                                <i className={`${styles.button_imgs} far fa-envelope`}></i>
                                            </a>
                                            gonzaloarancibia48@gmail.com
                                        </div>
                                    </li>
                                    <li className={styles.li_item}>
                                        <div className={styles.item}>
                                        <i className={`${styles.button_imgs} fas fa-phone`} ></i>
                                            +54 9 2612 06-1571
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            
                    </div>

                    <div className={styles.footer}>
                        <h3 className={styles.title_h3}>© 2021 Developed by Gonzalo Arancibia</h3>
                    </div>
                </div>
            </section>
        </div>
    )
}