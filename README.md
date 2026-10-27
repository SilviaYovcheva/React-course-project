# BookNest

## About the project

BookNest is a book app made with React. It lets users browse books and add books to the app.
https://book-nest.silviyovcheva.workers.dev/

## Functional Guide

### Browse books
- Open the home page to see the books available in the app.
- Select a book to view its details.

### Register and log in
- Create an account on the Register page.
- Log in using the Login page.
- Some actions are available only to logged-in users.

### Add a book
- Log in to your account.
- Open the page for creating a book.
- Enter the book information and submit the form.
- The book is saved to Supabase.

### Edit or delete a book
- Logged-in users can edit or delete books they own.
- Open one of your books and choose the edit or delete action.
- The changes are sent to Supabase.

### Log out
- Click the Logout link in the header.
- The app sends a logout request and clears the local authentication data.
- You are redirected to the home page.

## Technologies

- React
- Vite
- React Router
- Supabase Auth and REST API
- CSS Modules

## Requirements

Install [Node.js](https://nodejs.org/) first. It includes npm, which is used to install packages and run the app.

## Installation and running the project

1. Clone the repository:

   ```bash
   git clone https://github.com/SilviaYovcheva/React-course-project.git
   ```

2. Open the project folder:

   ```bash
   cd <project-folder>
   ```

3. Install the packages:

   ```bash
   npm install
   ```

4. Create a `.env` file in the root folder, next to `package.json`, and add your Supabase settings:

   ```env
   VITE_SUPABASE_URL=https://qvizwoalgjaprthtoweb.supabase.co
   VITE_SUPABASE_ANON_KEY=your_supabase_publishable_or_anon_key
   ```

   Replace the key placeholder with the public publishable/anon key from your Supabase project settings. Do not use a service-role key in a frontend app. Make sure the variable names match the names used in your code.

5. Start the development server:

   ```bash
   npm run dev
   ```

6. Open the local URL printed in the terminal. Vite commonly uses `http://localhost:5173`.

## Supabase setup

The app uses Supabase for authentication and book data. You need a configured Supabase project and the database tables expected by the app.

The `books` table stores information such as title, author, genre, description, image URL, published year, owner ID and creation date.

Row Level Security (RLS) policies must be enabled and configured correctly. They should allow the actions intended by the app, such as letting users create books while only allowing owners to edit or delete their own books. If everyone should be able to browse books, configure a suitable read policy.