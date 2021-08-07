import React from "react";
import styles from './styles.module.css'


export default function Skills () {
    return (
        <div className={styles.cont_main}>
            <div className={styles.cont_title_resumen}>
                <h3 className={styles.title_h3}>- Skills</h3>
                <h2 className={styles.title}>Skills</h2>
            </div>
            {/* <i className={`${styles.button_imgs} fab fa-html5` }></i> */}
            <div className={styles.cont_imgs}>
                <div className={styles.cont_item}>
                    {/* <div className={styles.xxx}> */}
                    
                    <img className={styles.skills_img} src="data:image/png;base64,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"></img>
                    {/* </div> */}
                    <h3 className={styles.title_skill}>HTML5</h3>
                </div>
                <div className={styles.cont_item}>
                    <img className={styles.skills_img} src="https://img.icons8.com/color/240/000000/javascript--v1.png"/>
                    <h3 className={styles.title_skill}>Javascript</h3>
                </div>
                <div className={styles.cont_item}>
                    <img className={styles.skills_img} src="https://img.icons8.com/color/240/000000/css3.png"/>
                    <h3 className={styles.title_skill}>CSS</h3>
                </div>
                <div className={styles.cont_item}>
                    <img className={styles.skills_img} src="https://img.icons8.com/color/240/000000/git.png"/>
                    <h3 className={styles.title_skill}>Git</h3>
                </div>
                <div className={styles.cont_item}>
                    <img className={styles.skills_img} src="https://img.icons8.com/ultraviolet/240/000000/react--v1.png"/>
                    <h3 className={styles.title_skill}>React</h3>
                </div>
                <div className={styles.cont_item}>
                    <img className={styles.img_redux} src="https://img.icons8.com/color/240/000000/redux.png"/>
                    <h3 className={styles.title_skill}>Redux</h3>
                </div>
                <div className={styles.cont_item}>
                    <i className={`${styles.button_imgs} fab fa-node-js` }></i>
                    <h3 className={styles.title_skill}>Node js</h3>
                </div>
                <div className={styles.cont_item}>
                    <img className={styles.imgs} src="https://jesus-gedler.web.app/static/media/express-109.75fff9be.svg" alt="" />
                    <h3 className={styles.title_skill}>Express</h3>
                </div>
                <div className={styles.cont_item}>
                    <img className={styles.img_redux} src="https://img.icons8.com/color/240/000000/postgreesql.png"/>
                    <h3 className={styles.title_skill}>PostgreSQL</h3>
                </div>
                <div className={styles.cont_item}>
                    <img className={styles.imgs2} src="https://jesus-gedler.web.app/static/media/sequelize.49ad3c7d.svg" alt="" />
                    <h3 className={styles.title_skill}>Sequelize</h3>
                </div>
            </div>
                
        </div>
    )
}