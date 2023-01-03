import React, { FC } from 'react';
import { useActions, useSelector } from './hooks';

const App: FC = () => {
	const { getFact } = useActions();
	const facts = useSelector(state => state.facts);

  const fetchData = (count = 0) => {
    getFact(() => {
      if (count < 2) {
        fetchData(count + 1)
      }
    });
  }

	return (
    <div>
      <button onClick={() => fetchData()}>Fetch Data</button>

      <div>
        <ul>
          {facts.map(f => <li key={f.id}>{f.text}</li>)}
        </ul>
      </div>
    </div>
	);
};

export default App;
