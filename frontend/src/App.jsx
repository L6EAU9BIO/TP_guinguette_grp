import { useState } from 'react'
import './App.css'

function App() {
    const [count, setCount] = useState(0)

    return (
        <>
        <header>
            <h1>Guingette Manager</h1>
            <h2>Outils de gestion de panier/vents de la Guingette</h2>
        </header>
        <section className="vente">

            <section className="interaction">
                <label htmlFor="">Produits</label>
                <input type="range"  />
                <label htmlFor="">Quantité</label>
                <input type="number" />
                <label htmlFor=""></label>
                <section className="prix_aff"></section>
            </section>
            <section className="panier">
                <p className="liste_panier"></p>
                <p className="total panier"></p>
            </section>

        </section>

        <section className="stats_ventes">

            section.

        </section>
            

        </>
    )
}

export default App
