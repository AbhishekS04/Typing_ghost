# **Typing Ghost**

Typing Ghost is an advanced typing platform designed to help users improve their typing speed and accuracy. The app features a typing test to assess typing skills and provides feedback on speed and accuracy.

## **Table of Contents**
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Installation](#installation)
- [Folder Structure](#folder-structure)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## **Features**
- Typing tests that measure typing speed and accuracy.
- Real-time feedback on typing accuracy.
- Fully responsive design for mobile and desktop.

## **Tech Stack**
- **Frontend**: React, TypeScript
- **Styling**: Tailwind CSS
- **State Management**: React Hooks
- **Build/Bundle**: Vite or React Scripts

## **Getting Started**

To get Typing Ghost running on your local machine, follow the steps below.

### **Prerequisites**
Make sure you have the following installed:
- Node.js (v14+)
- npm or yarn

### **Installation**

1. **Clone the repository**:
   ```bash
   git clone https://github.com/AbhishekS04/Typing_ghost.git
   cd Typing_ghost
   ```

2. **Install the dependencies**:
   Using npm:
   ```bash
   npm install
   ```
   Or using yarn:
   ```bash
   yarn install
   ```

3. **Start the application**:
   ```bash
   npm start
   npm start dev
   ```
   The app should now be running on `http://localhost:3000/`.

---

## **Folder Structure**

Here’s an overview of Typing Ghost's project structure:

```
public/
│
├── favicon.ico
├── index.html
└── robots.txt
src/
├── components/
│   ├── Caret.tsx
│   ├── GeneratedWords.tsx
│   ├── RestartButton.tsx
│   ├── Results.tsx
│   ├── TypingTest.tsx
├── hooks/
│   ├── useCountdown.ts
│   ├── useEngine.ts
│   ├── useTypings.ts
│   └── useWords.ts
├── utils/
│   ├── helpers.ts
├── App.tsx
├── index.tsx
└── index.css
```

### Key Files:
- **App.tsx**: The root of your app where all components are combined.
- **components/**: Contains the main components for the typing test, generated words, restart button, and results.
- **hooks/**: Custom hooks for handling typing logic such as countdown, word generation, and typing input.
- **utils/helpers.ts**: Helper functions to support the main functionality.

---

## **Usage**

1. Open the application.
2. The **TypingTest** component will generate a random set of words for users to type.
3. As users type, real-time feedback on typing speed and accuracy is displayed.
4. Users can reset the typing test using the **RestartButton** component.

---

## **Contributing**

Contributions are welcome! If you have ideas or want to improve Typing Ghost, feel free to fork the repo and submit a pull request.

### Steps to contribute:
1. Fork the project.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Open a pull request.

---

## **License**

Typing Ghost is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

---

**Happy Typing with Typing Ghost!**

---
