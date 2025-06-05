import Hero from './Hero'
import About from './About'
import Plans from './Plans'
import Gallery from './Gallery'
import Team from './Team'
import Contacts from './Contacts'
import Testimonial from './Testimonial'


const Home = () => {
  return (
    <section className=''>      
      <Hero/>
      <About/>
      <Plans/>
      <Gallery/>
      <Team/>
      <Contacts/>
      <Testimonial/>
    </section>
  )
}

export default Home