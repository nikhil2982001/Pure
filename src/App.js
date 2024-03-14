//import logo from './logo.svg';
import './App.css';
import ManageOfferCard from './ManageOfferCard';
import OrderCard from './OrderCard';
import SpacialMenuCard from './SpacialMenuCard';
import UpcomingNewMenuCard from './UpcomingNewMenuCard';
import Manage from './Page';
function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
       <ManageOfferCard />
      <OrderCard />
      <SpacialMenuCard />
      <UpcomingNewMenuCard />
      <Manage />
    </div>
  );
}

export default App;
