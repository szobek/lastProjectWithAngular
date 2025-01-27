export class Recipe {
    id:number
    name: string
    description: string
    instruction: string
    ingredients: string[]
    image_url: string
    video_url: string
    preparation_time: number
    cook_time: number
    rating: number
    author: number
    serves: number

    constructor(
        id:number,
        name: string,
        description: string,
        instruction: string,
        ingredients: string[],
        image_url: string,
        preparation_time: number,
        cook_time: number,
        rating: number,
        author: number,
        serves: number,
        video_url:string
    ) {
        this.id=id
        this.name = name
        this.description = description
        this.instruction = instruction
        this.ingredients = ingredients
        this.image_url = image_url
        this.video_url=video_url
        this.preparation_time = preparation_time
        this.cook_time = cook_time
        this.rating = rating
        this.author=author
        this.serves=serves
    }
}