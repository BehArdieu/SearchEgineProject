const client = require('../config/elasticsearch');

const Book = {
    createIndex: async () => {
        const indexExists = await client.indices.exists({ index: 'book' });
        if (!indexExists) {
            return client.indices.create({
                index: 'book',
                body: {
                    mappings: {
                        properties: {
                            titre: { type: 'text' },
                            auteur: { type: 'text' },
                            genre: { type: 'keyword' },
                            description: { type: 'text' },
                            date_parution: { type: 'date', format: 'yyyy-MM-dd' },
                            isbn: { type: 'keyword' },
                        },
                    },
                },
            });
        }
        return null;
    },
    add: (data) =>
        client.index({
            index: 'book',
            body: data,
        }),

    findByISBN: (isbn) =>
        client.search({
            index: 'book',
            body: {
                query: {
                    match: { isbn },
                },
            },
        }),

    findAll: () =>
        client.search({
            index: 'book',
            body: {
                query: {
                    match_all: {},
                },
            },
        }),
    update: (isbn, data) =>
        client.updateByQuery({
            index: 'book',
            body: {
                query: {
                    match: { isbn },
                },
                script: {
                    source: `
                    ctx._source.titre = '${data.titre}';
                    ctx._source.auteur = '${data.auteur}';
                    ctx._source.genre = '${data.genre}';
                    ctx._source.description = '${data.description}';
                    ctx._source.date_parution = '${data.date_parution}';
                    `,
                },
            },
        }),
};

module.exports = Book;