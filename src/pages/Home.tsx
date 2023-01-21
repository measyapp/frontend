import { Footer,Header} from '../components'
import {Menu} from "./Menu"
export function Home() {
  return (
    <div>
    <Header/>
    <div className='flex items-center justify-center m-64'>
      <Menu/> 
    </div>
    <Footer/>
    </div>  
  )
}


