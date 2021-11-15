import milkBottlesImg from '../../assets/mobile/image-gallery-milkbottles.jpg'
import orangeImg from '../../assets/mobile/image-gallery-orange.jpg'
import coneImg from '../../assets/mobile/image-gallery-cone.jpg'
import sugarCubesImg from '../../assets/mobile/image-gallery-sugar-cubes.jpg'

import './styles.scss'
export function Grid(){
    return(
        <section className="section-grid">
            <img src={milkBottlesImg} alt="Milk Bottles" />
            <img src={orangeImg}alt="Orange" />
            <img src={coneImg} alt="Cone" />
            <img src={sugarCubesImg} alt="Sugar Cubes" />
        </section>
    )
}