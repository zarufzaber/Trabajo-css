import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./styles/Boos.css";

const Boos = () => {
  return (
    <div
      className={
        "grid -mt-24 mx-auto 2xl:flex xl:h-screen  xl:-mt-72 xl:-mb-96 "
      }
    >
      <div className={"w-full mb-4 xl:order-1 xl:mx-52"}>
        <img
          className={"w-60 mx-auto rounded-2xl xl:w-80 "}
          src={
            "https://static.wixstatic.com/media/c837a6_6805a01e59934a1584ecebb1a8ecd14c~mv2.jpg/v1/crop/x_3725,y_1163,w_2973,h_4576/fill/w_240,h_336,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/GettyImages-932691626.jpg"
          }
        />
      </div>
      <div className={"w-full flex xl:mx-52"}>
        <div className={"w-1 mx-10 bg-gray-500 h-full xl:h-1/2"}></div>
        <div className={"w-full"}>
          <div className="text-morao font-bold font-mont text-sm mx-auto my-10  xl:text-lg">
            <p>JAIME POLO - CEO & FOUNDER</p>
          </div>

          <div className="text-morao text-2xl mx-1 font-roboto">
            <p>Redefiniendo la forma de hacer envios</p>
          </div>

          <div className=" font-roboto my-4 ">
            <p>
              Muchos canales de atención, muchas personas de contacto para tener
              muchos operadores, es la realidad de muchas empresas que deben de
              gestionar la mejor forma de hacer envíos con prioridades
              diferentes para cada uno de éstos.
            </p>
            <br />
            <br />
            <p>
              Trabajamos desde la aplicación de la tecnología para facilitar
              este proceso en una sola plataforma que permita ayudarte a
              realizar envíos, gestionar tus entregas y visualizar tus más
              importantes indicadores de gestión.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Boos;
