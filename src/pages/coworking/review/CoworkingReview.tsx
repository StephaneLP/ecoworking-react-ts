import './coworkingReview.css'
import imgUser from '../../../assets/img/users/utilisateur.png'
import { ReactElement } from 'react'

export default function CoworkingReview(): ReactElement {
    return (
        <section className="coworking_avis container">
            <h4>Avis</h4>
            <div className="avis-moyenne">
                <div className="libelle">Très Bien :</div>
                <div className="etoiles">
                    <div className="etoile-active"></div>
                    <div className="etoile-active"></div>
                    <div className="etoile-active"></div>
                    <div className="etoile-active"></div>
                    <div className="etoile-active"></div>       
                </div>
                <div className="note">(4.7 / 5)</div>
            </div>
            <div className="avis-liste">
                <div className="avis">
                    <div className="avis-header">
                        <div className="avis-header-left">
                            <img src={imgUser} alt='' />
                            <div>
                                <span className="pseudo">Darl025</span>
                                <div className="date">25 Janvier 2024</div>
                            </div>
                        </div>
                        <div className="etoiles">
                            <div className="etoile-active"></div>
                            <div className="etoile-active"></div>
                            <div className="etoile-active"></div>
                            <div className="etoile-active"></div>
                            <div className="etoile-active"></div>
                        </div>
                    </div>
                    <p className="commentaire">
                        Aenean venenatis tortor ut condimentum commodo. Phasellus rutrum odio dui, ut congue risus vehicula et.
                        Quisque at nibh tortor. Suspendisse maximus arcu sit amet libero convallis, a vehicula lectus tempor.
                        Curabitur auctor convallis turpis, non sagittis tellus pretium nec.
                        Cras bibendum enim eget pulvinar condimentum. Proin volutpat hendrerit leo, et tempus orci tincidunt nec.
                    </p>
                </div>
                <div className="avis">
                    <div className="avis-header">
                        <div className="avis-header-left">
                            <img src={imgUser} alt='' />
                            <div>
                                <span className="pseudo">AlanDoo</span>
                                <div className="date">25 Janvier 2024</div>
                            </div>
                        </div>
                        <div className="etoiles">
                            <div className="etoile-active"></div>
                            <div className="etoile-active"></div>
                            <div className="etoile-active"></div>
                            <div className="etoile-active"></div>
                            <div></div>
                        </div>
                    </div>
                    <p className="commentaire">
                        Integer eleifend tortor eu lacus tristique, non maximus diam aliquam. Mauris eu lorem velit. 
                        Donec fringilla, neque ut rhoncus efficitur, massa urna tincidunt nunc, eget gravida magna dui ac nunc. 
                        Vivamus elementum consectetur enim non luctus. 
                    </p>
                </div>
                <div className="avis">
                    <div className="avis-header">
                        <div className="avis-header-left">
                            <img src={imgUser} alt='' />
                            <div>
                                <span className="pseudo">AliceMarvel</span>
                                <div className="date">25 Janvier 2024</div>
                            </div>
                        </div>
                        <div className="etoiles">
                            <div className="etoile-active"></div>
                            <div className="etoile-active"></div>
                            <div className="etoile-active"></div>
                            <div className="etoile-active"></div>
                            <div className="etoile-active"></div>
                        </div>
                    </div>
                    <p className="commentaire">
                        Donec fringilla, neque ut rhoncus efficitur, massa urna tincidunt nunc, eget gravida magna dui ac nunc. 
                        Vivamus elementum consectetur enim non luctus. 
                    </p>
                </div>
                <div className="avis">
                    <div className="avis-header">
                        <div className="avis-header-left">
                            <img src={imgUser} alt='' />
                            <div>
                                <span className="pseudo">Luis2560</span>
                                <div className="date">25 Janvier 2024</div>
                            </div>
                        </div>
                        <div className="etoiles">
                            <div className="etoile-active"></div>
                            <div className="etoile-active"></div>
                            <div className="etoile-active"></div>
                            <div className="etoile-active"></div>
                            <div className="etoile-active"></div>
                        </div>
                    </div>
                    <p className="commentaire">
                        Proin in mattis urna. Praesent faucibus eu leo id tempus. 
                        Fusce ornare arcu purus, nec faucibus velit rhoncus quis. 
                        Integer commodo scelerisque neque, at feugiat leo interdum molestie. 
                    </p>
                </div>
                <div className="avis">
                    <div className="avis-header">
                        <div className="avis-header-left">
                            <img src={imgUser} alt='' />
                            <div>
                                <span className="pseudo">AstroMecano</span>
                                <div className="date">25 Janvier 2024</div>
                            </div>
                        </div>
                        <div className="etoiles">
                            <div className="etoile-active"></div>
                            <div className="etoile-active"></div>
                            <div className="etoile-active"></div>
                            <div className="etoile-active"></div>
                            <div></div>
                        </div>
                    </div>
                    <p className="commentaire">
                        Duis sit amet iaculis leo. Aenean eros mi, tristique ut justo porta, volutpat ultricies arcu. 
                        Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. 
                        Morbi faucibus laoreet rhoncus. Morbi a ex sodales, tincidunt ex sed, laoreet quam. Duis fringilla, 
                        massa vel varius tincidunt, leo metus dapibus purus, non rhoncus nisi purus vitae nunc. 
                        Aenean hendrerit, nibh et auctor pellentesque, erat risus blandit leo, eget sollicitudin eros urna vitae ligula. 
                        Aliquam vitae luctus nibh.
                    </p>
                </div>
                <div className="avis">
                    <div className="avis-header">
                        <div className="avis-header-left">
                            <img src={imgUser} alt='' />
                            <div>
                                <span className="pseudo">Donut2</span>
                                <div className="date">25 Janvier 2024</div>
                            </div>
                        </div>
                        <div className="etoiles">
                            <div className="etoile-active"></div>
                            <div className="etoile-active"></div>
                            <div className="etoile-active"></div>
                            <div className="etoile-active"></div>
                            <div className="etoile-active"></div>
                        </div>
                    </div>
                    <p className="commentaire">
                        Ut laoreet sed mi sed pharetra. Morbi dapibus nulla vestibulum accumsan ultrices. 
                        Suspendisse vestibulum orci sed turpis fermentum, vitae finibus mi tempor. 
                        Aliquam imperdiet dolor vel ex congue scelerisque. 
                    </p>
                </div>
            </div>
        </section>        
    )
}