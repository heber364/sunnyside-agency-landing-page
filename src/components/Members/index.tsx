import emilyImg from '../../assets/image-emily.jpg'
import thomasImg from '../../assets/image-thomas.jpg'
import jennieImg from '../../assets/image-jennie.jpg'

import './styles.scss'
export function Members(){
    return(
        <section className="section-members">
            <h2 className="title-clients">CLIENT TESTIMONIALS</h2>
            <div className="member">
                <img src={emilyImg} alt="Emily R." />
                <p>We put our trust in Sunnyside and they delivered, making sure our need wew met and deadlines were always hit</p>
                <div>
                    <span> Emily R.</span>
                    <span>Marketing Derector</span>
                </div>
            </div>

            <div className="member">
                <img src={thomasImg} alt= "Thomas F." />
                <p>We put our trust in Sunnyside and they delivered, making sure our need wew met and deadlines were always hit</p>
                <div>
                    <span> Thomas F.</span>
                    <span>Chief Operating Officer</span>
                </div>
            </div>

            <div className="member">
                <img src={jennieImg} alt="Jennie F." />
                <p>We put our trust in Sunnyside and they delivered, making sure our need wew met and deadlines were always hit</p>
                <div>
                    <span>Jennie F.</span>
                    <span>Business Owner</span>
                </div>
            </div>

        </section>
    )
}