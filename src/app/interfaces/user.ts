export interface User {
    id: number,
    name: string,
    username: string,
    email: string,
    address: Address,
    phone: string,
    website: string,
    company: Company
}

export interface Address {
    street: string,
    suite: string,
    city: string,
    zipcode: string,
    geo: object
}

export interface Company{
    name: string,
    catchPhrase: string,
    bs:string
}
