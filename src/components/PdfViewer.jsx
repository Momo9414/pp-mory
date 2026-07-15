import React, { useState } from 'react';

export default function PdfViewer({ pdfUrl, title }) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="relative w-full rounded-2xl border border-slate-100 bg-slate-50 shadow-inner overflow-hidden flex flex-col" style={{ minHeight: '80vh' }}>
      
      {/* Loading Skeleton */}
      {isLoading && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-50 z-10 transition-opacity duration-300">
          <div className="w-12 h-12 border-4 border-indigo-200 border-t-indigo-600 rounded-full animate-spin mb-4"></div>
          <p className="text-slate-500 font-medium text-sm animate-pulse">Chargement sécurisé du document...</p>
        </div>
      )}

      {/* PDF Container - Using <object> for better fallback and features */}
      <object
        data={`${pdfUrl}#toolbar=1&navpanes=0&scrollbar=1`}
        type="application/pdf"
        className="w-full flex-grow border-none"
        style={{ minHeight: '80vh' }}
        onLoad={() => setIsLoading(false)}
        aria-label={`Visualisation du document PDF: ${title}`}
      >
        {/* Fallback layout if the browser cannot render the PDF */}
        <div className="flex flex-col items-center justify-center px-6 py-16 text-center bg-white min-h-[500px] w-full">
          <div className="w-16 h-16 bg-rose-50 text-rose-500 rounded-2xl flex items-center justify-center mb-6 border border-rose-100 shadow-sm">
            <svg 
              className="w-8 h-8" 
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
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
          </div>
          <h3 className="text-slate-800 font-heading font-semibold text-lg sm:text-xl mb-2">
            Aperçu non disponible
          </h3>
          <p className="text-slate-500 max-w-md mx-auto text-sm sm:text-base mb-8">
            Votre navigateur ou appareil ne permet pas la visualisation directe des fichiers PDF dans cette page.
          </p>
          <a
            href={pdfUrl}
            download
            className="inline-flex items-center gap-2 px-5 py-3 bg-slate-800 hover:bg-slate-900 text-white font-medium rounded-xl transition-all duration-200 shadow-md hover:scale-[1.02]"
            aria-label="Télécharger le fichier PDF pour consultation locale"
          >
            <svg 
              className="w-5 h-5" 
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
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
              />
            </svg>
            <span>Télécharger le PDF</span>
          </a>
        </div>
      </object>
    </div>
  );
}
