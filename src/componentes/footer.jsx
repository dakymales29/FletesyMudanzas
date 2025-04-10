function Footer(){
    return(
    <>
    <div className="text-center bg-gray-800 text-white pt-4">
    <h1 className="text-4xl text-yellow-400 font-medium">--Contáctenos para una asesoría más personalizada--</h1>
    <p className="text-lg p-5 font-thin">"Somos la mejor opción para el servicio de fletes y mudanzas  asegurando un traslado rápido, confiable y seguro"</p>
    </div>
    <div className="text-center lg:flex justify-around bg-gray-800">
        <div className="text-white">
            <h1 className="text-3xl text-yellow-400 font-medium pb-2 pt-4">TELÉFONO</h1>
            <a href="https://wa.me/593985588372" className="text-lg p-3 font-thin">0985588372</a>
        </div>
        <div className="text-white">
        <h1 className="text-3xl text-yellow-400 font-medium pt-4">DIRECCIÓN</h1>
        <p className="text-lg lg:pt-2 p-3  font-thin">Av Diego de Vázquez y Bartolomé de Zamora</p> 
        </div>
        <div className="text-white">
        <h1 className="text-3xl text-yellow-400 font-medium pt-4">EMAIL</h1>
        <p className="text-lg lg:pt-2 p-2 font-thin">wiliamdavidreachasi@gmail.com</p> 
        </div>
    </div>
    </>
    );
}
export default Footer;