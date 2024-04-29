How to Run:

1. Download the Folder:
   - Download the folder containing the project files.
   - Unzip the folder if it's compressed.

2. Navigate to the Project Directory:
   - Open your terminal or command prompt.
   - Use the `cd` command to navigate to the root directory of the project.
     ```
     cd ONE_GEO_VIJAY/ONE-GEO/notetaking
     ```

3. Install Dependencies:
   - Run the following command to install the required dependencies:
     ```
     npm install
     ```

4. Start the Development Server:
   - Once the dependencies are installed, start the development server by running:
     ```
     npm start
     ```

5. View the Application:
   - After starting the server, the application will be accessible in your web browser at the following address:
     ```
     http://localhost:3000
     ```

6. Interact with the Application:
   - You can interact with the application by creating, editing, and dragging notes within the canvas area.
   - Use the "Export Notes" button to export the notes data to an Excel file.



Folder Structures:
notetaking
│   .gitignore
│   package.json
│   {Other Files}
│
├───node_modules
├───public
└───src
    │   App.js
    │   app.css
    │   index.js
    │   index.css
    │   {Other Files}
    │
    └───Components
        │   ExportNotes.js
        │   Note.js
        │   NotesArea.js
        │
        └───css
                Note.css
                NotesArea.css



Components
1. NotesArea.js
   Purpose:
   - NotesArea component manages the display and manipulation of notes on an interactive canvas.
   - Allows users to create, edit, and drag notes within specified boundaries.
   
   Key Features:
   - Handles double-click events to create new notes at specific positions.
   - Supports dragging and dropping notes within the canvas area.
   - Displays cursor coordinates and highlights the canvas boundary.

2. Note.js
   Purpose:
   - Note component represents an individual note displayed on the canvas.
   - Enables users to edit the text content of each note.
   
   Key Features:
   - Renders a draggable textarea for editing note content.
   - Receives updates to note text via onTextChange prop.
   - Implements drag-and-drop functionality using HTML5 Drag and Drop API.

3. ExportNotes.js
   Purpose:
   - ExportNotes component provides functionality to export notes data to an Excel file.
   
   Key Features:
   - Generates an Excel file containing note text and position information.
   - Utilizes the xlsx library to convert notes data into Excel format.
   - Triggered by clicking the "Export Notes" button.
