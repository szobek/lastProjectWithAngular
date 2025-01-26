export class Coffee {
    id: number;
    name: string;
    price: number;
    image_url: string;
    description: string;
    region: string
    weight: number
    flavor_profile: Array<string>
    grind_option: Array<string>
    roast_level: number

    constructor(
        id: number,
        name: string,
        price: number,
        image_url: string,
        description: string,
        region: string,
        weight: number,
        flavor_profile: Array<string>,
        grind_option: Array<string>,
        roast_level: number
    ) {
        this.id = id
        this.name = name
        this.price = price
        this.image_url = image_url
        this.description = description
        this.region = region
        this.weight = weight
        this.flavor_profile = flavor_profile
        this.grind_option=grind_option
        this.roast_level=roast_level
    }
}