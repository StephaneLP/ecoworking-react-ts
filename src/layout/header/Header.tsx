import './header.css'

const Header = () => {
    return (
<header>
    <div className="bandeau_left"></div>
    <div className="bandeau_center container">
        <a className="bandeau_logo" href="/">
            <img src="../../img/logos/logo.png" alt="logo" />
            <div className="bandeau_logo-separator"></div>
            <div className="bandeau_logo-title">
                <span>É</span>co<span>W</span>orking
            </div>
        </a>
        <nav>
            <ul className="bandeau_menu">
                <li>
                    <span className="bandeau_menu-libelle">Espaces d'écoworking</span>
                    <div className="bandeau_menu-dropdown">
                        <div className="container">
                            <div>
                                <span>Laval</span>
                                <ul className="bandeau_submenu">
                                    <li><a href="/pages/ecoworkings/green-place.html">Green Place</a></li>
                                    <li><a href="#0">Assolidaire</a></li>
                                    <li><a href="#0">Le Comptoir du Maine</a></li>
                                </ul>                                     
                            </div>
                            <div>
                                <span>Château-Gontier</span>
                                <ul className="bandeau_submenu">
                                    <li><a href="#0">eCafé</a></li>
                                    <li><a href="#0">La Harelle</a></li>
                                </ul>                                     
                            </div>
                            <div>
                                <span>Mayenne</span>
                                <ul className="bandeau_submenu">
                                    <li><a href="#0">La Bulle Verte</a></li>
                                    <li><a href="#0">La Mayennaise</a></li>
                                </ul>                                     
                            </div>
                        </div>
                    </div>
                </li>
                <li>
                    <a className="button" href="/pages/account/connect.html">Se connecter</a>
                </li>
            </ul>
        </nav>  
    </div>
</header>        
    )
}

export default Header