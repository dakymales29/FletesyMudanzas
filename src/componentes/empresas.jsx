import img1 from "../assets/empresa1.png";
import img2 from "../assets/empresa2.jpg";
import img3 from "../assets/empresa3.jpeg";
function Empresas(){
    return(
        <>
        <h1 className="bg-gray-800 text-yellow-400 text-center font-medium text-3xl py-12">Nuestros Clientes</h1>
        <div className="flex flex-col items-center bg-gray-800 pb-12 ">
            <div className="pb-10">
                <img src={img1} alt="challenger" className="w-96 " />
                <p className="font-light text-lg p-2 text-white text-center pt-7">Empresa de refrigeradoras, Guayaquil, Quito.</p>
            </div>

            <div className="pb-10">
            <img src={img2} alt="muebles" className="lg:w-96 w-80 ml-14 lg:ml-8"/>
            <p className="font-light text-lg p-2 text-white text-center pt-7">Empresa de alquiler muebles: Guayaquil y otras ciudades.</p>
            </div>

            <div>
            <img src={img3} alt="frutas" className="w-60 lg:ml-28 ml-24"/>
            <p className="font-light text-lg p-2 text-white text-center pt-7">Empresa de frutas, solo de pitahayas, internos y para Manabí.</p>
            </div>
        </div>
        </>
    );
}
export default Empresas;