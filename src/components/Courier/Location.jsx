import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Location = () => {
  return (
    <div className={"w-full lg:flex"}>
      <div className={"flex mx-10  lg:w-1/2"}>
        <div className={"w-1 h-80 bg-black  mx-10 lg:mx-32"}></div>
        <div>
          <h1 className={"font-mont  mb-10"}>UBICACIÓN</h1>
          <h1 className={"font-mont font-bold text-xl text-start w-2/3 mb-10"}>
            Estamos en el centro de innovación de Gdl.
          </h1>
          <h1 className={"font-mont text-start text-sm "}>
            Párrafo. Haz clic aquí para agregar tu propio texto y editarlo. Es
            fácil. Haz clic en "Editar texto" o doble clic aquí para agregar tu
            contenido y cambiar la fuente. En este espacio puedes contar tu
            historia y permitir que los usuarios sepan más sobre ti.
          </h1>
        </div>
      </div>
      <img
        className={"w-full lg:w-1/2 lg:-mt-36"}
        src="src/components/Courier/resources/build.webp"
      />
    </div>
  );
};

export default Location;
