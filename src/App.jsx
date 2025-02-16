import Abou from './Component/Abou'
import Landing from './Component/Landing'
import Marquee from './Component/Marquee'
import Navbar from './Component/Navbar'


function App() {


  return (
    <div className='w-full  py-8'>
      <Navbar />
      <Landing/>
      <Marquee/>
      <Abou/>
    </div>
  )
}

export default App
