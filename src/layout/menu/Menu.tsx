import './menu.css'
import { Link } from 'react-router-dom'
import { HeaderProps } from '../../definitions/props.ts'
import { ReactElement, useState, useEffect } from 'react'

export default function Menu(props: HeaderProps): ReactElement {
    const displayMenu = props.displayMenu
    const displayBackBtn = props.displayBackBtn

    const [cities, setCities] = useState([])

    useEffect(() => {
        const fetchCities = async() => {
            try {
                const response = await fetch('http://localhost:3001/ville?col=rank&dir=asc&is_active=true', {method: "GET"})
                if (!response.ok) {
                    throw new Error('Network response was not okay')
                }

                const data = await response.json()
                if (data.data && data.data[0].name) {
                    setCities(data.data)
                }
                
            }
            catch (err) {
                console.log(err)
            }
        }

        fetchCities()
    }, [])

    return (
        <nav>
            { cities.map(city => (
                <span>{city.name} {city.id} / </span>
            ))}
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

