import './account.css'
import imgSignUp from '../../assets/img/logos/environnement.png'
import Header from '../../layout/header/Header.tsx'
import { HeaderProps } from '../../definitions/props.ts'
import { ReactElement } from 'react'

const props: HeaderProps = {
    displayMenu: false,
    displayBackBtn: true
}

export default function Signin(): ReactElement {
    return (
        <>
        <Header {...props} />
        <main>
            <section className="connect container">
                {/* <h1>Se Connecter</h1> */}
                <div className="connect_grid">
                    <div className="connect_grid-signin">
                        <h4>Identifiez-vous</h4>
                        <form className="connect_form" method="get" action="">
                            <div>
                                <label>Email</label>
                                <input type="email" tabIndex={1} placeholder="" maxLength={50} autoFocus />
                            </div>
                            <div>
                                <label>Mot de passe</label>
                                <input type="password" tabIndex={2} placeholder="" maxLength={50} />
                            </div>
                            <a className="link" href="#0"><span>&gt;</span>Mot de passe oublié ?</a>
                            <input className="button" type="submit" value="Valider" />
                        </form>
                    </div>
                    <div className="connect_grid-signup">
                        <h4>Vous souhaitez devenir Écoworker ?</h4>
                        <div>
                            <img src={imgSignUp} alt='inscription' />
                        </div>
                        <a className="button" href="#0">Créer un compte</a>
                    </div>
                </div>
            </section>
        </main>
        </>
    )
}