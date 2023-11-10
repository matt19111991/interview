import { useEffect, useState } from "react";
import logo from './logo.svg';
import './App.css';

function App() {
  const [serverPhotos, setServerPhotos] = useState([]);
  const [filteredPhotos, setFilteredPhotos] = useState([]);

  const [loading, setLoading] = useState(false);

  const [search, setSearch] = useState('');

  const onChange = e => {
    setSearch(() => e.target.value);
  };

  useEffect(() => {
    if (serverPhotos.length) {
      const timer = setTimeout(() => {
        setLoading(false);

        setFilteredPhotos(
            search.length
              ? serverPhotos.filter(photo => photo.title.includes(search))
              : serverPhotos
        );
      }, 800);

      return () => {
        setLoading(true);

        clearTimeout(timer);
      };
    }
  }, [search, serverPhotos]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('https://jsonplaceholder.typicode.com/photos');
      const data = await response.json();

      if (data) {
        const partial = data.slice(0, 100); // get partial data in order to render faster

        setServerPhotos(partial);
      }
    }

    fetchData();
  }, []);

  console.log('---render---');

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className={`App-logo${loading ? '-animated' : ''}`} alt="logo" />

        <label className="search-label" htmlFor="search">Search</label>
        <input className="search-field" id="search" type="text" onChange={onChange} value={search} />
        <p>({filteredPhotos.length} images displayed)</p>

        {filteredPhotos.map(({ id, title, thumbnailUrl }) => (
          <div key={id}>
            <b>{id}</b>
            <h3>{title}</h3>
            <img alt={title} src={thumbnailUrl} height={100} width={100} />
          </div>
        ))}
      </header>
    </div>
  );
}

export default App;
