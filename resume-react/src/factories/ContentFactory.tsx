import React, {Suspense} from 'react';




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
        return <div>content template does not exist</div>;
    }
  })();

  return (
    <Suspense fallback={<div>Building Content</div>}>
      {content}
    </Suspense>
  )
}
export default ContentFactory;