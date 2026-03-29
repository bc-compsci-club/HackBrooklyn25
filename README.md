# Hack Brooklyn 2026

The official website for **Hack Brooklyn** — Brooklyn College's 48-hour hackathon. Built with React and Tailwind CSS, the site features a live countdown timer, interactive track selector, prize showcase, mentor carousel, and FAQ section.

## Tech Stack

- **React 19** via Create React App
- **Tailwind CSS 3** for styling
- **Framer Motion** for animations
- **Font Awesome** for icons

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

```bash
git clone https://github.com/bc-compsci-club/HackBrooklyn25.git
cd HackBrooklyn25
npm install
```

### Running Locally

```bash
npm start
```

Opens at [http://localhost:3000](http://localhost:3000) with hot reload.

### Building for Production

```bash
npm run build
```

Output goes to the `build/` folder.

### Running Tests

```bash
npm test
```

## Project Structure

```
src/
  components/
    Navbar.js       # Sticky nav with mobile hamburger menu
    Hero.js         # Full-screen banner with countdown timer
    About.js        # Event overview and details
    Tracks.js       # Interactive subway-themed track carousel
    Prizes.js       # Tabbed prize showcase ($13K+ in prizes)
    Speakers.js     # Auto-scrolling mentor carousel
    FAQ.js          # Collapsible FAQ section
    Footer.js       # Social links and footer
  App.js            # Root component
  index.css         # Global styles and Tailwind imports
public/
  images/           # SVG graphics and speaker photos
  fonts/            # Custom SpenbebGame display font
```

## Hackathon Tracks

- Finance
- Education
- Entertainment
- Healthcare

## Contributing

1. **Fork** the repository and create a branch from `main`:
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make your changes.** Keep each PR focused on a single concern.

3. **Test locally** with `npm start` before opening a PR.

4. **Open a pull request** against `main` with a clear description of what changed and why.

### Guidelines

- Follow the existing code style (ESLint with `react-app` preset).
- Use Tailwind utility classes rather than adding custom CSS where possible.
- Keep components in `src/components/` and assets in `public/images/`.
- Use descriptive branch names: `feature/`, `fix/`, `chore/`.
- Add screenshots or screen recordings to PRs that change the UI.

## License

This project is maintained by the [Brooklyn College Computer Science Club](https://bccompsci.club).
