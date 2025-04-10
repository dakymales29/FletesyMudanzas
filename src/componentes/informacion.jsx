import img2 from "../assets/imagen1.jpg";
import img1 from "../assets/imagen2.jpg";
import img3 from "../assets/imagen3.jpg";
import img4 from "../assets/imagen4.jpg";
import img5 from "../assets/imagen6.jpg";
function Informacion() {
    const imagenes = [img1,img2,img3,img4,img5];
    return(
        <>
        <div className="bg-gray-800 p-3 pb-10 ">
        <div>
            <h1 className="font-medium text-3xl pb-5 text-yellow-400 text-center pt-7">¿Quiénes Somos?</h1>
            <p className="font-light text-lg p-2 text-white text-justify lg:text-center pb-7">
            Nos especializamos en el transporte de fletes y mudanzas a nivel nacional, 
            lo que nos ha llevado a acumular más de 20 años de experiencia transportando 
            mercadería. Ofrecemos un servicio confiable, seguro y eficiente para el traslado 
            de cargas pesadas. Nuestro objetivo es brindar soluciones puntuales y responsables
            a precios accesibles.
            </p>
        </div>
        {/* Contenedor con scroll horizontal 
            -con overflow-x-auto las imagenes son desplazables si no caben en la pantalla
            -whitespace-nowrap las imagenes se mantengan en fila y no se apilen.
            -scrollbar-hide oculta la barra de desplazamiento
            */}
        <div className="overflow-x-auto whitespace-nowrap mt-5 scrollbar-hide ">
                {/*gap espacio entre las imagenes*/}
                <div className="flex gap-4 px-4 lg:justify-center">
                    {/*
                    -imagenes.map((img, index) => ())} sirve para recorrer el arreglo
                    donde se crea un <img> por cada imagen en la lista
                    img es la imagen actual del arreglo y lo usamos en src=""
                    index es un identificador unico para cada imagen y lo usamos en key =""

                    */}
                    {imagenes.map((img, index) => (
                        <img key={index} src={img} alt="Perforación" 
                        // object-cover sirve para que la imagen llene el espacio sin deformarse.
                            className="w-56 object-cover rounded-lg shadow-lg" loading="lazy"/>
                    ))}
                </div>
            </div>
            </div>
        </>
    );
}
export default Informacion;