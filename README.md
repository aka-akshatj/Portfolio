# Akshat Jain - Portfolio Website

A modern, responsive portfolio website built with React.js and Tailwind CSS, showcasing my skills, experience, and projects as a Full Stack Developer.

## 🚀 Features

- **Responsive Design**: Fully responsive across all devices (mobile, tablet, desktop)
- **Modern UI/UX**: Clean, minimalist design with smooth animations
- **Dark Theme**: Professional dark theme with accent colors
- **Smooth Scrolling**: Seamless navigation between sections
- **Interactive Elements**: Hover effects and animations
- **Contact Form**: Functional contact form with email integration
- **Performance Optimized**: Built with Vite for fast loading

## 🛠️ Tech Stack

- **Frontend**: React.js 19
- **Styling**: Tailwind CSS
- **Icons**: React Icons
- **Build Tool**: Vite
- **Deployment**: Ready for Vercel, Netlify, or any static hosting

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar.jsx      # Navigation component
│   ├── Hero.jsx        # Hero section with introduction
│   ├── About.jsx       # About me section
│   ├── Experience.jsx  # Work experience timeline
│   ├── Projects.jsx    # Featured projects showcase
│   ├── Skills.jsx      # Technical skills overview
│   ├── Contact.jsx     # Contact form and information
│   └── Footer.jsx      # Footer with achievements
├── data/
│   └── data.js         # Centralized content data
├── App.jsx             # Main app component
├── main.jsx            # App entry point
└── index.css           # Global styles and Tailwind imports
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

## 📝 Customization

### Updating Content

All content is centralized in `src/data/data.js`. Update this file to customize:

- Personal information
- Work experience
- Projects
- Skills
- Achievements
- Contact details

### Styling

The website uses Tailwind CSS with custom configurations in `tailwind.config.js`. You can:

- Modify color schemes
- Add new animations
- Customize breakpoints
- Add new utility classes

### Adding New Sections

1. Create a new component in `src/components/`
2. Import and add it to `src/App.jsx`
3. Update the navigation in `src/components/Navbar.jsx`

## 🎨 Color Scheme

- **Primary**: Blue (#3b82f6)
- **Secondary**: Purple (#8b5cf6)
- **Background**: Dark grays (#0f172a, #1e293b)
- **Text**: White and gray variants

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Netlify

1. Build the project: `npm run build`
2. Upload the `dist` folder to Netlify

### Other Platforms

The built files in the `dist` folder can be deployed to any static hosting service.

## 📄 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio!

## 📧 Contact

- **Email**: akshat1910j@gmail.com
- **LinkedIn**: [linkedin.com/in/19akshatj](https://linkedin.com/in/19akshatj)
- **GitHub**: [github.com/aka-akshatj](https://github.com/aka-akshatj)

---

Made with ❤️ using React & Tailwind CSS
