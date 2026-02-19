import Button from "./components/Button.tsx";
import "./Home.css";
import { useNavigate } from "react-router-dom";
import { Helmet } from 'react-helmet-async';  // ← Ajoute cette ligne

function Home() {
  const navigate = useNavigate();

  const handleClick = () => {
    console.log("Bouton cliqué !");
    navigate("/game");
  };

  return (
    <>
      <Helmet>
        <title>Semmargan - Jeu d'anagrammes gratuit en français</title>
        <meta 
          name="description" 
          content="Jouez à Semmargan ! Trouvez tous les anagrammes d'un mot en 60 secondes. Jeu gratuit, en ligne, sans inscription." 
        />
        <meta 
          name="keywords" 
          content="anagrammes, jeu, français, mots, gratuit, en ligne" 
        />
        <meta property="og:title" content="Semmargan - Jeu d'anagrammes" />
        <meta property="og:description" content="Trouvez tous les anagrammes en 60 secondes !" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://semmargan.vercel.app" />
      </Helmet>

      <main>
        <p className="subtitle">Bienvenue sur</p>
        <h1 className="home-title">SEMMARGAN</h1>
        <p className="home-description">
          Trouve tous les anagrammes d'un mot !
        </p>
        <p>Un anagramme est un mot formé avec les mêmes lettres.</p>
      </main>
      <div className="button-container">
        <Button onClick={handleClick}>Jouer</Button>
      </div>
    </>
  );
}

export default Home;