# SwoodDocs

-   [Introduction](#introduction)
-   [How to Clone the Repository to Your Machine](#how-to-clone-the-repository-to-your-machine)
-   [Create Your Development Branch](#create-your-development-branch)
-   [How to preview the page](#how-to-preview-the-page)
-   [Prerequisites](#prerequisites)

## Introduction

Before you begin, please ensure you check out the [prerequisites section](#prerequisites).

## How to Clone the Repository to Your Machine

### Step 1: Create a Folder for Your Project

Create a new folder where you want to store your project files.

### Step 2: Copy the Repository's HTTPS URL

You can find the URL by clicking the green "<> Code" button on the repository page.

### Step 3: Open a Terminal in Visual Studio Code

Run the following command in the terminal and press Enter. Note that the period at the end of the command indicates that the files should be copied into the current directory.

```sh
git clone https://github.com/SolidSolutionsLtd/SwoodDocs.git .
```

### Step 4: Install the Required Modules

Run the following command to install the necessary modules:

```sh
npm install
```

## Create Your Development Branch

After cloning the repository, create a new development branch to work on. This helps keep your changes organized and allows for better collaboration. Run the following command in your terminal:

```sh
git checkout -b your-branch-name
```

Replace `your-branch-name` with a descriptive name for your branch (e.g., `feature/new-report-module` or `fix/bug-123`). This will create and switch to a new branch where you can make your changes.

## How to preview the page

Run the following command to preview the page, follow the url displayed on the terminal to see a preview of the page.

```sh
npm run dev
```

## Prerequisites

Before you begin, ensure you have the following software installed on your system:

### Step 1: Install Git

Git is a version control system that lets you manage and keep track of your source code history.

1. **Download Git**: Visit the official Git website and download the installer for your operating system.
2. **Install Git**: Run the installer and follow the on-screen instructions to complete the installation.
3. **Verify Installation**: Open a terminal or command prompt and type `git -v` to verify that Git is installed correctly.

### Step 2: Install Node.js

Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine.

1. **Download Node.js**: Go to the official Node.js website and download the LTS (Long Term Support) version for your operating system.
2. **Install Node.js**: Run the downloaded installer and follow the instructions to install Node.js.
3. **Verify Installation**: Open a terminal or command prompt and type `node -v` to check the installed version of Node.js.

### Step 3: Install Visual Studio Code

Visual Studio Code (VS Code) is a powerful, lightweight code editor.

1. **Download VS Code**: Visit the Visual Studio Code website and download the installer for your operating system.
2. **Install VS Code**: Run the installer and follow the on-screen instructions to complete the installation.
3. **Launch VS Code**: Open Visual Studio Code to ensure it installed correctly.

### Step 4: Install NPM (Node Package Manager)

NPM is the default package manager for Node.js, which helps you install and manage packages.

1. **Open Terminal**: Open a terminal or command prompt.
2. **Install NPM**: Run the following command to install the latest version of NPM globally:

    ```sh
    npm install -g npm
    ```

3. **Verify Installation**: Type `npm -v` in the terminal to check the installed version of NPM.

By following these steps, you will have Git, Node.js, Visual Studio Code, and NPM installed and ready to use. If you encounter any issues during installation, feel free to ask for help! 🦖
