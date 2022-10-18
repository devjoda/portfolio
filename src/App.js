import './App.scss'
import {Routes, Route} from 'react-router-dom'
import {Layout} from './components/Layout/Layout'
import {Home} from './pages/Home/Home'
import {About} from './pages/About/About'
import {Contact} from './pages/Contact/Contact'
import {Work} from './pages/Work/Work'
import {Redirect} from './components/Redirect/Redirect'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/work' element={<Work />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route
            path='/sustainx'
            element={
              <Redirect
                url={'https://devjoda.github.io/sustainx/'}
                delay={3000}
              />
            }
          />
        </Route>
      </Routes>
    </>
  )
}

export default App
