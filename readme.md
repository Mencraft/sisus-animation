# Sisu Animations

Sisu Animations is a powerful and easy-to-use animation package for React applications. It provides a collection of pre-built animations that you can easily integrate into your projects to add visual appeal and enhance user experience.

## Installation

To install Sisu Animations, use the following command:

```
npm install sisu-animations
```

## Usage

### Falling Divs Animation

The Falling Divs animation allows you to create a visually appealing effect where a list of divs falls from the top of a container. To use the Falling Divs animation, import the `FallingDivs` component and pass an array of divs as the `divs` prop:

```jsx
import React from 'react';
import { FallingDivs } from 'sisu-animations';

const App = () => {
  const divs = [
    <div key={1}>Div 1</div>,
    <div key={2}>Div 2</div>,
    <div key={3}>Div 3</div>,
  ];

  return (
    <div>
      <h1>Falling Divs Example</h1>
      <FallingDivs divs={divs} duration={1000} delay={200} />
    </div>
  );
};

export default App;
```

### Expand on Click Animation

The Expand on Click animation allows you to create an interactive effect where a div expands to cover the entire viewport when clicked. To use the Expand on Click animation, import the `ExpandOnClick` component and wrap your desired content with it:

```jsx
import React from 'react';
import { ExpandOnClick } from 'sisu-animations';

const App = () => {
  return (
    <div>
      <h1>Expand on Click Example</h1>
      <ExpandOnClick duration={500}>
        <div>Click me to expand!</div>
      </ExpandOnClick>
    </div>
  );
};

export default App;
```

## Props

### FallingDivs

| Prop      | Type            | Default | Description                                        |
| --------- | --------------- | ------- | -------------------------------------------------- |
| `divs`    | `React.ReactNode[]` | -       | An array of divs to be animated.                   |
| `duration` | `number`        | `1000`  | The duration of the falling animation in milliseconds. |
| `delay`   | `number`        | `100`   | The delay between each div's animation in milliseconds. |

### ExpandOnClick

| Prop      | Type            | Default | Description                                        |
| --------- | --------------- | ------- | -------------------------------------------------- |
| `children` | `React.ReactNode` | -       | The content to be wrapped and animated.            |
| `duration` | `number`        | `500`   | The duration of the expand animation in milliseconds. |

## Examples

Check out the [examples](./examples) directory for more usage examples and inspiration.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request on the [GitHub repository](https://github.com/your-username/sisu-animations).

## License

This package is licensed under the [MIT License](./LICENSE).
```

You can now copy and paste this markdown content into your `README.md` file for your "sisu-animations" package.