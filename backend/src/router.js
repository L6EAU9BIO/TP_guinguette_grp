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
<<<<<<< HEAD

// Vérifie qu'un code vendeur existe

router.get ("/db/vendeurs/:numero_vendeur" , async (req,res) => {
  try {
    const {rows} = await pool.query("SELECT id FROM vendeurs WHERE numero_vendeur = $1", [req.params.numero_vendeur] )
    res.status(200).json({"data": rows})
  } catch (error) {
  console.error(error)
  res.status(400).json({"error" : "Le numero du vendeur n'a pas été trouvé"})
  } 
})

// Liste les produits

router.get ("/db/produits" , async (req,res) => {
  try {
    const {rows} = await pool.query("SELECT * FROM produits")
    res.status(200).json({"data": rows})
  } catch(error) {
    console.error(error)
    res.status(400).json({"error" : "Aucun produit à lister"})
  }
})



=======
>>>>>>> 2ef1802f657e1600c6e72f3a082064c4a511cfbf
