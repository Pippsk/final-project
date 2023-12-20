import React from "react";
import styles from "./About.module.css";
import aboutImg from "../../assets/about-img.jpg";

const About = () => {
  return (
    <main>
      <div className={styles.container}>
        <article>
          <h1>Our Story</h1>
          <p>
            La ComfortZone, ne dedicăm să aducem în casele clienților noștri nu
            doar mobilier de calitate superioară, ci și inspirație pentru a crea
            medii care reflectă personalitatea și stilul fiecăruia. Cu o gamă
            variată de piese de mobilier, de la dormitoare elegante la bucătării
            funcționale și sufragerii moderne, oferim soluții pentru toate
            gusturile și necesitățile. Suntem aici pentru a transforma visurile
            tale de amenajare în realitate. Cu angajați dedicați și pasionați de
            domeniul designului interior, suntem mereu pregătiți să oferim
            asistență și să găsim soluții personalizate pentru a satisface
            nevoile tale. La ConfortZone, nu vindem doar mobilier, ci creăm
            spații în care clienții noștri se simt cu adevărat acasă. Descoperă
            calitatea, stilul și confortul alături de noi și transformă-ți casa
            într-un loc cu adevărat special!"
          </p>
        </article>
        <img src={aboutImg} alt="furniture image" />
      </div>
    </main>
  );
};

export default About;
