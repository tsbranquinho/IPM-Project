# Interactive Target Selection System

## Project Overview

The **Interactive Target Selection System** is a web-based application designed for conducting user interaction tests. The system displays a set of targets on the screen that the user must select. It tracks the number of successful selections, misses, accuracy, and the time taken to complete each trial. The application is built using **p5.js** for rendering and interaction, **Firebase** for storing results, and uses various front-end technologies such as **HTML**, **CSS**, and **JavaScript**.

This project is designed for analyzing user performance in selecting targets on a screen, considering variables like screen resolution, pixel density, and the difficulty of selecting small or dense targets.

## Team Members
- **Tiago Branquinho** (GitHub: [tsbranquinho](https://github.com/tsbranquinho))
- **Rafael Avelar** (GitHub: [RafaelAvelar14](https://github.com/RafaelAvelar14))
- **Lara Faria** (Github: [lara-gfaria](https://github.com/lara-gfaria))

## Key Features

- **Target Selection Test**: Users are presented with a grid of targets, and they must select each target in sequence.
- **Real-Time Feedback**: Provides feedback on successful selections or misses.
- **Performance Metrics**: Tracks the user's accuracy, time per target, and overall performance.
- **Responsive Layout**: Dynamically adjusts to different screen sizes and resolutions.
- **Data Collection**: Records user performance metrics and sends the data to a **Firebase** database for further analysis.

## Repository Contents

- **`index.html`**: The main HTML file that sets up the structure of the page and includes external libraries like **p5.js** and **Firebase**.
- **`ppi.js`**: Contains the logic for detecting the screen's pixel density (PPI) and adjusting target sizes accordingly.
- **`sketch.js`**: The core script that handles the creation and display of targets, along with the logic for handling user input and rendering the target selection game.
- **`style.css`**: The stylesheet that defines the appearance of the page and targets.
- **`support.js`**: Contains functions for handling user input, such as entering the student ID and display size.
- **`target.js`**: Defines the `Target` class and the methods for drawing targets and checking if a target was clicked.
- **`legendas.csv`**: A CSV file that contains the labels for the targets, including their names and other metadata.

## How It Works

### User Interface
The user is first prompted to enter their **student ID** and **display size**. Once these inputs are validated, the test begins. During the test, the user is asked to select targets in a random order. The test continues for a predefined number of trials.

### Target Selection
The screen is populated with **targets** in a grid. Each target has a label and is drawn dynamically based on the screen's resolution and pixel density. When a user clicks on a target, the system checks whether the click is correct and tracks the number of **hits** and **misses**. The target label is displayed, and feedback is provided on whether the selection was correct.

### Performance Metrics
At the end of the test, the system calculates the **accuracy**, **time per target**, and other performance metrics, then displays the results. If Firebase recording is enabled, the results are sent to a Firebase database for storage and analysis.

### Firebase Integration
The application supports **Firebase** integration, allowing user performance data to be stored for later analysis. This is controlled by the `RECORD_TO_FIREBASE` variable in the `sketch.js` file.

## Usage

### Running the Application

1. **Install Dependencies**:
   This project uses **p5.js** and **Firebase**. You can load these libraries directly from the CDN as included in the `index.html` file.

2. **Start the Test**:
   Open the `index.html` file in your browser. The application will prompt you for your **student ID** and **display size**. After entering the required details, the target selection test will begin.

3. **Complete the Trials**:
   The system will display a set of targets in a grid. Select the targets in the correct order. The system will track the accuracy of your selections and provide feedback after each trial.

4. **View Results**:
   After completing the trials, the system will display your performance metrics, including **accuracy** and **time per target**. If enabled, the results will be stored in Firebase for analysis.

### Files Overview

- **`index.html`**: Sets up the HTML structure and includes external resources.
- **`ppi.js`**: Detects the screen pixel density and adjusts the UI accordingly.
- **`sketch.js`**: Handles the creation of targets and manages the game logic.
- **`style.css`**: Defines the style and layout of the user interface.
- **`support.js`**: Handles user input for starting the test and validating the information.
- **`target.js`**: Defines the target class and its behavior, such as drawing and clicking.
- **`legendas.csv`**: Contains the data for the target labels used in the test.

## Conclusion

This system provides a simple but effective way to measure a user's ability to interact with small targets on a screen. It tracks their performance and allows for data collection, which can be used for further analysis or optimization of user interfaces.

---
