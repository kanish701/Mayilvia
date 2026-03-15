import { CheckCircle } from 'lucide-react';

export default function About() {
  const values = [
    {
      title: 'Transparency',
      description:
        'Complete visibility into every stage of your sourcing project, from supplier selection to final delivery.',
    },
    {
      title: 'Precision',
      description:
        'Meticulous attention to quality standards, specifications, and timelines to ensure zero surprises.',
    },
    {
      title: 'Partnership',
      description:
        'We treat your success as our success, building long-term relationships based on trust and results.',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 overflow-hidden">
      <div className="bg-[#1f6f63] text-white py-20 pt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Bridging Global Trade with Integrity
          </h1>
          <p className="text-xl text-gray-100 max-w-2xl mx-auto">
            Your trusted partner in China-to-Global machinery sourcing and logistics.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Our Story
            </h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Founded with a mission to simplify global machinery sourcing, MAYILVIA has spent over a decade building relationships with verified manufacturers across China. We understand the challenges of international B2B procurement—the language barriers, quality concerns, logistical complexities, and trust factors.
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Our dedicated on-ground team in Shanghai and major manufacturing hubs provides the local expertise you need. We combine Chinese market knowledge with international best practices to deliver machinery sourcing solutions that are both cost-effective and reliable.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Today, MAYILVIA has facilitated machinery acquisitions for hundreds of companies across textiles, food & beverage, pharmaceuticals, automotive, and electronics industries worldwide.
            </p>
          </div>
          <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200">
            <img
              src="https://images.pexels.com/photos/3962285/pexels-photo-3962285.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Industrial machinery"
              className="w-full h-80 object-cover rounded-lg mb-4"
            />
            <p className="text-sm text-gray-500 text-center">
              Precision engineering and quality assurance in action
            </p>
          </div>
        </div>

        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-md border border-gray-200 hover:border-[#1f6f63] transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <CheckCircle size={28} className="text-[#1f6f63]" />
                  <h3 className="text-xl font-bold text-gray-900">
                    {value.title}
                  </h3>
                </div>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-r from-[#1f6f63] to-[#0f4c47] rounded-xl p-12 text-white">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Our Presence in China
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-bold mb-4 text-[#c9a24a]">
                Shanghai Headquarters
              </h3>
              <p className="text-gray-100 mb-4 leading-relaxed">
                Our primary office serves as the nerve center for coordination, documentation, and international client management. Located in the heart of Shanghai's business district, we're positioned to connect global buyers with Chinese manufacturers.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 text-[#c9a24a]">
                Regional Field Teams
              </h3>
              <p className="text-gray-100 mb-4 leading-relaxed">
                We maintain on-ground representatives in key manufacturing regions including Zhejiang, Jiangsu, and Guangdong. These teams conduct factory audits, coordinate live demos, and ensure quality compliance on your behalf.
              </p>
            </div>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-8 border-t border-[#0f4c47] pt-12">
            {[
              { label: '500+', value: 'Verified Suppliers' },
              { label: '10+', value: 'Years Experience' },
              { label: '50+', value: 'Industries Served' },
              { label: '200+', value: 'Successful Projects' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-[#c9a24a] mb-2">
                  {stat.label}
                </div>
                <p className="text-sm text-gray-100">{stat.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
