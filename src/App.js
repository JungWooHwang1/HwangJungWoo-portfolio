import Main from './Components/Main';
import { Reset } from 'styled-reset'

function App() {
  return (
    <div className="App">
      <Reset />
      {/* Reset CSS 적용 */}
      <Main />
    </div>
  );
}

export default App;
