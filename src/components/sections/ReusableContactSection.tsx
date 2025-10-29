import { useState, useRef } from 'react';
import { Mail, MapPin, Phone, Upload, FileText, X } from 'lucide-react';
import { Button } from '@/components/ui/enhanced-button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Textarea } from '@/components/ui/textarea';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

interface FormField {
  id: string;
  type: 'text' | 'email' | 'tel' | 'phone' | 'textarea' | 'select' | 'checkbox' | 'file';
  label: string;
  placeholder?: string;
  required?: boolean;
  options?: { value: string; label: string }[];
  className?: string;
  gridCols?: 'full' | 'half';
  accept?: string;
  maxSize?: number; // in MB
  fileTypes?: string[];
}

interface ContactInfo {
  title: string;
  description: string;
  email: string;
  emailDescription: string;
  phone: string;
  phoneDescription: string;
  address: string;
}

interface ReusableContactSectionProps {
  contactInfo: ContactInfo;
  formFields: FormField[];
  initialFormData?: Record<string, any>;
  onSubmit: (formData: Record<string, any>) => void;
  submitButtonText?: string;
  submitButtonIcon?: React.ReactNode;
  sectionId?: string;
  className?: string;
  submitDisabled?: boolean;
  responseMessage?: string;
  onPhoneChange?: (mobile: string, countryCode: string) => void;
}

