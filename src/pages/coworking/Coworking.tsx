import './coworking.css'
import Header from '../../layout/header/Header.tsx'
import Footer from '../../layout/footer/Footer.tsx'
import CoworkingPresentation from './presentation/CoworkingPresentation.tsx'
import CoworkingInfos from './infos/CoworkingInfos.tsx'
import CoworkingEquipment from './equipment/CoworkingEquipment.tsx'
import CoworkingReview from './review/CoworkingReview.tsx'

import { HeaderProps } from '../../definitions/props.ts'
import { ReactElement, useEffect } from "react"

const props: HeaderProps = {
    displayMenu: true,
    displayBackBtn: false
}

export default function Coworking(): ReactElement {
    useEffect(() => window.scrollTo(0, 0), [])

    return (
        <>
        <Header {...props} />
        <main className='coworking'>
            <CoworkingPresentation />
            <div className="alternative-bg-color">
                <CoworkingInfos />
                <CoworkingEquipment />
            </div>
            <CoworkingReview />
        </main>
        <Footer />
        </>
    )
}