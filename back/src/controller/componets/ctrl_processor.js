const processor= {}



processor.post = async (req, res) =>{
    console.log("post")
}
processor.put = async (req, res) =>{
    console.log("put")
}
processor.get = async (req, res) =>{
    console.log("get")
}
processor.getOnly = async (req, res) =>{
    console.log("getonly")
}


module.exports = processor;