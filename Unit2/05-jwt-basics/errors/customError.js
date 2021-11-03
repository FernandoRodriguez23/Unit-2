
//NOT REAL CODE
// const broken = new CustomAPIError("broken", 500)

class CustomAPIError extends Error {
    constructor(message){
        super(message)
        // this.statusCode = statusCode
    }
}

module.exports = CustomAPIError;

