import { motion } from 'framer-motion'

const Info = () => {
  const pathVariants = {
    hidden: {
      pathLength: 0,
      visibility: 'hidden'
    },
    visible1: {
      visibility: 'visible',
      pathLength: 1,
      transition: {
        ease: 'easeInOut',
        duration: 7
      }
    },
    visible2: {
      visibility: 'visible',
      pathLength: 1,
      transition: {
        ease: 'easeInOut',
        duration: 2,
        delay: 2
      }
    },
    visible3: {
      visibility: 'visible',
      pathLength: 1,
      transition: {
        ease: 'easeInOut',
        duration: 6,
        delay: 4
      }
    }
  }

  return (
    <div className='info'>
      <div className='gontranFather'>
        <svg
          className='gontran'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 1415.33 1008'
        >
          <defs>
            <linearGradient
              id='introSvg1'
              x1={1005.65}
              y1={266.03}
              x2={1005.65}
              y2={359.2}
              gradientUnits='userSpaceOnUse'
            >
              <stop offset={0} stopColor='#b5179e' />
              <stop offset={1} stopColor='#560bad' />
            </linearGradient>
            <linearGradient
              id='introSvg2'
              x1={1033.84}
              y1={267.39}
              x2={1033.84}
              y2={1008}
              gradientUnits='userSpaceOnUse'
            >
              <stop offset={0} stopColor='#b5179e' />
              <stop offset={0.08} stopColor='#a315a1' />
              <stop offset={0.21} stopColor='#8711a5' />
              <stop offset={0.36} stopColor='#710ea9' />
              <stop offset={0.53} stopColor='#620cab' />
              <stop offset={0.72} stopColor='#590bad' />
              <stop offset={1} stopColor='#560bad' />
            </linearGradient>
            <style>
              {
                '.intro_svg__cls-1{fill:none;stroke-linecap:round;stroke-width:10px;stroke:#560bad;stroke-miterlimit:10}'
              }
            </style>
          </defs>
          <g id='intro_svg__Calque_2' data-name='Calque 2'>
            <g id='intro_svg__Calque_1-2' data-name='Calque 1'>
              <motion.path
                className='intro_svg__cls-1'
                d='M1410.33 5v97.66H5V354.2l895.33-.2 86.55-86.55M932.33 354l82.99-82.99'
                variants={pathVariants}
                initial='hidden'
                animate='visible1'
              />
              <motion.path
                style={{
                  stroke: 'url(#introSvg1)',
                  strokeLinejoin: 'round',
                  fill: 'none',
                  strokeLinecap: 'round',
                  strokeWidth: 10
                }}
                d='m964.06 354.2 83.18-83.17'
                variants={pathVariants}
                initial='hidden'
                animate='visible2'
              />
              <motion.path
                style={{
                  stroke: 'url(#introSvg2)',
                  strokeLinejoin: 'round',
                  fill: 'none',
                  strokeLinecap: 'round',
                  strokeWidth: 10
                }}
                d='m993.4 354.2 81.81-81.81h335.12V937H657.36v66'
                variants={pathVariants}
                initial='hidden'
                animate='visible3'
              />
            </g>
          </g>
        </svg>
      </div>
    </div>
  )
}

export default Info