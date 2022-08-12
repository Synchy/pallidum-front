import { motion } from 'framer-motion'

const Chronology = () => {
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
        delay: 1.9
      }
    },
    card3: {
      opacity: 1,
      transition: {
        duration: 0.8,
        delay: 2.4
      }
    },
    card4: {
      opacity: 1,
      transition: {
        duration: 0.8,
        delay: 3.1
      }
    }
  }
  return (
    <>
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
                <h3 className='date'>3rd May, 2022</h3>
                <h1>Revelation</h1>
                <p>
                  Nostradamus avait vu des entités lui annoncer la fin du monde.
                  <br></br>Dieu lui a sussuré que cette fin pourrait être bien
                  plus douce si la luxure s'invitait dans les chaumières.
                </p>
              </div>
            </motion.li>
            <motion.li variants={onOff} initial='hidden' animate='card2'>
              <div className='pointEven'></div>
              <div className='timeline-content'>
                <h3 className='date'>1st June, 2022</h3>
                <h1>Libération</h1>
                <p>
                  Les Elus se sont réunis et partagent leurs Savoirs. Des voix
                  Divines ont appelé le Prophète à s'annoncer parmis les Elus.
                </p>
              </div>
            </motion.li>
            <motion.li variants={onOff} initial='hidden' animate='card3'>
              <div className='pointOdd'></div>
              <div className='timeline-content'>
                <h3 className='date'>24th July, 2022</h3>
                <h1>Epanouissement</h1>
                <p>
                  Il propage sa Sainte Parole et invite chacun à partager
                  l'Idylle d'une fin d'existence paisible, heureuse et remplie
                  d'Amour Universel envers la Terre nourricière.
                </p>
              </div>
            </motion.li>
            <motion.li variants={onOff} initial='hidden' animate='card4'>
              <div className='pointEven'></div>
              <div className='timeline-content'>
                <h3 className='date'>1st August, 2022</h3>
                <h1>Renaissance</h1>
                <p>
                  L'Ascension par le Toucher, c'est atteindre le Divin. La
                  renaissance auprès du Sauveur est toute proche. Ceux qui ont
                  eu le courage de suivre les Paroles du Prophète sont
                  sanctifiés.
                </p>
              </div>
            </motion.li>
          </ul>
        </div>
      </div>
    </>
  )
}
export default Chronology
