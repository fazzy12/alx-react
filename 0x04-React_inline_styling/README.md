![](stylebackground.jpg)

# ALX React Inline Styling Project

## Overview

This project focuses on transforming a React application by applying inline styles using Aphrodite, a CSS-in-JS library. The goal is to maintain the same UI look and feel while removing traditional CSS files and ensuring that the application remains responsive and well-styled.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Tasks](#tasks)
  - [0. Inline Styling](#0-inline-styling)
  - [1. Install Aphrodite](#1-install-aphrodite)
  - [2. Conditionally Applying Style](#2-conditionally-applying-style)
  - [3. Responsive Design](#3-responsive-design)
  - [4. Animation](#4-animation)
- [Contributing](#contributing)
- [License](#license)

## Installation

1. Clone the repository:
    ```
    git clone https://github.com/fazzy12/alx-react.git
    cd alx-react
    ```

2. Navigate to the project directory and install dependencies:
    ```
    cd 0x04-React_inline_styling
    npm install
    ```

## Usage

To start the development server:
```
npm start
```

To run tests:

## Project Structure

The project is structured into tasks, with each task addressing specific aspects of applying inline styling and using Aphrodite in a React application.

```
0x04-React_inline_styling/
├── task_0/
│   ├── dashboard/
│   │   └── src/
│   │       ├── App/
│   │       ├── BodySection/
│   │       ├── CourseList/
│   │       ├── Footer/
│   │       ├── Header/
│   │       └── Notifications/
├── task_1/
│   └── dashboard/
├── task_2/
│   └── dashboard/
├── task_3/
│   └── dashboard/
├── task_4/
│   └── dashboard/
└── README.md

```


## Tasks

### 0. Inline Styling

- **Objective**: Apply inline styling to `CourseListRow` component to change row background colors.
- **Changes**:
  - Modify `CourseListRow.js` to use inline styles for row and header background colors.
  - Ensure all tests pass after modifications.

### 1. Install Aphrodite

- **Objective**: Migrate from CSS files to using Aphrodite for styling.
- **Changes**:
  - Install Aphrodite.
  - Update components (`App`, `BodySectionWithMarginBottom`, `CourseList`, `Header`, `Login`, `Notifications`) to use Aphrodite for styles.
  - Delete respective CSS files and ensure all tests pass.

### 2. Conditionally Applying Style

- **Objective**: Use Aphrodite to conditionally apply styles based on props.
- **Changes**:
  - Modify `NotificationItem` and `CourseListRow` components to conditionally apply styles.
  - Ensure all tests pass.

### 3. Responsive Design

- **Objective**: Make the application responsive using media queries.
- **Changes**:
  - Update `Login`, `Notifications`, and `NotificationItem` components for responsiveness.
  - Ensure the UI adapts correctly for screens larger than 900px and smaller screens.

### 4. Animation

- **Objective**: Add animations for the Notifications menu.
- **Changes**:
  - Define keyframes for opacity and bouncing animations.
  - Apply animations to the `Notifications` component.
  - Ensure the UI updates correctly with animations.

## Contributing

Contributions are welcome! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch: `git checkout -b my-feature-branch`.
3. Make your changes and commit them: `git commit -m 'Add some feature'`.
4. Push to the branch: `git push origin my-feature-branch`.
5. Submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
