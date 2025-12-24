import { Search, Loader2, CheckCircle, XCircle } from 'lucide-react';
import { useState } from 'react';

export default function Hero() {
  const [domain, setDomain] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<{ available: boolean; message: string } | null>(null);

  const checkDomain = async () => {
    if (!domain.trim()) return;
    
    setLoading(true);
    setResult(null);

    const cleanDomain = domain.replace(/^(https?:\/\/)?(www\.)?/, '').split('/')[0].trim();

    try {
      const response = await fetch(`https://cloudflare-dns.com/dns-query?name=${cleanDomain}&type=A`, {
        headers: {
          'accept': 'application/dns-json'
        }
      });

      const data = await response.json();

      if (data.Status === 3) {
        setResult({
          available: true,
          message: `¡Felicidades! ${cleanDomain} está disponible.`
        });
      } else if (data.Status === 0) {
        setResult({
          available: false,
          message: `Lo sentimos, ${cleanDomain} ya está registrado.`
        });
      } else {
        setResult({
          available: false,
          message: `Estado desconocido para ${cleanDomain}. Intenta con otro.`
        });
      }
    } catch (error) {
      console.error(error);
      setResult({
        available: false,
        message: "Error al consultar el servicio. Intenta más tarde."
      });
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      checkDomain();
    }
  };

  return (
    <div className="relative bg-slate-900 overflow-hidden">
      {/* Decorative blobs - Green theme */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-dongee-primary/20 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-emerald-500/20 blur-3xl"></div>

      {/* Tesseract Animation Background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-96 h-96 opacity-10">
          <svg viewBox="0 0 200 200" className="w-full h-full text-dongee-primary animate-rotate">
            {/* Outer frame */}
            <rect x="20" y="20" width="160" height="160" fill="none" stroke="currentColor" strokeWidth="1.5"/>
            {/* Inner frame */}
            <rect x="50" y="50" width="100" height="100" fill="none" stroke="currentColor" strokeWidth="1.5"/>
            {/* Connecting edges for tesseract projection */}
            <line x1="20" y1="20" x2="50" y2="50" stroke="currentColor" strokeWidth="1.5"/>
            <line x1="180" y1="20" x2="150" y2="50" stroke="currentColor" strokeWidth="1.5"/>
            <line x1="180" y1="180" x2="150" y2="150" stroke="currentColor" strokeWidth="1.5"/>
            <line x1="20" y1="180" x2="50" y2="150" stroke="currentColor" strokeWidth="1.5"/>
            {/* Additional depth lines */}
            <line x1="20" y1="100" x2="50" y2="100" stroke="currentColor" strokeWidth="1" opacity="0.7"/>
            <line x1="100" y1="20" x2="100" y2="50" stroke="currentColor" strokeWidth="1" opacity="0.7"/>
            <line x1="180" y1="100" x2="150" y2="100" stroke="currentColor" strokeWidth="1" opacity="0.7"/>
            <line x1="100" y1="180" x2="100" y2="150" stroke="currentColor" strokeWidth="1" opacity="0.7"/>
          </svg>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight mb-6">
            El Hosting que tu proyecto <br className="hidden md:block" />
            <span className="text-dongee-primary">se merece.</span>
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-300 mb-10">
            Velocidad, seguridad y el mejor soporte en español para impulsar tu presencia en internet.
          </p>

          <div className="max-w-3xl mx-auto flex flex-col gap-4">
            <div className="bg-white p-2 rounded-xl shadow-2xl flex flex-col md:flex-row items-center gap-2">
              <div className="flex-1 w-full flex items-center px-4">
                <Search className="text-gray-400" />
                <input 
                  type="text" 
                  value={domain}
                  onChange={(e) => setDomain(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Encuentra tu dominio perfecto (ej. miempresa.com)"
                  className="w-full p-4 outline-none text-gray-700 placeholder-gray-400"
                />
              </div>
              <button 
                onClick={checkDomain}
                disabled={loading}
                className="w-full md:w-auto bg-dongee-primary hover:bg-dongee-secondary text-white font-bold py-4 px-8 rounded-lg transition-colors flex items-center justify-center min-w-[120px]"
              >
                {loading ? <Loader2 className="animate-spin" /> : 'Buscar'}
              </button>
            </div>

            {/* Search Result Display */}
            {result && (
              <div className={`p-4 rounded-lg flex items-center justify-center gap-3 animate-fade-in ${result.available ? 'bg-emerald-100 text-emerald-900 border border-emerald-200' : 'bg-red-100 text-red-800 border border-red-200'}`}>
                {result.available ? <CheckCircle size={24} className="text-emerald-600" /> : <XCircle size={24} />}
                <span className="font-semibold">{result.message}</span>
                {result.available && (
                  <span className="ml-2 text-sm underline cursor-pointer hover:text-emerald-700 font-bold">
                    ¡Registrar ahora!
                  </span>
                )}
              </div>
            )}
          </div>

          <p className="mt-6 text-sm text-gray-400">
            Extensiones populares: .com .co .net .org .com.co
          </p>
        </div>
      </div>
    </div>
  );
}