const ReusableContactSection = ({
  contactInfo,
  formFields,
  initialFormData = {},
  onSubmit,
  submitButtonText = "Book a Call",
  submitButtonIcon = <Phone className="h-5 w-5 mr-2" />,
  sectionId = "contact",
  className = "",
  submitDisabled = false,
  responseMessage,
  onPhoneChange
}: ReusableContactSectionProps) => {
  const [formData, setFormData] = useState(initialFormData);
  const [dragActive, setDragActive] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  
  // Phone input states
  const [mobile, setMobile] = useState("");
  const [countryCode, setCountryCode] = useState("");
  const [mobileError, setMobileError] = useState("");

  const handleInputChange = (field: string, value: string | boolean | File) => {
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

  const handleFileChange = (field: string, file: File | null, maxSize?: number, fileTypes?: string[]) => {
    if (!file) return;

    // Check file size
    if (maxSize && file.size > maxSize * 1024 * 1024) {
      alert(`File size must be less than ${maxSize}MB`);
      return;
    }

    // Check file type
    if (fileTypes && fileTypes.length > 0) {
      const fileExtension = file.name.split('.').pop()?.toLowerCase();
      if (!fileExtension || !fileTypes.includes(fileExtension)) {
        alert(`Please upload a file with one of these extensions: ${fileTypes.join(', ')}`);
        return;
      }
    }

    handleInputChange(field, file);
  };

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent, field: string, maxSize?: number, fileTypes?: string[]) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFileChange(field, e.dataTransfer.files[0], maxSize, fileTypes);
    }
  };

  const handleFileInputClick = (fieldId: string) => {
    fileInputRef.current?.click();
  };

  const removeFile = (field: string) => {
    handleInputChange(field, '');
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const renderFormField = (field: FormField) => {
    const commonInputClasses = "contact-form-input rounded-none border-0 border-b-2 border-gray-300 focus:border-primary focus:ring-0 focus:outline-none focus:shadow-none focus:border-b-2 px-0 py-2";
    
    switch (field.type) {
      case 'text':
      case 'email':
      case 'tel':
        return (
          <Input
            id={field.id}
            type={field.type}
            placeholder={field.placeholder}
            value={formData[field.id] || ''}
            onChange={(e) => handleInputChange(field.id, e.target.value)}
            className={`${commonInputClasses} ${field.className || ''}`}
            required={field.required}
          />
        );
      
      case 'phone':
        return (
          <div>
            <PhoneInput
              country={'in'}
              value={mobile}
              onChange={(phone, data) => {
                const countryData = data as { dialCode: string };
                setMobile(phone);
                setCountryCode(countryData.dialCode);
                handleInputChange(field.id, phone);
                onPhoneChange?.(phone, countryData.dialCode);
                setMobileError("");
              }}
              inputProps={{
                name: field.id,
                id: field.id,
                required: field.required,
                placeholder: field.placeholder || 'Enter your phone number',
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
        );
      
      case 'textarea':
        return (
          <Textarea
            id={field.id}
            placeholder={field.placeholder}
            value={formData[field.id] || ''}
            onChange={(e) => handleInputChange(field.id, e.target.value)}
            className={`${commonInputClasses} ${field.className || ''}`}
            required={field.required}
            rows={4}
          />
        );
      
      case 'select':
        return (
          <Select 
            value={formData[field.id] || ''} 
            onValueChange={(value) => handleInputChange(field.id, value)}
          >
            <SelectTrigger className={`${commonInputClasses} ${field.className || ''}`}>
              <SelectValue placeholder={field.placeholder} />
            </SelectTrigger>
            <SelectContent>
              {field.options?.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        );
      
      case 'checkbox':
        return (
          <div className="flex items-start space-x-3">
            <Checkbox
              id={field.id}
              checked={formData[field.id] || false}
              onCheckedChange={(checked) => handleInputChange(field.id, checked as boolean)}
              className="mt-1"
            />
            <Label htmlFor={field.id} className="text-sm text-muted-foreground font-secondary leading-relaxed">
              {field.label}
            </Label>
          </div>
        );
      
      case 'file':
        const file = formData[field.id] as File;
        return (
          <div
            className={`relative border-2 border-dashed rounded-lg p-3 text-center transition-colors ${
              dragActive 
                ? 'border-primary bg-primary/5' 
                : 'border-gray-300 hover:border-blue-400'
            }`}
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragOver={handleDrag}
            onDrop={(e) => handleDrop(e, field.id, field.maxSize, field.fileTypes)}
          >
              <input
                ref={fileInputRef}
                type="file"
                id={field.id}
                accept={field.accept}
                onChange={(e) => handleFileChange(field.id, e.target.files?.[0] || null, field.maxSize, field.fileTypes)}
                className="hidden"
              />
              
              {file ? (
                <div className="flex items-center justify-between bg-gray-50 p-3 rounded-md">
                  <div className="flex items-center space-x-2">
                    <FileText className="h-5 w-5 text-primary" />
                    <span className="text-sm text-gray-700 font-medium">{file.name}</span>
                    <span className="text-xs text-gray-500">
                      ({(file.size / 1024 / 1024).toFixed(2)} MB)
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={() => removeFile(field.id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>
              ) : (
                <div>
                  <Upload className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                  <p className="text-sm text-gray-600 mb-1">
                    Drop your resume here or{' '}
                    <button
                      type="button"
                      onClick={() => handleFileInputClick(field.id)}
                      className="text-primary hover:text-primary/80 font-medium underline"
                    >
                      Browse
                    </button>
                  </p>
                  {field.maxSize && field.fileTypes && (
                    <p className="text-xs text-gray-500">
                      Max. file size: {field.maxSize}MB ({field.fileTypes.join(', ')})
                    </p>
                  )}
                </div>
              )}
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <section className={`py-10 lg:py-20 bg-primary-dark relative rounded-b-[72px] overflow-hidden ${className}`} id={sectionId}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Column - Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-primary font-bold text-white mb-3 sm:mb-4">
                {contactInfo.title}
              </h2>
              <p className="text-white text-lg mb-6">
                {contactInfo.description}
              </p>
            </div>

            {/* Email */}
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <Mail className="h-6 w-6 text-white mt-1" />
              </div>
              <div>
                <p className="text-white text-lg font-secondary">
                  {contactInfo.email}
                </p>
                <p className="text-white/80 text-sm font-secondary mt-1">
                  {contactInfo.emailDescription}
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
                  {contactInfo.phone}
                </p>
                <p className="text-white/80 text-sm font-secondary mt-1">
                  {contactInfo.phoneDescription}
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
                  {contactInfo.address}
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="bg-white rounded-t-3xl rounded-b-3xl p-8 lg:p-12 shadow-2xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Form Fields */}
              <div className="space-y-6">
                {/* Two-column layout for half-width fields */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {formFields
                    .filter(field => field.gridCols === 'half' && field.type !== 'checkbox')
                    .map((field) => (
                      <div key={field.id} className="space-y-2">
                        <Label htmlFor={field.id} className="text-foreground font-semibold font-secondary">
                          {field.label} {field.required && '*'}
                        </Label>
                        {renderFormField(field)}
                      </div>
                    ))}
                </div>

                {/* Full-width fields (resume upload, etc.) */}
                {formFields
                  .filter(field => field.gridCols === 'full' && field.type !== 'checkbox')
                  .map((field) => (
                    <div key={field.id} className="space-y-2">
                      <Label htmlFor={field.id} className="text-foreground font-semibold font-secondary">
                        {field.label} {field.required && '*'}
                      </Label>
                      {renderFormField(field)}
                    </div>
                  ))}

                {/* Checkbox fields */}
                {formFields
                  .filter(field => field.type === 'checkbox')
                  .map((field) => (
                    <div key={field.id}>
                      {renderFormField(field)}
                    </div>
                  ))}
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                variant="form"
                size="lg"
                className="w-full text-lg font-semibold font-primary"
                disabled={submitDisabled}
              >
                {submitButtonIcon}
                {submitButtonText}
              </Button>
              {responseMessage && (
                <p className="mt-4 text-center text-xs sm:text-sm font-medium text-foreground">{responseMessage}</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReusableContactSection;
