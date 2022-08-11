import img1 from '../assets/img/guyMaupassant.jpg'
import img2 from '../assets/img/guyMaupassant.jpg'
import img3 from '../assets/img/guyMaupassant.jpg'
import arrow from '../assets/img/arrow.svg'

const Stars = () => {
  return (
    <div className='stars'>
      <div className='starContainer'>
        <div className='leftContainer'>
          <img src={img1} alt='Guy' />
          <div className='years'>
            <h2>6 juillet 1893</h2>
          </div>
        </div>
        <div className='rightContainer'>
          <div className='tiltes'>
            <h2>Guy de MAUPASSANT</h2>
          </div>
          <div className='text'>
            <p>
              Lié à Gustave Flaubert et à Émile Zola, Maupassant a marqué la
              littérature française par ses six romans, dont Une vie en 1883,
              Bel-Ami en 1885, Pierre et Jean en 1887-1888, et surtout par ses
              nouvelles (parfois intitulées contes) comme Boule de Suif en 1880,
              les Contes de la bécasse (1883) ou Le Horla (1887). Ces œuvres
              retiennent l’attention par leur force réaliste, la présence
              importante du fantastique et par le pessimisme qui s’en dégage le
              plus souvent, mais aussi par la maîtrise stylistique. La carrière
              littéraire de Maupassant se limite à une décennie de 1880 à 1890
              avant qu’il ne sombre peu à peu dans la folie et ne meure peu
              avant l'âge de 43 ans. Reconnu de son vivant, il conserve un renom
              de premier plan, renouvelé encore par les nombreuses adaptations
              cinématographiques de ses œuvres3
            </p>
          </div>
        </div>
      </div>
      <div className='navStars'>
        <div className='actions'>
          <div className='left'>
            <img src={arrow} alt='arrow left' />
          </div>
          <div className='right'>
            <img src={arrow} alt='arrow right' />
          </div>
        </div>
        <ul className='stepper'>
          <li>
            <div className='line'></div>
          </li>
          <li>
            <div className='line'></div>
          </li>
          <li>
            <div className='line'></div>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Stars
