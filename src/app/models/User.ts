export class User {
    email: string
    id: number
    formattedString?: string
    name: string
    phone: string
    username: string
    website: string
    address: {
        city: string
        street: string
        suite: string
        zipcode: string
        geo: {
            lat: string
            lng: string
        }
    }
    company: {
        bs: string
        name: string
        catchPhrase: string
    }

    constructor(
        email: string,
        id: number,
        name: string,
        phone: string,
        username: string,
        website: string,
        address: {
            city: string
            street: string
            suite: string
            zipcode: string
            geo: {
                lat: string
                lng: string
            }
        },
        company: {
            bs: string
            name: string
            catchPhrase: string
        }
    ) {
        this.email = email
        this.id = id
        this.name = name
        this.phone = phone
        this.username = username
        this.website = website
        this.address = address
        this.company = company
    }
}