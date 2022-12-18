import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <div>
      <div className={"w-full my-10 lg:flex justify-evenly lg:h-64"}>
        <div>
          <img className={"mx-auto"} src="src/components/Images/cobox.webp" />
          <div className={"flex justify-evenly my-5"}>
            <div className={" mx-5"}>
              <a href={"#"}>Contacto</a>
            </div>
            <div>
              <h1 className={"mb-4"}>Tel: +51 914 327 463</h1>
              <h1>
                Email:<br></br> inbox@coboxlogistic.com
              </h1>
            </div>
          </div>
        </div>
        <div className={"mx-9"}>
          <h1 className={"my-2 text-xl "}>SUSCRÍBETE</h1>
          <h1 className={"text-sm justify-start"}>
            Regístrate y recibe noticias de Cobox. Siempre tenemos novedades
            para nuestros clientes y Partners Logísticos.
          </h1>
          <h1 className={"my-2 text-2xl"}>Email *</h1>
          <form className={"flex  h-10 border-2 border-black rounded-2xl"}>
            <input
              className={"w-2/3 hover:bg-gray-300 rounded-l-xl"}
              type={"email"}
              placeholder={"   Ingrese su correo"}
            />
            <button
              className={
                "bg-blue-700 w-1/3   rounded-r-xl text-white hover:bg-blue-800  "
              }
              type={"submit"}
            >
              Suscribete
            </button>
          </form>
        </div>
      </div>
      <div>
        <div className={"w-full my-10 lg:flex "}>
          <div className={"w-80 mx-auto flex  my-10 "}>
            <h1 className={"mx-2 h-10  grid content-center"}>
              © 2022 Creado por
            </h1>
            <img src="src/components/Images/logofooter.webp" />
          </div>
          <div className={"flex mx-auto w-1/2 justify-evenly  lg:w-80 lg:mr-10 mt-12 "}>

            <a>
              <img className={'w-full'} src="src/components/Images/linkedin.webp" />
            </a>
            <a>
              <img className={'w-full'} src="src/components/Images/facebook.webp" />
            </a>
            <a>
              <img className={'w-full'} src="src/components/Images/twitter.webp" />
            </a>
            <a>
              <img className={'w-full'} src="src/components/Images/instagram.webp" />
            </a>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
