import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import NewsItem from './components/NewsItem';
import News from './components/News';

function App() {

//   const getData = async () => {
//     console.log("Hello")
//     const url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=d4fd151e4bde4205a4a321ea59435472";
//     let data = await fetch(url);
//     const response = await data.json();
//     console.log(response);
// }


  return (
    <div className="App">
      <Navbar />
      <News/>
      {/* <button onClick={getData}>get Data</button> */}
    </div>
  );
}

export default App;
