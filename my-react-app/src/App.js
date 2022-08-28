import { useCallback } from 'react';
import './App.css';

function App() {
  const refHandler = useCallback(c => c.addEventListener('formChange', v => console.log({reactComponent: v.detail})),[])
  return (
    <div className="App">
      <h1>React app</h1>
      <form-name name="juliano" surname="custodio" ref={refHandler} />
      <img src={process.env.PUBLIC_URL + '/logo512.png'} alt="logo" />
    </div>
  );
}

export default App;
