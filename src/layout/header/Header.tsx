import './header.css'
import imgLogo from '../../assets/img/logos/logo.png'

import Menu from '../menu/Menu.tsx'

export default function Header() {
    return (
        <header>
            <div className="header_bandeau_left"></div>
            <div className="header_bandeau_center container">
                <a className="header_bandeau_logo" href="/">
                    <img src={imgLogo} alt="logo" />
                    <div className="header_bandeau_logo-separator"></div>
                    <div className="header_bandeau_logo-title">
                        <span>É</span>co<span>W</span>orking
                    </div>
                </a>
                <Menu />
            </div>
        </header>        
    )
}
