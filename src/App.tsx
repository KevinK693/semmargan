import { Routes, Route, BrowserRouter, Link} from "react-router-dom";
import Home from "./Home";
import Game from "./Game";


function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

function AppContent() {

  return (
    <>
      <header>
        <Link to="/" className="header-title">
          SEMMARGAN
        </Link>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/game" element={<Game />} />
      </Routes>
    </>
  );
}

export default App;