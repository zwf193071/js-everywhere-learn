module.exports = {
    notes: async (parent, args, { models }) => {
        return await models.Note.find().limit(100);
    },
    note: async (parent, args, { models }) => {
        return await models.Note.findById(args.id);
    },
    // user: async (parent, args, { models }) => {
    //     return await models.User.findOne({ username: args.username });
    // },
    // users: async (parent, args, { models }) => {
    //     return await models.User.find({}).limit(100);
    // }
}