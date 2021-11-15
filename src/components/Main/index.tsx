import { Members } from '../Members'

import ovoImg from '../../assets/mobile/image-transform.jpg'
import cupImg from '../../assets/mobile/image-stand-out.jpg'
import acerolaImg from '../../assets/mobile/image-graphic-design.jpg'

import './styles.scss'
import { Grid } from '../Grid'


export function Main(){
    return(
        <main>
            <section className="section-main">
                <img src={ovoImg} alt="" />
                <div className="container">
                    
                        <h2>Transform your brand</h2>
                        <p>We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you.</p>
                        <a href="#">
                          LEARN MORE  
                        </a>

                </div>
            </section>

            <section className="section-main">
                <img src={cupImg} alt="" />
                <div className="container">
                    
                        <h2>Stand out to the right audience</h2>
                        <p>Using a collaborative formula of designers, researches, photographers, videographers, and copywriters, we'll build and extend you bran digital places</p>
                        <a href="#">
                          LEARN MORE  
                        </a>

                </div>
            </section>

            <section className="section-secondary">
                <div className="container">
                    
                        <h2>Graphic Design</h2>
                        <p>Greate design makes you memorable. We deliver artwork that underscores your brand message and captures potentials client's attention.</p>

                </div>
            </section>

            <section className="section-secondary orange">
                <div className="container">
                    
                        <h2>Graphic Design</h2>
                        <p>Greate design makes you memorable. We deliver artwork that underscores your brand message and captures potentials client's attention.</p>

                </div>
            </section>

            <Members />
            <Grid />


        </main>

    )
}