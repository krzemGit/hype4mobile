import './style/App.scss'
import Background from './layout/Background'
import PeopleView from './pages/PeopleView'

function App() {
  return (
    <div className="App">
      <Background>
        <PeopleView />
      </Background>
    </div>
  );
}

export default App;
