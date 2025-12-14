# GitHub Repository Evaluator

**GitHub Repository Evaluator** is an AI-inspired tool that analyzes any public GitHub repository and provides a **Score, Written Summary, and Personalized Roadmap**. The system acts like a virtual coding mentor, giving students actionable feedback on their code, project structure, and best practices.

---

## 🏆 Features

- **Input:** Accepts any public GitHub repository URL.
- **Automatic Analysis:** Fetches repository metadata using GitHub REST API.
- **Evaluation Dimensions:**
  - Code structure & organization
  - Documentation quality (README)
  - Commit consistency
  - Test coverage (unit/integration tests presence)
  - Language / tech stack usage
  - Real-world relevance
  - Git best practices
- **Outputs:**
  1. **Score:** 0–100 with classification (Beginner / Intermediate / Advanced)
  2. **Summary:** Human-readable evaluation of the repository
  3. **Personalized Roadmap:** Step-by-step actionable guidance for improvement
- **UI/UX:** Clean single-page layout with animations using **Tailwind CSS** and **Framer Motion**.
- **Frontend-only:** Fully functional without backend, calls public GitHub APIs directly.

---

## 🎯 Problem Statement

In today’s tech world, a GitHub repository is a developer’s tangible work, but most students don’t know how good or clean their code looks to a recruiter or mentor. This project evaluates GitHub repositories and reflects real strengths and weaknesses, providing:

- Honest feedback
- Clear scoring
- Actionable improvements

It addresses the **GitGrade Hackathon** challenge of building a “Repository Mirror.”

---

## 💻 Tech Stack

- **Frontend:** React + Vite
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Data Fetching:** GitHub REST API
- **Logic:** JavaScript rule-based evaluation engine (scoring, summary, roadmap)

---

## ⚙️ How It Works

1. **Input Repository URL:** User pastes a public GitHub repo URL.
2. **Fetch Data:** System fetches metadata from GitHub:
   - Repository info
   - Commit history
   - Languages used
   - File & folder structure
3. **Evaluate Repository:** Rule-based scoring engine evaluates:
   - README presence
   - Commit consistency
   - Folder structure
   - Test folder presence
   - Language usage
   - Real-world applicability
4. **Generate Output:**
   - **Score:** 0–100, classified as Beginner / Intermediate / Advanced
   - **Summary:** Short, descriptive evaluation
   - **Roadmap:** Actionable steps to improve the repository

---



## 🚀 Setup Instructions

1. Clone the repository:

```bash
git clone <your-repo-url>
cd repo-evaluator
```
2. Install dependencies:
```bash
npm install
```
3.Run the development server:
```bash
npm run dev
```

##
Working Video:

https://github.com/user-attachments/assets/cbf1c4b2-5041-4380-bb8e-e687eb80c32c





