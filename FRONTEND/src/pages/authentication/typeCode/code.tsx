import { useParams } from "react-router-dom"
import styles from "./code.module.css"
import React, { useState, useRef } from "react";
import mainStyle from "../../../style/index.module.css"
import img from "../../../assets/svg/codeVerification.svg"
import { useNavigate } from "react-router-dom";
import api from "../../../service/api";
import Feedback from "../../../components/ui/feedback/feedback";

export function ActivateAccount() {
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
      await api.post("/auth/activate-account", { email, code })
      return navigate("/auth/createdAccount")
    } catch (error: any) {
      setErrorMsg("Codigo inválido")
    } finally {
      setIsLoading(false);
    }
  };

  const handleClick = () => {
    inputRef.current?.focus();
  };

  const resend = async () => {
    setSending(true)
    try {
      await api.post("/auth/resend-activation-code", { email })
      setSending(false)
    } catch (error) {
      console.error(error)
    } finally {
      setSending(false)
    }
  }

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
          {!sending ? <p onClick={() => {
            resend()
            setSending(!sending)
          }} className={styles.resend}>Reenviar o codigo!</p> : <p className={styles.loading}></p>}
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
};
