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
    const { email, password } = userData;
    const URL = "http://localhost:3001/rickandmorty/login/";
    axios(URL + `?email=${email}&password=${password}`).then(({ data }) => {
      const { access } = data;
      setAccess(data);
      access && navigate("/home");
    });
  };
  const logout = () => {
    setAccess(false);
  };
  useEffect(() => {
    !access && navigate("/");
  }, [access]);

  const onSearch = async (id) => {
    if (charactersId.includes(parseInt(id))) {
      window.alert("El personaje ya existe");
      return;
    }
    try {
      const { data } = await axios(
        `http://localhost:3001/rickandmorty/character/${id}`
      );

      console.log(data);
      if (data.name) {
        setCharacters((oldChars) => [...oldChars, data]);
        setCharactersId([...charactersId, data.id]);
      } else {
        window.alert("¡No hay personajes con este ID!");
      }
    } catch (error) {
      console.log(error);
      window.alert("No fue posible hacer la solicitud al servidor");
    }
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
        <Route path="/favorites" element={<Favorites onClose={onClose} />} />
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
