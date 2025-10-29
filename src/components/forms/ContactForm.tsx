import { useState, useEffect } from 'react';
import { Phone } from 'lucide-react';
import { Button } from '@/components/ui/enhanced-button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import ReCAPTCHA from "react-google-recaptcha";
import { ContactFormData } from '@/types';


// Google reCAPTCHA site key
const RECAPTCHA_SITE_KEY = "6Lfy0ucoAAAAAK1AaHyGgmSN0NI4sLC5BspMT42f";
const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwCmcHJViHzLb10vC2v1Nlz_kRtI_wXFnY6NRu527quQunJ7EfpYXCUHoI3xYhSsk3DQg/exec"

interface ContactFormProps {
  cardClassName?: string;
  showTitle?: boolean;
}

const ContactForm: React.FC<ContactFormProps> = ({
  cardClassName = "",
  showTitle = true
}) => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    companyName: '',
    phoneNumber: '',
    businessEmail: '',
    helpWith: '',
    businessDescription: '',
    location: ''
  });

  // ReCAPTCHA and form submission states
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const [mobile, setMobile] = useState("");
  const [countryCode, setCountryCode] = useState("");
  const [mobileError, setMobileError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");

  // Clear success message on component mount if there's a hash in URL
  useEffect(() => {
    if (window.location.hash === '#thankyou') {
      setResponseMessage("");
    }
  }, []);

  const handleInputChange = (field: keyof ContactFormData, value: string | boolean) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const validatePhone = (phone: string): boolean => {
    // Basic validation - phone should be at least 10 digits
    const isValid = phone.replace(/\D/g, '').length >= 10;
    if (!isValid) {
      setMobileError("Please enter a valid phone number with at least 10 digits");
    } else {
      setMobileError("");
    }
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (isSubmitting) return; // Prevent double click
    setIsSubmitting(true);
    setResponseMessage(""); // clear old message

    // Validate phone number
    if (!validatePhone(formData.phoneNumber)) {
      setIsSubmitting(false);
      return;
    }

    if (!captchaToken) {
      alert("Please complete the CAPTCHA");
      setIsSubmitting(false);
      return;
    }
    
    // Get clean page name dynamically
    const currentPage =
      window.location.pathname
        .split("/")
        .filter(Boolean)
        .pop()
        ?.replace(/-/g, " ")
        .replace(/\b\w/g, (char) => char.toUpperCase()) ||
      document.title ||
      "Unknown Page";

    // Get form data from the form element
    const formElement = e.currentTarget;
    const formDataObj = new FormData(formElement);
    
    // Build data object dynamically using FormData.get()
    const data: Record<string, string> = {
      page: currentPage,
      name: formDataObj.get("name")?.toString() || "",
      email: formDataObj.get("email")?.toString() || "",
      countrycode: countryCode,
      mobile: mobile,
      helpwith: formDataObj.get("helpWith")?.toString() || "",
      companyname: formDataObj.get("companyName")?.toString() || "",
      description: formDataObj.get("businessDescription")?.toString() || "",
      location: formDataObj.get("location")?.toString() || "",
      captcha: captchaToken,
    };

    const formBody = new URLSearchParams(data).toString();

    try {
      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: formBody,
      });

      if (!response.ok) {
        throw new Error(`Server responded with status: ${response.status}`);
      }

      const resultText = await response.text();
      let result;
      
      try {
        result = JSON.parse(resultText);
      } catch (parseError) {
        console.error("JSON parse error:", parseError);
        setResponseMessage("Error processing server response. Please try again.");
        setIsSubmitting(false);
        return;
      }

      if (result.success) {
        setResponseMessage("Form submitted successfully!");
        // Reset form data
        setFormData({
          name: '',
          companyName: '',
          phoneNumber: '',
          businessEmail: '',
          helpWith: '',
          businessDescription: '',
          location: ''
        });
        setMobile("");
        setCountryCode("");
        setIsSubmitting(false); // Reset submitting state
        
        // Redirect to Thank You page
        window.location.href = "/thank-you";
      } else {
        console.error("Form submission failed:", result);
        setResponseMessage(result.message || "Form submission failed. Please try again.");
        setIsSubmitting(false); // allow retry
      }
    } catch (err) {
      console.error("Submission error:", err);
      setResponseMessage(
        "An error occurred while submitting the form. Please check your internet connection and try again."
      );
      setIsSubmitting(false);
    }
  };

  return (
    <div className={cardClassName || "bg-white rounded-2xl p-4 sm:p-6 lg:p-8 border border-gray-200 shadow-lg"}>
      {showTitle && (
        <div className="text-center mb-6 sm:mb-8">
          <h3 className="text-xl sm:text-2xl font-bold text-foreground font-primary mb-2">
            Get Your Free Demo
          </h3>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
        {/* Two Column Layout for Form Fields */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          {/* Name */}
          <div className="space-y-2">
            <Label htmlFor="name" className="text-sm sm:text-base text-foreground font-semibold font-secondary">
              Name *
            </Label>
            <Input
              id="name"
              name="name"
              type="text"
              placeholder="Enter your full name"
              value={formData.name}
              onChange={(e) => handleInputChange('name', e.target.value)}
              className="contact-form-input rounded-none border-0 border-b-2 border-gray-300 focus:border-primary focus:ring-0 focus:outline-none focus:shadow-none focus:border-b-2 px-0 py-2 text-sm sm:text-base"
              required
            />
          </div>

          {/* Company Name */}
          <div className="space-y-2">
            <Label htmlFor="companyName" className="text-sm sm:text-base text-foreground font-semibold font-secondary">
              Company Name *
            </Label>
            <Input
              id="companyName"
              name="companyName"
              type="text"
              placeholder="Enter your company name"
              value={formData.companyName}
              onChange={(e) => handleInputChange('companyName', e.target.value)}
              className="contact-form-input rounded-none border-0 border-b-2 border-gray-300 focus:border-primary focus:ring-0 focus:outline-none focus:shadow-none focus:border-b-2 px-0 py-2 text-sm sm:text-base"
              required
            />
          </div>

          {/* Phone Number */}
          <div className="space-y-2">
            <Label htmlFor="phoneNumber" className="text-sm sm:text-base text-foreground font-semibold font-secondary">
              Phone Number *
            </Label>
            <PhoneInput
              country={'in'}
              value={mobile}
              onChange={(phone, data) => {
                const countryData = data as { dialCode: string };
                setMobile(phone);
                setCountryCode(countryData.dialCode);
                handleInputChange('phoneNumber', phone);
                setMobileError("");
              }}
              inputProps={{
                name: 'phoneNumber',
                id: 'phoneNumber',
                required: true,
                placeholder: 'Enter your phone number',
              }}
              containerClass="!w-full"
              inputClass="!w-full !h-10 !rounded-none !bg-transparent !border-0 !border-b-2 !border-gray-300 focus:!border-primary focus:!shadow-none focus:!outline-none !pl-12 !pr-0 !py-2 !text-sm sm:!text-base"
              buttonClass="!bg-transparent !border-0 !shadow-none !p-0 hover:!bg-transparent focus:!bg-transparent"
              buttonStyle={{ background: 'transparent' }}
              inputStyle={{ width: '100%' }}
              isValid={(value) => {
                if (/[a-zA-Z]/.test(value)) {
                  setMobileError("Only numbers are allowed.");
                  return false;
                }
                return true;
              }}
            />
            {mobileError && (
              <p className="mt-1 text-xs sm:text-sm text-red-500">{mobileError}</p>
            )}
          </div>

          {/* Business Email */}
          <div className="space-y-2">
            <Label htmlFor="businessEmail" className="text-sm sm:text-base text-foreground font-semibold font-secondary">
              Business Email *
            </Label>
            <Input
              id="businessEmail"
              name="email"
              type="email"
              placeholder="Enter your business email"
              value={formData.businessEmail}
              onChange={(e) => handleInputChange('businessEmail', e.target.value)}
              className="contact-form-input rounded-none border-0 border-b-2 border-gray-300 focus:border-primary focus:ring-0 focus:outline-none focus:shadow-none focus:border-b-2 px-0 py-2 text-sm sm:text-base"
              required
            />
          </div>
          
           {/* Help With - Full Width */}
        <div className="space-y-2 ">
          <Label htmlFor="helpWith" className="text-sm sm:text-base text-foreground font-semibold font-secondary">
            How can we help you? *
          </Label>
          <Select
            value={formData.helpWith}
            name="helpWith"
            onValueChange={(value) => handleInputChange('helpWith', value)}
          >
            <SelectTrigger className="contact-form-input rounded-none border-0 border-b-2 border-gray-300 focus:border-primary focus:ring-0 focus:outline-none focus:shadow-none focus:border-b-2 px-0 py-2 text-sm sm:text-base">
              <SelectValue placeholder="Select what you need help with" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Schedule a Demo">Schedule a Demo</SelectItem>
              <SelectItem value="Get Pricing Information">Get Pricing Information</SelectItem>
              <SelectItem value="Free Consultation">Free Consultation</SelectItem>
              <SelectItem value="Technical Support">Technical Support</SelectItem>
              <SelectItem value="Other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Business Description - Full Width */}
        <div className="space-y-2">
        <Label htmlFor="businessDescription" className="text-sm sm:text-base text-foreground font-semibold font-secondary">
            Tell us about your business *
            </Label>
            <Input
              id="businessDescription"
              name="businessDescription"
              placeholder="Briefly describe your business and requirements"
              value={formData.businessDescription}
              onChange={(e) => handleInputChange('businessDescription', e.target.value)}
              className="contact-form-input rounded-none border-0 border-b-2 border-gray-300 focus:border-primary focus:ring-0 focus:outline-none focus:shadow-none focus:border-b-2 px-0 py-2 text-sm sm:text-base"
              required
            />
          </div>

        {/* Location - Full Width */}
        <div className="space-y-2">
            <Label htmlFor="location" className="text-sm sm:text-base text-foreground font-semibold font-secondary">
              Location *
            </Label>
            <Input
              id="location"
              name="location"
              type="text"
              placeholder="City"
              value={formData.location}
              onChange={(e) => handleInputChange('location', e.target.value)}
              className="contact-form-input rounded-none border-0 border-b-2 border-gray-300 focus:border-primary focus:ring-0 focus:outline-none focus:shadow-none focus:border-b-2 px-0 py-2 text-sm sm:text-base"
              required
            />
          </div>

          {/* ReCAPTCHA */}

          
        <div className="flex justify-center sm:justify-start mb-2">
          <div className="w-full max-w-[320px]">
            <ReCAPTCHA
              sitekey={RECAPTCHA_SITE_KEY}
              onChange={(token) => setCaptchaToken(token)}
              theme="light"
              size="normal"
            />
          </div>
        </div>
        </div>

        {/* Submit Button */}
        <Button
          type="submit"
          variant="cta"
          size="lg"
          className="w-full text-base sm:text-lg font-semibold font-primary py-3"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Submitting..." : "Get a Free Demo"}
        </Button>

        {/* Response message */}
        {responseMessage && (
          <p className="mt-4 text-center text-xs sm:text-sm font-medium text-foreground">
            {responseMessage}
          </p>
        )}
      </form>
    </div>
  );
};

export default ContactForm;
