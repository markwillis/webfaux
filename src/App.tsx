import './App.css';
import React from 'react';
import {initialElementData, type elementData} from './data';
import {Designer} from './components/Designer'

export const App: React.FC<{}> = () => {
  // const [data, setData] = React.useState(initialElementData);
const [data, setData] = React.useState<elementData[]>(initialElementData);

  React.useEffect(() => {
    // go fetch eleemnt data stored somewhere.
    console.log(`data: ${data}`)
  }, [data])

  return (
    <div className="App">
      <Designer data={data} />
    </div>
  );
}
