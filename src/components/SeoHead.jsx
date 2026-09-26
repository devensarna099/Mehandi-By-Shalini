import React, { useEffect } from 'react';

const SITE_DOMAIN = 'https://mehandibyshalini.in';

const SeoHead = ({ product = null }) => {
  useEffect(() => {
    // 1. Define target metadata values based on page type
    let title = 'Mehandi By Shalini | Mehndi Products & Professional Mehndi Artist';
    let description = 'Shop professional mehndi products from Mehandi By Shalini, including mehndi cones, henna powder, oils, practice materials and mehndi artist essentials. Quality products for professional and aspiring mehndi artists.';
    let canonicalUrl = `${SITE_DOMAIN}/`;
    let ogImage = `${SITE_DOMAIN}/products/Mehandi.png`;
    let ogType = 'website';

    if (product) {
      title = `${product.name} | Mehandi By Shalini`;
      description = `Shop ${product.name} from Mehandi By Shalini. ${product.description ? product.description.slice(0, 150) : ''} Order online via WhatsApp.`;
      canonicalUrl = `${SITE_DOMAIN}/product/${product.id}`;
      if (product.image) {
        ogImage = product.image.startsWith('http') ? product.image : `${SITE_DOMAIN}${product.image}`;
      }
      ogType = 'product';
    }

    // 2. Update Document Title
    document.title = title;

    // Helper to set or create meta tag
    const setMetaTag = (selector, attrName, attrValue, content) => {
      let el = document.querySelector(selector);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attrName, attrValue);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    // Helper to set or create link tag
    const setLinkTag = (rel, href) => {
      let el = document.querySelector(`link[rel="${rel}"]`);
      if (!el) {
        el = document.createElement('link');
        el.setAttribute('rel', rel);
        document.head.appendChild(el);
      }
      el.setAttribute('href', href);
    };

    // 3. Update Standard Meta Tags
    setMetaTag('meta[name="description"]', 'name', 'description', description);
    setMetaTag('meta[name="robots"]', 'name', 'robots', 'index, follow');
    setLinkTag('canonical', canonicalUrl);

    // 4. Update OpenGraph Tags
    setMetaTag('meta[property="og:title"]', 'property', 'og:title', title);
    setMetaTag('meta[property="og:description"]', 'property', 'og:description', description);
    setMetaTag('meta[property="og:url"]', 'property', 'og:url', canonicalUrl);
    setMetaTag('meta[property="og:image"]', 'property', 'og:image', ogImage);
    setMetaTag('meta[property="og:type"]', 'property', 'og:type', ogType);
    setMetaTag('meta[property="og:site_name"]', 'property', 'og:site_name', 'Mehandi By Shalini');

    // 5. Update Twitter Card Tags
    setMetaTag('meta[property="twitter:card"]', 'property', 'twitter:card', 'summary_large_image');
    setMetaTag('meta[property="twitter:title"]', 'property', 'twitter:title', title);
    setMetaTag('meta[property="twitter:description"]', 'property', 'twitter:description', description);
    setMetaTag('meta[property="twitter:url"]', 'property', 'twitter:url', canonicalUrl);
    setMetaTag('meta[property="twitter:image"]', 'property', 'twitter:image', ogImage);

    // 6. Update JSON-LD Schemas in Head
    let jsonLdScript = document.getElementById('dynamic-seo-schema');
    if (!jsonLdScript) {
      jsonLdScript = document.createElement('script');
      jsonLdScript.id = 'dynamic-seo-schema';
      jsonLdScript.type = 'application/ld+json';
      document.head.appendChild(jsonLdScript);
    }

    if (product) {
      // Product Schema
      const productSchema = {
        '@context': 'https://schema.org',
        '@type': 'Product',
        'name': product.name,
        'image': product.image ? (product.image.startsWith('http') ? product.image : `${SITE_DOMAIN}${product.image}`) : `${SITE_DOMAIN}/products/Mehandi.png`,
        'description': product.description || product.details,
        'sku': product.id,
        'brand': {
          '@type': 'Brand',
          'name': 'Mehandi By Shalini'
        },
        'offers': {
          '@type': 'Offer',
          'url': `${SITE_DOMAIN}/product/${product.id}`,
          'priceCurrency': 'INR',
          'price': product.price,
          'availability': 'https://schema.org/InStock',
          'itemCondition': 'https://schema.org/NewCondition'
        }
      };
      jsonLdScript.textContent = JSON.stringify(productSchema);
    } else {
      // WebSite & Organization Schemas for Homepage
      const websiteSchema = {
        '@context': 'https://schema.org',
        '@graph': [
          {
            '@type': 'WebSite',
            '@id': `${SITE_DOMAIN}/#website`,
            'url': `${SITE_DOMAIN}/`,
            'name': 'Mehandi By Shalini',
            'description': 'Shop professional mehndi products and book custom bridal mehndi artist services.',
            'publisher': {
              '@id': `${SITE_DOMAIN}/#organization`
            }
          },
          {
            '@type': 'Organization',
            '@id': `${SITE_DOMAIN}/#organization`,
            'name': 'Mehandi By Shalini',
            'url': `${SITE_DOMAIN}/`,
            'logo': `${SITE_DOMAIN}/products/Mehandi.png`,
            'telephone': '+918319991631',
            'sameAs': [
              'https://www.instagram.com/mehandibyshalini/',
              'https://www.facebook.com/mehandibyshalini/'
            ]
          },
          {
            '@type': 'BeautySalon',
            '@id': `${SITE_DOMAIN}/#beautySalon`,
            'name': 'Mehandi By Shalini',
            'image': `${SITE_DOMAIN}/products/Mehandi.png`,
            'url': `${SITE_DOMAIN}/`,
            'telephone': '+918319991631',
            'priceRange': '₹₹',
            'address': {
              '@type': 'PostalAddress',
              'streetAddress': 'Mukharji Nagar',
              'addressLocality': 'Indore',
              'addressRegion': 'Madhya Pradesh',
              'postalCode': '452015',
              'addressCountry': 'IN'
            },
            'sameAs': [
              'https://www.instagram.com/mehandibyshalini/'
            ]
          }
        ]
      };
      jsonLdScript.textContent = JSON.stringify(websiteSchema);
    }

  }, [product]);

  return null;
};

export default SeoHead;
