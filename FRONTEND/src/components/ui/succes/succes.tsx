import img from "../../../assets/svg/succes.svg"
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"
import styles from "../../../pages/authentication/typeCode/code.module.css"
import {Button} from "../AuthButton/AuthButton"
import mainStyle from "../../../style/index.module.css"
import succes from "./succes.module.css"
import { Link } from "react-router-dom"

interface props {
    value: string
    route: string
}

export default function Succes(p: props) {
    const navigate = useNavigate()
    useEffect(() => {
        const timer = setTimeout(() => {
            navigate(`${p.route}`);
        }, 5000);

        return () => clearTimeout(timer);
    }, [navigate]);
    return (
        <div className={`${styles.container} ${mainStyle.backgroundColor}`}>
            <div className={styles.div1}>
                <img src={img} alt="Succes" />
            </div>
            <div className={`${styles.div1} ${succes.center}`}>
                <p className={succes.suc}> {p.value}</p>
                <p className={succes.link}>Se não for redirecionado, <Link to={p.route}>clique aqui</Link> </p>
            </div>
        </div>
    )
}

export  function CreatedAccount() {
    const navigate = useNavigate()
    const onboarding = ()=> {return navigate("/onboard/countryCity")}

    return (
        <div className={`${styles.container} ${mainStyle.backgroundColor}`}>
            <div className={styles.div1}>
                <img src={img} alt="Succes" />
            </div>
            <div className={`${styles.div1} ${succes.center}`}>
                <p className={succes.suc}>Conta criada com sucesso! <br />  Precisamos que preenchas mais alguns dados para que a tua experiência seja otima</p>
                <div onClick={onboarding} ><Button value="Continuar"/></div>
            </div>  
        </div>
    )
}