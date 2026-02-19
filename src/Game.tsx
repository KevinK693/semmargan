import "./Game.css";
import { useState, useEffect } from "react";
import { getRandomWords } from "./data/words.ts";
import type { WordData } from "./data/words.ts";
import { useNavigate } from "react-router-dom";

function Game() {
  const [currentWord, setCurrentWord] = useState<WordData | null>(null);
  const [userInput, setUserInput] = useState("");
  const [foundAnagrams, setFoundAnagrams] = useState<string[]>([]);
  const [timer, setTimer] = useState(120);
  const [isWon, setIsWon] = useState(false);
  const [isLost, setIsLost] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    if (timer === 0) {
      setIsLost(true);
    }
  }, [timer]);

  useEffect(() => {
    if (
      foundAnagrams.length === currentWord?.validAnagrams.length &&
      foundAnagrams.length > 0
    ) {
      setIsWon(true);
    }
  }, [foundAnagrams]);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prev) => {
        if (prev <= 0) {
          clearInterval(interval); // Arrête quand ça atteint 0
          return 0;
        }
        if (isWon) {
          // ← Ajoute aussi ça !
          clearInterval(interval);
          return prev; // Garde la valeur actuelle
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval); // Nettoyage
  }, [isWon]);

  const handleHome = () => {
    navigate("/");
  };

  const handleReplay = () => {
    const randomWords = getRandomWords();
    setCurrentWord(randomWords);
    setFoundAnagrams([]);
    setUserInput("");
    setTimer(120);
    setIsWon(false);
  };

  const handleSubmit = () => {
    if (
      currentWord &&
      currentWord.validAnagrams.includes(userInput.toUpperCase()) &&
      userInput.toUpperCase() !== currentWord.word &&
      !foundAnagrams.includes(userInput.toUpperCase())
    ) {
      setFoundAnagrams([...foundAnagrams, userInput.toUpperCase()]);
      setUserInput("");
    }
  };

  useEffect(() => {
    const randomWords = getRandomWords();
    setCurrentWord(randomWords);
  }, []);

  if (!currentWord) {
    return <div>Chargement...</div>;
  }

  return (
    <>
      {isWon && (
        <div className="win-overlay">
          <div className="win-message">
            <p>🎉 Bravo !</p>
            <p>Tu as tout trouvé !</p>
            <div className="win-buttons">
              <button onClick={handleReplay} className="win-button">
                Rejouer
              </button>
              <button onClick={handleHome} className="win-button">
                Accueil
              </button>
            </div>
          </div>
        </div>
      )}
      {isLost && (
        <div className="lose-overlay">
          <div className="lose-message">
            <p>😢 Temps écoulé !</p>
            <p>Tu as perdu...</p>
            <div className="lose-buttons">
              <button className="lose-button">Rejouer</button>
              <button className="lose-button">Accueil</button>
            </div>
          </div>
        </div>
      )}
      <main>
        <div className="container-game">
          <p className="sentence">Trouve les anagrammes de :</p>
          <p className="word">{currentWord.word}</p>
          <p className="find">
            Trouvés : {foundAnagrams.length}/{currentWord.validAnagrams.length}
          </p>
          <div className="input-container">
            <input
              type="text"
              placeholder="Entrer votre mot"
              onChange={(e) => setUserInput(e.target.value)}
              value={userInput}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleSubmit();
                }
              }}
            />
          </div>
          <button onClick={handleSubmit} className="bouton-valider">
            Valider
          </button>
        </div>
      </main>
      <div className="game-footer">
        <div className="container-footers">
          <div className="game-footer-left">
            <div className="timer-container">
              <div className="timer">{`${Math.floor(timer / 60)}:${
                timer % 60 < 10 ? `0${timer % 60}` : timer % 60
              }`}</div>
            </div>
          </div>
          <div className="game-footer-right">
            <p className="text-result">Anagramme(s) trouvé(s) :</p>
            {foundAnagrams.map((anagram, index) => (
              <p key={index} className="words-find">
                ✅ {anagram}
              </p>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
export default Game;
