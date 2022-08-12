import { Routes, Route, useLocation } from 'react-router-dom'

import Info from '../components/Info'
import Intro from '../components/Intro'
import Event from '../components/Event'
import Chronology from '../components/Chronology'
import Stars from '../components/Stars'
import { AnimatePresence } from 'framer-motion'

const Home = () => {
  const location = useLocation()
  return (
    <div className='Home'>
      <AnimatePresence>
        <Routes location={location} key={location.key}>
          <Route path='/' element={<Intro />} />
          <Route path='/info' element={<Info />} />
          <Route path='/stars' element={<Stars />} />
          <Route path='/chronologie' element={<Chronology />} />
          <Route path='/evenements' element={<Event />} />
          {/* <Route path='/inscription' element={<UserForm />} /> */}
        </Routes>
      </AnimatePresence>
    </div>
  )
}

export default Home
