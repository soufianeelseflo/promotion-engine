# Run Promotion Engine on your computer

You do not need to know Git or write code to review this project locally.

## What you need

- Windows or macOS
- Internet access for the first setup
- Node.js installed

## 1. Install Node.js

1. Open https://nodejs.org
2. Download the current **LTS** version.
3. Run the installer with the default options.

## 2. Download this project

1. On the GitHub repository page, click the green **Code** button.
2. Click **Download ZIP**.
3. Open your Downloads folder.
4. Extract the ZIP.
   - Windows: right-click it and choose **Extract All**.
   - Mac: double-click it.
5. Open the extracted `promotion-engine` folder.

## 3. Open a terminal in that folder

### Windows

1. Open the project folder in File Explorer.
2. Click the address bar.
3. Type `powershell` and press Enter.

### Mac

1. Open Terminal.
2. Type `cd `, with a space after it.
3. Drag the project folder into Terminal.
4. Press Enter.

## 4. Install packages

Run:

```bash
npm install
```

Wait for it to finish.

## 5. Start the app

Run:

```bash
npm run dev
```

Then open:

http://localhost:3000

## Useful pages

- Campaign dashboard: http://localhost:3000/
- Campaign builder: http://localhost:3000/builder
- Operations: http://localhost:3000/operations
- Insights and conflict review: http://localhost:3000/insights

## Stop the app

Press `Ctrl + C` in the terminal.

## Production verification

Run:

```bash
npm run typecheck
npm run build
```

Both should complete successfully.

## Need help?

If you are reviewing this project for a contract and something does not work, send me a screenshot of the terminal. I can guide you through it step by step in plain language.