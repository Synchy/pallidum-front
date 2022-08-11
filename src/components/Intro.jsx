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

// const pathVariants = {
//   hidden: {
//     pathLength: 0,
//     opacity: 0
//   },
//   visible: {
//     opacity: 1,
//     pathlength: [0, 1],
//     transition: { duration: 10 }
//   }
// }

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

      {/* <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 219.94 1126'
        className='gaetan'
      >
        <defs>
          <style>
            {
              '.Logo_svg__cls-1,.Logo_svg__cls-2{fill:none;stroke:#B5179E;stroke-linecap:round;stroke-width:10px}.Logo_svg__cls-1{stroke-linejoin:round}.Logo_svg__cls-2{stroke-miterlimit:10}'
            }
          </style>
        </defs>
        <g id='Logo_svg__Calque_2' data-name='Calque 2'>
          <g id='Logo_svg__Calque_1-2' data-name='Calque 1'>
            <motion.path
              className='Logo_svg__cls-1'
              d='M5 5v265.89a5 5 0 0 0 8.56 3.55L89.5 198.5'
              fill='none'
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 2, delay: 23 }}
            />
            <motion.path
              className='Logo_svg__cls-2'
              d='m38.41 283 85.27-85.27M70.36 283l85.05-85.05M101.58 283l85.21-85.21'
              fill='none'
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 2, delay: 24.5 }}
            />
            <motion.path
              className='Logo_svg__cls-1'
              d='m131 283 75.7-75.69a4.81 4.81 0 0 1 8.22 3.4V1121'
              fill='none'
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 3, delay: 25 }}
            />
          </g>
        </g>
      </svg> */}
    </div>
  )
}

export default Intro
