import React from 'react'
import { TbWorldCode } from "react-icons/tb";
import { CgDebug } from "react-icons/cg";
import { TiDocumentText } from "react-icons/ti";
import { RxUpdate } from "react-icons/rx";

const Functions = () => {
  return (
    <div name="functions" className="w-full h-screen bg-primary text-tertiary">
      {/* Contenedor general */}
      <div className="max-w-[1000px] mx-auto px-4 flex flex-col justify-center w-full h-full">
        <div className="">
          <p className="text-4xl font-bold inline border-b-4 border-quinary">
            Funciones
          </p>
          <p className="py-4">
            Como desarrollador o programador, realizo:
          </p>
        </div>
        <div className="w-full h-auto grid grid-cols-2 sm:place-content-around gap-8 text-center py-8">
          <div className="shadow-md shadow-black hover:scale-110 duration-500">
            <TbWorldCode className="pt-5 w-20 mx-auto h-max" />
            <p className="py-4">Codificacion</p>
          </div>
          <div className="shadow-md shadow-black hover:scale-110 duration-500">
            <CgDebug className="pt-5 w-20 mx-auto h-max" />
            <p className="py-4">Debugging</p>
          </div>
          <div className="shadow-md shadow-black hover:scale-110 duration-500">
            <TiDocumentText className="pt-5 w-20 mx-auto h-max" />
            <p className="py-4">Documentacion</p>
          </div>
          <div className="shadow-md shadow-black hover:scale-110 duration-500">
            <RxUpdate className="pt-5 w-20 mx-auto h-max" />
            <p className="py-4">Actualizacion</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Functions