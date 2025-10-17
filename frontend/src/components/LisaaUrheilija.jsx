import { useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import UrheilijaContext from "../context/UrheilijaContext";
import "bootstrap/dist/css/bootstrap.min.css";

export default function LisaaUrheilija() {
  const navigate = useNavigate();
  const urheilijaContext = useContext(UrheilijaContext);

  const [urheilija, setUrheilija] = useState({
    etunimi: "",
    sukunimi: "",
    kutsumanimi: "",
    syntymavuosi: "",
    paino: "",
    kuvaLinkki: "",
    laji: "",
    saavutukset: "",
  });

  const {
    etunimi,
    sukunimi,
    kutsumanimi,
    syntymavuosi,
    paino,
    kuvaLinkki,
    laji,
    saavutukset,
  } = urheilija;

  const handleChange = (e) => {
    setUrheilija({ ...urheilija, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const uusiUrheilija = {
      etunimi,
      sukunimi,
      kutsumanimi: kutsumanimi || null,
      syntymavuosi: syntymavuosi ? new Date(syntymavuosi, 0, 1) : null,
      paino: paino ? parseFloat(paino) : null,
      kuvaLinkki: kuvaLinkki || null,
      laji: laji || null,
      saavutukset: saavutukset || null,
    };

    console.log("Lisätään urheilija:", uusiUrheilija);

    await urheilijaContext.addUrheilija(uusiUrheilija);
    navigate("/");
  };

  return (
    <div className="card mb-4 shadow-sm">
      <div className="card-header bg-primary text-white">
        <h4>Lisää uusi urheilija</h4>
      </div>
      <div className="card-body">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-md-6 mb-3">
              <label className="form-label">Etunimi</label>
              <input
                type="text"
                name="etunimi"
                className="form-control"
                value={etunimi}
                onChange={handleChange}
                required
              />
            </div>
            <div className="col-md-6 mb-3">
              <label className="form-label">Sukunimi</label>
              <input
                type="text"
                name="sukunimi"
                className="form-control"
                value={sukunimi}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="mb-3">
            <label className="form-label">Kutsumanimi</label>
            <input
              type="text"
              name="kutsumanimi"
              className="form-control"
              value={kutsumanimi}
              onChange={handleChange}
            />
          </div>

          <div className="row">
            <div className="col-md-4 mb-3">
              <label className="form-label">Syntymävuosi</label>
              <input
                type="number"
                name="syntymavuosi"
                className="form-control"
                value={syntymavuosi}
                onChange={handleChange}
              />
            </div>
            <div className="col-md-4 mb-3">
              <label className="form-label">Paino (kg)</label>
              <input
                type="number"
                name="paino"
                className="form-control"
                value={paino}
                onChange={handleChange}
              />
            </div>
            <div className="col-md-4 mb-3">
              <label className="form-label">Laji</label>
              <input
                type="text"
                name="laji"
                className="form-control"
                value={laji}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="mb-3">
            <label className="form-label">Kuva (URL)</label>
            <input
              type="text"
              name="kuvaLinkki"
              className="form-control"
              value={kuvaLinkki}
              onChange={handleChange}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Saavutukset</label>
            <textarea
              name="saavutukset"
              className="form-control"
              rows="3"
              value={saavutukset}
              onChange={handleChange}
            ></textarea>
          </div>

          <button type="submit" className="btn btn-success w-100">
            Lisää urheilija
          </button>
        </form>
      </div>
    </div>
  );
}
