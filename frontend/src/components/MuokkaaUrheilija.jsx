import { useEffect, useState, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import UrheilijaContext from "../context/UrheilijaContext";
import "bootstrap/dist/css/bootstrap.min.css";

const MuokkaaUrheilija = () => {
  const [etunimi, setEtunimi] = useState("");
  const [sukunimi, setSukunimi] = useState("");
  const [kutsumanimi, setKutsumanimi] = useState("");
  const [syntymavuosi, setSyntymavuosi] = useState("");
  const [paino, setPaino] = useState("");
  const [kuvaLinkki, setKuvaLinkki] = useState("");
  const [laji, setLaji] = useState("");
  const [saavutukset, setSaavutukset] = useState("");

  const urheilijaContext = useContext(UrheilijaContext);
  const { id } = useParams();
  const navigate = useNavigate();

  // Haetaan valittu urheilija ladattaessa sivu
  useEffect(() => {
    let mounted = true;
    if (mounted) {
      urheilijaContext.getUrheilija(id).then((res) => {
        const u = res.urheilija || res;
        if (u) {
          setEtunimi(u.etunimi || "");
          setSukunimi(u.sukunimi || "");
          setKutsumanimi(u.kutsumanimi || "");
          setSyntymavuosi(
            u.syntymavuosi ? new Date(u.syntymavuosi).getFullYear() : ""
          );
          setPaino(u.paino || "");
          setKuvaLinkki(u.kuvaLinkki || "");
          setLaji(u.laji || "");
          setSaavutukset(u.saavutukset || "");
        }
      });
    }
    return () => (mounted = false);
  }, [id]);

  // Lähetetään muokatut tiedot
  const handleSubmit = async (e) => {
    e.preventDefault();

    const syntymavuosiFormatted = syntymavuosi ? `${syntymavuosi}-01-01` : null;

    const paivitettyUrheilija = {
      etunimi,
      sukunimi,
      kutsumanimi,
      syntymavuosi: syntymavuosiFormatted,
      paino,
      kuvaLinkki,
      laji,
      saavutukset,
    };

    await urheilijaContext.updateUrheilija(id, paivitettyUrheilija);
    navigate("/"); // paluu etusivulle
    window.location.reload();
  };

  return (
    <div className="card mb-3">
      <div className="card-header">Muokkaa urheilijaa</div>
      <div className="card-body">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="nimi">Nimi</label>
            <input
              type="text"
              id="nimi"
              className="form-control form-control-lg"
              placeholder="Syötä urheilijan nimi..."
              value={etunimi}
              onChange={(e) => setEtunimi(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="sukunimi">Sukunimi</label>
            <input
              type="text"
              id="sukunimi"
              className="form-control form-control-lg"
              placeholder="Syötä sukunimi..."
              value={sukunimi}
              onChange={(e) => setSukunimi(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="kutsumanimi">Kutsumanimi</label>
            <input
              type="text"
              id="kutsumanimi"
              className="form-control form-control-lg"
              value={kutsumanimi}
              onChange={(e) => setKutsumanimi(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="syntymavuosi">Syntymävuosi</label>
            <input
              type="date"
              id="syntymavuosi"
              className="form-control form-control-lg"
              value={syntymavuosi}
              onChange={(e) => setSyntymavuosi(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="paino">Paino</label>
            <input
              type="number"
              id="paino"
              className="form-control form-control-lg"
              placeholder="Syötä paino..."
              value={paino}
              onChange={(e) => setPaino(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="kuvaLinkki">Kuvan linkki</label>
            <input
              type="text"
              id="kuvaLinkki"
              className="form-control form-control-lg"
              placeholder="Syötä kuvan linkki..."
              value={kuvaLinkki}
              onChange={(e) => setKuvaLinkki(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="laji">Laji</label>
            <input
              type="text"
              id="laji"
              className="form-control form-control-lg"
              placeholder="Syötä laji..."
              value={laji}
              onChange={(e) => setLaji(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="saavutukset">Saavutukset</label>
            <input
              type="text"
              id="saavutukset"
              className="form-control form-control-lg"
              placeholder="Syötä saavutukset..."
              value={saavutukset}
              onChange={(e) => setSaavutukset(e.target.value)}
            />
          </div>
          <br />
          <input
            type="submit"
            value="Tallenna muutokset"
            className="btn btn-light btn-block"
          />
        </form>
      </div>
    </div>
  );
};

export default MuokkaaUrheilija;
