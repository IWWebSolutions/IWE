const { GraphQLObjectType, GraphQLSchema, GraphQLString, GraphQLList, GraphQLNonNull } = require('graphql');
const realms = require('./data'); // Import realms data

// Niche Type
const NicheType = new GraphQLObjectType({
    name: 'Niche',
    fields: {
        name: { type: GraphQLString },
        slug: { type: GraphQLString },
    },
});

// Domain Type
const DomainType = new GraphQLObjectType({
    name: 'Domain',
    fields: {
        name: { type: GraphQLString },
        slug: { type: GraphQLString },
        niches: { type: new GraphQLList(NicheType) }, // Niches under this domain
    },
});

// Realm Type
const RealmType = new GraphQLObjectType({
    name: 'Realm',
    fields: {
        name: { type: GraphQLString },
        slug: { type: GraphQLString },
        domains: { type: new GraphQLList(DomainType) }, // Domains under this realm
    },
});

// Root Query
const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        // Fetch all realms
        realms: {
            type: new GraphQLList(RealmType),
            resolve() {
                return realms;
            },
        },

        // Fetch a single realm by slug
        realm: {
            type: RealmType,
            args: { slug: { type: new GraphQLNonNull(GraphQLString) } }, // Realm slug is required
            resolve(parent, args) {
                const realmSlug = args.slug;
                const realm = realms.find(r => r.slug === realmSlug); // Find realm by slug

                if (!realm) {
                    throw new Error('Realm not found');
                }

                return realm;
            },
        },

        // Fetch domains by realm slug
        domains: {
            type: new GraphQLList(DomainType),
            args: { realmSlug: { type: new GraphQLNonNull(GraphQLString) } }, // Realm slug is required
            resolve(parent, args) {
                const realmSlug = args.realmSlug;
                const realm = realms.find(r => r.slug === realmSlug); // Find realm by slug

                if (!realm) {
                    throw new Error('Realm not found');
                }

                return realm.domains;
            },
        },

        // Fetch niches by domain slug
        niches: {
            type: new GraphQLList(NicheType),
            args: { domainSlug: { type: new GraphQLNonNull(GraphQLString) } }, // Domain slug is required
            resolve(parent, args) {
                const domainSlug = args.domainSlug;

                // Find the domain by slug
                for (const realm of realms) {
                    const domain = realm.domains.find(d => d.slug === domainSlug);
                    if (domain) {
                        return domain.niches;
                    }
                }

                throw new Error('Domain not found');
            },
        },
    },
});

// Export the schema
module.exports = new GraphQLSchema({
    query: RootQuery,
});