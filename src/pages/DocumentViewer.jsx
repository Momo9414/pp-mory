import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { documents } from '../data/documents';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PdfModal from '../components/PdfModal';
import NotFound from './NotFound';

export default function DocumentViewer() {
  const { slug } = useParams();
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // Find the requested document (or default to the first one at root)
  const doc = slug ? documents.find((d) => d.slug === slug) : documents[0];

  // SEO dynamic updates
  useEffect(() => {
    if (doc) {
      document.title = `Statut du Document - ${doc.title} - Millenium Group`;
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) {
        metaDesc.setAttribute('content', `Vérification officielle de l'attestation pour ${doc.title}.`);
      }
    }
  }, [doc]);

  // If the document is not found, render the custom NotFound component
  if (!doc) {
    return <NotFound />;
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#f1f5f9]">
      <Header />

      <main className="flex-grow flex items-center justify-center px-4 py-10 sm:py-16">
        <div className="w-full max-w-xl bg-white rounded-2xl border border-slate-200 shadow-md overflow-hidden transition-all duration-300">
          
          {/* Card Green Header Status */}
          <div className="bg-[#ecfdf5] border-b border-[#d1fae5] px-5 py-3 flex items-center gap-3">
            <div className="w-5 h-5 rounded-full bg-[#10b981] flex items-center justify-center text-white flex-shrink-0">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <span className="text-[#065f46] font-bold text-xs sm:text-sm tracking-tight">
              Statut du document : {doc.status || "Validé"}
            </span>
          </div>

          {/* Card Body with detail fields */}
          <div className="p-4 sm:p-5 flex flex-col gap-2.5 bg-slate-50/50">
            {doc.details.map((item, index) => (
              <div 
                key={index} 
                className="bg-white border border-slate-100 rounded-xl p-3 flex items-center gap-3 shadow-sm hover:border-slate-200 transition-colors"
              >
                {/* Orange Circle Arrow Left */}
                <div className="w-5.5 h-5.5 rounded-full bg-[#f97316] flex items-center justify-center text-white flex-shrink-0 shadow-sm shadow-orange-100">
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
                
                {/* Label and Value */}
                <div className="text-xs sm:text-sm text-slate-700 leading-relaxed break-words w-full">
                  <span className="font-semibold text-slate-800">{item.label}</span>
                  <span className="text-slate-400 font-normal"> : </span>
                  <span className="text-slate-500 font-normal">{item.value}</span>
                </div>
              </div>
            ))}

            {/* Clickable button row "VOIR LE DOCUMENT" */}
            <button
              onClick={() => setIsModalOpen(true)}
              className="mt-1.5 w-full bg-[#eff6ff] hover:bg-[#dbeafe] border border-blue-100 hover:border-blue-200 rounded-xl p-3 flex items-center gap-3 shadow-sm transition-all duration-200 text-left hover:scale-[1.01] cursor-pointer"
              aria-label="Ouvrir la prévisualisation du document"
            >
              {/* Orange Circle Arrow Left */}
              <div className="w-5.5 h-5.5 rounded-full bg-[#f97316] flex items-center justify-center text-white flex-shrink-0 shadow-sm shadow-orange-100">
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
                </svg>
              </div>
              
              <span className="text-blue-700 font-bold text-xs sm:text-sm tracking-wider uppercase">
                Voir le document
              </span>
            </button>


          </div>

        </div>
      </main>

      {/* PDF Modal */}
      <PdfModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        pdfUrl={doc.pdf} 
        title={doc.title} 
      />

      <Footer />
    </div>
  );
}
