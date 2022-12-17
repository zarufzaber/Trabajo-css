import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <div className={"w-full my-10 lg:flex justify-evenly lg:h-96"}>
      <div>
        <img className={"mx-auto"} src="src/components/Images/cobox.webp" />
        <div className={"flex justify-evenly my-5"}>
          <div className={""}>
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
          Regístrate y recibe noticias de Cobox. Siempre tenemos novedades para
          nuestros clientes y Partners Logísticos.
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
  );
};

export default Footer;
