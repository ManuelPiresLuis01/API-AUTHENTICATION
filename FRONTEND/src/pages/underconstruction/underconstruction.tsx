import React from "react";
import styles from "./underconstruction.module.css";
import mainStyle from "../../style/index.module.css"
import logo from "../../../public/ChatGPT Image 6_04_2025, 17_25_29.png"

const UnderConstruction: React.FC = () => {
    return (

        <div className={`${styles.container} ${mainStyle.backgroundColor}`}>
            <img src={logo} alt="BSmart Logo" className={styles.logo} />
            <h1 className={styles.title}>Site em Construção</h1>
            <p className={styles.subtitle}>Previsão de término: 25 de abril</p>
        </div>
        
    );
};

export default UnderConstruction;
