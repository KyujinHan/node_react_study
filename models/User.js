const mongoose = require('mongoose')

const userSchema = mongoose.Schema({ // Schema 만들기
    name: {
        type: String,
        maxlength: 50
    },
    email: {
        type: String,
        trim: true, // space를 없애주는 역할
        unique: 1 // true
    },
    password: {
        type: String, 
        maxlength: 50
    },
    role: {
        type: Number,
        default: 0 
    },
    image: String,
    token: {
        type: String
    },
    tokenExp: {
        type: Number
    }
})

const User = mongoose.model('User', userSchema) // 데이터베이스 만들기

module.exports = {User} // 다른 곳에서도 쓸 수 있도록