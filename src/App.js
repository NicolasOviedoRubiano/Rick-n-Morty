import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Form from "./components/Form/Form";
import NavBar from "./components/NavBar/NavBar.jsx";
import Cards from "./components/Cards/Cards";
import Detail from "./components/Detail/Detail.jsx";
import Favorites from "./components/Favorites/Favorites";
import About from "./components/About/About.jsx";
import "./Styles/App.css";

function App() {
  const [characters, setCharacters] = useState([]);
  const [charactersId, setCharactersId] = useState([]);
  const [access, setAccess] = useState(false);
  const navigate = useNavigate();
  const EMAIL = "prueba@rick.co";
  const PASSWORD = "Prueba97";
  const login = (userData) => {
    if (userData.email === EMAIL && userData.password === PASSWORD) {
      setAccess(true);
      navigate("/home");
    }
  };
  const logout = () => {
    setAccess(false);
  };
  useEffect(() => {
    !access && navigate("/");
  }, [access]);

  const onSearch = (id) => {
    if (charactersId.includes(parseInt(id))) {
      window.alert("El personaje ya existe");
      return;
    }
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(
      ({ data }) => {
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
          setCharactersId([...charactersId, data.id]);
        } else {
          window.alert("¡No hay personajes con este ID!");
        }
      }
    );
  };
  const onClose = (id) => {
    setCharacters(
      characters.filter((character) => {
        return character.id !== id;
      })
    );
  };
  return (
    <div className="App">
      {useLocation().pathname === "/" ? null : (
        <NavBar onSearch={onSearch} logout={logout} />
      )}
      <Routes>
        <Route path="/" element={<Form login={login} />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
