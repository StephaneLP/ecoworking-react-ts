import './coworkingEquipment.css'
import imgCoworking from '../../../assets/img/icones/co-working.png'
import imgPCPortable from '../../../assets/img/icones/travailler-avec-un-ordinateur-portable.png'
import imgReunion from '../../../assets/img/icones/reunion.png'
import imgBouclier from '../../../assets/img/icones/bouclier.png'
import imgWifiRouter from '../../../assets/img/icones/wifi-router.png'
import imgImprimante from '../../../assets/img/icones/imprimante.png'
import imgCafe from '../../../assets/img/icones/tasse-a-cafe.png'
import imgChef from '../../../assets/img/icones/chef.png'
import imgDesactive from '../../../assets/img/icones/desactive.png'
import imgParking from '../../../assets/img/icones/parking.png'
import imgVelo from '../../../assets/img/icones/velo.png'
import imgClimatisation from '../../../assets/img/icones/climatisation.png'
import { ReactElement } from 'react'

export default function(): ReactElement {
    return (
        <section className="coworking_equipment container">
            <h4>Salles / Équipement</h4>
            <div>
                <div><img src={imgCoworking} alt="" />Espace ouvert</div>
                <div><img src={imgPCPortable} alt="" />Bureaux individuels</div>
                <div><img src={imgReunion} alt="" />Salles de réunion</div>
                <div><img src={imgBouclier} alt="" />Bâtiment sécurisé</div>
                <div><img src={imgWifiRouter} alt="" />Wifi / Ethernet</div>
                <div><img src={imgImprimante} alt="" />Impression / Scan</div>
                <div><img src={imgCafe} alt="" />Espace détente</div>
                <div><img src={imgChef} alt="" />Espace repas</div>
                <div><img src={imgDesactive} alt="" />Accès handicapé</div>
                <div><img src={imgParking} alt="" />Parking</div>
                <div><img src={imgVelo} alt="" />Parking vélo</div>
                <div><img src={imgClimatisation} alt="" />Climatisation</div>
            </div>
        </section>        
    )
}