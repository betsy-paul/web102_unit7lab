import { useState, useEffect } from 'react';
import Card from '../components/Card.jsx';
import supabase from '../client.js';
import { Link } from 'react-router-dom';

const ShowCharacters = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const fetchCharacters = async () => {
      const { data } = await supabase
        .from('characters')
        .select()
        .order('created_at', { ascending: false });

      setCharacters(data);
      console.log(data)
    };

    fetchCharacters();
  }, []);

  return (
    <div className="ShowCharacters">
        {
        characters && characters.length > 0 ? (
            characters.map((character) => (
            <Link key={character.id} to={`/character/${character.id}`}>
            <Card
                id={character.id}
                name={character.name}
                style={character.style}
                accessories={character.accessories}
                team={character.team}
            />
            </Link>
            ))
        ) : (
            <h4><i>No Characters yet. Click above to create one!</i></h4>
        )
        }
    </div>
    );
};

export default ShowCharacters;