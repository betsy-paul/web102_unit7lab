import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import supabase from '../client.js';
import './CharacterDetail.css'

const CharacterDetail = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    const fetchCharacter = async () => {
      const { data, error } = await supabase
        .from('characters')
        .select()
        .eq('id', id)
        .single();

      if (error) console.error(error);
      else setCharacter(data);
    };

    fetchCharacter();
  }, [id]);

  if (!character) return <p>Loading...</p>;

  return (
    <div>
      <h2>{character.name}</h2>
      <p>Style: {character.style}</p>
      <p>Team: {character.team}</p>
      <p>Created: {new Date(character.created_at).toLocaleString()}</p>
      {/* Add more detailed info here */}
      <Link to={`/character/${id}/edit`} className='editLink'>Edit This Crewmate</Link>
    </div>
  );
};

export default CharacterDetail;