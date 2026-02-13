import { ReactElement, useState } from "react"
import Header from '../../layout/header/Header.tsx'
import Footer from '../../layout/footer/Footer.tsx'
import { HeaderProps } from '../../definitions/props.ts'

const props: HeaderProps = {
    displayMenu: false,
    displayBackBtn: false
}

export default function Test(): ReactElement {
    const el = document.querySelector('.add')

    // const [add, setAdd] = useState(0)
    let a=0

    const handleAddClick = () => {
        if (el) el.innerHTML = String(a)
        a+=1
        // setAdd(n => n + 1)
    }

    return (
        <>
        <Header {...props} />
        <main style={{padding:'50px'}}>
            <div className='add' style={{width:'50px', padding: '2px', border:'1px solid grey'}}></div>
            <button id='btnAdd' className='button'style={{width:'50px'}} onClick={handleAddClick}>+</button>
        </main>
        <Footer />
        </>
    )
}