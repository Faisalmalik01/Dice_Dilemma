# 🎲 Dice Dilemma — Predict the Next Roll

A minimal yet addictive React game where the player predicts the next dice roll! Perfect for quick brain breaks and fun challenges. Built using modern React hooks and functional components.

---

## 🔮 How to Play

1. Guess a number between **1–6**
2. Click **“Roll Dice”**
3. If your guess matches the roll:
   - 🎉 **Current Streak** increases!
4. If you're wrong:
   - ❌ Streak resets to 0
5. Compete with yourself to beat your **Highest Streak**

---

## 🔧 Features

- 🎲 Random dice roll generator
- ✅ Win/Loss logic with streak tracking
- 🔥 **Current** and **Highest streaks** tracked
- 🌀 Dice roll animation (optional)
- Fully reactive and animated using modern React patterns

---

## ⚙️ Tech Stack

- ⚛️ **React + Vite**
- 💨 **TailwindCSS** for minimal UI styling
- 🧠 React Hooks:
  - `useState` → Manage user guess, dice value, streaks
  - `useEffect` → Trigger animations and stat updates
  - `useRef` → Access dice DOM or control animation timing
  - `useCallback` → Memoize core game logic (like roll handler)

---

## 🖥️ Installation

```bash
git clone https://github.com/Faisalmalik01/Dice-Dilemma.git
cd Dice-Dilemma
npm install
npm run dev
