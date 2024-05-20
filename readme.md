# Sisu Animations

Sisu Animations is a powerful and easy-to-use animation package for React applications. It provides a collection of pre-built animations that you can easily integrate into your projects to add visual appeal and enhance user experience.

## Installation

To install Sisu Animations, use the following command:


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