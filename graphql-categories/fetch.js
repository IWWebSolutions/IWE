const GRAPHQL_URL = 'http://localhost:4000/graphql';

async function fetchGraphQL(query, variables = {}) {
    const response = await fetch(GRAPHQL_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query, variables }),
    });

    const result = await response.json();
    console.log('GraphQL Response:', result);

    if (result.errors) {
        console.error("GraphQL Error:", result.errors);
        return null;
    }

    return result.data;
}

// Fetch all realms (For realms page)
async function fetchRealms() {
    const query = `
      query {
        realms {
          name
          slug
        }
      }
    `;

    const data = await fetchGraphQL(query);
    return data?.realms || [];
}

// Fetch all domains from all realms (For realm.html)
async function fetchDomains() {
    const query = `
      query {
        realms {
          domains {
            name
            slug
          }
        }
      }
    `;

    const data = await fetchGraphQL(query);
    return data?.realms.flatMap(realm => realm.domains) || [];
}

// Fetch niches based on domainSlug (For domain.html)
async function fetchNiches(domainSlug) {
    const query = `
      query($domainSlug: String!) {
        niches(domainSlug: $domainSlug) {
          name
          slug
        }
      }
    `;

    const data = await fetchGraphQL(query, { domainSlug });
    return data?.niches || [];
}

export { fetchRealms, fetchDomains, fetchNiches };
