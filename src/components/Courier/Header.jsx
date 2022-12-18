import React from "react";

const Header = () => {
  return (
    <div className={"font-mont font-bold w-full my-10 lg:my-20"}>
      <h1
        className={
          "w-2/3 my-10 mx-auto text-center text-2xl lg:text-7xl lg:w-1/2 lg:my-20"
        }
      >
        HACEMOS REALIDAD GRANDES IDEAS
      </h1>
      <h3 className={"text-center text-md lg:text-xl my-10 lg:my-20 "}>
        Acompáñanos en el viaje
      </h3>
      <hr className={""} />
    </div>
  );
};

export default Header;
