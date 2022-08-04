const schemaorg =  [{
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": "#Person",
    "name": "Julian Aijal",
    "url": "https://julianaijal.com",
    "jobTitle": "Web Developer",
    "birthDate": "19891117",
    "email": "julian@thenextweb.com",
    "sameAs": [
        "https://www.crunchbase.com/person/julian-aijal",
        "https://www.instagram.com/julian.aijal/",
        "https://twitter.com/Jaijal",
        "https://yourambassadrice.com/author/julian-aijal/",
        "https://www.bitsoffreedom.nl/mensen/julian-aijal/",
        "https://github.com/julianaijal",
        "https://www.linkedin.com/in/jaijal/",
        "https://www.deepcrawl.com/blog/authors/julian-aijal/"
    ],

    "worksFor": {
        "@id": "https://thenextweb.com/#tnw"
    },
    "homeLocation": {
        "@type": "City",
        "name": "Amsterdam",
        "sameAs": [
            "https://g.co/kg/m/0k3p",
    ],
    },
    "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://julianaijal.com",
        "name": "Julian Aijal | Web Developer",
        "publisher": {
            "@id": "#Person"
        },
        "inLanguage": "NL",
        "isPartof": {
            "@type": "WebSite",
            "@id": "#Site",
            "url": "https://julianaijal.com",
            "name": "julianaijal.com",
            "author": {
                "@id": "#Person"
            },
            "publisher": {
                "@id": "#Person"
            },
            "creator": {
                "@id": "#Person"
            },
            "Publisher": {
                "@id": "#Person"
            }
        },
        "breadcrumb": {
            "@id": "#Breadcrumb"
        }
    }
}, {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": "#Breadcrumb",
    "itemListElement": [{
        "@type": "ListItem",
        "position": 1,
        "item": {
            "@type": "WebPage",
            "@id": "https://julianaijal.com",
            "name": "Home"
        }
    }, {
        "@type": "ListItem",
        "position": 2,
        "item": {
            "name": "Web Developer"
        }
    }]
    }]

  function Schema() {

  
    return (
        <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaorg) }}
      />
                
    );
  }
  
  export default Schema