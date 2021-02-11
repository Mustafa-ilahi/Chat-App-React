  
const INITIAL_STATE = {
    username: "Mustafa Ilahi",
    email: "mustafailahi586@gmail.com"
}

export default (state = INITIAL_STATE ,action)=>{
    console.log(action)
    return state;
}
