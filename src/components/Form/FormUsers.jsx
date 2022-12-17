import React from "react";
import emailjs from "@emailjs/browser";

const FormUsers = () => {
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      "service_eo4pgl4",
      "template_u2scn2w",
      e.target,
      "cTERuVoTcdok31I6m"
    )
    .then(res => console.log(res))
    .catch(err=> console.log(err))
  };
  return (
    <div>
      <header>
        <h1>UNETE</h1>
      </header>
      <hr />
      <h2>Envia tu solicitud</h2>
      <form className="" onSubmit={sendEmail}>
        <label>Name*</label>
        <input type="text" name="user_name" placeholder="Jesus" />

        <label>Apellido* </label>
        <input type="text" name="user_last_name" placeholder="Ronquillo" />

        <label>Email* </label>
        <input type="email" name="user_email" placeholder="Jesus@dominio.com" />

        <label>Telefono* </label>
        <input type="number" name="user_number" placeholder="+51 957 961 045" />

        <label>Vacante* </label>
        <input type="text" name="user_vacant" placeholder="Ing de software" />

        <label>CV URL* </label>
        <input type="url" name="user_cv" placeholder="www.cvJesus.com" />

        <button>Enviar</button>
      </form>
    </div>
  );
};

export default FormUsers;
