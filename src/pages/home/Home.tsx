import Header from '../../layout/header/Header.tsx'
import Footer from '../../layout/footer/Footer.tsx'

import { useEffect } from "react"

export default function Home() {
    useEffect(() => window.scrollTo(0, 0), [])

    return (
        <>
        <Header />
        <main>
            TEST
        </main>
        <Footer />
        </>
    )
}