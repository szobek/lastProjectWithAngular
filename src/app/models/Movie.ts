export class Movie {
    id: number
    title: string
    year: number
    long: number //  minutes
    description: string
    photos: string[] = []
    director: string
    writers: string[] = []
    stars: string[] = []
    genres: string[] = []
    rating: number

    constructor(
        id: number,
        title: string,
        year: number,
        long: number,
        description: string,
        photos: string[],
        director: string,
        writers: string[],
        stars: string[],
        genres: string[],
        rating: number
    ) {
        this.id = id
        this.title = title
        this.year = year
        this.long = long
        this.description = description
        this.photos = photos
        this.director = director
        this.writers = writers
        this.stars = stars
        this.genres = genres
        this.rating = rating

    }

}