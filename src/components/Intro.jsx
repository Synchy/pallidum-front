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
    </div>
  )
}

export default Intro
