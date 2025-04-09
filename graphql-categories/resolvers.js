const realms = require('./data');

const resolvers = {
  Query: {
    realms: () => realms,
    realm: (_, { slug }) => realms.find(r => r.slug === slug),
    domains: (_, { realmSlug }) => {
      const realm = realms.find(r => r.slug === realmSlug);
      return realm ? realm.domains : [];
    },
    niches: (_, { domainSlug }) => {
      for (const realm of realms) {
        const domain = realm.domains.find(d => d.slug === domainSlug);
        if (domain) return domain.niches;
      }
      return [];
    },
  },
};

module.exports = resolvers;
