import './coworkingPresentation.css'
import imgGlobe from '../../../assets/img/icones/globe.png'
import imgAppel from '../../../assets/img/icones/appel.png'
import imgEmail from '../../../assets/img/icones/email.png'
import imgMaison from '../../../assets/img/icones/maison.png'

import { ReactElement } from "react"

export default function CoworkingPresentation(): ReactElement {
    return (
        <section className="coworking-header container">
            <h1>Green Place</h1>
            <div className="header-score">
                <div className="note-moyenne etoiles">
                    <div className="etoile-active"></div>
                    <div className="etoile-active"></div>
                    <div className="etoile-active"></div>
                    <div className="etoile-active"></div>
                    <div className="etoile-active"></div>
                </div>
                <div className="avis-lien"><a href="#">(6 avis)</a></div>
            </div>

            <div className="header-infos">
                <div className="infos-coordonnees"> 
                    <img src={imgGlobe} alt="email" />
                    <span className="coordonnees-site"><a href="#">Site Web</a></span>
                </div>
                <div className="infos-coordonnees"> 
                    <img src={imgAppel} alt="téléphone" />
                    <span className="coordonnees-tel">05 01 02 03 04</span>                        
                </div>
                <div className="infos-coordonnees"> 
                    <img src={imgEmail} alt="email" />
                    <span className="coordonnees-email">green-place@domaine.com</span>
                </div>
                <div className="infos-coordonnees"> 
                    <img src={imgMaison} alt="adresse" />
                    <div>
                        <span className="coordonnees-rue">3 Rue de la Libération, 53000 Laval</span>                            
                    </div>
                </div>                
            </div>

            {/* PRESENTATION */}
            <div className="header-presentation">
                <div className="coworking-presentation-texte">
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                        Dolores odio assumenda autem inventore architecto similique. 
                        Quo, quis non eius quae numquam, ullam cumque commodi 
                        mollitia iusto sed consectetur.
                    </p>
                    <p>
                        Eveniet, magnam.
                        Quo, quis non eius quae numquam, ullam cumque commodi 
                        mollitia iusto sed consectetur. Eveniet, magnam.
                    </p>
                </div>            
                {/* IMAGE */}
                <div className="presentation-image"></div>
            </div>
        </section>
    )
}