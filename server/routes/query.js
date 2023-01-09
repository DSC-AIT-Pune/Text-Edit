const router = require("express").Router();
const Query = require("../model/Query");

router.get("/getquery", async (req, res) => {
  try {
    const queries = await Query.find();
    res.json({ queries });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Some error occurred");
  }
});

router.post("/addquery", async (req, res) => {
  const { email, name, phone, query } = req.body;
  try {
    const queries = new Query({
      email,
      name,
      phone,
      query,
    });
    const save_query = await queries.save();
    res.json(save_query);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Some error occurred");
  }
});

module.exports = router;
