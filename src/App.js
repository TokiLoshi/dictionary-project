
import './App.css';
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App m-2">
      <div className="container shadow">
      <header className="App-header m-2 mb-3 shadow p-3 rounded">
        <h1> 📘 Dictionary App 📚</h1>
        
      </header>
      <Dictionary />
    <footer><p className='App-footer'><small><a href='https://github.com/TokiLoshi/dictionary-project' target='blank' rel='noopener noreferrer'>Open sourced</a>, coded by <a href='https://tiny-valkyrie-cad23c.netlify.app/' target='blank' rel='noopener noreferrer'>Bianca Silva</a></small></p></footer>
    </div>
    </div>
  );
}

export default App;
