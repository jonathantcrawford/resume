import React, {useState} from "react";


import ThemeFactory from './factories/ThemeFactory';


const App = () => {

  const traditionalThemeSchematic = {
    type: 'traditional',
    configs: {},
  };

  const standardThemeSchematic = {
    type: 'standard',
    configs: {},
  };

  const invalidThemeTypeSchematic = {
    type: 'invalid',
    configs: {},
  }

  const [themeSchematic, setThemeSchematic] = useState(standardThemeSchematic);

  
  const themeSwitcher = (
    <div style={{
      position: 'fixed', 
      top: '0', 
      right: '0'
      }}>
      <button onClick={() => setThemeSchematic(standardThemeSchematic)}>standard</button>
      <button onClick={() => setThemeSchematic(traditionalThemeSchematic)}>traditional</button>
      <button onClick={() => setThemeSchematic(invalidThemeTypeSchematic)}>invalid theme</button>
    </div>
  );
  
  return (
    <>
      {themeSwitcher}
      <ThemeFactory themeSchematic={themeSchematic}/>
    </>
  );
};


export default App;