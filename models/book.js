const client = require("../config/elasticsearch");

const Book = {
  createIndex: async () => {
    const indexExists = await client.indices.exists({ index: "book" });
    if (!indexExists) {
      return client.indices.create({
        index: "book",
        body: {
          mappings: {
            properties: {
              titre: { type: "text" },
              auteur: { type: "text" },
              genre: { type: "keyword" },
              description: { type: "text" },
              date_parution: { type: "date", format: "yyyy-MM-dd" },
              isbn: { type: "keyword" },
            },
          },
        },
      });
    }
    return null;
  },
  add: (data) =>
    client.index({
      index: "book",
      body: data,
    }),

  findByISBN: (isbn) =>
    client.search({
      index: "book",
      body: {
        query: {
          match: { isbn },
        },
      },
    }),

  findBySearchQuery: (q) =>
    client.search({
      index: "book",
      body: {
        query: {
          query_string: {
            query: q, // Recherche en utilisant la chaîne de recherche 'q'
          },
        },
      },
    }),

  findAll: () =>
    client.search({
      index: "book",
      body: {
        query: {
          match_all: {},
        },
      },
    }),
  update: (isbn, data) =>
    client.updateByQuery({
      index: "book",
      body: {
        query: {
          match: { isbn },
        },
        script: {
          source: `
                    ctx._source.titre = params.titre;
                    ctx._source.auteur = params.auteur;
                    ctx._source.genre = params.genre;
                    ctx._source.description = params.description;
                    ctx._source.date_parution = params.date_parution;
                    `,
          params: {
            titre: data.titre,
            auteur: data.auteur,
            genre: data.genre,
            description: data.description,
            date_parution: data.date_parution,
          },
        },
      },
    }),

  delete: async (isbn) => {
    const response = await client.deleteByQuery({
      index: "book",
      body: {
        query: {
          match: {
            isbn: isbn,
          },
        },
      },
      refresh: true, // Pour s'assurer que l'index est mis à jour immédiatement
    });

    return {
      deleted: response.deleted,
      total: response.total,
    };
  },
};

module.exports = Book;
