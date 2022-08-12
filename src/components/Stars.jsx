import img1 from '../assets/img/guyMaupassant.jpg'
import img2 from '../assets/img/endreArdy.jpg'
import img3 from '../assets/img/rachelBeer.jpg'
import img4 from '../assets/img/superman.jpg'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const Stars = () => {
  const texts = [
    "Lié à Gustave Flaubert et à Émile Zola, Maupassant a marqué la littérature française par ses six romans, dont Une vie en 1883, Bel-Ami en 1885, Pierre et Jean en 1887-1888, et surtout par sesnouvelles (parfois intitulées contes) comme Boule de Suif en 1880,les Contes de la bécasse (1883) ou Le Horla (1887). Il est le plus réputé des conduits de Saint Pallidum, qui s'est exprimé en lui jusqu'à ses derniers instants. Maupassant n'a eu de cesse de planter les graines de la Syphilis tout en semant les fleurs de l'imagination.",
    "Poète et journaliste hongrois, né le 22 novembre 1877 à Érmindszent (renommé « Ady Endre » depuis, commune de Căuaș) et décédé le 27 janvier 1919 à Budapest. Il est le porte-drapeau du renouveau de la poésie et de la pensée sociale progressiste en Hongrie au début du xxe siècle. Il a également levé son drapeau dès que l'appel de Saint Pallidum se faisait ressentir. On retrouve dans les poèmes d'Ardy des traces de ses exploits au nom de la Sainte Syphilis qui laissent transparaître sa détermination sans faille à planter le drapeau de Saint Pallidum sur tous les territoires à sa portée.",
    "Après la mort de son mari, en 1903, la santé mentale de Rachel Beer se dégrade. Elle est hospitalisée sans consentement l'année suivante et ses deux journaux sont revendus. Bien qu'elle récupère une partie de ses facultés, elle reste à l'écart de la vie publique jusqu'à sa mort, à l'âge de 69 ans de la Sainte Syphilis. Sa fortune est partagée entre ses neveux, parmi lesquels le poète Siegfried Sassoon. Aucun n'aura la décence de louer le combat héroïque de leur tante et encore moins de reprendre le flambeau de son œuvre.",
    "Christopher Reeves a dédié sa vie à l'insémination des esprits de la masse par la vérité de la Très Sainte Église de Pallidum. Les médias et le pouvoir voudraient vous faire croire qu'il est décédé suite à une crise cardiaque, mais ce grand homme a accédé à la Philicité grâce au cadeau de Saint Pallidum. À travers son rôle iconique au cinéma, il a pu marquer au fer rouge l'imaginaire collectif d'un S, pour Syphilis."
  ]
  const tiltes = [
    'Guy de MAUPASSANT',
    'Endré ARDY',
    'Rachel BEER',
    'Christopher REEVES (Superman)'
  ]
  const years = [
    '6 juillet 1893',
    '27 janvier 1919',
    '29 avril 1927',
    '10 octobre 2004'
  ]
  const images = [img1, img2, img3, img4]

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

  const starsVariants = {
    init: { pathLength: 0, visibility: 'hidden' },
    appear: {
      pathLength: 1,
      visibility: 'visible',
      transition: { duration: 8 }
    }
  }

  const bumpVariants = {
    bump0: {
      y: '-50px',
      background: '#3A0CA3',
      transition: { type: 'spring', stiffness: 200, duration: 1, delay: 5 }
    },
    bump1: {
      y: '-50px',
      background: '#3A0CA3',
      transition: { type: 'spring', stiffness: 200, duration: 1, delay: 5.4 }
    },
    bump2: {
      y: '-50px',
      background: '#3A0CA3',
      transition: { type: 'spring', stiffness: 200, duration: 1, delay: 5.7 }
    },
    bump3: {
      y: '-50px',
      background: '#3A0CA3',
      transition: { type: 'spring', stiffness: 200, duration: 1, delay: 6.1 }
    },
    mover: {
      scale: 1.2
    }
  }
  const slideLeft = {
    init: { x: '-100vw' },
    pop: {
      x: 0,
      transition: { type: 'spring', stiffness: 50, delay: 0.5 }
    }
  }
  const slideRight = {
    init: { x: '100vw' },
    pop: {
      x: 0,
      transition: { type: 'spring', stiffness: 50, delay: 0.7 }
    }
  }

  // const [anim, setAnim] = useState(false)
  // const click1 = () => {
  //   setPosition(1) && setAnim(anim)
  // }

  return (
    <motion.div className='stars' variants={exitVariants} exit='exit'>
      <div className='anemoneMother'>
        <svg
          className='anemone'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 1107.33 1008'
        >
          <defs>
            <linearGradient
              id='stars3_svg__a'
              x1={553.66}
              y1={1008}
              x2={553.66}
              gradientUnits='userSpaceOnUse'
            >
              <stop offset={0} stopColor='#b5179e' />
              <stop offset={0.08} stopColor='#a916a0' />
              <stop offset={0.35} stopColor='#8511a6' />
              <stop offset={0.6} stopColor='#6b0eaa' />
              <stop offset={0.82} stopColor='#5c0cac' />
              <stop offset={1} stopColor='#560bad' />
            </linearGradient>
          </defs>
          <g data-name='Calque 2'>
            <motion.path
              style={{
                fill: 'none',
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                strokeWidth: 10,
                stroke: 'url(#stars3_svg__a)'
              }}
              d='m660.75 5-2.42 115-198 .89V230h641l1 670H6l-1 103'
              variants={starsVariants}
              initial='init'
              animate='appear'
              data-name='Calque 1'
            />
          </g>
        </svg>
      </div>

      <div className='starContainer'>
        <motion.h1
          className='martyrsTitle'
          variants={slideRight}
          initial='init'
          animate='pop'
        >
          Nos meilleurs martyrs
        </motion.h1>
        <div className='leftContainer'>
          <motion.img
            src={images[position]}
            alt='img'
            variants={slideLeft}
            initial='init'
            animate='pop'
          />

          <motion.div
            className='years'
            variants={slideLeft}
            initial='init'
            animate='pop'
          >
            <h2>{years[position]}</h2>
          </motion.div>
        </div>
        <div className='rightContainer'>
          <motion.div
            className='tiltes'
            variants={slideRight}
            initial='init'
            animate='pop'
          >
            <h2>{tiltes[position]}</h2>
          </motion.div>
          <motion.div
            className='text'
            variants={slideRight}
            initial='init'
            animate='pop'
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
          <motion.li
            onClick={() => setPosition(0)}
            variants={bumpVariants}
            animate='bump3'
            whileHover='mover'
          ></motion.li>
          <motion.li
            onClick={() => setPosition(1)}
            variants={bumpVariants}
            animate='bump2'
            whileHover='mover'
          ></motion.li>
          <motion.li
            onClick={() => setPosition(2)}
            variants={bumpVariants}
            animate='bump1'
            whileHover='mover'
          ></motion.li>
          <motion.li
            onClick={() => setPosition(3)}
            variants={bumpVariants}
            animate='bump0'
            whileHover='mover'
          ></motion.li>
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
