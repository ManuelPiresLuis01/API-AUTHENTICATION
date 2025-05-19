import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styles from '../welcome/welcome.module.css';
import mainStyle from "../../../style/index.module.css"
import img from "../../../assets/svg/forgotPassword.svg"
export default function RecoveryAccount() {
    const navigate = useNavigate();
    const { name } = useParams()
    const {email} = useParams()
    { useEffect(() => {
       const timer = setTimeout(() => {
         navigate(`/auth/forgot-password/typecode/${email}`);
       }, 9000);
   
       return () => clearTimeout(timer);
     }, [navigate]);}
    return (
        <div className={`${styles.container} ${mainStyle.backgroundColor}`}>
            <img src={img} alt={`${name} voce esqueceu sua conta`} />
            <div className={styles.messageBox}>
                <h1 className={styles.h1}>{name}, pelos vistos voce perdeu a sua conta na BSmart</h1>
                <div className={styles.p}>
                    Não te preocupes, vamos recuperar em poucos passos! Enviamos um codigo no seguinte email: <b>{email} </b> 
                </div>
            </div>
        </div>
    );
}
