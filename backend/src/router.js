import express from "express"
export const router = express.Router();

router.get("/", async (req, res) => {
    res.send("Connexion etablie !");
})

router.get("/db", async (req, res) => {
  try {
    const result = await pool.query("SELECT NOW()");
    res.json({
      message: "Connexion à la base réussie !",
      heure_serveur_bdd: result.rows[0].now,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Erreur de connexion à la base" });
  }
});
