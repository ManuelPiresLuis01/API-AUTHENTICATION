import style from "./header.module.css"
import { GoHomeFill } from "react-icons/go";
import { PiUsersThreeFill } from "react-icons/pi";
import { RiGitRepositoryFill } from "react-icons/ri";
import { BiSolidVideos } from "react-icons/bi";

export default function Header() {
    return (
        <header className={style.container}>
            <ul>
                <li><i><GoHomeFill /></i><span>Home</span></li>
                <li><i><PiUsersThreeFill /></i><span>Network</span> </li>
                <li><i><RiGitRepositoryFill /></i><span>Repositorios</span></li>
                <li><i><BiSolidVideos /></i><span>Kvideos</span></li>
            </ul>
            <div></div>
        </header>
    )
}