import './App.css';
import PersonCard from './PersonCard';

function App() {
  return (
    <div className="App">
      <PersonCard firstName="Anas" lastName="Alkhaled" age={ 18 } hairColor="Brown" /> 
      <PersonCard firstName="Ali" lastName="Mohammed" age={ 22 } hairColor="Black" /> 
      <PersonCard firstName="Saed" lastName="Saleh" age={ 25} hairColor="Brown" /> 
      <PersonCard firstName="Mosa" lastName="Fahad" age={ 20 } hairColor="blue" /> 
    </div>
  );
}

export default App;
