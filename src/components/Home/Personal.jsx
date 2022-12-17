import React from "react";
import { Button } from "react-bootstrap";
import "../../assets/styles/Personal.css";
const Personal = () => {
  return (
    <div>
      <div>
        <h1>¿Tienes envios personales?</h1>
        <p>
          Aprovecha nuestra plataforma para hacer tus envios, selecciona las
          caracteristicas mas importantes para tu entrega y escoge la mejor
          opcion de nuestra lista de operadores. Empieza a cotizar tu proximo
          envio, registrate y recibe un cupon de descuento para tu primera
          entrega
        </p>
        <Button variant="outline-primary">Registrate</Button>
      </div>
      <div>
        <img src="" alt="envio" />
      </div>
    </div>
  );
};

export default Personal;
