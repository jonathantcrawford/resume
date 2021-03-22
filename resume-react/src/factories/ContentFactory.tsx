import React, {Suspense} from 'react';
import Text from '../components/basic/Text';


const ContentFactory = ({contentSchematic}: {contentSchematic: any}) => {

  const {template, data} = contentSchematic;

  const content = (() => {
    switch (template) {
      case "about":
        return React.createElement(React.lazy(() => {
          return Promise.all([
            import("../content/About"),
            new Promise(resolve => setTimeout(resolve, 300))
          ])
          .then(([moduleExports]) => moduleExports);
        }
        ), {data});
      default:
        return <Text>content template does not exist</Text>;
    }
  })();

  return (
    <Suspense fallback={<Text>building content</Text>}>
      {content}
    </Suspense>
  )
}
export default ContentFactory;