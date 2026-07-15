import React from 'react';

export default function DownloadButton({ pdfUrl, fileName, title = 'Télécharger le document' }) {
  return (
    <a
      href={pdfUrl}
      download={fileName || pdfUrl.split('/').pop()}
      className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 text-white font-medium rounded-xl shadow-md shadow-indigo-100 hover:shadow-lg hover:shadow-indigo-200 transition-all duration-200 w-full sm:w-auto text-center focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 hover:scale-[1.02] cursor-pointer"
      aria-label={`Télécharger le document ${fileName || ''}`}
    >
      <svg 
        className="w-5 h-5 flex-shrink-0 animate-bounce" 
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
      <span>{title}</span>
    </a>
  );
}
