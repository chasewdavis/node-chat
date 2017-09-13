var messages = [];
var id = 0;

module.exports = {
    create: ( req, res) => {
        const { text, time } = req.body;
        messages.push( { id, text, time} );
        id++
        res.status(200).send( messages );
    },
    read: ( req, res) => {
        res.status(200).send( messages );
    },
    update: ( req, res) => {
        // const { text } = req.body;
        console.log('req.params', req.params)
        // const updateID = req.params.id;
        const messageIndex = messages.findIndex( messa => messa.id == req.params.id );
        var message = messages[ messageIndex ];
        console.log('message', message)
        messages[ messageIndex ] = {
            id: message.id,
            text: req.body || message.text,
            time: message.time
        };

        res.status(200).send( messages )
    },
    delete: ( req, res) => {
        const deleteID = req.params.id;
        messageIndex = messages.findIndex( message => message.id == deleteID );
        messages.splice(messageIndex, 1);
        res.status(200).send( messages );
    }
}