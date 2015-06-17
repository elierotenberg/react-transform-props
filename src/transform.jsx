import React from 'react';
import pure from 'pure-render-decorator';

function transform(transformProps, displayName) {
  return (Component) => @pure class extends React.Component {
    static displayName = displayName || `Transform${Component.displayName}`;
    render() {
      return <Component {...transformProps(this.props)} />;
    }
  };
}

export default transform;
