import * as React from 'react';
import MapPlayer, { FrameProps } from '../../modules/MapPlayer';
import Polyline from '../../components/Polyline';

const { useState, useEffect } = React;

function App() {
  const mockData: any = {
    1532579620000: [
      [[116.303843, 39.933412], [116.407012, 39.992093]],
      [[116.203843, 39.23412], [116.407012, 39.992093]],
      [[116.103843, 39.283412], [116.407012, 39.992093]],
    ],
    1532579621000: [
      [[116.303343, 39.923412], [116.407012, 39.992093]],
      [[116.30243, 39.983412], [116.407012, 39.992093]],
      [[116.33843, 39.63412], [116.407012, 39.992093]],
    ],
    1532579623000: [
      [[116.30243, 39.983412], [116.407012, 39.992093]],
      [[116.32843, 39.98212], [116.407012, 39.992093]],
      [[116.30343, 39.91412], [116.407012, 39.992093]],
      [[116.33843, 39.63412], [116.407012, 39.992093]],
    ],
    1532579625000: [
      [[116.303343, 39.923412], [116.407012, 39.992093]],
      [[116.403843, 39.982412], [116.407012, 39.992093]],
      [[116.32843, 39.98212], [116.407012, 39.992093]],
      [[116.30343, 39.91412], [116.407012, 39.992093]],
    ],
    1532579650000: [
      [[116.103843, 39.283412], [116.407012, 39.992093]],
      [[116.323843, 39.933412], [116.407012, 39.992093]],
      [[116.302843, 39.33412], [116.407012, 39.992093]],
      [[116.303343, 39.943412], [116.407012, 39.992093]],
    ],
    1532580620000: [
      [[116.30343, 39.91412], [116.407012, 39.992093]],
      [[116.33843, 39.63412], [116.407012, 39.992093]],
      [[116.323843, 39.583412], [116.407012, 39.992093]],
    ]
  }

  const [ data, setData ] = useState({});

  useEffect(() => {
    setTimeout(() => {
      console.log('-----------------', 'get remote data');
      setData(mockData);
    }, 10000);
  }, []);

  return (
    <div>
      <MapPlayer
        data = { data }
        range = { [1532579620000, 1532580620000] }
        frequency = { 12 }
      >
        {(frameProps: FrameProps) => {
          return frameProps.frameData.map((path: any, index: number) => (
            <Polyline
              key = { index }
              polylineOptions = { { path } }
            />
          ))
        }}
      </MapPlayer>
    </div>
  );
}

export default App;
