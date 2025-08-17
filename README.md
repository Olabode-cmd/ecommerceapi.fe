# Personal E-commerce Platform

A modern e-commerce application built with React, TypeScript, and Vite featuring secure authentication, product management, and form validation.

## Tech Stack

- **Frontend**: React 18 + TypeScript + Vite
- **Styling**: Tailwind CSS
- **Forms**: React Hook Form + Zod validation
- **HTTP Client**: Axios + React Query
- **Security**: DOMPurify for input sanitization
- **Routing**: React Router DOM
- **Notifications**: React Toastify

## Project Structure

### `/src/components`
- **UI Components**: Reusable Button and Input components
- **Layout**: Navbar, Footer, HeroSection
- **Product**: ProductCard, CategorySection for product display
- **User**: UserMenu for authenticated user interactions

### `/src/pages`
- **Authentication**: Login and Register pages with form validation
- **About**: Static about page

### `/src/contexts`
- **AuthContext**: Global authentication state management

### `/src/services`
- **API Layer**: Centralized HTTP client configuration
- **Auth Service**: Login/register mutations with React Query
- **Category/Product Services**: CRUD operations for e-commerce entities

### `/src/schemas`
- **Zod Schemas**: Form validation schemas for authentication
- Type-safe form data with automatic TypeScript inference

### `/src/types`
- **TypeScript Definitions**: User, Product, Category, and request types
- Centralized type definitions for the entire application

### `/src/utils`
- **Sanitization**: DOMPurify utilities for input security
- Form data sanitization to prevent XSS attacks

## Security Features

- **Form Validation**: Zod schemas with real-time validation
- **Input Sanitization**: DOMPurify removes malicious HTML/scripts
- **Disabled Buttons**: Submit buttons disabled until all fields are valid
- **Token Management**: Secure JWT token storage and handling

## Key Features

- Responsive design with Tailwind CSS
- Type-safe forms with React Hook Form + Zod
- Real-time form validation with disabled submit states
- Secure input sanitization as secondary defense layer
- Global authentication state with React Context
- Optimistic updates with React Query
- Toast notifications for user feedback
