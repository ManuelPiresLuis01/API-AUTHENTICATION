import style from "./signUp.module.css"
import AuthButton from "../../../components/ui/AuthButton/AuthButton";
import mainStyle from "../../../style/index.module.css"
import styleSignin from "../signIn/signIn.module.css"
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "../style/index.module.css"
import iconGoogle from "../../../assets/icons/google.png"
import api from "../../../service/api";
import Feedback from "../../../components/ui/feedback/feedback";
import { FormEvent } from "react";

export default function SignUp() {
    const [isModalOpen, setModalOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [errorMsg, setErrorMsg] = useState<string | undefined>();
    const [successMsg, setSuccessMsg] = useState<string | undefined>();

    const navigate = useNavigate()
    const [btn, setBtn] = useState<boolean>(true);
    const [type, setType] = useState<"text" | "date">("text");
    const [name, setName] = useState<string>("")
    const [firstName, setFirstName] = useState<string>("")
    const [lastName, setLastName] = useState<string>("")
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const [birthDate, setBirth] = useState<string>("")
    const [phoneNumber, setPhone] = useState<string>("")
    const [gender, setGender] = useState<string>("")
    const signIn = () => navigate("/auth/login")
    const submit = async (e: FormEvent) => {
        e.preventDefault()
        setBtn(false)
        setModalOpen(true);
        setIsLoading(true);
        setErrorMsg(undefined);
        setSuccessMsg(undefined);
        setName(`${firstName} ${lastName}`)
        try {
            await api.post("/auth/sign-up", { name, email, password, birthDate, phoneNumber, gender })
            navigate(`/auth/registration/welcome/${firstName}/${email}`)
        } catch (error: any) {
            console.error(error)
            setErrorMsg("Erro ao criar uma conta!")
        } finally {
            setIsLoading(false);
            setBtn(true)
        }
    }

    return (
        <div className={`${style.container} ${mainStyle.backgroundColor}`}>
            <div className={style.containerForm}>
                <div className={styleSignin.containerSignin}>
                    <h1>Cadastre-se</h1>
                    <form onSubmit={submit}>
                        <input value={firstName} onChange={(e) => setFirstName(e.target.value)} type="text" placeholder="Primeiro Nome" required />
                        <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} placeholder="Ultimo Nome" required />
                        <input value={password} onChange={(e) => setPassword(e.target.value)} type={"password"} placeholder="Senha" required />
                        <input value={email} onChange={((e) => setEmail(e.target.value))} type="email" placeholder="Seu email" required />
                        <input
                            type={type}
                            onFocus={() => setType("date")}
                            onBlur={() => {
                                if (!birthDate) setType("text");
                            }}
                            value={birthDate}
                            onChange={(e) => setBirth(e.target.value)}
                            placeholder="Digite sua data de nascimento"
                        />
                        <input value={phoneNumber} onChange={(e) => setPhone(e.target.value)} type="tel" placeholder="Numero de telefone" required />
                        <div className={style.input}>
                            <select value={gender} onChange={(e) => setGender(e.target.value)} required>
                                <option value="" disabled selected>Como te identificas?</option>
                                <option value="masculine">Masculino</option>
                                <option value="feminine">Feminino</option>
                                <option value="other">Outro</option>
                            </select>
                        </div>
                        <p className={styleSignin.newAccount}>Ao criar a conta voce aceita os nossos <span>termos e condições</span></p>
                        <AuthButton setStatus={setBtn} status={btn} value="Criar conta" />
                        <button className={styleSignin.google}>Entrar com o Google <img src={iconGoogle} alt="Google" /></button>
                    </form>
                </div>
                <p className={styleSignin.newAccount}>Ja tem uma conta no Bsmart?<span onClick={signIn}>Entre agora</span></p>
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