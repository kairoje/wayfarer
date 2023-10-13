import { Injectable } from "@angular/core";

@Injectable({
    providedIn: "root"
})

export class TopicService{
    private topics = [
        {
            title: 'Topic',
            description: 'Lorem Ipsum'
        },
        {
            title: 'Topic',
            description: 'Lorem Ipsum'
        },
        {
            title: 'Topic',
            description: 'Lorem Ipsum'
        }
    ]

    getTopics() {
        return this.topics
    }
}
