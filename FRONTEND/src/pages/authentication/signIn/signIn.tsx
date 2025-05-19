import style from "./signIn.module.css"
import React, { useState } from "react";
import AuthButton from "../../../components/ui/AuthButton/AuthButton";
import { useNavigate } from "react-router-dom";
import mainStyle from "../../../style/index.module.css"
import "../style/index.module.css"
import Logo from "../../../../public/ChatGPT Image 6_04_2025, 17_25_29.png"
import { FaRegCircle } from "react-icons/fa";
import { FaRegCheckCircle } from "react-icons/fa";
import img from "../../../assets/svg/loginImage.svg"
import iconGoogle from "../../../assets/icons/google.png"
import api from "../../../service/api";
import Feedback from "../../../components/ui/feedback/feedback";

export default function SignIn() {
    const [isModalOpen, setModalOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [errorMsg, setErrorMsg] = useState<string | undefined>();
    const [successMsg, setSuccessMsg] = useState<string | undefined>();

    const [btn, setBtn] = useState<boolean>(true);
    const [identifier, setIdentifier] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const [seePassword, setSeePassword] = useState(true);
    const navigate = useNavigate()
    const signUp = () => navigate("/auth/registration")
    const forgot = () => navigate("/auth/forgot-password")

    const submit = async (e: React.FormEvent) => {
        e.preventDefault()
        setBtn(false)
        setModalOpen(true);
        setIsLoading(true);
        setErrorMsg(undefined);
        setSuccessMsg(undefined);
        try {
            const response = await api.post("/auth/sign-in", { identifier, password })
            console.log(response.data)
            localStorage.setItem("token", response.data.token)
            setSuccessMsg("Login feito com sucesso!");
            setBtn(true)
            navigate("/")
        } catch (error: any) {
            console.error(error)
            setErrorMsg("Password ou senha errada");
        } finally {
            setBtn(true)
            setIsLoading(false);
        }
    }
    return (
        <div className={`${style.container} ${mainStyle.backgroundColor}`}>
            <img src={Logo} className={style.imgLogo} alt="logotipo Bsmart" />
            <nav className={style.logo} >
                <img src={Logo} alt="logotipo Bsmart" />
                <ul>
                    <li>Sobre</li>
                    <li>Termos e condições</li>
                    <li>FAQ</li>
                </ul>
            </nav>
            <div className={style.containerFixed}>
                <div className={style.containerSignin}>
                    <h1>Entrar</h1>
                    <form onSubmit={submit}>
                        <input value={identifier} onChange={(e) => setIdentifier(e.target.value)} type="text" placeholder="E-mail ou telefone" required />
                        <input value={password} onChange={(e) => setPassword(e.target.value)} type={seePassword ? "password" : "text"} placeholder="Senha" required />
                        <div>
                            <p onClick={() => setSeePassword(!seePassword)}><i>{seePassword ? <FaRegCircle /> : <FaRegCheckCircle />}</i> Ver senha</p>
                            <p onClick={forgot} className={style.forgot}>Esqueceu a senha?</p>
                        </div>
                        <AuthButton setStatus={setBtn} status={btn} value="Entrar" />
                        <button className={style.google}>Entrar com o Google <img src={iconGoogle} alt="Google" /></button>
                    </form>
                </div>
                <p className={style.newAccount}>Ainda nao tem uma conta no Bsmart?<span onClick={signUp}>Crie uma agora</span></p>
            </div>
            <div>
                <img src={img} className={style.imgLogin} alt="miudo estudando" />
            </div>

            <Feedback
                isOpen={isModalOpen}
                onClose={() => setModalOpen(false)}
                isLoading={isLoading}
                errorMessage={errorMsg}
                successMessage={successMsg}
            />
        </div>
    )
}