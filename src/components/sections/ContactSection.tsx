import { Mail, MapPin, Phone } from 'lucide-react';
import ContactForm from '@/components/forms/ContactForm';

const ContactSection = () => {
  return (
    <section className="py-10 lg:py-20 bg-primary-dark relative rounded-b-[72px] overflow-hidden" id="contact">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Column - Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-primary font-bold text-white mb-3 sm:mb-4">
                Let's Build Something Amazing Together
              </h2>
              <p className="text-white text-lg mb-6">
                Join Fortune 500 companies, healthcare institutions, and innovative startups who trust Kanishka Software for their digital transformation.
              </p>
            </div>

            {/* Email */}
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <Mail className="h-6 w-6 text-white mt-1" />
              </div>
              <div>
                <p className="text-white text-lg font-secondary">
                  sales@ksoftpl.com
                </p>
                <p className="text-white/80 text-sm font-secondary mt-1">
                  Get in touch with our team
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <Phone className="h-6 w-6 text-white mt-1" />
              </div>
              <div>
                <p className="text-white text-lg font-secondary">
                  +91-9967226700
                </p>
                <p className="text-white/80 text-sm font-secondary mt-1">
                  Call us for immediate assistance
                </p>
              </div>
            </div>

            {/* Address */}
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <MapPin className="h-6 w-6 text-white mt-1" />
              </div>
              <div>
                <p className="text-white text-lg font-secondary leading-relaxed">
                  Kanishka Software Private Limited<br />
                  Skyline Status, 703-704,<br />
                  Mahatma Gandhi Rd,<br />
                  Pant Nagar,<br />
                  Ghatkopar East, Mumbai,<br />
                  Maharashtra Mumbai - 400077  <br/>
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <ContactForm 
            cardClassName="bg-white rounded-t-3xl rounded-b-3xl p-8 lg:p-12 shadow-2xl"
            showTitle={false}
          />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;