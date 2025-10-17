import PropTypes from "prop-types";
import { Link, useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import UrheilijaContext from "../context/UrheilijaContext";
import "bootstrap/dist/css/bootstrap.min.css";

const Urheilija = ({ urheilija }) => {
  const {
    id,
    etunimi,
    sukunimi,
    kutsumanimi,
    syntymavuosi,
    paino,
    kuvaLinkki,
    laji,
    saavutukset,
  } = urheilija;
  const urheilijaContext = useContext(UrheilijaContext);
  const [naytaTiedot, setNaytaTiedot] = useState(false);
  const navigate = useNavigate();

  const onDeleteClick = async (id) => {
    await urheilijaContext.deleteUrheilija({ id });

    navigate("/");
    await urheilijaContext.deleteUrheilija(id);
    window.location.reload();
  };

  const onShowClick = () => setNaytaTiedot(!naytaTiedot);

  return (
    <div className="card shadow-sm mb-3">
      <div className="card-body d-flex justify-content-between align-items-center">
        <h5 className="card-title mb-0 ">
          {etunimi} {sukunimi}{" "}
          <small className="text-muted">({kutsumanimi})</small>
        </h5>

        <div>
          <button
            className="btn btn-sm btn-outline-secondary me-2"
            onClick={onShowClick}
          >
            {naytaTiedot ? "Piilota" : "Näytä"}
          </button>
          <Link
            to={`/urheilija/muokkaa/${id}`}
            className="btn btn-sm btn-warning me-2"
          >
            Muokkaa
          </Link>
          <button
            className="btn btn-sm btn-danger"
            onClick={() => onDeleteClick(id)}
          >
            Poista
          </button>
        </div>
      </div>

      {naytaTiedot && (
        <ul className="list-group list-group-flush ">
          <li className="list-group-item">
            Syntymävuosi: {new Date(syntymavuosi).getFullYear()}
          </li>
          <li className="list-group-item">Paino: {paino} kg</li>
          <li className="list-group-item">Laji: {laji}</li>
          <li className="list-group-item">Saavutukset: {saavutukset}</li>
          <li className="list-group-item">
            {kuvaLinkki ? (
              <>
                <strong></strong>{" "}
                <a
                  href={kuvaLinkki}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-decoration-none"
                >
                  Kuva
                </a>
              </>
            ) : (
              <span className="text-muted">Ei kuvaa</span>
            )}
          </li>
        </ul>
      )}
    </div>
  );
};

Urheilija.propTypes = {
  urheilija: PropTypes.shape({
    id: PropTypes.number.isRequired,
    etunimi: PropTypes.string.isRequired,
    sukunimi: PropTypes.string.isRequired,
    kutsumanimi: PropTypes.string,
    syntymavuosi: PropTypes.string,
    paino: PropTypes.number,
    kuva: PropTypes.string,
    laji: PropTypes.string,
    saavutukset: PropTypes.string,
  }).isRequired,
};

export default Urheilija;
