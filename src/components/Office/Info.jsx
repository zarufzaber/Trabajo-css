import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Info = () => {
  return (
    <div>
        <div className="bg-white mt-20">
        <div className="text-black ml-16 text-xl ">AUTONO DIGITAL</div>
        <div className="text-black ml-16 mt-4 text-4xl text-left mr-14">Desarrollamos una aplicación para que cada vehículo conduzca y actúe con autonomía, a partir de datos en tiempo real y en función de la situación.</div>
        <div> <img className="ml-16 mt-16  w-96 h-auto" src="./src/components/office/resources/img_4.png"></img> </div>
        
        <div className="text-black ml-16 text-2xl  mr-8 mt-12 font-medium">CIBERSEGURIDAD AVANZADA</div>
        <div className="text-black ml-16 mt-4 text-xl  mr-20">Párrafo. Haz clic aquí para agregar tu propio texto y editarlo. Es fácil. Haz clic en "Editar texto" o doble clic aquí para agregar tu contenido y cambiar la fuente. En este espacio puedes contar tu historia y permitir que los usuarios sepan más sobre ti.</div>

        <div className="text-black ml-16 text-2xl  mr-8 mt-12 font-medium">INFORMACIÓN EN TIEMPO REAL</div>
        <div className="text-black ml-16 mt-4 text-xl  mr-20">Párrafo. Haz clic aquí para agregar tu propio texto y editarlo. Es fácil. Haz clic en "Editar texto" o doble clic aquí para agregar tu contenido y cambiar la fuente. En este espacio puedes contar tu historia y permitir que los usuarios sepan más sobre ti.</div>
        </div>
    </div>
  );
};

export default Info;
