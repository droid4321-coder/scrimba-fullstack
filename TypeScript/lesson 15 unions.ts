// L15 Unions

//in this variable, we want to set some values, but we dont want any value.
//we can use literal types and unions, this is like enums but it tells TS what things we want on the variable

//type w/unions -> this type has 3 options complemented with the pipe character, this tells the variable must be one of these 3 options.
type User = {
    username: string,
    role: "guest" | "member" | "admin"
}

type UserRole = "guest" | "member" | "admin"


let userRole: UserRole = "admin" 