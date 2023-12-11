import './Page/page.css'
import Header from '@/components/header/Header'
import './Global _style/globals.css'
import Loader from '@/components/Loader/Loader'
export default function Home() {
  return(
    <section>
      <Loader/>
      <Header pagina="Início" />
    </section>
  )
}
