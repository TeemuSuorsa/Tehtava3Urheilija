import React, { useContext, useEffect } from "react";
import Urheilija from "./Urheilija";
import UrheilijaContext from "../context/UrheilijaContext";

const Urheilijat = () => {
  const urheilijaContext = useContext(UrheilijaContext);

  useEffect(() => {
    urheilijaContext.getUrheilijat();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="container mt-4">
      <h1 className="display-5 mb-4 text-center">
        <span className="text-primary fw-bold">Urheilijat</span>
      </h1>

      {urheilijaContext.urheilijat.length > 0 ? (
        urheilijaContext.urheilijat.map((u) => (
          <Urheilija key={u.id} urheilija={u} />
        ))
      ) : (
        <p className="text-muted text-center">Ei urheilijoita tietokannassa.</p>
      )}
    </div>
  );
};

export default Urheilijat;
