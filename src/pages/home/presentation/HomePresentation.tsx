import './homePresentation.css'
import imgLaval from '../../../assets/img/home/laval.jpg'
import imgGontier from '../../../assets/img/home/gontier.jpg'
import imgMayenne from '../../../assets/img/home/mayenne.jpg'
import { ReactElement } from 'react'

export default function HomePresentation(): ReactElement {
    return (
        <section className="home-presentation container">
            <h1>ÉcoWorking en Mayenne</h1>
            <p>
                Bienvenue sur le site dédié aux espaces de coworking situés dans le département de la Mayenne et respectueux de l'environnement
                (fournisseurs d'énergie verte, matériaux recyclables, data-centers français...).
            </p>
            <div className="presentation_cities">
                <div>
                    <a className="presentation_city" href="#0">
                        <img src={imgLaval} alt="Laval" />
                    </a>
                    <h3>Laval</h3>
                </div>
                <div>
                    <a className="presentation_city" href="#0">
                        <img src={imgGontier} alt="Chateau Gontier" />
                    </a>
                    <h3>Château-Gontier</h3>
                </div>
                <div>
                    <a className="presentation_city" href="#0">
                        <img src={imgMayenne} alt="Mayenne" />
                    </a>
                    <h3>Mayenne</h3>
                </div>
            </div>
        </section>        
    )
}