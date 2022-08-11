import { Routes, Route } from 'react-router-dom'

import Intro from '../components/Intro'

const Home = () => {
  return (
    <div className='Home'>
      <Routes>
        <Route path='/' element={<Intro />} />
        {/* <Route path='/info' element={<Info />} />
        <Route path='/chronologie' element={<Chronology />} />
        <Route path='/stars' element={<Stars />} />
        <Route path='/evenements' element={<Event />} />
        <Route path='/inscription' element={<UserForm />} /> */}
      </Routes>
    </div>
  )
}

export default Home
