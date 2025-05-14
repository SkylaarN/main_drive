# Drive App

A cloud storage app where you can save important files. This app uses **Next.js**, **React**, and **TailwindCSS** for the frontend, designed to be easy to set up and run on any machine.

---

## Table of Contents

- [Project Overview](#project-overview)
- [Technologies Used](#technologies-used)
- [Prerequisites](#prerequisites)
- [Installation Instructions](#installation-instructions)
- [Running the Project](#running-the-project)
- [Troubleshooting](#troubleshooting)
- [Contributing](#contributing)
- [License](#license)

---

## Project Overview

This is a **cloud storage application** built with **Next.js**, **React**, and **TailwindCSS**. It provides the functionality to save and manage important files. The project is designed to be **easy to scale** and provides a clean and responsive user interface.

---

## Technologies Used

- **Next.js**: `15.0.2`
- **React**: `19.0.0-rc-02c0e824`
- **TailwindCSS**: `3.4.1`
- **TypeScript**: `5.0`
- **ESLint**: `8.x`
- **Prettier**: `3.5.3`
- **PostCSS**: `8.x`

---

## Prerequisites

Before you begin, ensure you have the following software installed:

### 1. Node.js

- **Required version**: `v22.13.1` or a compatible version.
- Check if you have Node.js installed:
    ```bash
    node -v
    ```

- If needed, install **Node.js** from [Node.js official website](https://nodejs.org/), or use **nvm** (Node Version Manager) to install specific versions:
    ```bash
    nvm install 22.13.1
    nvm use 22.13.1
    ```

### 2. npm (Node Package Manager)

- **npm** comes bundled with Node.js, but you can check your version by running:
    ```bash
    npm -v
    ```

---

## Installation Instructions

Follow the steps below to get the project up and running locally:

### 1. Clone the Repository

Clone this repository to your local machine using the following command:
```bash
git clone https://github.com/YourUsername/drive_app.git
```


2. Navigate to the Project Folder

Change your directory to the project folder:
```bash
cd drive_app
```

3. Install Dependencies

Run the following command to install the necessary dependencies:
```bash
npm install --legacy-peer-deps
```

Note: The --legacy-peer-deps flag is used to bypass issues that might occur with certain peer dependencies.

Running the Project

After successfully installing the dependencies, you can run the project locally:
1. Start the Development Server

Run the following command to start the development server:
```bash
npm run dev
```

The app will be available at http://localhost:3000 by default.
Troubleshooting

If you encounter any issues during setup or while running the project, here are some common solutions:
1. Unable to install dependencies

If you experience issues during npm install, try using the --legacy-peer-deps flag:
```bash
npm install --legacy-peer-deps
```

2. Missing TypeScript Dependencies

If TypeScript types are missing (e.g., @types/react or @types/node), you can manually install them with:
```bash
npm install --save-dev @types/react @types/node
```
3. Node Version Compatibility

Ensure that you're using a compatible version of Node.js. You can switch versions using nvm:
```bash
nvm install 22.13.1
nvm use 22.13.1
```
Contributing

Feel free to fork this project, submit issues, or send pull requests. All contributions are welcome!