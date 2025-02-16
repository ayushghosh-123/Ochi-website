// import { Eye } from 'lucide-react'
import Abou from './Component/Abou'
import Landing from './Component/Landing'
import Marquee from './Component/Marquee'
import Navbar from './Component/Navbar'
import Eyes from './Component/Eyes'
import Feature from './Component/Feature'
import Cards from './Component/Cards'


function App() {


  return (
    <div className='w-full  py-8'>
      
      <Navbar />
      <Landing/>
      <Marquee/>
      <Abou/>
      <Eyes/>
      <Feature/>
      <Cards/>
    </div>
  )
}

export default App
