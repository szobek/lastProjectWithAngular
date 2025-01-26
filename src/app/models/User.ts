import { MySubscription } from "./MySubscription"
import { Voluntary } from "./Voluntary"

export class User {
    email: string
    id: number
    formatAddressString?: string
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
    voluntary?: Voluntary
    subscription?: MySubscription
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