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
      duration: 1,
      delay: 1
    }
  }
}

const cloudVariants = {
  awayRight: {
    x: '100vw',
    transition: { ease: 'easeInOut', duration: 3 }
  },
  awayLeft: {
    x: '-100vw',
    transition: { ease: 'easeInOut', duration: 3 }
  }
}

const Intro = () => {
  return (
    <div className='intro'>
      <div className='cloudsContainer'>
        <motion.img
          src={cloud1}
          variants={cloudVariants}
          animate='awayRight'
          alt='nuage'
          className='cloud'
          id='cloud1'
        />
        <motion.img
          src={cloud2}
          variants={cloudVariants}
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
    </div>
  )
}

export default Intro
