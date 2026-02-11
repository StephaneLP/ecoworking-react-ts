import './footer.css'
import imgLogo from '../../assets/img/logos/logo.png'

export default function Footer() {
    return(
        <footer>
            <div className="banner container">
                <img src={imgLogo} alt="logo" />
                <span>© Stéphane Le Pajolec - 2024</span>
            </div>
        </footer>
    )
}