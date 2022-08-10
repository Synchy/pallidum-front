import React from 'react'
import { motion } from 'framer-motion'

const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: i => {
    const delay = 0.5 + i * 0.5
    return {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { delay, type: 'spring', duration: 25, bounce: 0 },
        opacity: { delay, duration: 0.01 }
      }
    }
  }
}

const Home = () => {
  return (
    <div className='Home'>
      <h1>Pallidum</h1>
      <div className='svgContainer'>
        <motion.svg
          width='100%'
          height='100%'
          preserveAspectRatio='xMidYMax meet'
          viewBox='0 0 1398 1024'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <defs>
            <linearGradient id='myGradient'>
              <stop offset='0%' stopColor='#f2bcd4' />
              <stop offset='25%' stopColor='#ec9bd6' />
              <stop offset='80%' stopColor='#d441b5' />
            </linearGradient>
          </defs>

          <motion.path
            d='M150.484 120.5C150.484 120.5 202.312 71 207.17 67C212.029 63 214.729 67 214.729 72C214.729 77 211.489 967.5 213.649 968.5C215.808 969.5 1393.8 965 1393.8 968.5C1393.8 972 1393.8 1024 1393.8 1024'
            stroke='url(#myGradient)'
            strokeWidth='8'
            strokeLinecap='round'
            variants={draw}
            initial='hidden'
            animate='visible'
          />
          <motion.path
            d='M179.637 58L112.693 120'
            stroke='url(#myGradient)'
            strokeWidth='8'
            strokeLinecap='round'
            variants={draw}
            initial='hidden'
            animate='visible'
          />
          <motion.path
            d='M74.9027 121.5L143.466 57.5'
            stroke='url(#myGradient)'
            strokeWidth='8'
            strokeLinecap='round'
            variants={draw}
            initial='hidden'
            animate='visible'
          />
          <motion.path
            d='M37.6518 122.5L107.835 57.5'
            stroke='url(#myGradient)'
            strokeWidth='8'
            strokeLinecap='round'
            variants={draw}
            initial='hidden'
            animate='visible'
          />
          <motion.path
            d='M71.1236 59C71.1236 59 14.4374 114 11.7381 116.5C9.03879 119 6.33945 119.5 4.71983 115.5C3.10021 111.5 4.71983 1 4.71983 1'
            stroke='url(#myGradient)'
            strokeOpacity='0.92'
            strokeWidth='8'
            strokeLinecap='round'
            variants={draw}
            initial='hidden'
            animate='visible'
          />
        </motion.svg>
      </div>
    </div>
  )
}

export default Home
