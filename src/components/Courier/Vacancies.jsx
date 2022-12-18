import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";

const Vacancies = () => {
  return (
    <div className={"w-full bg-black"}>
      <div className={"w-full lg:flex lg:h-full text-white"}>
        <div className={"flex mx-10 py-20 lg:my-auto lg:w-1/2"}>
          <div className={"w-1 h-80 bg-white  mx-10 lg:mx-32"}></div>
          <div>
            <h1 className={"font-mont  mb-10"}>VACANTES DE EMPLEO</h1>
            <h1
              className={"font-mont font-bold text-xl text-start w-2/3 mb-10"}
            >
              Cambiar el futuro del transporte, implica pensar diferente.
            </h1>
            <h1 className={"font-mont text-start text-sm "}>
              Párrafo. Haz clic aquí para agregar tu propio texto y editarlo. Es
              fácil. Haz clic en "Editar texto" o doble clic aquí para agregar
              tu contenido y cambiar la fuente. En este espacio puedes contar tu
              historia y permitir que los usuarios sepan más sobre ti.
            </h1>
          </div>
        </div>
        <img
          className={"w-full lg:w-1/2 "}
          src="src/components/Courier/resources/clue.webp"
        />
      </div>
      <div className={" h-full  pb-10 text-white font-mont lg:grid lg:grid-cols-2 lg:gap-2"}>
        <div
          className={
            "mx-10  h-96 border-white p-2  border-4 rounded-2xl grid content-between h-80 my-10 lg:w-1/3 lg:mx-auto"
          }
        >
          <h1 className={"font-bold text-xl w-2/3 mx-auto"}>
            INGENIERO ELÉCTRICO
          </h1>
          <h1 className={"w-2/3 mx-auto "}>Guadalajara, Jal.</h1>
          <p className={"font-bold text-sm mx-10 lg:w-2/3 lg:mx-auto"}>
            Párrafo. Haz clic aquí para agregar tu propio texto y editar. Es
            fácil. Haz clic en "Editar texto" o doble clic aquí para agregar tu
            contenido y cambiar la fuente.
          </p>
          <a href="/#/courier/ingeniero-electrico"
              className={
                "border-2 text-center w-2/3 mx-auto border-white rounded-2xl h-10 hover:bg-gray-500 text-xl hover:text-2xl hover:text-white"
              }
          >
            Aplica Ahora
          </a>
        </div>
        <div
          className={
            "mx-10 h-96 border-white p-2  border-4 rounded-2xl grid content-between h-80 my-10 lg:w-1/3 lg:mx-auto"
          }
        >
          <h1 className={"font-bold text-xl w-2/3 mx-auto"}>
            CIENTÍFICO DE DATOS
          </h1>
          <h1 className={"w-2/3 mx-auto "}>Guadalajara, Jal.</h1>
          <p className={"font-bold text-sm mx-10 lg:w-2/3 lg:mx-auto"}>
            Párrafo. Haz clic aquí para agregar tu propio texto y editar. Es
            fácil. Haz clic en "Editar texto" o doble clic aquí para agregar tu
            contenido y cambiar la fuente.
          </p>
          <a href="/#/courier/ingeniero-electrico"
              className={
                "border-2 text-center w-2/3 mx-auto border-white rounded-2xl h-10 hover:bg-gray-500 text-xl hover:text-2xl hover:text-white"
              }
          >
            Aplica Ahora
          </a>
        </div>
        <div
          className={
            "mx-10 h-96 border-white p-2  border-4 rounded-2xl grid content-between h-80 my-10 lg:w-1/3 lg:mx-auto"
          }
        >
          <h1 className={"font-bold text-xl w-2/3 mx-auto"}>
            INVESTIGADOR DE INTELIGENCIA ARTIFICIAL
          </h1>
          <h1 className={"w-2/3 mx-auto "}>Guadalajara, Jal.</h1>
          <p className={"font-bold text-sm mx-10 lg:w-2/3 lg:mx-auto"}>
            Párrafo. Haz clic aquí para agregar tu propio texto y editar. Es
            fácil. Haz clic en "Editar texto" o doble clic aquí para agregar tu
            contenido y cambiar la fuente.
          </p>
          <a href="/#/courier/ingeniero-electrico"
              className={
                "border-2 text-center w-2/3 mx-auto border-white rounded-2xl h-10 hover:bg-gray-500 text-xl hover:text-2xl hover:text-white"
              }
          >
            Aplica Ahora
          </a>
        </div>
        <div
          className={
            "mx-10 h-96 border-white p-2  border-4 rounded-2xl grid content-between h-80 my-10 lg:w-1/3 lg:mx-auto"
          }
        >
          <h1 className={"font-bold text-xl w-2/3 mx-auto"}>
            INGENIERO EN ROBÓTICA
          </h1>
          <h1 className={"w-2/3 mx-auto "}>Guadalajara, Jal.</h1>
          <p className={"font-bold text-sm mx-10 lg:w-2/3 lg:mx-auto"}>
            Párrafo. Haz clic aquí para agregar tu propio texto y editar. Es
            fácil. Haz clic en "Editar texto" o doble clic aquí para agregar tu
            contenido y cambiar la fuente.
          </p>
          <a href="/#/courier/ingeniero-electrico"
            className={
              "border-2 text-center w-2/3 mx-auto border-white rounded-2xl h-10 hover:bg-gray-500 text-xl hover:text-2xl hover:text-white"
            }
          >
            Aplica Ahora
          </a>
        </div>
        <div
            className={
              "mx-10 h-64 border-white p-2 text-black bg-white  border-4 rounded-2xl grid content-between h-80 my-10 lg:w-1/3 lg:mx-auto"
            }
        >
          <h1 className={"font-bold text-xl w-2/3 mx-auto"}>
            ¿No encontraste el puesto que buscabas?
            Envíanos tu CV
          </h1>

          <a href="/#/courier/ingeniero-electrico/form"
              className={
                " text-center border-2 w-2/3 mx-auto border-black rounded-2xl h-10 hover:bg-black text-xl hover:text-white"
              }
          >
            Enviar
          </a>
        </div>
      </div>
    </div>
  );
};

export default Vacancies;
