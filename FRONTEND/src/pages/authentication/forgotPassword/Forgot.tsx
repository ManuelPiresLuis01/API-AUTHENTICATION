import { useParams } from "react-router-dom"
import AuthButton from "../../../components/ui/AuthButton/AuthButton"
import forgot from "./Forgot.module.css"
import styles from "../typeCode/code.module.css"
import style from "../signUp/signUp.module.css"
import styleSignin from "../signIn/signIn.module.css"
import React, { useState, useRef } from "react";
import img from "../../../assets/svg/codeVerification.svg"
import { useNavigate } from "react-router-dom"
import mainStyle from "../../../style/index.module.css"
import api from "../../../service/api"
import Feedback from "../../../components/ui/feedback/feedback"

export function TypeEmail() {
    const [isModalOpen, setModalOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [errorMsg, setErrorMsg] = useState<string | undefined>();
    const [successMsg, setSuccessMsg] = useState<string | undefined>();

    const [name, setName] = useState<string>("")
    const [email, setEmail] = useState<string>("")
    const navigate = useNavigate()
    const [btn, setBtn] = useState<boolean>(true);
    const submit = async (e: React.FormEvent) => {
        e.preventDefault()
        setBtn(false)
        setModalOpen(true);
        setIsLoading(true);
        setErrorMsg(undefined);
        setSuccessMsg(undefined);
        if (email && name) {
            try {
                await api.post("/auth/forgot-password", { email })
                navigate(`/auth/forgot-password/${name}/${email}`)
            } catch (error) {
                console.error(error)
                setErrorMsg("Este usuario não existe")
            } finally {
                setBtn(true)
                setIsLoading(false)
            }
        }
    }

    return (
        <div className={`${style.container} ${mainStyle.backgroundColor}`}>
            <div className={style.containerForm}>
                <div className={styleSignin.containerSignin}>
                    <h1 className={forgot.h1}>Digite o seu nome e email</h1>
                    <form onSubmit={submit}>
                        <input value={name} onChange={(e) => setName(e.target.value)} type={"text"} placeholder="Nome !..." required />
                        <input value={email} onChange={(e) => setEmail(e.target.value)} type={"email"} placeholder="Email !..." required />
                        <AuthButton setStatus={setBtn} status={btn} value="Recuperar conta!" />
                    </form>
                </div>
            </div >
            <Feedback
                isOpen={isModalOpen}
                onClose={() => setModalOpen(false)}
                isLoading={isLoading}
                errorMessage={errorMsg}
                successMessage={successMsg}
            />
        </div >
    )
}

export function TypeCode() {
    const [isModalOpen, setModalOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [errorMsg, setErrorMsg] = useState<string | undefined>();
    const [successMsg, setSuccessMsg] = useState<string | undefined>();

    const { email } = useParams()
    const navigate = useNavigate()
    const [code, setCode] = useState<string>("");
    const [sending, setSending] = useState<boolean>(false);
    const inputRef = useRef<HTMLInputElement>(null);
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value.replace(/\D/g, "").slice(0, 6);
        setCode(value);

        if (value.length === 6)
            validateCode(value);

    };

    const validateCode = async (code: string) => {
        setModalOpen(true);
        setIsLoading(true);
        setErrorMsg(undefined);
        setSuccessMsg(undefined);
        try {
            await api.post("/auth/reset-password", { email, code })
            navigate(`/auth/forgot-password/newPassword/${email}`)
        } catch (error: any) {
            setErrorMsg("Codigo inválido")
        } finally {
            setIsLoading(false);
        }
    };

    const handleClick = () => {
        inputRef.current?.focus();
    };

    return (
        <div className={`${styles.container} ${mainStyle.backgroundColor}`}>
            <div className={styles.div1}>
                <img src={img} alt="code verification" />
            </div>
            <div className={styles.div1}>
                <h2 className={styles.title}>Digite o código de verificação</h2>
                <div className={styles.containerCode}>
                    <div className={styles.boxes} onClick={handleClick}>
                        {[...Array(6)].map((_, i) => (
                            <div key={i} className={styles.box}>
                                {code[i] || ""}
                            </div>
                        ))}
                    </div>
                    {!sending ? <p onClick={() => setSending(!sending)} className={styles.resend}>Reenviar o codigo!</p> : <p className={styles.loading}></p>}
                </div>
                <input
                    type="text"
                    inputMode="numeric"
                    pattern="[0-9]*"
                    maxLength={6}
                    value={code}
                    onChange={handleChange}
                    ref={inputRef}
                    className={styles.hiddenInput}
                />
            </div>
            <Feedback
                isOpen={isModalOpen}
                onClose={() => setModalOpen(false)}
                isLoading={isLoading}
                errorMessage={errorMsg}
                successMessage={successMsg}
            />
        </div>
    );
}

export function ResetPassword() {
    const [isModalOpen, setModalOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [errorMsg, setErrorMsg] = useState<string | undefined>();
    const [successMsg, setSuccessMsg] = useState<string | undefined>();

    const { email } = useParams()
    const [btn, setBtn] = useState<boolean>(true);
    const [password1, setPassword1] = useState<string>("")
    const [password2, setPassword2] = useState<string>("")
    const [password,setPassword] = useState<string>("")
    const navigate = useNavigate()
    const submit = async (e: React.FormEvent) => {
        e.preventDefault()
        setBtn(false)
        setModalOpen(true);
        setIsLoading(true);
        setErrorMsg(undefined);
        setSuccessMsg(undefined);

        if (password1 === password2) {
            setPassword(password1)
            try {
                await api.post("/auth/reset-password", { email, password })
                return navigate("/auth/forgot-password/newPasswordSaved")
            } catch (error) {
                console.error(error)
            }
        }
    }
    
    return (
        <div className={`${style.container} ${mainStyle.backgroundColor}`}>
            <div className={style.containerForm}>
                <div className={styleSignin.containerSignin}>
                    <h1 className={forgot.h1}>Digite a sua nova senha</h1>
                    <form onSubmit={submit}>
                        <input value={password1} onChange={(e) => setPassword1(e.target.value)} type={"password"} placeholder="Digite uma nova senha!" required />
                        <input value={password2} onChange={(e) => setPassword2(e.target.value)} type={"password"} placeholder="Repita a sua senha!" required />
                        <AuthButton setStatus={setBtn} status={btn} value="Salvar senha" />
                    </form>
                </div>
            </div >
            <Feedback
                isOpen={isModalOpen}
                onClose={() => setModalOpen(false)}
                isLoading={isLoading}
                errorMessage={errorMsg}
                successMessage={successMsg}
            />
        </div >

    )
}