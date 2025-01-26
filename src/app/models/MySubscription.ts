export class MySubscription {
    id: number;
title: string
subtitle: string
description: string
    
    constructor(
        id: number,
        name: string,   
        title: string,
        subtitle: string,
        description: string
    ) {
        this.id = id
        this.title = title
        this.subtitle = subtitle
        this.description = description
    }   
}