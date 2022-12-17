import React from "react";
import "./styles/Other.css";
import { Card, CardGroup, Col, Container, Row } from "react-bootstrap";

const Other = () => {
  return (
    <div className={"bg-black "}>
      <div
        className={
          "back xl:h-screen h-80 bg-center bg-cover bg-fixed xl:bg-cover"
        }
      ></div>
      <h1 className={"text-white text-3xl mx-20 my-5"}>
        {" "}
        Otros articulos relacionados
      </h1>
      <div className={"w-screen lg:w-1/2 lg:h-80 px-4 lg:flex mx-auto "}>
        <img
          className={"w-screen lg:w-1/2 "}
          src="src/components/About/resources/car.webp"
        />
        <div className={"bg-white h-80"}>
          <div className={"flex"}>
            <div
              className={"text-white bg-gray-500 m-3 px-3 py-2  rounded-3xl"}
            >
              M
            </div>
            <div className={"mt-4"}>Max Figueroa ♛</div>
          </div>
          <div className={"hover:text-naranja px-3"}>
            <span className={"text-3xl"}>
              Los tipos de servicio de última milla
            </span>
            <br />
            <br />
            <span>
              Las entregas de última milla son el último contacto entre el
              producto o servicio con el consumidor final, por lo cual es el
              último tramo...
            </span>
          </div>
        </div>
      </div>
      <div className={"my-5 lg:flex lg:justify-between lg:mx-80 "}>
        <div className={"w-80"}>
          <div className={"flex "}>
            <div className={"bg-white w-1 h-20 mx-5"}></div>
            <div>
              <h1 className={"text-white mb-4"}>NOTICIAS</h1>
              <h1 className={"text-white text-2xl"}>Cobox en la prensa</h1>
            </div>
          </div>
        </div>
        <div className={"mx-10"}>
          <h1 className={"text-white text-xl mt-10 text-sm "}>
            Muchos canales y empresas ya están hablando de nosotros.
          </h1>
        </div>
      </div>
      <div className={'grid grid-cols-2 gap-2 p-4 md:flex lg:justify-evenly lg:content-center'}>
          <img className={'w-24 lg:h-full m-4'} src="src/components/About/resources/rcr.webp"/>
          <img className={'w-24 lg:h-full m-4'} src="src/components/About/resources/tb.webp"/>
          <img className={'w-24 lg:h-full m-4'} src="src/components/About/resources/finance.webp"/>
          <img className={'w-24 lg:h-full m-4'} src="src/components/About/resources/palo.webp"/>
          <img className={'w-24 lg:h-full m-4'} src="src/components/About/resources/london.webp"/>
      </div>

    </div>
  );
};

export default Other;
