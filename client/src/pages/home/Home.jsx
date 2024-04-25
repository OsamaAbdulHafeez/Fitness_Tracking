import HeroSection from '../../Components/herosection/HeroSection'
import Footer from '../../Components/footer/Footer'
import Program from '../../Components/program/Program'
import Reason from '../../Components/reason/Reason'
import Testimonials from '../../Components/testimonials/Testimonials'

const Home = () => {
  return (
    <div>
      <HeroSection />
      <Program />
      <Reason />
      <Testimonials />
      <Footer />
    </div>
  )
}

export default Home
