# 🎯 TEDxSreyasInstitute

<div align="center">

![TEDx Logo](https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/TEDx_logo.svg/320px-TEDx_logo.svg.png)

**Ideas Worth Spreading** 🚀

[![Live Demo](https://img.shields.io/badge/demo-live-red?style=for-the-badge)](https://tedxsreyasinstitute.in/)
[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![GSAP](https://img.shields.io/badge/GSAP-88CE02?style=for-the-badge&logo=greensock&logoColor=white)](https://greensock.com/gsap/)

*An immersive web experience crafted for TEDxSreyasInstitute - where innovation meets storytelling through smooth animations and modern design.*

[View Demo](https://tedxsreyasinstitute.in/) · [Report Bug](#) · [Request Feature](#)

</div>

---

## ✨ Features That Pop

🎭 **Cinematic Animations** - Powered by GSAP for buttery-smooth, attention-grabbing transitions  
⚡ **Lightning Fast** - Built with React for optimal performance and instant interactions  
📱 **Fully Responsive** - Seamless experience across all devices and screen sizes  
🎨 **Modern UI/UX** - Clean, intuitive interface following TEDx brand guidelines  
🌊 **Scroll Magic** - Engaging scroll-triggered animations that bring content to life  
♿ **Accessible** - Built with accessibility best practices in mind

---

## 🛠️ Tech Stack

```javascript
const techStack = {
  framework: "React",
  animations: "GSAP (GreenSock Animation Platform)",
  styling: "CSS3 / Styled Components",
  performance: "Lighthouse Score: 95+"
};
```

| Technology | Purpose |
|------------|---------|
| **React** | Component-based architecture for maintainable code |
| **GSAP** | Professional-grade animations and scroll effects |
| **React Router** | Smooth client-side navigation |
| **Intersection Observer** | Performance-optimized scroll triggers |

---

## 🚀 Quick Start

Get the project running locally in 3 simple steps:

```bash
# Clone the repository
git clone https://github.com/yourusername/tedxsreyasinstitute.git

# Navigate to project directory
cd tedxsreyasinstitute

# Install dependencies
npm install

# Fire it up! 🔥
npm start
```

The site will open at `http://localhost:3000` - now you're ready to roll! 🎉

---

## 📂 Project Structure
---
```
TEDxSreyasInstitute/
├── src/
│   ├── assets/          # Images, videos, icons, and media files
│   ├── codes/           # Core logic and utility code
│   ├── components/      # Reusable React components
│   ├── consts/          # Constants and configuration
│   ├── pages/           # Page-level components
│   ├── styles/          # Global styles and CSS modules
│   ├── utils/           # Helper functions and utilities
│   ├── App.jsx          # Main app component
│   └── main.jsx         # Entry point
├── package.json         # Dependencies and scripts
├── testnavbar.jsx       # Navbar component tests
└── README.md
```
---

## 🎨 Key Animations

### Hero Section
```javascript
gsap.from('.hero-title', {
  opacity: 0,
  y: 100,
  duration: 1.2,
  ease: 'power4.out'
});
```

### Scroll-Triggered Content
```javascript
ScrollTrigger.create({
  trigger: '.section',
  start: 'top center',
  onEnter: () => animateIn(),
  onLeave: () => animateOut()
});
```

---

## 🌟 Highlights

- **Performant Animations**: GSAP's optimized engine ensures 60fps animations
- **Code Splitting**: React lazy loading for faster initial page loads
- **SEO Optimized**: Meta tags and semantic HTML for better discoverability
- **Cross-Browser Compatible**: Works flawlessly on all modern browsers

---

## 📸 Screenshots

<div align="center">

### Desktop View
![Desktop Preview](<img width="1856" height="877" alt="image" src="https://github.com/user-attachments/assets/30feda83-899b-43e6-b987-ae0d70e43d3c" />
)
</div>

---

## 🤝 Contributing

Contributions are what make the open-source community amazing! Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📝 License

Distributed under the MIT License. See `LICENSE` for more information.

---

## 👨‍💻 Author

**Your Name**

- GitHub: [@yourusername](https://github.com/Savirar0)
- LinkedIn: [Your LinkedIn](https://linkedin.com/in/peddamalla-navadeep-abaa01212)
- Website: [tedxsreyasinstitute.in](https://tedxsreyasinstitute.in)

---

## 🙏 Acknowledgments

- [TEDx](https://www.ted.com/about/programs-initiatives/tedx-program) for the incredible platform
- [GSAP](https://greensock.com/) for the animation magic
- [React](https://reactjs.org/) community for the amazing ecosystem
- Sreyas Institute for the opportunity to bring this vision to life

---

<div align="center">

### ⭐ Star this repo if you found it helpful!

**Built with ❤️ and lots of ☕**

</div>
