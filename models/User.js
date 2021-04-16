const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name:{
        type: String,
        maxlength: 50
    },
    email: {
        type: String,
        trim: true, //스페이스바 없애줌 trim이 true면 없애고 false면 없애지 않음
        unique: 1 //똑같은 이메일 사용불가
    },
    password: {
        type: String,
        minlength: 5
    },
    lastname: {
        type: String,
        maxlength: 50
    },
    role: { //관리자 권한
        type: Number, //1이면 관리자 0이면 유저 이런식
        default: 0  
    },
    image: String,
    token: { //유효성 관리
        type: String,
    },
    toeknExp: { //유효기간
        type: Number
    }
})

const User = mongoose.model('User', userSchema)
module.exports = { User }