import './App.css';
import Header from './components/header';
import Showcase from './components/showcase';
import Main from './components/main';

const App = ()=> {
  return (
    <div className="App">
      {/* My header section */}
      <Header />

      {/* My showcase section */}
      <Showcase />

      {/* My main section */}
      <Main />
      
    </div>
  );
}

export default App;
