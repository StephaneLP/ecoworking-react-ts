import Header from '../../layout/header/Header.tsx'
import Footer from '../../layout/footer/Footer.tsx'
import HomeCarousel from './carousel/HomeCarousel.tsx'
import HomePresentation from './presentation/HomePresentation.tsx'
import HomeSelection from './selection/HomeSelection.tsx'

import { HeaderProps } from '../../definitions/props.ts'
import { ReactElement, useEffect } from "react"

const props: HeaderProps = {
    displayMenu: true,
    displayBackBtn: false
}

export default function Home(): ReactElement {
    useEffect(() => window.scrollTo(0, 0), [])

    return (
        <>
        <Header {...props} />
        <main>
            <HomeCarousel />
            <HomePresentation />
            <HomeSelection />
        </main>
        <Footer />
        </>
    )
}