import React from 'react';

export default function Footer({ companyName = '' }) {
  const currentYear = 2026; // Defined statically as requested: 2026
  
  return (
    <footer className="bg-white border-t border-slate-100 py-8 sm:py-12 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-slate-400 text-sm sm:text-base font-light">
          © {currentYear} {companyName}. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
}
