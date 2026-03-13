import { Helmet } from "react-helmet-async";
import defaultOgImage from "@/assets/zlcasabanner.jpg";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  path?: string;
  image?: string;
  type?: "website" | "article";
}

const SEO = ({
  title = "zlcasa | Porcelana e Cerâmica Pintadas à Mão",
  description = "Peças exclusivas de porcelana e cerâmica pintadas à mão. Lembranças para batizados, casamentos e eventos especiais. Arte que transforma momentos em memórias.",
  keywords = "porcelana pintada à mão, cerâmica artesanal, lembranças batizado, presentes corporativos, mesa posta, arte em porcelana, zlcasa",
  path = "",
  image = defaultOgImage,
  type = "website",
}: SEOProps) => {
  const siteUrl = "https://zlcasa.com.br";
  const url = `${siteUrl}${path}`;
  const fullTitle = title.includes("zlcasa") ? title : `${title} | zlcasa`;
  
  // Garante que a imagem tenha um URL absoluto para os crawlers
  const ogImageUrl = image.startsWith("http") ? image : `${siteUrl}${image}`;

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "zlcasa",
    "image": ogImageUrl,
    "@id": siteUrl,
    "url": siteUrl,
    "telephone": "+558396822393",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "João Pessoa",
      "addressRegion": "PB",
      "addressCountry": "BR"
    },
    "description": description,
    "sameAs": [
      "https://www.instagram.com/zlcasa"
    ]
  };

  return (
    <Helmet>
      {/* Metatags Básicas */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={url} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImageUrl} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={ogImageUrl} />

      {/* Dados Estruturados */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
};

export default SEO;
