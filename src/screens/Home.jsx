import { Routes, Route } from 'react-router-dom'

import Info from '../components/Info'
import Intro from '../components/Intro'
import Event from '../components/Event'
import Chronology from '../components/Chronology'
import Stars from '../components/Stars'

const Home = () => {
  return (
    <div className='Home'>
      <Routes>
        <Route path='/' element={<Intro />} />
        <Route path='/info' element={<Info />} />
        {/* <Route path='/info' element={<Info />} />*/}
        <Route path='/stars' element={<Stars />} />
        <Route path='/chronologie' element={<Chronology />} />
        <Route path='/evenements' element={<Event />} />
        {/* <Route path='/inscription' element={<UserForm />} /> */}
      </Routes>
    </div>
  )
}

export default Home
