import { ShieldCheck, Video, Factory, Zap, ArrowRight } from 'lucide-react';

export default function WhyMayilvia() {
  const reasons = [
    {
      id: "01",
      icon: ShieldCheck,
      title: "On-Ground Verification",
      description: "Our engineers perform physical 50-point audits on every unit. We eliminate the gap between digital listings and physical reality."
    },
    {
      id: "02",
      icon: Video,
      title: "Live Validation",
      description: "Witness your machinery in operation through 4K live-streamed inspections. Sign off with total confidence before dispatch."
    },
    {
      id: "03",
      icon: Factory,
      title: "AAA-Rated Network",
      description: "Access an exclusive tier of vetted manufacturers. We bypass middle-men to connect you directly with industrial excellence."
    },
    {
      id: "04",
      icon: Zap,
      title: "DDP Global Logistics",
      description: "End-to-end handling of customs and last-mile delivery. We manage the complexity so you can focus on production."
    }
  ];

  return (
    <section className="bg-white py-32 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Header - Minimalist Typography */}
        <div className="grid lg:grid-cols-12 gap-12 mb-32">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-4 mb-8">
              <span className="text-[#1f6f63] text-[10px] font-black tracking-[0.4em] uppercase">The Mayilvia Standard</span>
              <div className="h-px w-12 bg-gray-100" />
            </div>
            <h2 className="text-4xl md:text-6xl font-light text-gray-900 leading-[1.1] tracking-tighter">
              Why industry leaders <br />
              <span className="text-gray-400 italic font-serif">trust our protocol.</span>
            </h2>
          </div>
          <div className="lg:col-span-5 lg:flex items-end justify-end">
             <p className="text-gray-400 text-xs md:text-sm leading-relaxed max-w-xs border-l border-gray-100 pl-8">
               We don't just source machinery; we provide the logistical security and technical intelligence required for high-stakes investments.
             </p>
          </div>
        </div>

        {/* Features - Technical List Style */}
        <div className="grid md:grid-cols-2 gap-x-20 gap-y-24">
          {reasons.map((reason) => (
            <div key={reason.id} className="group flex flex-col items-start">
              <div className="flex items-center gap-6 mb-8">
                <span className="text-[10px] font-black text-gray-200 group-hover:text-[#c9a24a] transition-colors duration-500 tracking-widest uppercase">
                  Metric {reason.id}
                </span>
                <div className="w-8 h-px bg-gray-50 group-hover:w-16 transition-all duration-500" />
              </div>
              
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-2xl bg-gray-50 flex items-center justify-center border border-gray-100 group-hover:border-[#1f6f63]/20 group-hover:bg-white transition-all duration-500 shadow-sm">
                    <reason.icon size={20} className="text-gray-400 group-hover:text-[#1f6f63] transition-colors" strokeWidth={1.5} />
                  </div>
                </div>
                <div>
                  <h3 className="text-gray-900 text-sm font-black uppercase tracking-widest mb-4">
                    {reason.title}
                  </h3>
                  <p className="text-gray-500 text-xs md:text-sm leading-relaxed max-w-md">
                    {reason.description}
                  </p>
                  
                  <button className="mt-6 flex items-center gap-2 text-[10px] font-black text-[#1f6f63] uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                    Learn Protocol <ArrowRight size={12} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Technical Footer - ISO Bar */}
        {/* <div className="mt-40 pt-10 border-t border-gray-50 flex flex-wrap justify-between items-center gap-8 opacity-40">
           <div className="flex items-center gap-4">
              <div className="w-2 h-2 rounded-full bg-[#1f6f63]" />
              <span className="text-[9px] font-black tracking-[0.4em] uppercase text-gray-900">Verified On-Site Audits</span>
           </div>
           <div className="flex items-center gap-4">
              <div className="w-2 h-2 rounded-full bg-[#c9a24a]" />
              <span className="text-[9px] font-black tracking-[0.4em] uppercase text-gray-900">AAA-Rated Suppliers</span>
           </div>
           <div className="flex items-center gap-4">
              <div className="w-2 h-2 rounded-full bg-gray-300" />
              <span className="text-[9px] font-black tracking-[0.4em] uppercase text-gray-900">ISO 9001 Compliant</span>
           </div>
        </div> */}

      </div>
    </section>
  );
}