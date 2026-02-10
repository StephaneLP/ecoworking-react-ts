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
                    <span className="header_menu-libelle">Espaces d'écoworking</span>
                    <div className="header_menu-dropdown">
                        <div className="container">
                            <div>
                                <span>Laval</span>
                                <ul className="header_submenu">
                                    <li><a href="/pages/ecoworkings/green-place.html">Green Place</a></li>
                                    <li><a href="#0">Assolidaire</a></li>
                                    <li><a href="#0">Le Comptoir du Maine</a></li>
                                </ul>                                     
                            </div>
                            <div>
                                <span>Château-Gontier</span>
                                <ul className="header_submenu">
                                    <li><a href="#0">eCafé</a></li>
                                    <li><a href="#0">La Harelle</a></li>
                                </ul>                                     
                            </div>
                            <div>
                                <span>Mayenne</span>
                                <ul className="header_submenu">
                                    <li><a href="#0">La Bulle Verte</a></li>
                                    <li><a href="#0">La Mayennaise</a></li>
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

