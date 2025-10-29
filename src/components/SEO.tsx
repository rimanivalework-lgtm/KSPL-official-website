import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  faqData?: Array<{question: string, answer: string}>;
}

export const SEO = ({ 
  title, 
  description, 
  keywords, 
  image = "https://kanishkasoftware.com/images/kanishka-software-og.png",
  url,
  type = "website",
  author = "Kanishka Software",
  publishedTime,
  modifiedTime,
  faqData
}: SEOProps) => {
  const fullTitle = `${title} | Kanishka Software`;
  const fullUrl = url ? `https://kanishkasoftware.com${url}` : undefined;
  const currentTime = new Date().toISOString();

  // Structured data for software applications
  const structuredData = {
    "@context": "https://schema.org",
    "@type": type === "article" ? "Article" : "SoftwareApplication",
    "name": title,
    "description": description,
    "author": {
      "@type": "Organization",
      "name": "Kanishka Software"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Kanishka Software",
      "url": "https://kanishkasoftware.com"
    },
    ...(type === "article" ? {
      "datePublished": publishedTime || currentTime,
      "dateModified": modifiedTime || currentTime,
      "headline": title
    } : {
      "applicationCategory": "BusinessApplication",
      "operatingSystem": "Android, Web, iOS",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD",
        "availability": "https://schema.org/InStock"
      }
    }),
    "url": fullUrl,
    "image": image
  };

  // FAQ Schema markup
  const faqSchema = faqData ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqData.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  } : null;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="author" content={author} />
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      
      {/* Canonical URL */}
      {fullUrl && <link rel="canonical" href={fullUrl} />}
      
      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="Kanishka Software" />
      {fullUrl && <meta property="og:url" content={fullUrl} />}
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@kanishkasoftware" />
      <meta name="twitter:creator" content="@kanishkasoftware" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      
      {/* Additional SEO Meta Tags */}
      <meta name="theme-color" content="#2BA95A" />
      <meta name="msapplication-TileColor" content="#2BA95A" />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
      
      {/* FAQ Schema */}
      {faqSchema && (
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      )}
      
      {/* Additional Meta Tags for Better SEO */}
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      <meta name="distribution" content="global" />
      <meta name="rating" content="general" />
    </Helmet>
  );
};

export default SEO;
