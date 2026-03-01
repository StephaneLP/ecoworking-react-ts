import './menu.css'
import { Link } from 'react-router-dom'
import { HeaderProps } from '../../definitions/props.ts'
import { ReactElement, useState, useEffect } from 'react'

type City = Array<{
    id: number,
    name: string,
    ecoworking: Array<{
        id: number,
        name: string
    }>
}>

export default function Menu(props: HeaderProps): ReactElement {
    const displayMenu = props.displayMenu
    const displayBackBtn = props.displayBackBtn

    const [cities, setCities] = useState<City>([])

    useEffect(() => {
        async function fetchCities(): Promise<void> {
            const url = 'http://localhost:3001/ville?col=rank&dir=asc'

            try {
                const response = await fetch(url, {method: "GET"})
                if (!response.ok) {
                    throw new Error(`Statut de réponse : ${response.status}`)
                }

                const result = await response.json()
                const data: City = result.data

                setCities(data)
            }
            catch (err) {
                console.log(err)
            }
        }

        if (displayMenu) fetchCities()
    }, [displayMenu])

    return (
        <nav>
            <ul className="header_menu">

            { displayMenu && (
                <>
                <li>
                    <span className="menu-libelle">Espaces d'écoworking</span>
                    <div className="menu-dropdown">
                        <div className="container">
                        { cities.map(city => (
                            <div>
                                <span>{city.name}</span>
                                <ul key={city.id} className="submenu">
                                    { city.ecoworking.map(place => (
                                        <>
                                        <li key={place.id}><Link to="/coworking">{place.name}</Link></li>
                                        </>
                                    ))}
                                </ul>                                     
                            </div>
                        ))}
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

