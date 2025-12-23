# 👨‍💻 Harsh - Level 3 Developer Portfolio

![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=F7DF1E)

A fully responsive, gamified personal portfolio website featuring a dark/neon cyberpunk aesthetic. This site showcases my projects, skills, and contact info without relying on heavy frameworks—just pure, clean code.

## 🌟 Key Features

* **Neon & Glassmorphism UI:** Modern dark mode design with glowing accents and glass-pane effects.
* **Gamified Profile Card:** Interactive "Level 3 Developer" card with health/energy bars and power-ups.
* **Interactive Animations:**
    * Typing text effect ("Problem Solver", "Winner", etc.).
    * Animated skill progress bars.
    * Floating background particles.
* **Project Gallery:** Custom JavaScript pagination system to browse projects with touch swipe support for mobile.
* **Responsive Design:** optimized for Desktop, Laptops, Tablets, and Mobile devices.
* **Zero Dependencies:** No Bootstrap, Tailwind, or jQuery required. Runs natively in any browser.



## 🛠️ Installation & Setup

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/harshrcan/your-repo-name.git](https://github.com/harshrcan/your-repo-name.git)
    ```
2.  **Open the project:**
    Simply navigate to the folder and open `index.html` in your web browser. No `npm install` or build steps required!

## ⚙️ How to Customize

### 1. Profile Picture
The code automatically checks for a file named `myimg.jpg` in the root folder.
* **To add your photo:** Save your profile picture as `myimg.jpg` in the same folder as `index.html`.
* **Fallback:** If no image is found, it defaults to a cool SVG avatar.

### 2. updating Projects
Open `index.html` and scroll to the `<script>` tag at the bottom. Edit the `projects` array:

```javascript
const projects = [
    { 
      title: "Your New Project", 
      status: "Completed", 
      tech: ["React", "Node"], 
      duration: "1 week", 
      link: "[https://link-to-project.com](https://link-to-project.com)" 
    },
    // ... add more objects here
];
