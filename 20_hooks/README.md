# Installation of Bootstrap in the project

```
npm install bootstrap
```

### Open src/index.js and add the following import statement at the top:

```
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';

const MyComponent = () => {
  return (
    <button className="btn btn-primary">Primary Button</button>
  );
};

export default MyComponent;

```