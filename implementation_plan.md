# Portfolio Website Implementation Plan

## Goal Description
Create a modern, industry-ready personal portfolio website for Divya Dhole. The site will position Divya as a versatile data professional (Data Scientist / Data Analyst / ML Engineer) and highlight experience, skills, and projects with a clean, professional design.

## User Review Required
> [!NOTE]
> I have extracted all content from the provided resume. Please verify if the "Projects" section details (Problem, Data Source, Approach, Tools, Outcome) are accurately captured or if you would like to add more specific metrics.

## Proposed Changes

### Structure
The website will be a single-page application with smooth scrolling navigation.

1.  **Header/Navigation**: Sticky navigation bar with links to sections.
2.  **Hero Section**:
    *   Headline: "Data Scientist | Data Analyst | Machine Learning Engineer"
    *   Sub-text: Focus on solving real problems with data to solution deployment.
    *   Call to Action (CTA): "View Work" or "Contact Me".
3.  **About Section**:
    *   Concise bio focusing on analytical thinking, technical foundation (Python/SQL/Stats), and industry readiness.
4.  **Skills Section**:
    *   Categories: Programming & Tools, Data Analysis & SQL, Modeling & Machine Learning, Visualization & Communication, Data Pipelines/Systems.
    *   Visual representation (e.g., tags, cards, or clean lists).
5.  **Projects Section**:
    *   Cards for each project:
        *   **Integrated Bioinformatics Workflow for Evolutionary Analysis**
            *   **Problem**: Understand langur evolution and inform conservation strategies under climate change.
            *   **Data**: 30x genome coverage, 4,200+ occurrence records, climate projections.
            *   **Approach**: Integrated genomic analysis (PSMC, ABBA-BABA) with ecological modeling (MaxEnt).
            *   **Outcome**: Identified hybridization evidence and key conservation priorities (habitat connectivity, refugia).
        *   **Genomic Pipeline Resource Planning**
        *   **Cybersecurity Trends Operational Analysis**
        *   **Predictive Modeling for Safety Operations**
    *   Each card details: Problem, Data, Approach, Tools, Outcome.
6.  **Experience Section**:
    *   Timeline or clean list format for professional roles.
    *   Outcome-focused bullet points from resume.
7.  **Footer**:
    *   Contact CTA.
    *   Social links (LinkedIn, Email).

### Design & Tone
*   **Aesthetics**: Minimal, professional, clean. High contrast for readability.
*   **Color Palette**: Dark mode or Deep Blue/Slate theme to represent "Data" and "Technology" (e.g., #0f172a, #334155, #64748b) with a vibrant accent color (e.g., Teal #14b8a6 or Indigo #6366f1).
*   **Typography**: Modern sans-serif fonts (Inter or Roboto) for clean readability.

### Technical Stack
*   **HTML5**: Semantic structure.
*   **CSS3**: Vanilla CSS with CSS Variables for theming. Flexbox/Grid for layout.
*   **JavaScript**: Simple DOM manipulation for smooth scrolling and potential simple animations (e.g., intersection observer for fade-ins).

### File Structure
```
/
├── index.html
├── style.css
├── script.js
└── assets/ (if needed for icons/images)
```

#### [NEW] [index.html](file:///Users/divyadhole/.gemini/antigravity/playground/ruby-triangulum/index.html)
Main HTML file containing all sections.

#### [NEW] [style.css](file:///Users/divyadhole/.gemini/antigravity/playground/ruby-triangulum/style.css)
All styles, including responsive design and animations.

#### [NEW] [script.js](file:///Users/divyadhole/.gemini/antigravity/playground/ruby-triangulum/script.js)
For interactive elements like mobile menu toggling and scroll animations.

## Verification Plan

### Automated Tests
*   Since this is a static site, I will use `browser_subagent` to render the page and verify visibility of all sections.

### Manual Verification
*   Open `index.html` in the browser.
*   Check responsiveness on desktop and mobile viewports.
*   Verify links and buttons work.
*   Proofread content against the gathered requirements.
