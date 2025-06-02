import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Layout from "./components/Layout"
import About from "./pages/About"

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
     </Routes>
    </>
  )
}

export default App
