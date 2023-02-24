import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Banner from './components/Banner/Banner';
import Row from './components/Row/Row';
import requests from "./request";

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Navbar/>
      <Banner/>
      <Row title={"NETFLIX ORIGINALS"} fetchUrl={requests.fetchNetflixOriginals} isLargeRow/>
      <Row title={"Trending Now"} fetchUrl={requests.fetchTrending} isLargeRow/>
      <Row title={"History Movies"} fetchUrl={requests.fetchHistoryMovies} isLargeRow/>
      <Row title={"Animation Movies"} fetchUrl={requests.fetchAnimationMovies} isLargeRow/>
      <Row title={"Fantasy Movies"} fetchUrl={requests.fetchFantasyMovies} isLargeRow/>
      <Row title={"Romance Movies "} fetchUrl={requests.fetchRomanceMovies} isLargeRow/>
      </header>
    </div>
  );
}



export default App;
