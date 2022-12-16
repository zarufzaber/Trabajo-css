import React from "react";
import "./styles/Other.css";
import { Card, CardGroup, Col, Container, Row } from "react-bootstrap";

const Other = () => {
  return (
    <div className={"bg-black"}>
      <div
        className={
          "back xl:h-screen h-80 bg-center bg-cover bg-fixed xl:bg-cover"
        }
      ></div>
      <h1 className={"text-white text-3xl mx-20 my-5"}>
        {" "}
        Otros articulos relacionados
      </h1>
      <div className={"grid lg:flex mx-auto"}>
        <img src="src/components/About/resources/car.webp" />
        <div className={''}>
          <div className={'flex'}>
            <div className={'text-white bg-gray-500 m-3 px-3 py-2  rounded-3xl'}>
              M
            </div>
            <div className={'text-white mt-4'}>
              Max Figueroa

            </div>
            <div>


            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default Other;
