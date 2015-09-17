import React from 'react';

import { addons } from 'react/addons';
const { PureRenderMixin } = addons;

function transform(transformProps, shouldTransformComponentUpdate, displayName) {
  return (Component) => class extends React.Component {
    static displayName = displayName || `Transform${Component.displayName}`;

    shouldComponentUpdate(...args) {
      if(shouldTransformComponentUpdate) {
        return shouldTransformComponentUpdate.apply(this, [this, ...args]);
      }
      return PureRenderMixin.shouldComponentUpdate.apply(this, args);
    }

    render() {
      return <Component {...transformProps(this.props)} />;
    }
  };
}

export default transform;
