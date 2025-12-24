import { Zap, ShieldCheck, Headset, Globe2 } from 'lucide-react';

const features = [
  {
    icon: <Zap className="w-8 h-8 text-dongee-primary" />,
    title: "Velocidad Extrema",
    description: "Servidores con tecnología NVMe y LiteSpeed para que tu web cargue volando."
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-dongee-primary" />,
    title: "Seguridad Total",
    description: "Certificados SSL gratuitos, copias de seguridad diarias y protección Imunify360."
  },
  {
    icon: <Headset className="w-8 h-8 text-dongee-primary" />,
    title: "Soporte Experto",
    description: "Equipo de ingenieros listos para ayudarte 24/7 en español real, sin bots."
  },
  {
    icon: <Globe2 className="w-8 h-8 text-dongee-primary" />,
    title: "Migración Gratis",
    description: "Traemos tu sitio web desde tu antiguo proveedor sin costo y sin interrupciones."
  }
];

export default function Features() {
  return (
    <div className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900">¿Por qué elegir DONGEE?</h2>
          <p className="mt-4 text-lg text-gray-600">Infraestructura de clase mundial con soporte local.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-gray-100">
              <div className="bg-emerald-50 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}