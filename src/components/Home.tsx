import { Footer,Header,Menu} from '../components'
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


