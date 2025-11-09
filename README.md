# 🚀 Portfolio Website - Irfan Triadi Ginting

A modern, responsive portfolio website built with Vue.js 3 and Tailwind CSS. Showcasing projects, skills, and professional experience with beautiful animations and smooth user experience.

## ✨ Features

- 🎨 **Modern Design** - Clean and professional UI with gradient effects
- 📱 **Fully Responsive** - Perfect on all devices (mobile, tablet, desktop)
- ⚡ **Fast Performance** - Built with Vite for lightning-fast load times
- 🎭 **Smooth Animations** - Scroll animations, hover effects, and transitions
- 💬 **Contact Form** - Functional form with validation
- 🎯 **Section Navigation** - Smooth scroll to sections
- 🌙 **Dark Theme** - Eye-friendly dark color scheme

## 🛠️ Tech Stack

- **Frontend Framework:** Vue.js 3 (Composition API + `<script setup>`)
- **Styling:** Tailwind CSS v3
- **Build Tool:** Vite
- **Icons:** SVG & Devicons CDN
- **Font:** Inter (Google Fonts)

## 📂 Project Structure

```
portfolio-website/
├── public/
│   └── cv/
│       └── irfan-cv.pdf
├── src/
│   ├── assets/
│   │   └── main.css
│   ├── components/
│   │   ├── NavBar.vue
│   │   ├── HeroSection.vue
│   │   ├── AboutSection.vue
│   │   ├── SkillsSection.vue
│   │   ├── ProjectsSection.vue
│   │   ├── ContactSection.vue
│   │   └── FooterSection.vue
│   ├── composables/
│   │   ├── useTypingEffect.js
│   │   ├── useScrollAnimation.js
│   │   └── useFormValidation.js
│   ├── data/
│   │   └── portfolio.js
│   ├── App.vue
│   └── main.js
├── index.html
├── tailwind.config.js
├── package.json
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**

```bash
   git clone https://github.com/username/portfolio-website.git
   cd portfolio-website
```

2. **Install dependencies**

```bash
   npm install
```

3. **Run development server**

```bash
   npm run dev
```

4. **Open browser at** `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist/` directory.

## 🎨 Customization

All personal data can be easily customized in one file:

- **`src/data/portfolio.js`** - Edit:
  - Personal information (name, bio, contact)
  - Social media links
  - Skills & technologies
  - Projects with descriptions
  - About section content

- **`tailwind.config.js`** - Change:
  - Primary color (#3B82F6)
  - Secondary color (#8B5CF6)
  - Custom theme settings

- **`public/cv/`** - Add:
  - Your CV/Resume PDF file

## 📦 Sections

- **Hero** - Introduction with typing animation effect
- **About** - Personal story, values, and statistics
- **Skills** - Technology stack with filterable categories
- **Projects** - Portfolio showcase with live demos
- **Contact** - Contact form and social links
- **Footer** - Quick links and back-to-top button

## 🎯 Key Features Details

### Typing Effect

Smooth typing animation showcasing multiple roles in the hero section.

### Scroll Animations

Elements fade in and slide into view as you scroll down the page.

### Form Validation

Real-time validation with error messages for:

- Name (min 3 characters)
- Email (valid format)
- Subject (min 5 characters)
- Message (min 10 characters)

### Responsive Design

Mobile-first approach with breakpoints:

- **Mobile:** < 640px
- **Tablet:** 640px - 1024px
- **Desktop:** > 1024px

## 🌐 Deployment

### Deploy to Vercel

```bash
npm install -g vercel
vercel
```

### Deploy to Netlify

1. Build the project: `npm run build`
2. Drag and drop the `dist/` folder to Netlify

### Deploy to GitHub Pages

```bash
npm run build
# Push dist/ folder to gh-pages branch
```

## 📝 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

Feel free to check the [issues page](https://github.com/username/portfolio-website/issues).

## 👨‍💻 Author

**Irfan Triadi Ginting**

- GitHub: [@irfantriadiginting](https://github.com/irfantriadiginting)
- LinkedIn: [www.linkedin.com/in/irfantriadiginting13](https://www.linkedin.com/in/irfantriadiginting13)
- Instagram: [@irfantriadiginting](https://instagram.com/irfantriadiginting)

## ⭐ Show your support

Give a ⭐️ if you like this project!

---

Made with ❤️ using Vue.js and Tailwind CSS
