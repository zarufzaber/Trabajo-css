import React from "react";
import './styles/Journey.css'
const Journey = () => {
  return (

    <div className=" grid w-full h-screen   ">
      <div className=" w-full mt-10 text-morao ">
        <p className={'text-center text-5xl md:text-7xl mx-20 font-mont font-bold'}>NUESTRO TRAYECTO</p>
      </div>

      <div className="text-center mx-10 text-3xl -mt-20 md:mx-20  2xl:mx-60 xl:px-72">
        <p>
        Creados para apoyar con una logistica 360 para las empresas, negocios y
        clientes. Hacemos que la tarea de la gestion logistica de las entregas
        de ultima milla sean mas faciles que nunca, cotizando en tiempo real,
        buscando la mejor opcion y brindando la mejor atencion a nuestros
        Partners y Socios
        </p>
      </div>
      
      <hr className={'-mt-16 xl:-mt-40'}/>
    </div>
  );
};

export default Journey;
