const db = require("../config/db");

class Urheilija {
  constructor(
    etunimi,
    sukunimi,
    kutsumanimi,
    syntymavuosi,
    paino,
    kuvaLinkki,
    laji,
    saavutukset
  ) {
    this.etunimi = etunimi;
    this.sukunimi = sukunimi;
    this.kutsumanimi = kutsumanimi;
    this.syntymavuosi = syntymavuosi;
    this.paino = paino;
    this.kuvaLinkki = kuvaLinkki;
    this.laji = laji;
    this.saavutukset = saavutukset;
  }

  async save() {
    const sql = `
    INSERT INTO urheilijat 
    (etunimi, sukunimi, kutsumanimi, syntymavuosi, paino, kuvaLinkki, laji, saavutukset)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)
  `;
    const values = [
      this.etunimi,
      this.sukunimi,
      this.kutsumanimi || null,
      this.syntymavuosi ? new Date(this.syntymavuosi) : null,
      this.paino ? parseFloat(this.paino) : 0,
      this.kuvaLinkki || null,
      this.laji || null,
      this.saavutukset || null,
    ];
    const [result] = await db.execute(sql, values);
    return result;
  }

  static findAll() {
    const sql = "SELECT * FROM Urheilijat;";
    return db.execute(sql);
  }

  static findById(id) {
    const sql = "SELECT * FROM Urheilijat WHERE id = ?;";
    return db.execute(sql, [id]);
  }

  static async updateById(id, data) {
    const sql = `
      UPDATE Urheilijat SET
        etunimi = ?,
        sukunimi = ?,
        kutsumanimi = ?,
        syntymavuosi = ?,
        paino = ?,
        kuvaLinkki = ?,
        laji = ?,
        saavutukset = ?
      WHERE id = ?;
    `;
    return db.execute(sql, [
      data.etunimi,
      data.sukunimi,
      data.kutsumanimi,
      data.syntymavuosi,
      data.paino,
      data.kuvaLinkki,
      data.laji,
      data.saavutukset,
      id,
    ]);
  }

  static deleteById(id) {
    const sql = "DELETE FROM Urheilijat WHERE id = ?;";
    return db.execute(sql, [id]);
  }
}

module.exports = Urheilija;
