# React Frameworks Assignment

This project is for AD311. The goal was to build the same basic idea using four different React frameworks so I could understand how each one works in real development.

Instead of building four unrelated apps, I used the same concept across all of them so I could really compare the differences.

---

## Environment Requirements

This project was developed using:

- Node.js v20.x

Important: Gatsby gave me errors when I tried running it on Node v24. If you run into issues, switch to Node 20 using:

```
nvm use 20
```

Then reinstall dependencies if needed.

---

## Project Idea: Seattle Study Spots

The idea behind this project is simple. I called it **Seattle Study Spots**.

As a student, finding a good place to study is something I actually deal with. Some days I want a quiet library. Other days I want a coffee shop with outlets. So I used that idea as the base concept for every framework.

Each version includes:

- A homepage layout  
- Three example study spots  
- A button that fetches a study tip from a public API  
- A label that shows which framework is being used  

That way, I could focus on comparing frameworks instead of changing the concept every time.

---

## Frameworks Used

### 1. Next.js (next-app)

This version uses file-based routing and standard React components. It runs as a web application.

To run locally:

```
cd next-app
npm install
npm run dev
```

Then open:  
http://localhost:3000

---

### 2. Remix (remix-app)

This version uses Remix routing and loaders. It helped me understand how Remix handles data differently compared to Next.

To run locally:

```
cd remix-app
npm install
npm run dev
```

---

### 3. Gatsby (gatsby-app)

This version uses Gatsby’s static site setup. It runs on a development server and builds optimized static pages.

To run locally:

```
cd gatsby-app
npm install
npm run develop
```

Then open:  
http://localhost:8000

Note: Make sure you are using Node 20.

---

### 4. Expo (expo-app)

This is the React Native version of the same project. It uses React Native components like `View`, `Text`, and `Pressable` instead of regular HTML.

To run locally:

```
cd expo-app
npm install
npm start
```

Press `w` to open the web preview.

You can also run it on a simulator or physical device if configured.

---

## What I Learned

Building the same idea across different frameworks helped me understand:

- How routing changes between frameworks  
- The difference between static generation and client-side rendering  
- How React Native differs from React for web  
- How development workflows vary depending on the framework  

Even though the UI looks similar, the structure behind each one is different.

---

## Author

Kokob Haile
