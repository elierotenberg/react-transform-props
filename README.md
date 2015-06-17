React Transform Props
=====================

Transform the input props of a React.Component using a higher-order component decorator.

### Example

```js
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
  ...
}
```


When referencing `<MyComponent _private={true} forbiddenProps={null} foo={'bar'} />`, actually `<MyComponent foo={'barbar'} />` will be created.

### But... why?

You probably don't need to use this decorator on your average widget component. The most frequent use cases are:

- To normalize props input somehow, without polluting your component constructor

- To chain higher-order components (such as [`@Nexus.component`](https://github.com/elierotenberg/react-nexus))

#### License

MIT [Elie Rotenberg](http://elie.rotenberg.io) <[elie@rotenberg.io](mailto:elie@rotenberg.io)>

#### Installation

This module is written in ES6/7. You will need `babel` to run it.
