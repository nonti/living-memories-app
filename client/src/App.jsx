import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Layout from "./components/Layout"
import About from "./pages/About"
import Plans from "./pages/Plans"

const App = () => {

  return (
    <>
     <Routes>

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
     </Routes>
    </>
  )
}

export default App
