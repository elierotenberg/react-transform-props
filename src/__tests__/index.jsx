const { describe, it } = global;
import React from 'react';
import transform from '../';
import _ from 'lodash';
import 'should';

describe('@transform', () => {
  @transform((props) => _(props)
    // filter out 'forbiddenProps'
    .omit(['forbiddenProps'])
    // filter out properties which key start with '_'
    .pairs()
    .filter(([k]) => k.charAt(0) !== '_')
    .object()
    // add (or concatenate) each value to itself
    .mapValues((v) => v + v)
  .value())
  class MyComponent extends React.Component {
    static displayName = 'MyComponent';

    render() {
      return <div>
        {JSON.stringify(this.props)}
      </div>;
    }
  }

  const html = React.renderToStaticMarkup(<MyComponent _private={true} forbiddenProps={null} foo={'bar'} />);
  it('should output the correct HTML', () =>
    html.should.be.exactly(React.renderToStaticMarkup(<div>
      {JSON.stringify({ foo: 'barbar' })}
    </div>))
  );
});
