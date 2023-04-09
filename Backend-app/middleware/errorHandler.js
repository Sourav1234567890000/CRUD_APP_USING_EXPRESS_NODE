const {constants} = require("../constants");

const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode ? res.statusCode : 500;
    switch (statusCode) {
        case constants.VALIDATION_ERROR:
            res.json({title : "validation failed", message:err.message,stackTrace:err.stack })
            break;
        case constants.NOT_FOUND:
            res.json({title : "not found", message:err.message, stackTrace:err.stack })
        case constants.UNAUTHORIZED:
            res.json({title : "Unauthorized", message:err.message, stackTrace:err.stack })
        case constants.FORBIDEN:
            res.json({title : "FORBIDEN", message:err.message, stackTrace:err.stack })
        case constants.SERVER_ERROR:
            res.json({title : "SERVER_ERROR", message:err.message, stackTrace:err.stack })
        default:
            console.log("No error All good")
            break;
    }

} 

module.exports = errorHandler