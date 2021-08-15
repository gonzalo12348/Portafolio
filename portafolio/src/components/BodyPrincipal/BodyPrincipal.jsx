import React from "react";
import styles from './styles.module.css'
import Navbar from "../Navbar/Navbar";
import imagenDePerfil from '../../assets/foto de frente.png'


export default function BodyPrincipal () {
    return (
        <div className={styles.cont_main}>
            <div className={styles.cont_nameImg}>
                <div className={styles.cont_cont_main_iconos}>

                    <div className={styles.cont_title_main}>
                        <img className={styles.img} src="data:image/png;base64,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" alt='mate img'/>
                        <h1 className={styles.title_main}>Gonzalo <br/>Arancibia</h1>
                    </div>
                    <div className={styles.cont_iconos}>
                        <i onClick={()=>window.open('https://www.linkedin.com/in/gonzaloarancibiallobell/')} className={`${styles.button_imgs} fab fa-linkedin`}></i>
                        <i onClick={()=>window.open('https://github.com/gonzalo12348')} className={`${styles.button_imgs} fab fa-github` }></i>
                        {/* <img className={styles.button_imgs} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABmJLR0QA/wD/AP+gvaeTAAACtUlEQVRIie3Wz2ucVRTG8c99M2mjGAi6sGqsobWbihTEjbhw4S6CUShI2hlEg65s3ZWutN24sP4DUmhNOpO0xVhbK4KLIohLdSGoiNZCCy5EU9qFVpv3uvB18v6amWSQrnpW7z33nOd7zuW+915u2y2ysN7AuGCrhhnRM5jCZDZ1BZdwXuJsmHX5fwHHeQ9oeANzGBkQnmJZ4kCYdWlocFz0nOgE7hpUYMmuSzVDy7leAUlPaMfrouUhoDAucSZ27O8VUNtx1ulyv8LWaanU83WdV4Rj22S2vGtz0ROCXYJjfTHBMcEuiSe7+ol2XHJ/ObRRSU4cFkvLe7evw7QbmIuLPsKKm74z5jd/ukew04iJsMeHEI8bs6mbPS51GK8Ua8x3u2CrEReVd29qR2j5sW+3eZ2OHfgh51oVTYWmK2v95a1hpgL9t7x71wvNCt1S8oxgJu8oglPTNTIfhKYvNsINLZ8LpQ0VitpJaXJbVcU7G4F2bbWSt703mPsqAhO+GgocK3mFnV0GV//b320eEjxW8hT2Thn0a0Ug8dRQ4EYlr6BdBn9bEYgOxeOV6vtafNedOFRyf9MbHF2o0XnMJufrTp9aaNukcR/j0ZL2Z/lh8QBZ8qDUTxit0fwDJ/EJvgx7XezmdWwTPI5p0QtUVuhvqYdCyy//OQodh1mXRadyrpdwNvu+IxvPix4uyAZTogXRizVQWMpDK2Cw6iBWstERo15GBzdwFW+Fpk8L3D0u4O0aIFyTOlh21l+LbbsFp5CIXg1NR3uIruWctN1q5TxPRbtD05lyfO19G5reF+xDlHgztj09cGd/7+cKlNfqoAx6+pzwrMQ8JroJe3vnxI6Yfa6I5npBGfDCCC3nJB4RHMXNfrGZ/YX3jNrZD7ohi6dtiYv2xdO5Kz4/H4X1/uu37ZbaP7NZu4D0ToDlAAAAAElFTkSuQmCC" alt='github icono'/> */}
                    </div>

                </div>
                <div className={styles.cont_img_perfil}>
                    <img className={styles.img_perfil} src={imagenDePerfil} alt="perfil" />
                </div>
            </div>

            <div className={styles.cont_introduccion}>
                <Navbar />
                <div className={styles.introduccion}>
                    <h3 className={styles.title_h3}>- Introduccion</h3>
                    <h2 className={styles.title}><a href='.' className={styles.a_title}>Full Stack Developer Web,</a><br/> de Argentina para el mundo</h2>
                    <p className={styles.parrafo}> Como Web Developer especializado en javascript, tengo algunos proyectos usando React.js como Front-End technologies y Node.js como Back-End technologies. <br/>Soy una persona amante por el aprendizaje, me divierto resolviendo problemas y creando cosas, me encanta conocer nuevas perspectivas, compartir mis conocimientos y leer libros ya sea de tecnología , de finanzas, de distintas ciencias que sean de mi interés.</p>
                    {/* <p className={styles.parrafo}>a background in sales and currently based in Colombia, working remotely (and constantly learning). Although my career path started in a different area, I’ve always been interested in the IT world and now that I’m in it, I’ve found in coding the perfect match for me. I’m passionate about solving problems through code and finding exclusive solutions to each one; and I’m excited to work alongside other amazing programmers and keep learning.</p> */}
                    <h2 className={styles.title_h3_naranja}><a download href='https://drive.google.com/uc?export=download&id=1SvOVRSgBD-TaH6arcwd5TiytPjAtBR2p'>Mi CV -></a></h2>
                </div>
            </div>
        </div>
    )
}