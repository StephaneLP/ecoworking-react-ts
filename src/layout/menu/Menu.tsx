import './menu.css'
import { Link } from 'react-router-dom'
import { HeaderProps } from '../../definitions/props.ts'
import { ReactElement } from 'react'

export default function Menu(props: HeaderProps): ReactElement {
    const displayMenu = props.displayMenu
    const displayBackBtn = props.displayBackBtn

    return (
        <nav>
            <ul className="header_menu">
            { displayMenu && (
                <>
                <li>
                    <span className="menu-libelle">Espaces d'écoworking</span>
                    <div className="menu-dropdown">
                        <div className="container">
                            <div>
                                <span>Laval</span>
                                <ul className="submenu">
                                    <li><Link to="/coworking">Green Place</Link></li>
                                    <li><Link to="/coworking">Assolidaire</Link></li>
                                    <li><Link to="/coworking">Le Comptoir du Maine</Link></li>
                                </ul>                                     
                            </div>
                            <div>
                                <span>Château-Gontier</span>
                                <ul className="submenu">
                                    <li><Link to="/coworking">eCafé</Link></li>
                                    <li><Link to="/coworking">La Harelle</Link></li>
                                </ul>                                     
                            </div>
                            <div>
                                <span>Mayenne</span>
                                <ul className="submenu">
                                    <li><Link to="/coworking">La Bulle Verte</Link></li>
                                    <li><Link to="/coworking">La Mayennaise</Link></li>
                                </ul>                                     
                            </div>
                        </div>
                    </div>
                </li>
                <li>
                    <Link className="button" to="/signin">Se connecter</Link>
                </li>
                </>
            )}

            { displayBackBtn && (
                <li>
                    <Link className="button" to="/">
                        <span className="menu-back">&lt;</span> Retour
                    </Link>
                </li>
            )}
            </ul>
        </nav>  
    )
}

