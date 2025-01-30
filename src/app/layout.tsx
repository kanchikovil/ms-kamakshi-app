// src/app/layout.tsx
import React from 'react';
import './globals.css'; // You can add global styles here

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header>
          <h1>Registration Management</h1>
        </header>
        <main>{children}</main>
        <footer>
          <p>&copy; 2025 Registration App</p>
        </footer>
      </body>
    </html>
  );
}
