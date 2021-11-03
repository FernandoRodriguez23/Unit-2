const CustomAPIError = require("./customError");
const {StatusCode} = require("http-status-codes")

class BadRequest extends CustomAPIError{
    constructor(message){
        super(message)
        this.statusCode = StatusCode.BAD_REQUEST
    }
}

module.exports = BadRequest