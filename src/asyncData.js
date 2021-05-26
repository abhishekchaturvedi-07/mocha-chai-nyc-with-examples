const axios = require('axios')

class User{
    constructor(id){
        this.id = id
    }

    getUserId(){
        return axios.get(`https://jsonplaceholder.typicode.com/posts/${this.id}`)
        .then(respose => respose.data.userId)
    }
}

module.exports = {
    User
}