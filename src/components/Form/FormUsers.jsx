import React from "react";
import emailjs from "@emailjs/browser";

const FormUsers = () => {
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_eo4pgl4",
        "template_u2scn2w",
        e.target,
        "cTERuVoTcdok31I6m"
      )
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };
  return (
    <div className={"w-full my-10 font-mont font-bold"}>
      <header>
        <h1 className={"text-center text-7xl h-40 "}>ÚNETE</h1>
      </header>
      <hr />
      <h2 className={"text-xl w-full mx-10 my-4 lg:w-1/3 lg:mx-auto "}>
        Envía tu solicitud
      </h2>
      <form className="w-full grid " onSubmit={sendEmail}>
        <label className={"mx-10 lg:w-1/3 lg:mx-auto"}>Nombre*</label>
        <input
          className={
            "mx-10 border-2 border-black rounded-2xl h-10 p-2 my-2 lg:w-1/3 lg:mx-auto"
          }
          type="text"
          name="user_name"
          placeholder="Jesus"
        />

        <label className={"mx-10 lg:w-1/3 lg:mx-auto"}>Apellidos* </label>
        <input
          className={
            "mx-10 border-2 border-black rounded-2xl h-10 p-2 my-2 lg:w-1/3 lg:mx-auto"
          }
          type="text"
          name="user_last_name"
          placeholder="Ronquillo"
        />

        <label className={"mx-10 lg:w-1/3 lg:mx-auto"}>Email* </label>
        <input
          className={
            "mx-10 border-2 border-black rounded-2xl h-10 p-2 my-2 lg:w-1/3 lg:mx-auto"
          }
          type="email"
          name="user_email"
          placeholder="Jesus@dominio.com"
        />

        <label className={"mx-10 lg:w-1/3 lg:mx-auto"}>Telefono* </label>
        <input
          className={
            "mx-10 border-2 border-black rounded-2xl h-10 p-2 my-2 lg:w-1/3 lg:mx-auto"
          }
          type="number"
          name="user_number"
          placeholder="+51 957 961 045"
        />

        <label className={"mx-10 lg:w-1/3 lg:mx-auto"}>Vacante* </label>
        <input
          className={
            "mx-10 border-2 border-black rounded-2xl h-10 p-2 my-2 lg:w-1/3 lg:mx-auto"
          }
          type="text"
          name="user_vacant"
          placeholder="Ing de software"
        />

        <label className={"mx-10 lg:w-1/3 lg:mx-auto"}>CV URL* </label>
        <input
          className={
            "mx-10 border-2 border-black rounded-2xl h-10 p-2 my-2 lg:w-1/3 lg:mx-auto"
          }
          type="url"
          name="user_cv"
          placeholder="www.cvJesus.com"
        />

        <label className={"mx-10 lg:w-1/3 lg:mx-auto"}>LinkedIn URL </label>
        <input
          className={
            "mx-10 border-2 border-black rounded-2xl h-10 p-2 my-2 lg:w-1/3 lg:mx-auto"
          }
          type="url"
          name="user_cv"
        />
        <label className={"mx-10 lg:w-1/3 lg:mx-auto"}>Comentarios</label>
        <input
          className={
            "mx-10 border-2 border-black rounded-2xl h-10 p-2 my-2 h-60 lg:w-1/3 lg:mx-auto"
          }
          type="url"
          name="user_cv"
          placeholder="Cuentanos un poco sobre ti."
        />

        <button
          className={
            " w-1/3 bg-black h-10 rounded-2xl text-white mx-10 lg:w-1/3 lg:mx-auto lg:w-1/6 hover:bg-white hover:text-black"
          }
        >
          Enviar
        </button>
      </form>
    </div>
  );
};

export default FormUsers;
