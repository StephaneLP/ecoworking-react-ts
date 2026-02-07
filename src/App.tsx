/* Import des composants : Accueil et Recherche avancée */
import Home from './pages/home/Home.tsx'

/* Import des Hooks & composants react-rooter */
import { BrowserRouter, Routes, Route } from "react-router-dom"

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
            </Routes>
        </BrowserRouter>
    )
}
