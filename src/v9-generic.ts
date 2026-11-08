const wrapInArray = <T>(value: T) => {
    return [value]
}

const strArry = wrapInArray<string>("abc")
const numberArry = wrapInArray<number>(123)


strArry.map(item => item.toUpperCase())


interface User {
  
        name: string,
        role: string
    
}

interface Blog {
    
        title: string,
        description: string,
        date: string
    
}

interface ApiResponse<T> {
    data: T,
    success: boolean,
    SatatusCode: number
}

type UserRes = ApiResponse<User>;
type BlogRes = ApiResponse<User>;


const userRes : UserRes = {
    SatatusCode:200,
     success:true,
     data:{
        name:"shakib",
        role :"avc"
     }
}