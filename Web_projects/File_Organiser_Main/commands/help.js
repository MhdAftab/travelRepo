function helpFunction(){
    console.log(`List of all commands :
    1. node main.js tree <path_name>
    2. node main.js organize <path_name>
    3. node main.js help`
    )
}

module.exports={
    helpFn : helpFunction
};