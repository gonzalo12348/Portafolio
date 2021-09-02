import React from "react";
import styles from './styles.module.css'

export default function ResumenItem({ fecha, empresa, linkEmpresa, puesto, info }) {


    return(
        <div className={styles.educacion_item}>
            <button className={styles.button}></button>
            <div className={styles.cont_edu_item_info}>
                <h2 className={styles.title}>{fecha}</h2>
                <h3 onClick={()=>window.open(linkEmpresa)} className={styles.title_h3_redirec}>{empresa}</h3>
                <h2 className={styles.title_puesto}>{puesto}</h2>
                <p className={styles.parrafo}>{info}</p>
            </div>
        </div>
    )
}