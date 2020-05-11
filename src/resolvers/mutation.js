let notes = [
    { id: '1', content: 'first one', author: 'lucy' },
    { id: '2', content: 'second one', author: 'bruce' },
    { id: '2', content: 'third one', author: 'jackie' }
]
module.exports = {
    newNote: (parent, args) => {
        let noteValue = {
            id: String(notes.length + 1),
            content: args.content,
            author: 'Adam'
        };
        notes.push(noteValue);
        return noteValue;
    }
}