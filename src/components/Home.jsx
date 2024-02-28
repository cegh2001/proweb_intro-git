import { MdOutlineArrowCircleRight } from "react-icons/md";
import { Link } from 'react-scroll';

const Home = () => {

    return (
      //Contenido
      <div name= "home" className=" w-full h-screen bg-primary">
        {/* Contenido del home */}
        <div className=" max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
          {/* Contenido especifico del home */}
          <div className="z-0">
            <p className="animate-pulse text-quinary z-0">Bienvenido, esta es</p>
            <h1 className="text-4xl sm:text-7xl font-bold text-tertiary">
              La landing page de
            </h1>
            <h2 className=" text-4xl sm:text-7xl font-bold text-quaternary">
              Carlos Eduardo Gonzalez Henriquez
            </h2>
            <p className="text-tertiary py-4 max-w-[700px]">Conoce mas</p>
          </div>
          <div>
            <button className="text-quaternary group border-2 px-6 py-3 my-3 flex items-center hover:bg-secondary">
              <Link to="functions" smooth={true} duration={500}>
              Mis funciones
              </Link>
              <span className="ml-3 group-hover:rotate-90 duration-300"> <MdOutlineArrowCircleRight className='w-5 h-5'/> </span>
            </button>
          </div>
        </div>
      </div>
    );
  }

export default Home