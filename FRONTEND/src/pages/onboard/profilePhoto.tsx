import style from "./index.module.css"
import mainStyle from "../../../src/style/index.module.css"
import AuthButton from "../../components/ui/AuthButton/AuthButton"
import { FaUser } from "react-icons/fa";
import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { SkipButton } from "../../components/ui/AuthButton/AuthButton";
export default function ProfilePhoto() {
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [btn, setBtn] = useState<boolean>(true);
    const [Skip, setSkip] = useState<boolean>(true);
    const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);
    const navigate = useNavigate()
    const Profile = () => {
        setBtn(false)
        return navigate("/under-construction")
    }

    const skip = () => {
        setSkip(false)
        const out = setInterval(() => {
            setSkip(true)
            return navigate("/under-construction")
            clearInterval(out)
        }, 3000)
    }
    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const fileURL = URL.createObjectURL(file);
            setSelectedPhoto(fileURL);
        }
    };

    return (
        <div className={`${style.container} ${mainStyle.backgroundColor}`}>
            <div className={style.containerPost}>
                <h1>Uma foto vai ajudar as pessoas a te reconhecerem</h1>
                <div style={{ background: `url(${selectedPhoto})`, backgroundPosition: "center", backgroundSize: "cover", cursor: "pointer" }} onClick={() => {
                    fileInputRef.current?.click();
                }} className={style.photo}>
                    {!selectedPhoto && <i><FaUser /></i>}
                </div>
                <div onClick={Profile}><AuthButton setStatus={setBtn} status={btn} value="Postar" /></div>
                <div onClick={skip}><SkipButton setStatus={setSkip} status={Skip} value="Saltar" /></div>
                <input
                    ref={fileInputRef}
                    style={{ display: 'none' }}
                    id="photo-input"
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                />
            </div>
        </div>
    )
}