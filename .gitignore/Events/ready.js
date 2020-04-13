module.exports = async(client) => {
 
    client.user.setPresence({
        game: {
            name: "Vive la FaXe"
        }
    })
};