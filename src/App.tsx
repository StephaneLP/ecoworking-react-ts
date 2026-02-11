/* Import des composants : Accueil et Recherche avancée */
import Home from './pages/home/Home.tsx'
import Signin from './pages/account/Signin.tsx'
import Coworking from './pages/coworking/Coworking.tsx'

/* Import des Hooks & composants react-rooter */
import { BrowserRouter, Routes, Route } from "react-router-dom"

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/signin' element={<Signin />} />
                <Route path='/coworking' element={<Coworking />} />
            </Routes>
        </BrowserRouter>
    )
}
