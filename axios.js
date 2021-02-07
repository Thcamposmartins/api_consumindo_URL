const axios = require('axios');
require('./src/database/database');
const post = require('./src/model/schema');

const config = {
    url: 'https://jsonplaceholder.typicode.com/posts',
    method:'GET'
}
const createPost = res => {
    if(res.data.length > 0)
        res.data.map(value=> post.create(value));
}

axios(config)
    .then(res => console.log(res.data))
    .catch(err => console.log(err))