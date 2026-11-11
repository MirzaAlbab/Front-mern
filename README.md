# Front-mern

A React frontend for creating, listing, editing, and deleting users through a MERN backend.

[Repository](https://github.com/MirzaAlbab/Front-mern)

## Features

- User list with name, email, and gender
- Add and edit forms
- Deletion confirmation
- Bulma styling and React Router navigation

## Technology

`react` ^18.2.0

## Getting started

Install Node.js and start the companion backend first.

```bash
git clone https://github.com/MirzaAlbab/Front-mern.git
cd Front-mern
```

```bash
npm install
```

Set the API base URL in a local `.env.local` file:

```dotenv
REACT_APP_API_URL=http://localhost:5000
```

```bash
npm start
```

Use the URL printed by Create React App. Restart the development server after changing environment variables. `REACT_APP_*` values are bundled into the frontend and must not contain secrets.

## Development and checks

```bash
npm run build
```

The manifest provides `npm test`, but no application test files were present in the reviewed tree.

## Project structure

- `public/` — Public web assets and entry points
- `src/` — Application source

## Project notes

Companion backend: [Backend-mern](https://github.com/MirzaAlbab/Backend-mern).

## License

No root `LICENSE` file was present in the reviewed repository. Consult the repository owner about reuse; dependencies and third-party assets retain their own terms.
