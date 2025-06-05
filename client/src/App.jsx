import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Layout from './components/Layout'
import About from './pages/About'
import Plans from './pages/Plans'
import Gallery from './pages/Gallery'
import Contacts from './pages/Contacts'
import Team from './pages/Team'
import Testimonial from './pages/Testimonial'
import Login from './pages/auth/Login'

const App = () => {

  return (
    <>
     <Routes>
      <Route path='/login' element={<Login/>}/>

        <Route path='/' element={ 
          <Layout>
            <Home/>
          </Layout>
        }/>
         <Route path='/about-us' element={ 
          <Layout>
            <About/>
          </Layout>
        }/>
        <Route path='/plan' element={ 
          <Layout>
            <Plans/>
          </Layout>
        }/>
        <Route path='/gallery' element={ 
          <Layout>
            <Gallery/>
          </Layout>
        }/>
        <Route path='/contacts' element={ 
          <Layout>
            <Contacts/>
          </Layout>
        }/>
        <Route path='/team' element={ 
          <Layout>
            <Team/>
          </Layout>
        }/>
        <Route path='/testimonials' element={ 
          <Layout>
            <Testimonial/>
          </Layout>
        }/>
     </Routes>
    </>
  )
}

export default App
