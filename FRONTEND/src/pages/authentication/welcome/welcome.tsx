import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styles from './welcome.module.css';
import mainStyle from "../../../style/index.module.css"
import img from "../../../assets/svg/welcome.svg"
export default function WelcomePage() {
    const navigate = useNavigate();
    const { name } = useParams()
    const {email} = useParams()
    { useEffect(() => {
       const timer = setTimeout(() => {
         navigate(`/auth/registration/activate-account/${email}`);
       }, 9000);
   
       return () => clearTimeout(timer);
     }, [navigate]);}
    return (
        <div className={`${styles.container} ${mainStyle.backgroundColor}`}>
            <img src={img} alt={`${name} seja bem vindo`} />
            <div className={styles.messageBox}>
                <h1 className={styles.h1}>{name}, Seja bem-vindo à BSmart</h1>
                <div className={styles.p}>
                    Falta pouco para te mimares com o novo mundo.
                    Vamos enviar-te um email no seguinte email: <b>{email} </b> 
                </div>
            </div>
        </div>
    );
}
