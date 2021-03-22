import React, {Suspense} from 'react';

import Error from '../components/error/Error';
import ThemeLoader from '../components/loaders/ThemeLoader';

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
        return <Error text="theme type does not exist"/>;
    }
  })();

  return (
    <Suspense fallback={<ThemeLoader text="building theme"/>}>
      {theme}
    </Suspense>
  )
}
export default ThemeFactory;