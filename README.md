# Next.js AI Chatbot

This is a personal project built with Next.js and modern web technologies to create a customizable AI chatbot application. It leverages server-side rendering, dynamic routing, and integrations with AI SDKs for seamless chatbot functionality.

## Features

- **Next.js**: Fast and scalable framework with App Router and React Server Components.
- **AI SDK**: Unified API for integrating various AI models like OpenAI and xAI.
- **Tailwind CSS**: Utility-first styling for responsive and modern UI.
- **Authentication**: Secure user authentication with Auth.js.
- **Data Persistence**: Save chat history and user data using serverless Postgres and file storage.

## Running Locally

1. Install dependencies:
   ```bash
   pnpm install
   ```
2. Start the development server:
   ```bash
   pnpm dev
   ```
3. Visit [localhost:3000](http://localhost:3000) to view the application.

## Notes

- Environment variables are required for AI and authentication integrations. Refer to `.env.example` for setup.
- Do not commit your `.env` file to avoid exposing sensitive information.

This project is a great starting point for building AI-powered applications with Next.js.
