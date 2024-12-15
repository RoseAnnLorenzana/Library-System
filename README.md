# Library-System
Is a digital or physical solution designed to manage and organize a collection of books or resources. It allows users to perform tasks such as adding, searching, borrowing, and removing books. A basic library system typically includes features like a catalog for listing books, functionality to manage users, and tools for tracking book availability.

### Key Features:

1. **Simple User Interface**:
   - A clean and user-friendly interface with headings, labels, and input fields for adding books.
   - A table to display the list of books dynamically, with clearly defined columns: `#` (serial number), `Title`, `Author`, and `Actions`.

2. **Dynamic Book Management**:
   - **Add Books**: Users can input book titles and authors, and the system dynamically adds them to the table without reloading the page.
   - **Delete Books**: Users can remove books from the list with a "Delete" button provided in the `Actions` column.

3. **Validation**:
   - Ensures both the title and author fields are filled before adding a book. If either field is empty, an alert is displayed to notify the user.

4. **Auto-incrementing Book Counter**:
   - Each book added is automatically assigned a unique serial number, incrementing with each entry.

5. **Dynamic Content Handling**:
   - Uses JavaScript (linked through `library.js`) to handle user interactions, such as adding and deleting rows in the table dynamically.

6. **Responsive Design**:
   - The `meta viewport` tag ensures that the webpage is optimized for various devices, including mobile and desktop.

7. **Styling**:
   - Aesthetic enhancements through CSS:
     - Consistent font (`Arial, sans-serif`).
     - Borders, padding, and a clean layout for the table.
     - Distinct background color for table headers to improve readability.

8. **Separation of Concerns**:
   - External JavaScript file (`library.js`) keeps the logic separate from the HTML structure, making the code modular and easier to maintain.

### Purpose:
This code implements a **basic library system** where users can manage a list of books. It demonstrates the integration of HTML (for structure), CSS (for styling), and JavaScript (for functionality), making it a practical example for learning basic web development.
