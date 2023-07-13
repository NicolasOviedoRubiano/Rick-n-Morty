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
    axios(`http://localhost:3001/rickandmorty/character/${id}`)
      .then(({ data }) => {
        console.log(data);
        if (data.data.name) {
          setCharacters((oldChars) => [...oldChars, data.data]);
          setCharactersId([...charactersId, data.data.id]);
        } else {
          window.alert("¡No hay personajes con este ID!");
        }
      })
      .catch((err) => {
        console.log(err);
        window.alert("No fue posible hacer la solicitud al servidor");
      });
  };
  const onClose = (id) => {
    setCharacters(
      characters.filter((character) => {
        return character.id !== id;
      })
    );
    setCharactersId(
      charactersId.filter((chId) => {
        return chId !== id;
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
