module.exports = {
    createBook: (parent, args) => {
        return {
            id: 1,
            name: args.name,
            genre: args.genre
        }
    }
}