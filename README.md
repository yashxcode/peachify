# Peachify

Peachify is a comprehensive productivity application designed to provide a seamless and intuitive note-taking experience. Built with a modern tech stack including Next.js, TypeScript, TailwindCSS, Convex for the backend, and Clerk for authentication, Peachify aims to enhance your productivity with its array of powerful features.

## Live Demo

Try out Peachify live: [Peachify App](https://peachify-xi.vercel.app/)

## Key Features

### Productivity and Organization

- 📝 **Peachify-style Editor**: Seamless note-taking with a rich text editor.
- 📂 **Infinite Children Documents**: Organize your notes hierarchically.
- ➡️🔀⬅️ **Expandable Sidebar**: Easy navigation with a fully collapsible sidebar.
- 🎨 **Customizable Icons**: Real-time icon updates for each document.
- 🗑️ **Trash Can & Soft Delete**: Soft delete with file recovery options.

### User Experience

- 🌓 **Light and Dark Mode**: Toggle between light and dark themes.
- 📱 **Full Mobile Responsiveness**: Productivity on the go.
- 🛬 **Landing Page**: A welcoming entry point for users.
- 🖼️ **Cover Image for Documents**: Personalize your documents with cover images.

### Data Management

- 🔄 **Real-time Database**: Instant data updates with Convex.
- 📤📥 **File Upload, Deletion, and Replacement**: Manage your files efficiently.

### Security and Sharing

- 🔐 **Authentication**: Secure your notes with Clerk.
- 🌍 **Publish to the Web**: Share your notes by publishing them online.

## Technologies Used

- **Next.js**: Framework for server-rendered React applications.
- **TypeScript**: Static typing for JavaScript.
- **TailwindCSS**: Utility-first CSS framework.
- **Convex**: Real-time database for instant data updates.
- **Clerk**: Secure and scalable user authentication API.

## Installation

To set up Peachify locally, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yashxcode/peachify.git
   cd peachify
   ```

2. **Install the dependencies:**

   ```bash
   npm install
   ```

3. **Set up environment variables:**

   ```bash
   # Deployment used by `npx convex dev`
   CONVEX_DEPLOYMENT=
   NEXT_PUBLIC_CONVEX_URL=

   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
   CLERK_SECRET_KEY=

   EDGE_STORE_ACCESS_KEY=
   EDGE_STORE_SECRET_KEY=
   ```

4. **Run Convex:**

   ```bash
   npx convex dev
   ```

5. **Run the development server:**
   ```bash
   npm run dev
   ```

---

Peachify is a labor of love aimed at providing a robust and user-friendly productivity tool. I hope you find it as useful and enjoyable to use as I did building it! For any issues, feel free to open an issue on this repository. Happy note-taking!
