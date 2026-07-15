import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { documents } from '../data/documents';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Home() {
  // SEO optimization
  useEffect(() => {
    document.title = "Espace Documentaire - Millenium Group";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', 'Accédez et vérifiez en ligne la validité de vos documents officiels émis par Millenium Group.');
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-[#f1f5f9]">
      <Header />

      <main className="flex-grow max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">

        {/* Section Title */}
        <div className="mb-6 flex items-center justify-between border-b border-slate-200 pb-3">
          <h2 className="font-heading font-bold text-lg sm:text-xl text-slate-800">
            Documents disponibles
          </h2>
          <span className="text-xs text-slate-400 bg-white border border-slate-200 px-3 py-1 rounded-full font-medium">
            {documents.length} Fichiers
          </span>
        </div>

        {/* Documents Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {documents.map((doc) => (
            <div 
              key={doc.slug}
              className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden flex flex-col justify-between hover-card-effect hover:border-[#f97316]/30 group"
            >
              {/* Card top orange-green flag accent */}
              <div className="h-1 w-full flex">
                <div className="h-full w-1/2 bg-[#f97316]"></div>
                <div className="h-full w-1/2 bg-[#059669]"></div>
              </div>

              <div className="p-6 flex-grow">
                <div className="flex items-center justify-between gap-4 mb-4">
                  {/* Clean SVG Document Icon instead of Cote d'Ivoire coat of arms */}
                  <div className="w-10 h-10 bg-orange-50 rounded-xl flex items-center justify-center p-2.5 border border-orange-100/50 group-hover:scale-105 transition-transform duration-300">
                    <svg className="w-full h-full text-[#f97316]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  
                  <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-100 px-2.5 py-1 rounded-full uppercase tracking-wider">
                    {doc.status}
                  </span>
                </div>

                <h3 className="font-heading font-bold text-lg text-slate-800 group-hover:text-[#f97316] transition-colors duration-200">
                  {doc.title}
                </h3>
                
                <p className="text-slate-500 text-sm font-light leading-relaxed mt-2 line-clamp-2">
                  {doc.description}
                </p>
                
                {/* Document details preview */}
                <div className="mt-4 pt-3 border-t border-slate-50 flex items-center justify-between text-xs text-slate-400">
                  <span>NCC : {doc.details.find(d => d.label === "NCC")?.value || "N/A"}</span>
                  <span>Date : {doc.details.find(d => d.label === "Date")?.value.split(' ')[0] || "N/A"}</span>
                </div>
              </div>

              {/* Card Actions */}
              <div className="px-6 py-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
                <Link
                  to={`/document/${doc.slug}`}
                  className="inline-flex items-center gap-1.5 text-blue-600 hover:text-blue-700 font-semibold text-sm group-hover:gap-2 transition-all duration-200"
                  aria-label={`Vérifier le document ${doc.title}`}
                >
                  <span>Consulter et Vérifier</span>
                  <svg 
                    className="w-4 h-4 transform group-hover:translate-x-0.5 transition-transform duration-200 text-[#f97316]" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24" 
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth="2.5" 
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
