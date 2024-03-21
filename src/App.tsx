// App.tsx
import React from 'react';
import RPTProductGradeMappingEvent from './Dashboard';
import { GlobalStyle } from './GlobalStyle';

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <div className="App">
        <RPTProductGradeMappingEvent />
      </div>
    </>
  );
};

export default App;


