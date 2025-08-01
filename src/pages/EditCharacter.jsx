import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './EditCharacter.css';
import supabase from '../client';

const EditCharacter = () => {
  const { id } = useParams();

  const [character, setCharacter] = useState({
    id: null,
    name: "",
    style: "",
    accessories: "",
    team: ""
  });

  useEffect(() => {
    const fetchCharacter = async () => {
      const { data } = await supabase
        .from('characters')
        .select()
        .eq('id', id)
        .single();

      if (data) {
        setCharacter({
          ...data,
          accessories: Array.isArray(data.accessories) ? data.accessories.join(', ') : ""
        });
      }
    };

    fetchCharacter();
  }, [id]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setCharacter((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const updateCharacter = async (event) => {
    event.preventDefault();

    await supabase
      .from('characters')
      .update({
        name: character.name,
        style: character.style,
        accessories: character.accessories.split(',').map(item => item.trim()),
        team: character.team
      })
      .eq('id', id);

    window.location = "/";
  };

  const deleteCharacter = async (event) => {
    event.preventDefault();

    await supabase
      .from('characters')
      .delete()
      .eq('id', id);

    window.location = "/";
  };

  return (
    <div>
      <form>
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

        <input type="submit" value="Update Character" onClick={updateCharacter} />
        <button className="deleteButton" onClick={deleteCharacter}>Delete</button>
      </form>
    </div>
  );
};

export default EditCharacter;