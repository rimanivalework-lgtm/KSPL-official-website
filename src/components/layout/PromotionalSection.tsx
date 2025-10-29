const PromotionalSection = () => {
  return (
    <div className="sticky bottom-0 bg-white p-3 mt-auto">
      <div className="bg-gradient-to-r from-primary/5 to-primary/10 rounded-lg p-4 relative overflow-hidden mx-2">
        {/* Background Illustration */}
        <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
          <div className="w-full h-full bg-primary rounded-full transform translate-x-8 -translate-y-8"></div>
        </div>
        
        <div className="relative z-10">
          {/* Illustration */}
          <div className="flex items-center justify-center mb-4">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-500 rounded-full flex items-center justify-center">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                <div className="w-4 h-4 bg-primary rounded-full"></div>
              </div>
            </div>
          </div>
          
          {/* Text Content */}
          <div className="text-center mb-4">
            <h3 className="text-lg font-semibold text-primary mb-2 leading-tight" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Open Sans", "Poppins", sans-serif' }}>
            Empower Your Business with Kanishka Software
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed" style={{ fontFamily: 'Open Sans, -apple-system, BlinkMacSystemFont, sans-serif' }}>
            Fuel innovation and growth with smart, scalable, and user-friendly solutions.
            </p>
          </div>
          
          {/* CTA Link */}
          <div className="text-center">
            <a 
              href="#" 
              className="text-primary text-sm font-medium hover:text-primary/80 transition-colors"
              style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Open Sans", "Poppins", sans-serif' }}
            >
              Get a Demo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromotionalSection;
