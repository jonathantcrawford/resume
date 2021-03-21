import React, {useState} from "react";


import ThemeFactory from '../factories/ThemeFactory';


const App = () => {

  const traditionalThemeSchematic = {
    type: 'traditional',
    configs: {}
  };

  const standardThemeSchematic = {
    type: 'standard',
    configs: {}
  };

  const invalidThemeTypeSchematic = {
    type: 'invalid',
    configs: {}
  }

  const [themeSchematic, setThemeSchematic] = useState(standardThemeSchematic);

  
  const themeSwitcher = (
    <>
      <div onClick={() => setThemeSchematic(standardThemeSchematic)}>standard</div>
      <div onClick={() => setThemeSchematic(traditionalThemeSchematic)}>traditional</div>
      <div onClick={() => setThemeSchematic(invalidThemeTypeSchematic)}>invalid theme</div>
    </>
  );
  
  return (
    <>

      <ThemeFactory themeSchematic={themeSchematic}/>
    </>
  );
};


export default App;