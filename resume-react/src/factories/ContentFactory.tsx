import React, {Suspense} from 'react';
import Text from '../components/basic/Text';
import Loader from '../components/loaders/Loader';

const ContentFactory = ({contentSchematic}: {contentSchematic: any}) => {

  const {template, data} = contentSchematic;

  const content = (() => {
    switch (template) {
      case "about":
        return React.createElement(React.lazy(() => {
          return Promise.all([
            import("../content/About"),
            new Promise(resolve => setTimeout(resolve, 800))
          ])
          .then(([moduleExports]) => moduleExports);
        }
        ), {data});
      default:
        return <Text>content template does not exist</Text>;
    }
  })();

  return (
    <Suspense fallback={<Loader themed text="building content"/>}>
      {content}
    </Suspense>
  )
}
export default ContentFactory;