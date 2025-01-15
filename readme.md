# HeatMap Component

The `HeatMap` component provides an easy way to display a customizable heatmap visualization. It supports dynamic rendering of dates and values in a grid layout, with customizable styles and configurations. It can be used in React applications or integrated into a normal HTML page.

## Features

- **Customizable Data Range**: Choose a color gradient for the heatmap based on your data values.
- **Customizable Layout**: Configure grid spacing, box size, margins, and font sizes.
- **Flexible Styling**: Customize text colors, background colors, and more.
- **Date Handling**: Supports year-based data and shows months, days, and contributions on hover.
- **Compatibility**: Works both in React applications and in traditional HTML pages.

## Installation

### React (npm)

To install the component in a React application, use npm:

```bash
npm install heat-map-component
```
### In React

Import the component into your React project and use it with your data.

```tsx
import HeatMap from 'heat-map-component';

const App = () => {
  const heatmapData = {
    "2025-01-01": 5,
    "2025-01-02": 10,
    "2025-01-03": 15,
    // Add more dates and corresponding values
  };

  return (
    <div>
      <HeatMap 
        year={2025}
        data={heatmapData}
        colorRange={['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353']}
        textColor="#fff"
        monthLabels={true}
        dayLabels={['Mon', 'Tue', 'Wed', 'Thu', 'Fri']}
        gridGap="5px"
        boxSize="15px"
      />
    </div>
  );
};

export default App;
