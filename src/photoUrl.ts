export class PhotoUrl {    
    constructor(public farm: number, public server: number, public id: number, public secret: number, public title: string) {
        this.farm = farm;
        this.server = server;
        this.id = id;
        this.secret = secret;
        this.title = title;
    }
    makeUrl(): string {
        return `https://farm${this.farm}.staticflickr.com/${this.server}/${this.id}_${this.secret}.jpg`
    }
}