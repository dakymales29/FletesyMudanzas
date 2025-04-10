import Barra from "./componentes/barra"
import Footer from "./componentes/footer"
import Banner from "./componentes/banner";
import Informacion from "./componentes/informacion";
import Servicios from "./componentes/servicios";
import Empresas from "./componentes/empresas";
import Contacto from "./componentes/contacto";
import wtps from "./assets/wtsp.png"
function App() {

  return (
    <>
    {/*Logo de wtsp pegado a la pantalla*/}
      <a href="https://wa.me/593985588372"> <img src={wtps} alt="logo-wtsp" className="w-14 fixed z-10  bottom-5 ml-4"/></a>
    <Barra/>
    <Banner/>
    <Informacion/> 
    <Servicios/>
    <Empresas/>
    <Contacto/>
    <Footer/>   
    </>
  )
}

export default App
