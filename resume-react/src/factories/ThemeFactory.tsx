import React, {Suspense} from 'react';




const ThemeFactory = ({themeSchematic}: {themeSchematic: any}) => {

  const {type, configs} = themeSchematic;

  const theme = (() => {
    switch (type) {
      case "standard":
        return React.createElement(React.lazy(() => {
          return Promise.all([
            import("../themes/standard"),
            new Promise(resolve => setTimeout(resolve, 1000))
          ])
          .then(([moduleExports]) => moduleExports);
        }
        ), {configs});
      case "traditional":
        return React.createElement(React.lazy(() => {
          return Promise.all([
            import("../themes/traditional"),
            new Promise(resolve => setTimeout(resolve, 1000))
          ])
          .then(([moduleExports]) => moduleExports);
        }
        ), {configs});
      default:
        return <div>theme type does not exist</div>;
    }
  })();

  return (
    <Suspense fallback={<div>Building Theme</div>}>
      {theme}
    </Suspense>
  )
}
export default ThemeFactory;