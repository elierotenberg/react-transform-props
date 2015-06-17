const { describe, it } = global;
import transform from '../';
import _ from 'lodash';
import React from 'react';
import 'should';

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
    return <ul>{_.map(this.props, (v, k) =>
      <li key={k}>{k} => {v}</li>
    )}</ul>;
  }
}

describe('@transform', () =>
  it('should correctly transform props', () =>
    React.renderToStaticMarkup(<MyComponent _private={true} forbiddenProps={null} foo={'bar'} />)
      .should.be.exactly(React.renderToStaticMarkup(<ul>
        <li>foo => barbar</li>
      </ul>))
  )
);
