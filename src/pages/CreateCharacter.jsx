import { useState } from 'react';
import './CreateCharacter.css';
import supabase from '../client.js';

const CreateCharacter = () => {
  const [character, setCharacter] = useState({
    name: "",
    style: "glam",
    accessories: "",
    team: ""
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setCharacter((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const createCharacter = async (event) => {
    event.preventDefault();

    const { data, error } = await supabase
      .from('characters')
      .insert({
        name: character.name,
        style: character.style,
        accessories: character.accessories.split(',').map(item => item.trim()),
        team: character.team
      });

    if (error) {
      console.error("Insert error:", error);
      alert("Failed to create character. Check console for details.");
    } else {
      window.location = "/";
    }
  };

  return (
    <div>
      <form onSubmit={createCharacter}>
        <label htmlFor="name">Name</label><br />
        <input type="text" id="name" name="name" value={character.name} onChange={handleChange} /><br /><br />

        <label htmlFor="style">Style</label><br />
        <select id="style" name="style" value={character.style} onChange={handleChange}>
          <option value="glam">Glam</option>
          <option value="sporty">Sporty</option>
        </select><br /><br />

        <label htmlFor="accessories">Accessories (comma-separated)</label><br />
        <input type="text" id="accessories" name="accessories" value={character.accessories} onChange={handleChange} /><br /><br />

        <label htmlFor="team">Team</label><br />
        <input type="text" id="team" name="team" value={character.team} onChange={handleChange} /><br /><br />

        <input type="submit" value="Add Character" />
      </form>
    </div>
  );
};

export default CreateCharacter;