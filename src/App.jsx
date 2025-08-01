import './App.css';
import React, { useState, useEffect } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import ShowCharacters from './pages/ShowCharacters';
import CreateCharacter from './pages/CreateCharacter';
import EditCharacter from './pages/EditCharacter';
import CharacterDetail from './pages/CharacterDetail';
import SummaryPage from "./components/SummaryPage";
import supabase from './client.js';


const App = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    async function fetchCharacters() {
      const { data, error } = await supabase.from("characters").select("*");
      if (error) {
        console.error("Error fetching characters:", error);
      } else {
        setCharacters(data);
      }
    }

    fetchCharacters();
  }, []);

  return (
    <div className="App">
      <div className="header">
        <h1>💫 Dream Squad Builder</h1>
        <Link to="/"><button className="headerBtn">See Current Characters</button></Link>
        <Link to="/new"><button className="headerBtn">Create Character</button></Link>
        <SummaryPage characters={characters} />
      </div>

      <Routes>
        <Route path="/" element={<ShowCharacters />} />
        <Route path="/character/:id" element={<CharacterDetail />} />
        <Route path="/character/:id/edit" element={<EditCharacter />} />
        <Route path="/new" element={<CreateCharacter />} />
      </Routes>
    </div>
  );
};

export default App;