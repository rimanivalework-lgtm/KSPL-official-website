import { Link } from "react-router-dom";

const ThankYou = () => {
  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
          <h1 className="text-3xl sm:text-4xl font-primary font-bold text-foreground mb-4">
            Thank you!
          </h1>
          <p className="text-muted-foreground mb-6 font-secondary">
            Your submission was received successfully. Our team will get back to you soon.
          </p>
          <div className="flex items-center justify-center gap-3">
            <Link to="/" className="inline-flex items-center px-5 py-3 rounded-xl bg-primary text-white hover:bg-primary-dark transition-colors font-semibold">
              Go to Home
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThankYou;
