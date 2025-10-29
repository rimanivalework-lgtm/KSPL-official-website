import { useState } from 'react';
import { ArrowRight, Upload, FileText, Phone } from 'lucide-react';
import ReusableContactSection from './ReusableContactSection';
import { getDepartmentOptions } from '@/data/departments';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

// Google reCAPTCHA site key
// const RECAPTCHA_SITE_KEY = "6Lfy0ucoAAAAAK1AaHyGgmSN0NI4sLC5BspMT42f";
const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwCmcHJViHzLb10vC2v1Nlz_kRtI_wXFnY6NRu527quQunJ7EfpYXCUHoI3xYhSsk3DQg/exec";

const CareersContactSection = () => {
  // Phone input states
  const [mobile, setMobile] = useState("");
  const [countryCode, setCountryCode] = useState("");
  const [mobileError, setMobileError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");

  const contactInfo = {
    title: "Ready to Join Our Team?",
    description: "We're always looking for talented individuals who share our passion for innovation and excellence. Send us your resume and let's explore opportunities together.",
    email: "careers@ksoftpl.com",
    emailDescription: "Send us your resume and cover letter",
    phone: "+91-9967226700",
    phoneDescription: "Call us for career inquiries",
    address: `Kanishka Software Private Limited
Skyline Status, 703-704,
Mahatma Gandhi Rd,
Pant Nagar,
Ghatkopar East, Mumbai,
Maharashtra Mumbai - 400077`
  };

  const formFields = [
    {
      id: 'name',
      type: 'text' as const,
      label: 'Name',
      placeholder: 'Enter your Full name',
      required: true,
      gridCols: 'half' as const
    },
    {
      id: 'email',
      type: 'email' as const,
      label: 'Email ID',
      placeholder: 'Enter your Email Id',
      required: true,
      gridCols: 'half' as const
    },
    {
      id: 'phone',
      type: 'phone' as const,
      label: 'Phone Number',
      placeholder: 'Enter your Phone number',
      required: true,
      gridCols: 'half' as const
    },
    {
      id: 'location',
      type: 'text' as const,
      label: 'Location',
      placeholder: 'City',
      required: true,
      gridCols: 'half' as const
    },
    {
      id: 'domain',
      type: 'select' as const,
      label: 'Domain Interested In',
      placeholder: 'Select',
      required: true,
      gridCols: 'half' as const,
      options: getDepartmentOptions()
    },
    {
      id: 'experience',
      type: 'select' as const,
      label: 'Years of Experience',
      placeholder: 'Select',
      required: true,
      gridCols: 'half' as const,
      options: [
        { value: '0-1', label: '0-1 years (Fresher)' },
        { value: '1-3', label: '1-3 years' },
        { value: '3-5', label: '3-5 years' },
        { value: '5-8', label: '5-8 years' },
        { value: '8+', label: '8+ years' }
      ]
    },
    {
      id: 'availability',
      type: 'select' as const,
      label: 'Availability',
      placeholder: 'When can you start?',
      required: true,
      gridCols: 'half' as const,
      options: [
        { value: 'immediately', label: 'Immediately' },
        { value: '2-weeks', label: '2 weeks notice' },
        { value: '1-month', label: '1 month notice' },
        { value: '2-months', label: '2+ months notice' }
      ]
    },
    {
      id: 'reference',
      type: 'text' as const,
      label: 'Reference',
      placeholder: 'Enter the name of person who referred you',
      required: false,
      gridCols: 'half' as const
    },
    {
      id: 'resume',
      type: 'file' as const,
      label: 'Resume/CV',
      required: true,
      gridCols: 'full' as const,
      accept: '.pdf,.doc,.docx',
      maxSize: 4,
      fileTypes: ['pdf', 'doc', 'docx']
    }
  ];

  const handleSubmit = async (formData: Record<string, any>) => {
    try {
      // Get clean page name dynamically
      const currentPage =
        window.location.pathname
          .split("/")
          .filter(Boolean)
          .pop()
          ?.replace(/-/g, " ")
          .replace(/\b\w/g, (char) => char.toUpperCase()) ||
        document.title ||
        "Careers Page";

      // Handle file upload for resume
      let resumeData = "";
      let filename = "";
      if (formData.resume && formData.resume instanceof File) {
        filename = formData.resume.name;
        // Convert file to base64
        const reader = new FileReader();
        const base64Promise = new Promise<string>((resolve) => {
          reader.onload = () => {
            const result = reader.result as string;
            // Remove data URL prefix to get just the base64 string
            const base64 = result.split(',')[1];
            resolve(base64);
          };
        });
        reader.readAsDataURL(formData.resume);
        resumeData = await base64Promise;
      }

      // Build data object for career application
      const data: Record<string, string> = {
        page: currentPage,
        name: formData.name || "",
        email: formData.email || "",
        countrycode: countryCode,
        mobile: mobile,
        location: formData.location || "",
        domain: formData.domain || "",
        experience: formData.experience || "",
        availability: formData.availability || "",
        reference: formData.reference || "",
        resume: resumeData,
        filename: filename
      };

      const formBody = new URLSearchParams(data).toString();

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
        alert("Error processing server response. Please try again.");
        return;
      }

      if (result.success) {
        setResponseMessage("Your application submitted successfully! We will get back to you soon.");
        setIsSubmitting(false);
        window.location.href = "/thank-you";
        return;
      } else {
        console.error("Form submission failed:", result);
        alert(result.message || "Form submission failed. Please try again.");
        setIsSubmitting(false);
      }
    } catch (err) {
      console.error("Submission error:", err);
      alert("An error occurred while submitting the form. Please check your internet connection and try again.");
      setIsSubmitting(false);
    }
  };

  return (
    <ReusableContactSection
      contactInfo={contactInfo}
      formFields={formFields}
      onSubmit={(fd) => { setIsSubmitting(true); setResponseMessage(""); handleSubmit(fd); }}
      submitButtonText={isSubmitting ? "Submitting..." : "Submit"}
      submitButtonIcon={<Phone className="h-5 w-5 mr-2" />}
      submitDisabled={isSubmitting}
      responseMessage={responseMessage}
      onPhoneChange={(m, cc) => { setMobile(m); setCountryCode(cc); }}
      sectionId="career-contact"
    />
  );
};

export default CareersContactSection;
