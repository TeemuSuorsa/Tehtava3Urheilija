const Urheilija = require("../models/urheilija");

exports.getAll = async (req, res, next) => {
  try {
    const [urheilijat, _] = await Urheilija.findAll();
    res.status(200).json({ count: urheilijat.length, urheilijat });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

exports.getById = async (req, res, next) => {
  try {
    const id = Number(req.params.id);
    const [urheilija, _] = await Urheilija.findById(id);
    if (!urheilija.length)
      return res.status(404).json({ message: "Urheilijaa ei löytynyt" });
    res.status(200).json({ urheilija: urheilija[0] });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

exports.create = async (req, res, next) => {
  try {
    console.log("Req body:", req.body);
    const {
      etunimi,
      sukunimi,
      kutsumanimi,
      syntymavuosi,
      paino,
      kuvaLinkki,
      laji,
      saavutukset,
    } = req.body;
    const uusi = new Urheilija(
      etunimi,
      sukunimi,
      kutsumanimi,
      syntymavuosi,
      paino,
      kuvaLinkki,
      laji,
      saavutukset
    );
    await uusi.save();
    res.status(201).json({ message: "Urheilija lisätty" });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

exports.update = async (req, res, next) => {
  try {
    const id = Number(req.params.id);
    await Urheilija.updateById(id, req.body);
    res.status(200).json({ message: "Urheilija päivitetty" });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

exports.remove = async (req, res, next) => {
  try {
    const id = Number(req.params.id);
    await Urheilija.deleteById(id);
    res.status(200).json({ message: "Urheilija poistettu" });
  } catch (error) {
    console.log(error);
    next(error);
  }
};
