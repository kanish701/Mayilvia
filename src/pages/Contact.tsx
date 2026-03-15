import { useState } from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: '',
    company: '',
    machineType: '',
    estimatedBudget: '',
    message: '',
  });

  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const subject = encodeURIComponent(`Machinery Inquiry from ${formData.fullName}`);
    const body = encodeURIComponent(
      `Name: ${formData.fullName}\nCompany: ${formData.company}\nMachine Type: ${formData.machineType}\nBudget: ${formData.estimatedBudget}\nMessage: ${formData.message}`
    );

    window.location.href = `mailto:info@mayilvia.com?subject=${subject}&body=${body}`;

    setSubmitStatus('success');
    setFormData({
      fullName: '',
      company: '',
      machineType: '',
      estimatedBudget: '',
      message: '',
    });

    setTimeout(() => setSubmitStatus(null), 5000);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 pt-32">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Get in Touch
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ready to source your next machinery? Our team is standing by to help you find the perfect solution.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="bg-white rounded-xl p-8 shadow-md border border-gray-200 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">
                Contact Information
              </h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#1f6f63] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail size={20} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Email</h3>
                    <a
                      href="mailto:info@mayilvia.com"
                      className="text-gray-600 hover:text-[#1f6f63] transition-colors"
                    >
                      info@mayilvia.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#1f6f63] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone size={20} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Phone</h3>
                    <a
                      href="tel:+8613800000000"
                      className="text-gray-600 hover:text-[#1f6f63] transition-colors"
                    >
                      +91 00000-00000 (India)<br />
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#1f6f63] rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin size={20} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Office Address</h3>
                    <p className="text-gray-600">
                      Coimbatore, Tamil Nadu, India<br />
                      
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-12 rounded-lg overflow-hidden h-48 bg-gray-200">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3407.1509502277373!2d120.54!3d31.23!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzHCsDEzJzQ0LjgiTiAxMjDCsDMyJzIyLjYiRQ!5e0!3m2!1sen!2scn!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  title="MAYILVIA Office Location"
                />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-md border border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">
              Request a Quote
            </h2>

            {submitStatus === 'success' && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                <p className="text-green-800">
                  Thank you! Your inquiry has been received. We'll contact you shortly.
                </p>
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                <p className="text-red-800">
                  Error submitting form. Please try again.
                </p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="fullName" className="block text-sm font-semibold text-gray-900 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#1f6f63] transition-colors bg-white"
                  placeholder="John Smith"
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-semibold text-gray-900 mb-2">
                  Company Name
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#1f6f63] transition-colors bg-white"
                  placeholder="Your Company Ltd."
                />
              </div>

              <div>
                <label htmlFor="machineType" className="block text-sm font-semibold text-gray-900 mb-2">
                  Machine Type Needed
                </label>
                <select
                  id="machineType"
                  name="machineType"
                  value={formData.machineType}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#1f6f63] transition-colors bg-white"
                >
                  <option value="">Select a category</option>
                  <option value="Textile">Textile Machinery</option>
                  <option value="Food & Beverage">Food & Beverage Equipment</option>
                  <option value="Pharmaceutical">Pharmaceutical Machinery</option>
                  <option value="Metal & Steel">Metal & Steel Processing</option>
                  <option value="Automotive">Automotive Parts</option>
                  <option value="Electronics">Electronics Equipment</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="estimatedBudget" className="block text-sm font-semibold text-gray-900 mb-2">
                  Estimated Budget (USD)
                </label>
                <select
                  id="estimatedBudget"
                  name="estimatedBudget"
                  value={formData.estimatedBudget}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#1f6f63] transition-colors bg-white"
                >
                  <option value="">Select range</option>
                  <option value="10000-50000">$10,000 - $50,000</option>
                  <option value="50000-100000">$50,000 - $100,000</option>
                  <option value="100000-500000">$100,000 - $500,000</option>
                  <option value="500000+">$500,000+</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-900 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#1f6f63] transition-colors bg-white resize-none"
                  placeholder="Tell us about your machinery requirements..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#c9a24a] hover:bg-[#b8921f] text-white font-bold py-3 rounded-lg transition-colors duration-300"
              >
                Submit Inquiry
              </button>
            </form>

            <p className="text-xs text-gray-500 text-center mt-4">
              We respect your privacy. Your information will only be used to process your inquiry.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
