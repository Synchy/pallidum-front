import { motion } from 'framer-motion'

import cloud1 from '../assets/img/Syphilis4.png'
import cloud2 from '../assets/img/Syphilis3.png'

const titleVariants = {
  initial: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 5,
      delay: 20.5
    }
  },
  visible2: {
    opacity: [0, 1, 0],
    transition: {
      duration: 5,
      delay: 3.5
    }
  },
  visible3: {
    opacity: [0, 1, 0],
    transition: {
      duration: 5,
      delay: 9.5
    }
  },
  visible4: {
    opacity: [0, 1, 0],
    transition: {
      duration: 5,
      delay: 15.5
    }
  }
}

const cloudVariants = {
  awayRight: {
    x: ['100vw', '20vw'],
    transition: { ease: 'easeInOut', yoyo: 7, duration: 3, times: [0.1, 0.9] }
  },
  awayLeft: {
    x: ['-100vw', '-20vw'],
    transition: { ease: 'easeInOut', yoyo: 7, duration: 3, times: [0.1, 0.9] }
  }
}

const pathVariants = {
  hidden: {
    pathLength: 0,
    opacity: 0
  },
  visible1: {
    opacity: 1,
    pathLength: 1,
    transition: {
      ease: 'easeInOut',
      duration: 3,
      delay: 23
    }
  },
  visible2: {
    opacity: 1,
    pathLength: 1,
    transition: {
      ease: 'easeInOut',
      duration: 2,
      delay: 25
    }
  },
  visible3: {
    opacity: 1,
    pathLength: 1,
    transition: {
      ease: 'easeInOut',
      duration: 2,
      delay: 25.5
    }
  },
  visible4: {
    opacity: [0, 1],
    pathLength: 1,
    transition: {
      ease: 'easeInOut',
      duration: 6,
      times: [0.2, 0.8],
      delay: 25
    }
  }
}

const Intro = () => {
  return (
    <div className='intro'>
      <div className='cloudsContainer'>
        <motion.img
          src={cloud1}
          variants={cloudVariants}
          initial={{ x: '20vw' }}
          animate='awayRight'
          alt='nuage'
          className='cloud'
          id='cloud1'
        />
        <motion.img
          src={cloud2}
          variants={cloudVariants}
          initial={{ x: '-20vw' }}
          animate='awayLeft'
          alt='nuage'
          className='cloud'
          id='cloud2'
        />
        <motion.img
          src={cloud2}
          variants={cloudVariants}
          animate='awayRight'
          alt='nuage'
          className='cloud'
          id='cloud2'
        />
      </div>
      <div className='titleContainer'>
        <motion.h1
          className='title'
          variants={titleVariants}
          initial='initial'
          animate='visible'
        >
          Pallidum
        </motion.h1>
      </div>
      <motion.h2 variants={titleVariants} initial='initial' animate='visible2'>
        Le monde dépérit
      </motion.h2>
      <motion.h2 variants={titleVariants} initial='initial' animate='visible3'>
        En cause : la surpopulation
      </motion.h2>
      <motion.h2 variants={titleVariants} initial='initial' animate='visible4'>
        Voici votre salut
      </motion.h2>

      <div className='gaetanFather'>
        <div className='gaetanMother'>
          <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1595 1017'>
            <defs>
              <linearGradient
                id='grad'
                x1={837.03}
                y1={202.96}
                x2={837.03}
                y2={1017}
                gradientUnits='userSpaceOnUse'
              >
                <stop offset={0} stopColor='#b5179e' />
                <stop offset={0.31} stopColor='#8c12a4' />
                <stop offset={0.59} stopColor='#6f0ea9' />
                <stop offset={0.83} stopColor='#5c0cac' />
                <stop offset={1} stopColor='#560bad' />
              </linearGradient>
              <style>
                {
                  '.Logohp_svg__cls-1{fill:none;stroke-linecap:round;stroke-width:10px;stroke:#b5179e;stroke-linejoin:round}'
                }
              </style>
            </defs>
            <g id='Logohp_svg__Calque_2' data-name='Calque 2'>
              <g id='Logohp_svg__Calque_1-2' data-name='Calque 1'>
                <motion.path
                  className='Logohp_svg__cls-1'
                  d='M5 5v272.08a4.52 4.52 0 0 0 7.72 3.2L90 203'
                  variants={pathVariants}
                  initial='hidden'
                  animate='visible1'
                />
                <motion.path
                  style={{
                    strokeMiterlimit: 10,
                    stroke: '#b5179e',
                    fill: 'none',
                    strokeLinecap: 'round',
                    strokeWidth: 10
                  }}
                  d='m30.26 288 85.87-85.87'
                  variants={pathVariants}
                  initial='hidden'
                  animate='visible2'
                />
                <motion.path
                  className='Logohp_svg__cls-1'
                  d='m56.96 288 86.11-86.11'
                  variants={pathVariants}
                  initial='hidden'
                  animate='visible3'
                />
                <motion.path
                  d='m84.05 288 79.43-79.43A2.08 2.08 0 0 1 167 210v724.92a2.08 2.08 0 0 0 2.1 2.08h1418.82a2.08 2.08 0 0 1 2.08 2.08V1012'
                  variants={pathVariants}
                  initial='hidden'
                  animate='visible4'
                  style={{
                    stroke: 'url(#grad)',
                    strokeLinejoin: 'round',
                    fill: 'none',
                    strokeLinecap: 'round',
                    strokeWidth: 10
                  }}
                />
              </g>
            </g>
          </svg>
        </div>
      </div>
    </div>
  )
}

export default Intro
