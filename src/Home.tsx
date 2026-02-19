import Button from "./components/Button.tsx"; // ← Importe ton composant
import "./Home.css";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const handleClick = () => {
    console.log("Bouton cliqué !");
    navigate("/game");
  };

  return (
    <>
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
