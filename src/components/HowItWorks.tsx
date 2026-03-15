import { ScanSearch, FileText, Truck, CheckCircle, ArrowRight } from 'lucide-react';

const steps = [
  {
    id: '01',
    icon: ScanSearch,
    title: 'Discovery & Sourcing',
    description: 'We analyze your requirements and query our verified network of 800+ manufacturers.'
  },
  {
    id: '02',
    icon: FileText,
    title: 'On-Site Verification',
    description: 'Live factory audits and 50-point inspections via real-time video validation.'
  },
  {
    id: '03',
    icon: Truck,
    title: 'Secure Logistics',
    description: 'End-to-end management of maritime freight, customs, and last-mile transit.'
  },
  {
    id: '04',
    icon: CheckCircle,
    title: 'Quality Delivery',
    description: 'Final handover of industrial assets with guaranteed adherence to your specs.'
  }
];

export default function HowItWorks() {
  return (
    <section className="bg-white py-32 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Header - Minimalist & Left Aligned */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-24 gap-8">
          <div className="max-w-xl">
            <div className="text-[#1f6f63] text-[10px] font-black tracking-[0.4em] uppercase mb-4 flex items-center gap-3">
              <span className="w-8 h-px bg-[#1f6f63]/20" />
              Operational Flow
            </div>
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 leading-tight tracking-tighter">
              A transparent bridge <br />
              <span className="text-gray-400 italic font-serif">from factory to facility.</span>
            </h2>
          </div>
          <p className="text-gray-400 text-xs md:text-sm max-w-[280px] leading-relaxed md:text-right">
            Our 4-stage protocol ensures every industrial asset is verified, secured, and delivered without compromise.
          </p>
        </div>

        {/* Workflow Grid - Clean Linear Style */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative group">
                {/* Horizontal Connector Line (Desktop Only) */}
                {index !== steps.length - 1 && (
                  <div className="hidden lg:block absolute top-[22px] left-[60px] w-full h-[1px] bg-gray-100 z-0" />
                )}

                <div className="relative z-10">
                  {/* Step ID & Icon */}
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-11 h-11 rounded-full bg-white border border-gray-100 flex items-center justify-center shadow-sm group-hover:border-[#1f6f63] transition-colors duration-500">
                      <Icon size={18} className="text-[#1f6f63]" strokeWidth={1.5} />
                    </div>
                    <span className="text-[10px] font-black text-gray-300 tracking-widest uppercase">
                      Step {step.id}
                    </span>
                  </div>

                  {/* Text Content */}
                  <h3 className="text-gray-900 text-[11px] font-black uppercase tracking-widest mb-4">
                    {step.title}
                  </h3>
                  <p className="text-gray-500 text-[11px] md:text-xs leading-relaxed max-w-[240px]">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Callout */}
        <div className="mt-24 pt-12 border-t border-gray-50 flex justify-center">
          <button className="flex items-center gap-4 group">
            <span className="text-[10px] font-black text-gray-900 uppercase tracking-[0.3em]">Initialize Your Project</span>
            <div className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center group-hover:bg-gray-900 group-hover:text-white transition-all">
              <ArrowRight size={14} />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
}