import { Check } from 'lucide-react';

const plans = [
  {
    name: "Emprendedor",
    price: "$14.900",
    period: "/mes",
    features: ["1 Sitio Web", "10 GB Almacenamiento NVMe", "Cuentas de correo ilimitadas", "SSL Gratis", "Dominio .com gratis (año)"],
    highlight: false
  },
  {
    name: "Negocios",
    price: "$24.900",
    period: "/mes",
    features: ["Sitios Web Ilimitados", "25 GB Almacenamiento NVMe", "Cuentas de correo ilimitadas", "SSL Gratis", "Dominio .com gratis (año)", "Doble de RAM y CPU"],
    highlight: true
  },
  {
    name: "Turbo",
    price: "$44.900",
    period: "/mes",
    features: ["Sitios Web Ilimitados", "50 GB Almacenamiento NVMe", "Cuentas de correo ilimitadas", "SSL Gratis", "Dominio .com gratis (año)", "Máxima potencia LiteSpeed"],
    highlight: false
  }
];

export default function Plans() {
  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900">Planes de Hosting Diseñados para Ti</h2>
          <p className="mt-4 text-lg text-gray-600">Escalabilidad y potencia para cualquier tipo de proyecto.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`relative rounded-2xl p-8 transition-all duration-300 ${plan.highlight ? 'bg-slate-900 text-white shadow-2xl scale-105 border-2 border-dongee-primary' : 'bg-white text-slate-900 border border-gray-200 hover:shadow-xl'}`}
            >
              {plan.highlight && (
                <div className="absolute top-0 right-0 bg-dongee-primary text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg">
                  MÁS VENDIDO
                </div>
              )}
              <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
              <div className="flex items-baseline mb-6">
                <span className="text-4xl font-extrabold">{plan.price}</span>
                <span className={`ml-1 ${plan.highlight ? 'text-gray-400' : 'text-gray-500'}`}>{plan.period}</span>
              </div>
              
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <Check className={`w-5 h-5 mr-3 flex-shrink-0 ${plan.highlight ? 'text-dongee-primary' : 'text-emerald-600'}`} />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <button className={`w-full py-3 px-6 rounded-lg font-bold transition-colors ${plan.highlight ? 'bg-dongee-primary text-white hover:bg-dongee-secondary' : 'bg-slate-100 text-slate-900 hover:bg-slate-200'}`}>
                Contratar ahora
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}