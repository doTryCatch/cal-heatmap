# HeatMap Component

The `HeatMap` component is a powerful and customizable heatmap visualization tool for React applications. It renders a grid-based representation of data, making it ideal for visualizing date-specific values like contributions, attendance, or any other time-based data trends.

---
![My Image](public/image/heatmap.png)
---

## 🌟 Features

- **Customizable Color Gradients**: Define a color gradient for representing data intensities.
- **Flexible Layout**: Adjust grid spacing, box size, margins, and font sizes to suit your design.
- **Hover Interaction**: Displays detailed information (date and value) when hovered over.
- **Date-Aware**: Automatically handles year-based data, including months, days, and leap years.
- **Cross-Platform Support**: Use in React apps or as a standalone component in HTML pages.

---

## 🚀 Installation

### React (npm)
Install the package using npm:

```bash
npm install @rp-raone/cal-heatmap
```
**🛠️ Usage in React**


Here's an example of how to use the HeatMap component in your React application:

```tsx
import HeatMap from '@rp-raone/cal-heatmap';

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
## 🌈 Props Configuration

| Prop               | Type                | Default       | Description                                                                 |
|--------------------|---------------------|---------------|-----------------------------------------------------------------------------|
| `year`             | `number`           | Current Year  | The year to display on the heatmap.                                        |
| `colorRange`       | `string[]`         | `['#e0f7fa', '#006d32']` | Array of colors for the gradient.                                          |
| `gridGap`          | `string`           | `2px`         | Space between each grid box.                                               |
| `boxSize`          | `string`           | `20px`        | Size of each grid box.                                                     |
| `padding`          | `string`           | `0px`         | Padding around the grid.                                                   |
| `borderRadius`     | `string`           | `0px`         | Border radius for each grid box.                                           |
| `boxShadow`        | `string`           | `none`        | Box shadow for each grid box.                                              |
| `textColor`        | `string`           | `"#000"`      | Color for the text labels.                                                 |
| `backgroundColor`  | `string`           | `"#fff"`      | Background color for the heatmap.                                          |
| `dayLabels`        | `string[]`         | `['Sun', 'Mon', ...]` | Array of custom day labels.                                                |
| `monthLabels`      | `boolean`          | `true`        | Toggles the display of month labels.                                       |
| `dayLabelsVisible` | `boolean`          | `true`        | Toggles the visibility of day labels.                                      |
| `dayMarginTop`     | `string`           | `0px`         | Top margin for day labels.                                                 |
| `dayMarginLeft`    | `string`           | `0px`         | Left margin for day labels.                                                |
| `monthMarginTop`   | `string`           | `0px`         | Top margin for month labels.                                               |
| `monthMarginLeft`  | `string`           | `0px`         | Left margin for month labels.                                              |
| `textFontSize`     | `string`           | `12px`        | Font size for general text.                                                |
| `monthFontSize`    | `string`           | `14px`        | Font size for month labels.                                                |
| `dayFontSize`      | `string`           | `12px`        | Font size for day labels.                                                  |
| `dayTextColor`     | `string`           | `"#000"`      | Color for the day labels.                                                  |
| `monthTextColor`   | `string`           | `"#000"`      | Color for the month labels.                                                |
| `monthFormat`      | `'short' | 'long'` | `'short'`     | Format of the month labels (`short` or `long`).                            |
| `monthBgColor`     | `string`           | `"#fff"`      | Background color for month labels.                                         |
| `dayBgColor`       | `string`           | `"#fff"`      | Background color for day labels.                                           |
| `gridBgColor`      | `string`           | `"#fff"`      | Background color for the grid.                                             |
| `data`             | `Record<string, number>` | `{}`         | Object with dates as keys and values representing intensity (e.g., `{ "2025-01-01": 5 }`). |
## 🎨 Styling Tips
- Use `colorRange` to represent varying data intensities effectively.
- Customize `textColor` for better readability based on your theme.
- Adjust `gridGap` and `boxSize` for responsive designs.

---

## 💻 Usage in HTML
To use this component in a plain HTML page, include it with the appropriate script and stylesheet:

```html
<div id="heatmap-root"></div>

<script src="https://cdn.jsdelivr.net/npm/@rp-raone/cal-heatmap"></script>
<script>
  const heatmap = new HeatMap({
    year: 2025,
    data: {
      "2025-01-01": 5,
      "2025-01-02": 10,
    },
    colorRange: ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353'],
    textColor: '#fff',
    gridGap: '5px',
    boxSize: '15px',
  });

  heatmap.render(document.getElementById('heatmap-root'));
</script>
```
## 📝 License
This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).

---

## 📬 Support
- Found an issue? [Report it here](https://github.com/your-repo/issues).  
- Have a suggestion or feature request? [Open a discussion here](https://github.com/your-repo/discussions).

---

## 🌟 Contribute
Contributions are welcome!  
1. Fork the repository.  
2. Create a branch for your changes.  
3. Submit a pull request to make improvements.  

---

## 🎉 Showcase
Are you using **HeatMap** in your projects? Share it with us! We'd love to feature your work here.  

---

## 🔄 What’s New?
- Added sections for **props configuration**, styling tips, and HTML usage.  
- Improved readability with emojis and structured formatting.  
- Included support links and contribution guidelines.  

Let us know if you have any suggestions or need further tweaks! 🚀

---
# Contributing to [cal-heatmap]

Thank you for considering contributing to [Project Name]! We welcome contributions from everyone and encourage you to get involved.

## How to Contribute

### Reporting Issues
- **Bug Reports**: If you encounter a bug, please search the [issues](https://github.com/[username]/[repo]/issues) before reporting it. If it hasn’t been reported yet, create a new issue with the following information:
  - **Describe the bug clearly**: What happened? What did you expect to happen?
  - **Steps to Reproduce**: Provide clear steps to reproduce the issue.
  - **Screenshots**: If applicable, include screenshots or error messages.
  
- **Feature Requests**: If you have a feature idea, please check the existing issues for similar requests. If not, feel free to open a new issue to discuss your feature idea.

### Code Contributions
We welcome contributions to improve the functionality, performance, or documentation of the project! Here’s how you can contribute:

1. **Fork the repository**: This creates a copy of the repository under your GitHub account.
2. **Clone your fork**: Clone the repository to your local machine.
   ```bash
   git clone https://github.com/[your-username]/[project-name].git

### Create a New Branch
Always create a new branch for your changes:
  ```bash
      git checkout -b feature/your-feature
      ```
### Make Your Changes
Edit, add, or delete files as needed to implement your feature or fix the bug.

### Write Tests
If applicable, add unit tests or integration tests for your changes.

### Commit Your Changes
Commit your changes with a clear, concise commit message:
```bash
git commit -m "Add feature or fix bug"
```
## Style Guidelines

- **Code Style**: Please follow the coding style established in the project. If you're unsure about something, feel free to ask.
- **Documentation**: Ensure that you add or update documentation if necessary.
- **Commit Messages**: Write clear and concise commit messages. Use the present tense ("Add feature" instead of "Added feature").
