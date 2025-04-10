import logo from "../assets/logo.png";

function Barra() {
    return (
        <>
            <div className="bg-gray-800 text-white flex flex-col w-full items-center text-center p-4
            lg:flex-row lg:justify-between z-10">
                <div>
                    <img src={logo} alt="logo" className="w-40 rounded-full mx-auto" loading="lazy" />
                </div>
                <div className="pt-3">
                    <p className="font-light pb-2 pl-7">
                        Email: <span className="text-yellow-400 text-lg font-medium lg:pr-0 pr-2">wiliamdavidreachasi@gmail.com</span> |  
                        <a href="https://wa.me/593985588372" className="lg:pl-0"> Celular: <span className="text-yellow-400 text-lg font-medium">0985588372</span>
                        </a>
                    </p>
                    <hr/>
                    <div className="pt-2">
                        <p className="text-3xl font-thin">
                            <span className="text-yellow-400 font-medium">Transporte rápido, económico y confiable</span><br/> 
                            para fletes y mudanzas,  
                            <span className="text-yellow-400 font-medium"> cuidando cada detalle en su traslado.</span>
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Barra;
