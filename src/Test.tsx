import * as React from 'react';
import './App.css';
import Map, { setAMapKey, setAMapVersion } from './components/Map';

setAMapKey('f14b53ff8828b86585fa849ce39f8871');
setAMapVersion('1.4.15');

function App() {
  return (
    <div className="App">
      <Map />
    </div>
  );
}

export default App;
