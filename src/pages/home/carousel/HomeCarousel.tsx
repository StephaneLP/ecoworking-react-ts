import './homeCarousel.css'
import { ReactElement } from 'react'

export default function HomeCarousel(): ReactElement {
    return (
        <section className='home-carousel'>
            <button className='carousel_btn carousel_btnPrev'>
                <span>&lt;</span>
            </button>
            <div className='carousel_center'>
                <div className='carousel_infos'>
                    <div>
                        <p className='carousel_infos-title'></p>
                        <p className='carousel_infos-subtitle'></p>                        
                    </div>
                </div>                
                <div className='carousel_nav'>
                </div>
            </div>
            <button className='carousel_btn carousel_btnNext'>
                <span>&gt;</span>
            </button>
        </section>
    )
}