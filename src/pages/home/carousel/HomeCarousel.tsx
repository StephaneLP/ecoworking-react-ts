import './homeCarousel.css'
import { ReactElement } from 'react'

export default function HomeCarousel(): ReactElement {
    return (
        <section className='home-carousel'>
            <button className='home-carousel_btn home-carousel_btnPrev'>
                <span>&lt;</span>
            </button>
            <div className='home-carousel_center'>
                <div className='home-carousel_infos'>
                    <div>
                        <p className='home-carousel_infos-title'></p>
                        <p className='home-carousel_infos-subtitle'></p>                        
                    </div>
                </div>                
                <div className='home-carousel_nav'>
                </div>
            </div>
            <button className='home-carousel_btn home-carousel_btnNext'>
                <span>&gt;</span>
            </button>
        </section>
    )
}