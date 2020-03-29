const connection = require("../database/connection");

module.exports = {
  async index(req, res) {
    const { id } = req.body;

    const ong = await connection("ongs")
      .select("name")
      .where("id", id)
      .first();

    if (!ong) {
      return res.status(400).send({ error: "No ONG found with this ID" });
    }

    return res.json(ong);
  }
};
