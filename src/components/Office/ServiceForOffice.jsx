import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./styles/serv.css"
const ServiceForOffice = () => {
  return (
    <div>
      <div className="font-mono text-center text-2xl mx-12 lg:text-5xl mb-32 mt-20 font-light">
        <span className="text-black">Parte de nuestros servicios para empresas:</span>
      </div>
          <div className=" w-96 h-auto ml-20">
          <div class="grid grid-cols-3 gap-4">
          <div class="text-morao font-sans italic  ordinal text-8xl text-right">1</div>
          <div class=""><img src="src/components/office/resources/camino.png"></img></div>
          </div>
          <div class=" -ml-12 mr-8 mt-3 text-center">Gestiona <span className=" text-morao font-semibold">diferentes puntos de recojo y entrega,</span> dale seguimiento a tus entregas en tiempo real.</div>
          </div>

          <div className=" w-96 h-auto ml-20 mt-10">
          <div class="grid grid-cols-3 gap-4">
          <div class="text-morao font-sans italic  ordinal text-8xl text-right">2</div>
          <div class=""><img src="src/components/office/resources/order-delivery.png"></img></div>
          </div>
          <div class=" -ml-12 mr-8 mt-3 text-center"><span className=" text-morao font-semibold">Cotiza una o más entregas en una sola plataforma,</span> prioriza según tu preferencia de búsqueda, al mejor operador logístico para tu negocio o empresa.</div>
          </div>

          <div className=" w-96 h-auto ml-20 mt-10">
          <div class="grid grid-cols-3 gap-4">
          <div class="text-morao font-sans italic  ordinal text-8xl text-right">3</div>
          <div class=""><img src="src/components/office/resources/camion.png"></img></div>
          </div>
          <div class=" -ml-12 mr-8 mt-3 text-center">Optimizamos los<span className=" text-morao font-semibold"> espacios de carga según características de tus envíos. </span></div>
          </div>

          <div className=" w-96 h-auto ml-20 mt-10">
          <div class="grid grid-cols-3 gap-4">
          <div class="text-morao font-sans italic  ordinal text-8xl text-right">4</div>
          <div class=""><img src="src/components/office/resources/caja-de-carga.png"></img></div>
          </div>
          <div class=" -ml-12 mr-8 mt-3 text-center">Despacha tu carga según <span className=" text-morao font-semibold">preferencias de servicio,</span> express, same day o programado.</div>
          </div>

          <div className=" w-96 h-auto ml-20 mt-10">
          <div class="grid grid-cols-3 gap-4">
          <div class="text-morao font-sans italic  ordinal text-8xl text-right">5</div>
          <div class=""><img src="src/components/office/resources/internet.png"></img></div>
          </div>
          <div class=" -ml-12 mr-8 mt-3 text-center">Contamos con <span className=" text-morao font-semibold">integraciones para tu plataforma </span>o gestionar tus entregas desde la nuestra.</div>
          </div>

          <div className=" w-96 h-auto ml-20 mt-10">
          <div class="grid grid-cols-3 gap-4">
          <div class="text-morao font-sans italic  ordinal text-8xl text-right">6</div>
          <div class=""><img src="src/components/office/resources/entrega-rapida.png"></img></div>
          </div>
          <div class=" -ml-12 mr-8 mt-3 text-center">Compromiso de <span className=" text-morao font-semibold">cumplimiento en rangos de horarios </span>estamos en constante movimiento para llegar a tu tiempo.</div>
          </div>

          <div className=" w-96 h-auto ml-20 mt-10">
          <div class="grid grid-cols-3 gap-4">
          <div class="text-morao font-sans italic  ordinal text-8xl text-right">7</div>
          <div class=""><img src="src/components/office/resources/coleccionar-monedas.png"></img></div>
          </div>
          <div class=" -ml-12 mr-8 mt-3 text-center">Cada envío es un <span className=" text-morao font-semibold">ahorro directo</span> al escoger la mejor opción según tus preferencias.</div>
          </div>

          <div className=" w-96 h-auto ml-20 mt-10">
          <div class="grid grid-cols-3 gap-4">
          <div class="text-morao font-sans italic  ordinal text-8xl text-right">8</div>
          <div class=""><img src="src/components/office/resources/caja.png"></img></div>
          </div>
          <div class=" -ml-12 mr-8 mt-3 text-center">Una entrega optimizada es una entrega sostenible, <span className=" text-morao font-semibold">ahorra CO2 con cada kilómetro recorrido </span>con nosotros.</div>
          </div>
    </div>
  );
};

export default ServiceForOffice;
