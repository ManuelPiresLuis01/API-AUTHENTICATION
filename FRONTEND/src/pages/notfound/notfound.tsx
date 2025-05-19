import style from "../authentication/signIn/signIn.module.css"
import mainStyle from "../../style/index.module.css"
import Logo from "../../../public/ChatGPT Image 6_04_2025, 17_25_29.png"
import img from "../../assets/svg/notFound.svg"
import not from "./not.module.css"

export default function NotFound() {
    return (
        <div className={`${style.container} ${mainStyle.backgroundColor}`}>
            <nav className={style.logo} >
                <img src={Logo} className={not.img} alt="logotipo Bsmart" />
                <ul>
                    <li>Sobre</li>
                    <li>Termos e condições</li>
                    <li>FAQ</li>
                </ul>
            </nav>
            <img src={img}  alt="page not found" />
        </div>
    )
}