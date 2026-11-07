// type assertion

// as syntax

type Status = "pending" | "aprove" | "rejected"

const SomeStatus : string="pending"
const ShowStatus = (statys:Status)=>{
    console.log("Your Current Status is" + statys);
}

ShowStatus(SomeStatus as Status)

// non-nall asertion
interface Config{
    port?:number
}

const config:Config ={

    port:1000
}

const  currentPort: number  = config.port!
// constant assersion
const configaration = {
    port:8080,
    prepix:"/api/v2"
} as const
