import { ReactElement, useState } from "react"
import Header from '../../layout/header/Header.tsx'
import Footer from '../../layout/footer/Footer.tsx'
import DisplayNb from "./DisplayNb.tsx"

import { HeaderProps } from '../../definitions/props.ts'

const props: HeaderProps = {
    displayMenu: false,
    displayBackBtn: false
}

export default function Test(): ReactElement {
    const [add, setAdd] = useState(1)
    const [bool, setBool] = useState(true)

console.log('parent')

    const handleAddClick = () => {
        // setAdd(add + 1)
        // if (bool) {
            // const a = 1
            // const [b, setB] = useState(1)
        // }
        for (let i=0; i<add+1; i++) {
            setAdd(add + i)
        }
        setBool(!bool)
    }

    return (
        <>
        <Header {...props} />
        <main style={{padding:'50px'}}>
            {/* <div className='add' style={{width:'50px', padding: '2px', border:'1px solid grey'}}>{ add }</div> */}
            <DisplayNb add={add} bool={bool} />
            <button id='btnAdd' className='button'style={{width:'100px'}} onClick={handleAddClick}>+</button>
        </main>
        <Footer />
        </>
    )
}