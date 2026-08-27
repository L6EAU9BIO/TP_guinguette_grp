













































// Insère une nouvelle vente 
Router.post("/db/ventes", async (req, res) => {
    try {
        const now = new Date();
        const dateJour = now.toISOString().slice(0, 10);
        const heure = now.toTimeString().slice(0, 8);

        const { vendeur_id, lignes } = req.body;
        const {rows} = await pool.query(
            "INSERT INTO ventes( date, heure, vendeur_id) VALUES ($1, $2, $3) RETURNING*" , [ dateJour, heure, vendeur_id]
        )

        await pool.query(
            "INSERT INTO ventes_lignes( vente_id, produit_id, quantite) VALUES ($1, $2, $3) RETURNING*" , 
            [rows[0].id, produit_id, quantite]
        )

        res.statut(200).json({"data": "nouvelle vente inserer"})
    }catch (err){
        res.statut(400).json({"error": error})
    }
  
})
    