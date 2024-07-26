# Note-Taking-App
This is a simple note-taking application built using React. The app allows users to create, view, edit, delete, and search notes. The notes are stored in the browser's local storage.


## Deploy link : [Click-Here](https://notes-aplicationn.netlify.app/)


#### Deploy status badge: [![Netlify Status](https://api.netlify.com/api/v1/badges/6cef1667-aca5-42b4-9b7e-74229591ce0c/deploy-status)](https://app.netlify.com/sites/notes-aplicationn/deploys)


## Features

- **Create Notes**: Users can add new notes via a form.
- **View Notes**: Notes can be viewed with pagination (10 notes per page).
- **Edit Notes**: Users can edit existing notes.
- **Delete Notes**: Users can delete notes permanently.
- **Search Notes**: Users can filter notes by title or content using a search bar.
- **Timestamps**: Each note displays its creation or last modification time.

## Technologies Used

- React.js
- CSS for styling
- Material-UI icons
- Local Storage for data persistence

## Getting Started

### Prerequisites

Ensure you have Node.js and npm installed on your machine. You can download them from [here](https://nodejs.org/).

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/yourusername/simple-note-taking-app.git 
2. Navigate to the project directory
   ```
   cd simple-note-taking-app

3. Install the dependencies
   ```
   npm install

## Running the App
1. Start the development server
   ```
   npm start

2. Open your browser and navigate to `http://localhost:3000`.

## File Structure
```
simple-note-taking-app/
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── components/
│   │   ├── Footer.js
│   │   ├── Header.js
│   │   ├── Note.js
│   │   ├── NoteArea.js
│   │   └── SearchNote.js
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── ...
├── .gitignore
├── package.json
└── README.md
```

## Components
`App.js`
This is the main component that manages the state and renders other components. It handles adding, updating, deleting, and searching notes, as well as pagination.

`Header.js`
This component displays the header of the application.

`Footer.js`
This component displays the footer of the application.

`NoteArea.js`
This component contains the form for adding and editing notes.

`Note.js`
This component displays an individual note with options to edit or delete it.

`SearchNote.js`
This component contains the search bar for filtering notes.

## Local Storage
The notes are stored as an array of objects in the browser's local storage. Each note object contains the following properties:

- id: Unique identifier for the note
- title: Title of the note
- content: Content of the note
- timeStamp: Timestamp of the note's creation or last modification



##### Feel free to adjust the content as per your requirements and add any additional information you find relevant.


