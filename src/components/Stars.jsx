import img1 from '../assets/img/guyMaupassant.jpg'
import img2 from '../assets/img/endreArdy.jpg'
import img3 from '../assets/img/rachelBeer.jpg'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const Stars = () => {
  const texts = [
    'Lié à Gustave Flaubert et à Émile Zola, Maupassant a marqué la littérature française par ses six romans, dont Une vie en 1883, Bel-Ami en 1885, Pierre et Jean en 1887-1888, et surtout par sesnouvelles (parfois intitulées contes) comme Boule de Suif en 1880,les Contes de la bécasse (1883) ou Le Horla (1887).',
    'Poète et journaliste hongrois, né le 22 novembre 1877 à Érmindszent (renommé « Ady Endre » depuis, commune de Căuaș) et décédé le 27 janvier 1919 à Budapest. Il est le porte-drapeau du renouveau de la poésie et de la pensée sociale progressiste en Hongrie au début du xxe siècle.',
    "Après la mort de son mari, en 1903, sa santé mentale se dégrade. Elle est hospitalisée sans consentement l'année suivante et ses deux journaux sont revendus. Bien qu'elle récupère une partie de ses facultés, elle reste à l'écart de la vie publique jusqu'à sa mort, à l'âge de 69 ans de la syphilis probablement contaminée par son mari2. Sa fortune est partagée entre ses neveux, parmilesquels le poète Siegfried Sassoon1."
  ]
  const tiltes = ['Guy de MAUPASSANT', 'Endré ARDY', 'Rachel BEER']
  const years = ['6 juillet 1893', '27 janvier 1919', '29 avril 1927']
  const images = [img1, img2, img3]

  const [position, setPosition] = useState(0)
  const exitVariants = {
    exit: { y: '-100vh', transition: { ease: 'easeInOut' } }
  }

  // const next = () => {
  //   setPosition(para => para + 1)
  // }
  // const back = () => {
  //   setPosition(para => para - 1)
  // }
  return (
    <motion.div className='stars' variants={exitVariants} exit='exit'>
      <div className='starContainer'>
        <div className='leftContainer'>
          <motion.img
            src={images[position]}
            alt='img'
            initial={{ y: '-100vh' }}
            animate={{ y: 0 }}
            transition={{ type: 'spring', stiffness: 50 }}
          />

          <motion.div
            className='years'
            initial={{ x: '-100vw' }}
            animate={{ x: 0 }}
            transition={{ type: 'spring', stiffness: 50 }}
          >
            <h2>{years[position]}</h2>
          </motion.div>
        </div>
        <div className='rightContainer'>
          <motion.div
            className='tiltes'
            initial={{ x: '100vh' }}
            animate={{ x: 0 }}
            transition={{ type: 'spring', stiffness: 50, delay: 0.25 }}
          >
            <h2>{tiltes[position]}</h2>
          </motion.div>
          <motion.div
            className='text'
            initial={{ y: '100vw' }}
            animate={{ y: 0 }}
            transition={{
              type: 'spring',
              stiffness: 50,
              delay: 0.5
            }}
          >
            {texts[position]}
          </motion.div>
        </div>
      </div>
      <div className='navStars'>
        {/* <div className='actions'>
          <div className='left' onClick={back}>
            <img src={arrow} alt='arrow left' />
          </div>
          <div className='right' onClick={next}>
            <img src={arrow} alt='arrow right' />
          </div>
        </div> */}
        <ul className='stepper'>
          <li onClick={() => setPosition(0)}></li>
          <li onClick={() => setPosition(1)}></li>
          <li onClick={() => setPosition(2)}></li>
        </ul>
      </div>
      <Link to='/chronologie'>
        <div className='back'></div>
      </Link>
      <Link to='/evenements'>
        <div className='next'></div>
      </Link>
    </motion.div>
  )
}

export default Stars
