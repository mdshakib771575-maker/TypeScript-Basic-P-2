//Literal Type 
type Status = "pending"
const status: Status = "pending"

// Basic union"
type Inentity = number | string

const id: Inentity = 125456
// Literal union
type Role = "admin" | "user" | "meneger"

const UserRole: Role = "meneger"

// Object union


type Admin = { id: number, role: "admin", privileges: string[] }
type Customer = { id: number, role: "customer", plans: string[] }

type User = Admin | Customer;

const user: User = { id: 1252, role: "admin", privileges: ["abc", "efg"] }