export default (req, res, next) => {
    console.log("I'm Middleware")
    next()
}