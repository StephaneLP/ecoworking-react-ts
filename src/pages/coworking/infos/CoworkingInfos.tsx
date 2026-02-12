import './coworkingInfos.css'
import imgLocation from '../../../assets/img/icones/localisation.png'
import { ReactElement } from "react";

export default function CoworkingInfos(): ReactElement {
    return (
        <section className="coworking_infos container">
            <div className="infos-tarifs">
                <h4>Tarifs</h4>
                <div className="infos-prix">
                    <span>Heure</span>
                    <div className="horaires-lundi">6€</div>
                    <span>Demi-Journée</span>
                    <div className="horaires-mardi">12€</div>
                    <span>Journée</span>
                    <div className="horaires-mercerdi">18€</div>
                    <span>Semaine</span>
                    <div className="horaires-jeudi">75€</div>
                    <span>Mois</span>
                    <div className="horaires-vendredi">190€</div>
                </div>
            </div>
            <div className="infos-pratiques">
                <div>
                    <h4>Horaires</h4>
                    <div className="infos-acces">
                        <span>Accès sécurisé 365j/an 24h/24</span>
                    </div>
                    <div>
                        <h5>Accueil</h5>
                        <div className="infos-horaires">
                            <span>Lundi au Vendredi</span>
                            <div className="horaires-lundi">08h00 - 19h00</div>
                            <span>Samedi</span>
                            <div className="horaires-mardi">08h00 - 17h00</div>
                            <span>Dimanche</span>
                            <div className="horaires-dimanche">Fermé</div>
                            
                        </div>                    
                    </div>
                </div>
                <div>
                    <h4>Emplacement</h4>
                    <div className="infos_localisation">
                        <div>
                            3 Rue de la Libération, Bâtiment C, 53000 Laval
                        </div>
                        <a  className="map" href="#">
                            <img src={imgLocation} alt='Localisation' />
                        </a>                    
                    </div>
                </div>
            </div>
        </section>
    )
}
