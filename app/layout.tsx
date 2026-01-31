// app/layout.tsx
import Navbar from '@/components/Navbar'; // Using your @ path alias!
import Footer from '@/components/Footer';
import Testimonials from '@/components/testimonials';
import Store from '@/components/store';
import Pricing from '@/components/pricing';
import Contact from '@/components/contact';
import React from 'react';
import './globals.css'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}