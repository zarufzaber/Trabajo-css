import React from "react";
import { Carousel } from "react-bootstrap";

const Time = () => {
  return (
    <div className={'h-96 mt-20'}>
      <Carousel variant="dark">
        <Carousel.Item>
          <img
              className="d-block w-100 h-40 opacity-0"
              src="https://static.wixstatic.com/media/c837a6_6805a01e59934a1584ecebb1a8ecd14c~mv2.jpg/v1/crop/x_3725,y_1163,w_2973,h_4576/fill/w_240,h_336,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/GettyImages-932691626.jpg"
              alt="First slide"
          />
          <Carousel.Caption className={'border-2 border-black '}>
            <h5>2018</h5>
            <p>INICIA ASOCIACIÓN CON TRI-NEX Y TRANSPORTE GENERALES</p>
            <p>
              Párrafo. Haz clic aquí para agregar tu propio texto y editar. Es
              fácil. Haz clic en "Editar texto" o doble clic aquí para agregar
              tu contenido y cambiar la fuente
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 h-40 opacity-0"
            src="https://static.wixstatic.com/media/c837a6_6805a01e59934a1584ecebb1a8ecd14c~mv2.jpg/v1/crop/x_3725,y_1163,w_2973,h_4576/fill/w_240,h_336,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/GettyImages-932691626.jpg"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h5>2019</h5>
            <p>SE AMPLÍA LA PRUEBA A ARIZONA Y NUEVO MÉXICO</p>
            <p>
              Párrafo. Haz clic aquí para agregar tu propio texto y editar. Es
              fácil. Haz clic en "Editar texto" o doble clic aquí para agregar
              tu contenido y cambiar la fuente
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block opacity-0"
            src="https://static.wixstatic.com/media/c837a6_6805a01e59934a1584ecebb1a8ecd14c~mv2.jpg/v1/crop/x_3725,y_1163,w_2973,h_4576/fill/w_240,h_336,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/GettyImages-932691626.jpg"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h5>2020</h5>
            <p>¡COMIENZA LA PRODUCCIÓN!</p>
            <p>
              Párrafo. Haz clic aquí para agregar tu propio texto y editar. Es
              fácil. Haz clic en "Editar texto" o doble clic aquí para agregar
              tu contenido y cambiar la fuente
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="holder.js/800x400?text=Third slide&bg=e5e5e5"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h5>2021</h5>
            <p>SE VENDEN LOS PRIMEROS 1000 AUTOS</p>
            <p>
              Párrafo. Haz clic aquí para agregar tu propio texto y editar. Es
              fácil. Haz clic en "Editar texto" o doble clic aquí para agregar
              tu contenido y cambiar la fuente
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="holder.js/800x400?text=Third slide&bg=e5e5e5"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h5>2022</h5>
            <p>SE LANZA UNA PLATAFORMA DE LOGÍSTICA INTEGRAL DE ÚLTIMA MILLA</p>
            <p>
              Conocedores del mercado, empezamos a conectar operadores
              logísticos con diferentes clientes naturales y empresas con
              diferentes necesidades, para poder gestionar la mejor forma de
              llevar sus encargos con nuestra red de socios logísticos.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Time;
