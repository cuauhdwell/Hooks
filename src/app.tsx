import React, { FC, useRef, useState } from "react";

import Callback from './callbacks';
import Promise from './promises';

const App: FC = () => {
  const ref = useRef(null);
  const [app, setApp] = useState('callback');

  return (
    <div>
      <select
        onChange={() => setApp(ref.current.value)} ref={ref}>
        <option value="callback">Callback</option>
        <option value="promise">Promise</option>
      </select>

      <div style={{marginTop: '1rem'}}>
        {app === 'callback'
          ? <Callback />
          : <Promise />}
      </div>
    </div>
  );
};

export default App;
