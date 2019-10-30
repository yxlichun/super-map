import * as React from 'react';
import Map, { setAMapKey, setAMapVersion } from '../../components/Map';
import Polygon from '../../components/Polygon';

setAMapKey('f14b53ff8828b86585fa849ce39f8871');
setAMapVersion('1.4.15');

const { useReducer, useEffect } = React;

function App() {
  const initialState: [number, number][] = [[116.382122,39.901176], [116.387271,39.912501], [116.398258,39.904600]];
  const reducer = (state: any, action: string) => {
    switch (action) {
      case 'updatePath': return [
        [116.368904,39.913423], [116.382122,39.901176], [116.387271,39.912501], [116.398258,39.904600],
        [116.378904,39.913423], [116.357271,39.952501], [116.388258,39.904300],
      ];
      default: throw new Error('Unexpected action');
    }
  };

  const [path, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    setTimeout(() => {
      dispatch('updatePath');
    }, 5000);
  }, []);

  console.log('render App');
  return (
    <div className="App">
      <Map style = { { width: 1000, height: 600 } }>
        <Polygon
          polygonOptions = { { path } }
          events = { { click: (e) => { // 这里存在很大的隐患
            const target = e.target;
            target.setPath([[116.382122,39.901176], [116.387271,39.912501], [116.398258,39.904600]]);
          } } }
        />
      </Map>
    </div>
  );
}

export default App;
