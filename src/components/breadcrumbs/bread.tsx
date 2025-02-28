import Head from 'next/head';
import PropTypes from 'prop-types';

interface Breadcrumb {
  name: string;
  url: string;
}

interface BreadcrumbSchemaProps {
  breadcrumbs: Breadcrumb[];
}

const BreadcrumbSchema: React.FC<BreadcrumbSchemaProps> = ({ breadcrumbs }) => {
  const breadcrumbList = breadcrumbs.map((crumb, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": crumb.name,
    "item": crumb.url
  }));

  const jsonLd = {
    "@context": "https://schema.org/",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbList
  };

  return (
    <Head>
      <script type="application/ld+json">
        {JSON.stringify(jsonLd)}
      </script>
    </Head>
  );
};

BreadcrumbSchema.propTypes = {
  breadcrumbs: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired
    })
  ).isRequired
};

export default BreadcrumbSchema;
