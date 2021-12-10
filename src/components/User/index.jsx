import React, { useRef, useState }  from "react";
import { Button } from "components/Button";
import profileImg from "assets/img/profile.png"; 
import {AuthConsumer} from "contexts/AuthContext";
import { Link } from "react-router-dom";
import "./styles.scss";

export function User(){
    const refArrow = useRef(null);
    const refMenu = useRef(null);
    const [deploy, setDeploy] = useState(false);
    const {user, logout} = AuthConsumer()
    const handleClick = () => {
        if(!deploy){
            refMenu.current.classList.add('deploy');
            refMenu.current.classList.remove('close');
            refArrow.current.classList.add('turnUp');
            refArrow.current.classList.remove('turnDown');
        }else{
            refMenu.current.classList.remove('deploy');
            refMenu.current.classList.add('close');
            refArrow.current.classList.remove('turnUp');
            refArrow.current.classList.add('turnDown');
        }
        setDeploy(!deploy);
    }
    return (
        <div onClick={handleClick} className="user">
            <img className="user__img" src={user.img ?? profileImg} alt="profile"/>
            <svg ref={refArrow} className="user__arrow" version="1.0" xmlns="http://www.w3.org/2000/svg"
            width="10" height="10" viewBox="0 0 1280.000000 1130.000000"
            preserveAspectRatio="xMidYMid meet">
                <g transform="translate(0.000000,1130.000000) scale(0.100000,-0.100000)"
                fill="#93c08c" stroke="none">
                    <path d="M6266 11289 c-200 -27 -402 -141 -536 -301 -38 -46 -432 -718 -1284
                    -2194 -3554 -6153 -4323 -7485 -4358 -7554 -61 -121 -81 -211 -81 -375 -1
                    -115 3 -154 21 -220 91 -327 350 -567 681 -629 75 -14 614 -16 5691 -16 5077
                    0 5616 2 5691 16 331 62 590 302 681 629 18 66 22 105 21 220 0 164 -20 254
                    -81 375 -21 41 -756 1317 -1633 2835 -877 1518 -2126 3680 -2775 4804 -817
                    1416 -1196 2063 -1234 2109 -112 134 -277 239 -445 283 -93 24 -256 32 -359
                    18z"/>
                </g>
            </svg>
            <div ref={refMenu} className="user__menu menu">
                <p className="menu__name">{user.name || user.email}</p>
                <nav className="menu__list list">
                    <li className="list__li"><Link to="/profile" className="list__link">Perfil</Link></li>
                </nav>
                <Button click={logout} value="Cerrar Sesión"/>
            </div>
        </div>
    )
}