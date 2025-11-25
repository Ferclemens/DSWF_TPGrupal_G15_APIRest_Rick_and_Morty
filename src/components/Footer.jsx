import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  const Alumnos = [
    {
      nombre: "Branko Haberkon",
      linkedin: "https://www.linkedin.com/in/branko-haberkon/",
    },
    {
      nombre: "Camila Lerman",
      linkedin: "https://linkedin.com/in/camila-lerman",
    },
    { nombre: "Matías Lorenzo", linkedin: "https://linkedin.com/in/profile3" },
    {
      nombre: "Martín Morondo",
      linkedin: "https://www.linkedin.com/in/martin-morondo/",
    },
    {
      nombre: "Fernando Clemens",
      linkedin: "https://www.linkedin.com/in/foclemens/",
    },
  ];

  return (
    <footer className={styles.container}>
      <h3 className={styles.title}>Grupo 15 - Comisión B</h3>
      <div className={styles.content}>
        {Alumnos.map((alumno, index) => (
          <a
            key={index}
            href={alumno.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            {alumno.nombre}
          </a>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
