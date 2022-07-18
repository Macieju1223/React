import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header';
import Search from './components/Search';


const TOCKEN = process.env.REACT_APP_TOCKEN;



function App() {
  const [word, setWord] = useState('')

  const handlerSearchSubmit = (e) => {
    e.preventDefault();
    console.log(word);
    //fetch(`https://api.unsplash.com/photos/random/?query=${word.target[0].value}&client_id=${TOCKEN}`)
    // .then((res) => res.json())
    // .then((data) => {console.log(data);})
    // .catch((error) => {console.log(error);})

    setWord('');
  }
  return (
    <div>
      <Header title='Images Gallery'/>
      <Search word={word} setWord={setWord} handleSubmit={handlerSearchSubmit}/>
    </div>
  );
}

export default App;
