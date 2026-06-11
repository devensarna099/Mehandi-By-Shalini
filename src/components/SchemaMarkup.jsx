import React from 'react';

const SchemaMarkup = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BeautySalon",
    "name": "Mehandi By Shalini",
    "image": "https://mehandibyshalini.netlify.app/assets/hero_bridal_mehndi.png",
    "@id": "https://mehandibyshalini.netlify.app/#localbusiness",
    "url": "https://mehandibyshalini.netlify.app/",
    "telephone": "+919074011621",
    "priceRange": "₹₹₹",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Rajouri Garden",
      "addressLocality": "New Delhi",
      "addressRegion": "Delhi",
      "postalCode": "110027",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 28.6425,
      "longitude": 77.1216
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "09:00",
      "closes": "21:00"
    },
    "sameAs": [
      "https://www.instagram.com/mehandibyshalini/",
      "https://www.facebook.com/mehandibyshalini/"
    ],
    "description": "Premium Bridal Mehndi Artist in India. Specializing in luxury bridal, Arabic, Rajasthani, portrait, and customized wedding mehndi designs.",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "248"
    }
  };

  return (
    <script type="application/ld+json">
      {JSON.stringify(schema)}
    </script>
  );
};

export default SchemaMarkup;
