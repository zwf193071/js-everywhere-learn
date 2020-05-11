let notes = [
    { id: '1', content: 'first one', author: 'lucy' },
    { id: '2', content: 'second one', author: 'bruce' },
    { id: '2', content: 'third one', author: 'jackie' }
]
module.exports = {
    hello: () => 'Hello my lover!',
    notes: () => notes,
    note: (parent, args) => {
        return notes.find(note => note.id === args.id);
    }
}