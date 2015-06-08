React Transform Props
=====================

Transform the input props of a React.Component using a higher-order component decorator.

### Example

```js
@transform(({ props }) => _(props)
  // filter out properties which key start with '_'
  .filter((v, k) => !k.startsWith('_'))
  // filter out 'forbiddenProps'
  .omit(['forbiddenProps'])
  // add (or concatenate) each value to itself
  .mapValues((v) => v + v)
.value())
class MyComponent extends React.Component {
  ...
}
```

When referencing `<MyComponent _private={true} forbiddenProps={null} foo={'bar'} />`, actually `<MyComponent foo={'barbar'} />` will be created.

#### License

MIT [Elie Rotenberg](http://elie.rotenberg.io) <[elie@rotenberg.io](mailto:elie@rotenberg.io)>
