import './App.css';
import Search from './components/Search'
function App() {

  navigator.geolocation.getCurrentPosition(position => {
    console.log(position)
    
  });

  return (
    <Search></Search>
  );
}

export default App;
