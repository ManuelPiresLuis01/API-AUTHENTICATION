import Header from "../../../components/layout/header/header"
import mainStyle from "../../../style/index.module.css"
import style from "./userProfile.module.css"

export default function Profile() {
    return (
        <div className={`${mainStyle.backgroundColor} ${style.container}`}>
            <Header />

            <div className={style.profile}>
                <div className={style.profileData}></div>
                <div className={style.profileContent}></div>
            </div>
        </div>
    )
}