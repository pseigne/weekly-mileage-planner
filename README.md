# Weekly Mileage Planner

A lightweight, interactive web dashboard designed to help runners and athletes plan their weekly training volume effectively.

This tool allows users to set a weekly mileage goal, input specific run distances for known training days, and automatically calculate or distribute the remaining distance needed to hit their target.

## Features

* **Real-Time Visualization:** Interactive bar chart (powered by Chart.js) updates instantly as you type.
* **Goal Tracking:** Automatically calculates remaining mileage based on your input and weekly goal.
* **Smart Distribution:** The "Distribute Remaining" feature automatically splits your remaining mileage equally across days that currently have 0 miles (useful for planning easy runs or filling gaps).
* **Responsive Design:** Clean, minimalist UI that works seamlessly on desktop and mobile devices.

## Getting Started

Since this project uses vanilla HTML, CSS, and JavaScript, you don't need to install any complex dependencies or build tools.

### Prerequisites

* A modern web browser (Chrome, Safari, Firefox, Edge).
* An internet connection (to load the Chart.js library via CDN).


## 💡 How to Use

1.  **Set Your Goal:** Enter your target mileage for the week in the "Goal mileage" box (e.g., 50 miles).
2.  **Log Known Runs:** Enter the distance for days where you have a specific workout planned (e.g., 10 miles on Tuesday, 14 miles on Saturday).
3.  **Check the Graph:** Watch the bar chart update to visualize your load distribution.
4.  **Auto-Plan:** Click **"Distribute remaining mileage"** to have the app automatically divide the miles you have left among your empty days.

## 🛠️ Tech Stack

* **HTML5** - Semantic structure.
* **CSS3** - Custom responsive styling with Flexbox and modern variables.
* **JavaScript (ES6+)** - Core logic for calculations and DOM manipulation.
* **[Chart.js](https://www.chartjs.org/)** - For data visualization.
