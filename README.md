# BUILTONINDIA Website

This is a React and Vite website. The layout and styling live in `src/components/` and `src/App.css`; editable website content is kept in `src/data/`.

## Preview the website

Install dependencies once, then start the local preview server:

```bash
npm install
npm run dev
```

Open the local URL shown in the terminal, usually `http://localhost:5173`.

## Change text, email, or company details

Open `src/data/siteContent.js`.

- `company` contains the name, tagline, email, and company description.
- `heroContent`, `experienceContent`, `servicesContent`, `portfolioContent`, `partnershipContent`, `aboutContent`, `whyContent`, and `contactContent` contain the homepage text.
- `navigation` contains the header navigation items.

Change only the text between quotation marks. The shared email is used throughout the header, footer, contact section, and enquiry forms.

## Add or edit a project

Open `src/data/projects.js`. Each item in the `projects` list becomes a portfolio card automatically.

Copy an existing project object, then edit these fields:

```js
{
  title: 'Project name',
  client: '',
  location: '',
  category: 'Commercial',
  year: '',
  status: '',
  scopeOfWork: '',
  shortDescription: 'A short project summary.',
  coverImage: 'https://example.com/cover-image.jpg',
  galleryImages: [],
  imageAlt: 'Describe the image for screen readers',
}
```

- Use an existing category or add a new category; the project filter updates automatically.
- Keep any unconfirmed detail as an empty string (`''`) rather than guessing.
- Delete an entire object to remove that project from the portfolio.

## Replace project photos

For an external image, replace `coverImage` with its full URL.

For an image stored in the project, place it in `public/images/` and use a path such as:

```js
coverImage: '/images/project-name-cover.jpg'
```

Add additional images to `galleryImages` when they are available. The current portfolio design uses the cover image; gallery images are stored ready for future gallery support.

## Check production build

Run this before publishing changes:

```bash
npm run build
```

Vite creates the production-ready files in `dist/`. Do not edit `dist/` manually; it is regenerated each time you build.

## Publish changes

This project does not publish automatically from these instructions. After reviewing locally and running a successful build, commit and push the source files through your chosen Git hosting and deployment workflow.
