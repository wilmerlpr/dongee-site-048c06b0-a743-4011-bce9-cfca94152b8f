import { Facebook, Twitter, Instagram, Linkedin, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
               <div className="w-6 h-6 bg-dongee-primary rounded-md flex items-center justify-center">
                <span className="text-white text-xs font-bold">D</span>
              </div>
              <span className="text-xl font-bold text-white">DONGEE</span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Proveedor líder de hosting y soluciones en la nube en Colombia y Latinoamérica. Comprometidos con tu éxito online.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-4">Servicios</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-dongee-primary transition-colors">Web Hosting</a></li>
              <li><a href="#" className="hover:text-dongee-primary transition-colors">Hosting WordPress</a></li>
              <li><a href="#" className="hover:text-dongee-primary transition-colors">Servidores VPS</a></li>
              <li><a href="#" className="hover:text-dongee-primary transition-colors">Registro de Dominios</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Empresa</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-dongee-primary transition-colors">Sobre Nosotros</a></li>
              <li><a href="#" className="hover:text-dongee-primary transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-dongee-primary transition-colors">Afiliados</a></li>
              <li><a href="#" className="hover:text-dongee-primary transition-colors">Contacto</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Síguenos</h4>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-dongee-primary transition-colors"><Facebook size={20} /></a>
              <a href="#" className="hover:text-dongee-primary transition-colors"><Twitter size={20} /></a>
              <a href="#" className="hover:text-dongee-primary transition-colors"><Instagram size={20} /></a>
              <a href="#" className="hover:text-dongee-primary transition-colors"><Linkedin size={20} /></a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm">
          <p className="flex items-center justify-center gap-1">
            Hecho con <Heart size={14} className="text-red-500 fill-current" /> para emprendedores latinos.
          </p>
          <p className="mt-2">&copy; {new Date().getFullYear()} DONGEE. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}