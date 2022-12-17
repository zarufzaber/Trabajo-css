import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import "./styles/serv.css"
const ChargeAll = () => {
  return (
    <div>
    
    <div class=" ml-20 mr-20 mt-5 text-center text-3xl">Conoce más sobre nuestros servicios para <span className=" text-morao font-bold">cargas masivas</span></div>
    <div className="h-80 w-96 ml-12 mt-16">
      <img  className="h-80 w-96" src="src/components/office/resources/imagen_3.png"></img>
    </div>

    <div className="bg-slate-500 h-52 w-72 ml-24 -mt-60 rounded-lg">
     <div className="ml-3 text-transparent text-xs">Express</div>
     <div className="ml-3 text-morao font-sans text-2xl font-bold">Express</div>
     <div className="fuente-serif mt-2 ml-3">Encuentra las mejores opciones para entregas en el menor tiempo posible con las opciones del mercado.</div>
     <div><button className="us_serv_boton_1">Explorar</button></div> 
    </div>

    <div className="bg-slate-500 h-52 w-72 ml-24 -mt-60 rounded-lg">
     <div className="ml-3 text-transparent text-xs">Express</div>
     <div className="ml-3 text-morao font-sans text-2xl font-bold">Same Day</div>
     <div className="fuente-serif mt-2 ml-3">En una franja horaria, acomodamos tus pedidos para que se entreguen en el mismo día, la mejor opción.</div>
     <div><button className="us_serv_boton_1">Explorar</button></div> 
    </div>

    <div className="bg-slate-500 h-52 w-72 ml-24 -mt-60 rounded-lg">
     <div className="ml-3 text-transparent text-xs">Express</div>
     <div className="ml-3 text-morao font-sans text-2xl font-bold">Programado</div>
     <div className="fuente-serif mt-2 ml-3">En un plazo de 24 a 48 horas, programamos tus entregas con nuestra red de operadores.</div>
     <div><button className="us_serv_boton_1">Explorar</button></div> 
    </div>
    
    </div>
  );
};

export default ChargeAll;
