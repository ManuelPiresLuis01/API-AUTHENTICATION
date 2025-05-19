import style from "./index.module.css"

interface props{
    value:string
    status: boolean;
    setStatus: (status: boolean) => void;
}
interface prop{
    value:string
}


export default function AuthButton(p:props){
    return (
        <button type="submit" className={style.btn}>{p.status ? p.value : <p className={style.loading}></p>}</button>
    )
}


export function SkipButton(p:props){
    return (
        <button className={style.skip}>{p.status ? p.value : <p className={style.loading}></p>}</button>
    )
}



export function Button(p:prop){
    return (
        <button type="submit" className={style.btn}>{p.value}</button>
    )
}