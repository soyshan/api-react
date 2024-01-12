import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Characters from './components/Characters';
import Pagination from './components/Pagination';

function App() {
  const [characters, setCharacters] = useState([]);
  const [info, setInfo] = useState({ prev: null, next: null });
  const initialUrl = 'https://rickandmortyapi.com/api/character';
  const [searchTerm, setSearchTerm] = useState('Rick Sanchez');

  const fetchCharacters = (url) => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setCharacters(data.results);
        setInfo({
          prev: data.info ? data.info.prev || null : null,
          next: data.info ? data.info.next || null : null,
        });
      })
      .catch((error) => console.log(error));
  };

  const onPrevious = () => {
    if (info.prev) {
      fetchCharacters(info.prev);
    }
  };

  const onNext = () => {
    if (info.next) {
      fetchCharacters(info.next);
    }
  };

  useEffect(() => {
    const searchUrl = `${initialUrl}?name=${searchTerm}`;
    fetchCharacters(searchUrl);
  }, [searchTerm]);

  return (
    <>
      <Navbar brand="Rick y Morty App" />
      <div className="container mt-5">
        <div className="search-box">
          <input
            type="search"
            placeholder="Search"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <Pagination
          prev={info.prev}
          next={info.next}
          onPrevious={onPrevious}
          onNext={onNext}
        />
        <Characters characters={characters} />
        <Pagination
          prev={info.prev}
          next={info.next}
          onPrevious={onPrevious}
          onNext={onNext}
        />
      </div>
    </>
  );
}

export default App;
