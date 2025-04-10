import img1 from "../assets/servicio1.jpeg";
import img2 from "../assets/servicio2.jpg";
import img3 from "../assets/servicio3.jpeg";
import img4 from "../assets/servicio4.jpg";

function Servicios() {
  return (
    <>
      <h1 className="font-medium text-3xl pb-10 text-center pt-10 text-gray-800">
        Nuestros Servicios
      </h1>

      <div className="flex flex-col items-center lg:flex-row lg:justify-around gap-9 lg:gap-0 pb-10">

        {/* Servicio 1 */}
        <div className="relative w-80 lg:w-72">
          <img src={img1} alt="servicios" className="w-full h-96 object-cover" loading="lazy" />
          <div className="absolute bottom-0 left-0 right-0 bg-white bg-opacity-80 p-4 text-center hover:pb-40 group transition-all duration-500">
            <h1 className="font-semibold text-2xl">Mudanzas residenciales y comerciales</h1>
            <p className="hidden group-hover:block font-light text-2xl">Transporte seguro y puntual de tus pertenencias.</p>
          </div>
        </div>

        {/* Servicio 2 */}
        <div className="relative w-80 lg:w-72">
          <img src={img2} alt="servicios" className="w-full  object-cover" loading="lazy"/>
          <div className="absolute bottom-0 left-0 right-0 bg-white bg-opacity-80 p-4 text-center hover:pb-40 group transition-all duration-500">
            <h1 className="font-semibold text-2xl">Fletes y carga pesada</h1>
            <p className="hidden group-hover:block font-light text-2xl">Movilización de mercancías a cualquier ciudad.</p>
          </div>
        </div>

        {/* Servicio 3 */}
        <div className="relative w-80 lg:w-72">
          <img src={img3} alt="servicios" className="w-full h-96 object-cover" loading="lazy" />
          <div className="absolute bottom-0 left-0 right-0 bg-white bg-opacity-80 p-4 text-center hover:pb-40 group transition-all duration-500">
            <h1 className="font-semibold text-2xl">Servicio dentro y fuera de Quito</h1>
            <p className="hidden group-hover:block font-light text-2xl">Viajes personalizados según tu destino.</p>
          </div>
        </div>

        {/* Servicio 4 */}
        <div className="relative w-80 lg:w-72">
          <img src={img4} alt="servicios" className="w-full h-96 object-cover" loading="lazy" />
          <div className="absolute bottom-0 left-0 right-0 bg-white bg-opacity-80 p-4 text-center hover:pb-40 group transition-all duration-500">
            <h1 className="font-semibold text-2xl">Precios accesibles y personalizados</h1>
            <p className="hidden group-hover:block font-light text-2xl">Tarifas según la ciudad y tipo de carga.</p>
          </div>
        </div>

      </div>
    </>
  );
}

export default Servicios;
