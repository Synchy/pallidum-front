import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const Chronology = () => {
  const exitVariants = {
    exit: { y: '-100vh', transition: { ease: 'easeInOut' } }
  }
  const onOff = {
    hidden: { opacity: 0 },
    card1: {
      opacity: 1,
      transition: {
        duration: 0.8,
        delay: 0.8
      }
    },
    card2: {
      opacity: 1,
      transition: {
        duration: 0.8,
        delay: 1.65
      }
    },
    card3: {
      opacity: 1,
      transition: {
        duration: 0.8,
        delay: 2.15
      }
    },
    card4: {
      opacity: 1,
      transition: {
        duration: 0.8,
        delay: 2.8
      }
    }
  }

  return (
    <motion.div variants={exitVariants} exit='exit'>
      <div className='sly'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 10 998'
          className='comete'
        >
          <defs>
            <linearGradient
              id='svgchrono_svg__a'
              x1={5}
              x2={5}
              y2={998}
              gradientUnits='userSpaceOnUse'
            >
              <stop offset={0} stopColor='#b5179e' />
              <stop offset={1} stopColor='#560bad' />
            </linearGradient>
          </defs>
          <g data-name='Calque 2'>
            <motion.path
              style={{
                fill: 'none',
                strokeLinejoin: 'round',
                strokeWidth: 10,
                stroke: 'url(#svgchrono_svg__a)'
              }}
              d='M5 0v998'
              initial={{ visibility: 'hidden', pathLength: 0 }}
              animate={{ visibility: 'visible', pathLength: 1 }}
              transition={{ duration: 4.5 }}
              data-name='Calque 1'
            />
          </g>
        </svg>
      </div>
      <div className='container'>
        <div className='timeline'>
          <ul>
            <motion.li variants={onOff} initial='hidden' animate='card1'>
              <div className='pointOdd'></div>
              <div className='timeline-content'>
                <h3 className='date1'>3 mai 1547</h3>
                <h1>Revelation</h1>
                <p>
                  Nostradamus perçoit la fin du monde dans ses visions.
                  <br />
                  Saint Pallidum lui apparait pour lui signifier que de la
                  luxure découle le salut.
                </p>
              </div>
            </motion.li>
            <motion.li variants={onOff} initial='hidden' animate='card2'>
              <div className='pointEven'></div>
              <div className='timeline-content'>
                <h3 className='date1'>1er juin 1751</h3>
                <h1>Contrition</h1>
                <p>
                  Des voix Divines visitent les rêves de Napoléon et lui
                  commandent l'érection d'une Cathédrale de Pallidum. Il
                  décidera d'ignorer le Saint Appel et finira de la manière que
                  l'on sait.
                </p>
              </div>
            </motion.li>
            <motion.li variants={onOff} initial='hidden' animate='card3'>
              <div className='pointOdd'></div>
              <div className='timeline-content'>
                <h3 className='date1'>24 juillet 1905</h3>
                <h1>Épanouissement</h1>
                <p>
                  Saint Pallidum propage son Saint Cadeau et invite chacun à
                  partager l'Idylle d'une fin d'existence paisible, heureuse et
                  remplie d'Amour Universel. Peu répondent à l'appel.
                </p>
              </div>
            </motion.li>
            <motion.li variants={onOff} initial='hidden' animate='card4'>
              <div className='pointEven'></div>
              <div className='timeline-content'>
                <h3 className='date1'>Été 2022</h3>
                <h1>Renaissance</h1>
                <p>
                  Saint Pallidum multiplie les épisodes caniculaires afin de
                  précipiter le Grand Déshabillement, qui précédera l'Ultime
                  Communion, au cours de laquelle la Sainte Syphilis sera avalée
                  par tous et toutes.
                </p>
              </div>
            </motion.li>
          </ul>
        </div>
        <Link to='/info'>
          <div className='back'></div>
        </Link>
        <Link to='/stars'>
          <div className='next'></div>
        </Link>
      </div>
    </motion.div>
  )
}
export default Chronology
