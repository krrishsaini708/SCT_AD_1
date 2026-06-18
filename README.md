# Calculator App 🧮

Hi! This is my first project.
It started as a simple web page and I successfully converted it into a real Android mobile app that runs on my phone!

It can do basic math like adding, subtracting, multiplying and dividing.
I wrote the logic in JavaScript, designed it with HTML and CSS, and used Node.js with Capacitor to turn it into an Android app.

I am still learning so the code might not be perfect but it works completely offline on Android and I tried my best 😊

---

## What this app does

- Add, subtract, multiply and divide numbers
- Backspace button to delete a wrong number
- Clear button to reset everything
- Supports percentage (%)
- Answer shows up after pressing equals
- Works as a real installed app on Android phones!

---

## Download the App

You can download and install the APK file directly from this link :

👉 **[Download Calculator APK](https://github.com/krrishsaini708/SCT_AD_1/releases/download/v1.0/app-debug.apk)**

> Note: Your phone might show a security warning since this app is not on the Play Store.
> Just tap "More Details" and then "Install Anyway" to proceed.

---

## Technologies I used

| Technology | What I used it for |
|---|---|
| **JavaScript (ES6)** | Calculator logic and button click handling |
| **HTML5** | Structure and layout of the calculator |
| **CSS3** | Design, colors and button grid styling |
| **Node.js & NPM** | Installing and managing development tools |
| **Capacitor CLI** | Converting my web project into an Android app |
| **Android Studio** | Building and compiling the final APK file |

---

## Project Structure

```
calculator-app/
│
├── www/
│   ├── index.html          ← the calculator page the user sees
│   ├── style.css           ← all the colors and button designs
│   └── calculator.js       ← all the math logic is written here
│
├── android/                ← Android project files made by Capacitor
├── package.json            ← Node.js config file
└── capacitor.config.json   ← Capacitor settings
```

---

## How to run this project

**Step 1 — Check Node.js is installed**
```
node -v
```

**Step 2 — Go to the project folder**
```
cd Desktop/calculator-app
```

**Step 3 — Install dependencies**
```
npm install
```

**Step 4 — Sync web files to Android**
```
npx cap sync
```

**Step 5 — Open in Android Studio**
```
npx cap open android
```

**Step 6 — Build the APK**

Inside Android Studio go to:
**Build → Assemble Project**

This will generate the `app-debug.apk` file which you can install on your phone!

---

## Problems I faced

- **Storage issue** — Android Studio needs around 6 to 8 GB of space on first setup. My C drive ran out of storage so I had to move the Android SDK to my E drive
- **Windows path limit** — Git was crashing because file paths inside node_modules were too long. I fixed it by running `git config core.longpaths true`
- **Git identity error** — Git blocked my first upload because my name and email were not set. I learned how to fix this using `git config` commands

---

## What I learned

- How to convert a website into a real Android mobile app
- How to set up and use Android Studio
- How to fix common Git errors when pushing to GitHub
- How to use Capacitor to bridge web code and Android

---

## Screenshots

<img width="717" height="1600" alt="image" src="https://github.com/user-attachments/assets/c24ca55d-89bd-4b60-8cff-72433d47bf1e" />
<img width="717" height="1600" alt="image" src="https://github.com/user-attachments/assets/a3841599-f4cf-4469-a25c-325378b8cbb8" />
<img width="717" height="1600" alt="image" src="https://github.com/user-attachments/assets/6fdcc8ba-0125-4c6d-ac8b-76e57511bd36" />


---

## Author

Made by "KRRISH SAINI" as part of my internship 🙂
I am a B.tech CSE student and this is my very first mobile app.
Feel free to check it out or suggest any improvements!
