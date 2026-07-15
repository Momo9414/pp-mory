import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function NotFound() {
  // SEO optimization for 404 page
  useEffect(() => {
    document.title = "Document Non Trouvé - Millenium Group";
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50/50">
      <Header />

      <main className="flex-grow flex items-center justify-center max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="text-center max-w-md mx-auto bg-white rounded-3xl border border-slate-100 shadow-sm p-8 sm:p-12 hover-card-effect">
          <div className="w-20 h-20 bg-rose-50 border border-rose-100 text-rose-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm">
            <svg 
              className="w-10 h-10" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="1.5" 
                d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>

          <h1 className="font-heading font-extrabold text-3xl text-slate-800 tracking-tight mb-2">
            404
          </h1>
          <h2 className="font-heading font-bold text-lg text-slate-700 mb-4">
            Document introuvable
          </h2>
          <p className="text-slate-400 font-light text-sm sm:text-base mb-8 leading-relaxed">
            Le lien ou le QR Code utilisé semble expiré ou incorrect. Veuillez vérifier l'URL ou retourner à l'accueil pour consulter la liste complète.
          </p>

          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-xl transition-all duration-200 shadow-md hover:scale-[1.02] w-full cursor-pointer focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            aria-label="Retourner à l'accueil"
          >
            <svg 
              className="w-4 h-4" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2" 
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
            <span>Retourner à l'accueil</span>
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
