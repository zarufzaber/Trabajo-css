import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const PrimaryScreen = () => {
  return (
    <div className={" my-10 w-full font-mont"}>
      <h1 className={"text-center text-4xl font-bold my-20 lg:text-7xl"}>
        INGENIERO ELECTRICO
      </h1>
      <p className={"mx-20 font-bold  text-center lg:text-2xl lg:w-1/2 lg:mx-auto lg:my-32"}>
        Párrafo. Haz clic aquí para agregar tu propio texto y editarlo. Es
        fácil. Haz clic en "Editar texto" o doble clic aquí para agregar tu
        contenido y cambiar la fuente. En este espacio puedes contar tu historia
        y permitir que los usuarios sepan más sobre ti.
      </p>
      <div className={"w-full font-bold grid lg:flex"}>
        <div className={"w-1/3 mx-auto text-center my-10"}>
          <h1>UBICACIÓN</h1>
          <div className={"2-full h-0.5 bg-black my-2 lg:w-1/4 lg:mx-auto"}></div>
          <h1>Guadalajara</h1>
        </div>
        <div className={"w-1/3 mx-auto text-center my-10"}>
          <h1>TIPO DE EMPLEO</h1>
          <div className={"2-full h-0.5 bg-black my-2 lg:w-1/4 lg:mx-auto"}></div>
          <h1>Permanente</h1>
        </div>
      </div>
      <hr className={'lg:my-20'} />
    </div >
  );
};

export default PrimaryScreen;
