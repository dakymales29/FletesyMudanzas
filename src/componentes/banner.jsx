import { useState, useEffect } from "react";
import imagen1 from "../assets/banner1.png";
import imagen2 from "../assets/banner2.png";
import imagen3 from "../assets/banner3.png";
import imagen4 from "../assets/banner4.png";
//react icons 
import { AiOutlineArrowLeft } from "react-icons/ai";
import { AiOutlineArrowRight } from "react-icons/ai";

function Banner() {
  const imagenes = [imagen1, imagen2, imagen3,imagen4]; // Array de imágenes
  const [index, setIndex] = useState(0); // Estado del índice actual

  // Mover a la derecha
  const derecha = () => {
    //recuerda con prev  se guarda el indice anterior y a este se le suma 1 hasta el tamaño del arreglo con % y .lenght
    setIndex((prevIndex) => (prevIndex + 1) % imagenes.length);
  };

  // Mover a la izquierda
  const izquierda = () => {
    //cuando si el indice es 0 entocens hacemos q vaya a la ultima imagen caso contrario ira restanto 1 a la imagen actual
    //es decir cuando este en la primera imagen se ira directamente a la ultima al aplastar el boton izquierda y si no esta en la primera imagen ya funciona normalmente.
    setIndex((prevIndex) => prevIndex === 0 ? imagenes.length - 1 : prevIndex - 1);
  };

  // Cambiar imagen automáticamente cada 5 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      derecha();
    }, 10000); // Cambia la imagen cada 5 segundos

    // Limpiar intervalo cuando el componente se desmonte
    return () => clearInterval(interval);
  }, []);

  return (
    //relative sirve para que el contenedor tenga una posicion realtiva y asi las flechitas se queden ensima
    //overflow-hidden  Esto asegura que solo se vea una imagen a la vez y las imágenes fuera del área visible se oculten.
    <div className="relative w-full overflow-hidden">
      <div
            /* transition-transform duration-500 ease-in-out -> primero activa la transicion en caso de que haya cambio en transp luego le damos una duracion de 0.5 segundos y al final la fluidez*/
        className="flex transition-transform duration-500 ease-in-out"
        /*Mueve el contenedor de las imágenes a la izquierda o derecha según el valor de index en el ejeX*/
        /*usamos el 100% para recorrer el ancho de la imagen ya que si lo bajamos por ejemplo a 50% solo se mover hasta la mitad del contenedor*/
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {/*mostramos las imagenes del arreglo con .map() lo cual nos permite recorrer el arreglo y muestre lo q tiene con un indice actual y la imagen dentro del indice osea (i, img)*/}
        {imagenes.map((img, i) => (
          /* flex-shrink-0 evita que un elemento se reduzca cuando está dentro de un contenedor flex.*/ 
          <img key={i} src={img} alt="banner" className="w-full flex-shrink-0" loading="lazy" />
        ))}
      </div>

      {/* Botones de navegación */}
      {/* abosulte es para q se centre las felchas en la mitad ya que usamos relative*/}
      <div className="absolute top-1/2 left-0 right-0 flex justify-between px-4">
        <button className="bg-black text-white p-2 rounded-full" onClick={izquierda}>
          
          <AiOutlineArrowLeft />
        </button>
        <button className="bg-black text-white p-2 rounded-full" onClick={derecha}>
          <AiOutlineArrowRight />
        </button>
      </div>
    </div>
  );
}

export default Banner;
