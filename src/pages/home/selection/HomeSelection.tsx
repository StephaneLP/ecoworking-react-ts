import './homeSelection.css'
import imgPlace1 from '../../../assets/img/home/place1.jpg'
import imgPlace2 from '../../../assets/img/home/place2.jpg'
import imgPlace3 from '../../../assets/img/home/place3.jpg'
import { ReactElement } from 'react'

export default function HomeSelection(): ReactElement {
    return (
        <section className="home-selection">
            <h2>La sélection des écoworkers</h2>
            <div className="home-selection_grid container">
                <div className="home-selection_place">
                    <div className="home-selection_place-header">
                        <span className="home-selection_place-name">Green Place</span>
                        <span className="home-selection_place-city">Laval</span>
                    </div>
                    <div className="home-selection_place-containt">
                        <img src={imgPlace1} alt="Green Place" />
                        <div className="home-selection_place-note">
                            <div className="note-active"></div>
                            <div className="note-active"></div>
                            <div className="note-active"></div>
                            <div className="note-active"></div>
                            <div className="note-active"></div>
                        </div>
                        <div className="home-selection_place-comment">
                            <span>«</span>
                            <span className="home-selection_place-comment-text">
                                Très joli lieu de coworking : bureaux spacieux, jardin,
                                cuisine équipée avec bureaux nomades, super ambiance de travail !
                            </span>
                            <span>»</span>
                        </div>
                        <div className="home-selection_place-overlay">
                            <a className="button" href="/pages/ecoworkings/green-place.html">Ouvrir la fiche</a>
                        </div>  
                    </div>
                </div>
                <div className="home-selection_place">
                    <div className="home-selection_place-header">
                        <span className="home-selection_place-name">eCafé</span>
                        <span className="home-selection_place-city">Château-Gontier</span>
                    </div>
                    <div className="home-selection_place-containt">
                        <img src={imgPlace2} alt="Alsace eCafé" />
                        <div className="home-selection_place-note">
                            <div className="note-active"></div>
                            <div className="note-active"></div>
                            <div className="note-active"></div>
                            <div></div>
                            <div></div>
                        </div>
                        <div className="home-selection_place-comment">
                            <span>«</span>
                            <span className="home-selection_place-comment-text">
                                Un bel espace de coworking, chaleureux, moderne et non loin du centre de 
                                Mulhouse. Aucun doute, tout est fait pour que les co-workers s'y sentent 
                                comme chez eux ! Je recommande sans hésitation.
                            </span>
                            <span>»</span>                                
                        </div>
                        <div className="home-selection_place-overlay">
                            <a className="button" href="#0">Ouvrir la fiche</a>
                        </div>
                    </div>              
                </div>
                <div className="home-selection_place">
                    <div className="home-selection_place-header">
                        <span className="home-selection_place-name">La Bulle Verte</span>
                        <span className="home-selection_place-city">Mayenne</span>
                    </div>
                    <div className="home-selection_place-containt">
                        <img src={imgPlace3} alt="La Bulle Verte" />
                        <div className="home-selection_place-note">
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                        <div className="home-selection_place-comment">
                            <span></span>
                            <span className="home-selection_place-comment-text">
                                Nouveau...
                                {/* Très joli lieu de coworking : bureaux spacieux, jardin,
                                cuisine équipée avec bureaux nomades, super ambiance de travail ! */}
                            </span>
                            <span></span>                                
                        </div>
                        <div className="home-selection_place-overlay">
                            <a className="button" href="#0">Ouvrir la fiche</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}