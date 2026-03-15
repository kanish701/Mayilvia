import { Zap } from 'lucide-react';
import { Network, ClipboardCheck, Video, Handshake, Ship } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Network,
      title: 'Machinery Sourcing',
      description:
        'Deep dive into our extensive network of verified suppliers across China. We leverage industry relationships and market intelligence to identify the right manufacturers for your specific machinery requirements.',
    },
    {
      icon: ClipboardCheck,
      title: 'Factory Inspection',
      description:
        'Professional on-site quality control audits. Our on-ground team conducts comprehensive facility inspections, evaluates production capabilities, and ensures compliance with international standards.',
    },
    {
      icon: Video,
      title: 'Live Demo',
      description:
        'Real-time 4K video verification of machinery in operation. Watch your equipment perform before shipping, with direct communication with our facility team for clarifications.',
    },
    {
      icon: Handshake,
      title: 'Negotiation',
      description:
        'Expert contract handling and cost-optimization strategies. We manage negotiations to secure competitive pricing while protecting your interests through detailed technical specifications and warranty terms.',
    },
    {
      icon: Ship,
      title: 'Logistics',
      description:
        'End-to-end shipping and customs clearance services. From container loading and sea freight coordination to documentation and port clearance, we handle every logistical detail.',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 pt-32">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Comprehensive Sourcing Solutions
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            From supplier identification to final delivery, we provide end-to-end machinery sourcing expertise tailored to your business needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200 hover:border-[#1f6f63] group"
              >
                <div className="w-12 h-12 bg-[#1f6f63] rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#c9a24a] transition-colors">
                  <Icon size={24} className="text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="bg-white rounded-xl p-12 shadow-md border border-gray-200">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose MAYILVIA?
            </h2>
            <p className="text-gray-600 text-lg">
              We combine local expertise with global reach to deliver unparalleled sourcing results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Verified Network',
                description: 'Access to pre-vetted manufacturers with proven track records',
              },
              {
                title: 'On-Ground Presence',
                description: 'Dedicated teams in key manufacturing hubs for real-time support',
              },
              {
                title: 'Transparent Process',
                description: 'Clear timelines, competitive pricing, and zero hidden costs',
              },
            ].map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-[#c9a24a] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap size={24} className="text-white" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-sm text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-16">
          <a
            href="/contact"
            className="inline-block bg-[#c9a24a] hover:bg-[#b8921f] text-white font-bold py-4 px-8 rounded-lg transition-colors duration-300"
          >
            Request a Service Quote
          </a>
        </div>
      </div>
    </div>
  );
}
