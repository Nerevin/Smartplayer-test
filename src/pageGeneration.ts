export async function pageGenere() {
    const url: string = 'https://api.flickr.com/services/rest/?method=flickr.interestingness.getList&api_key=f58a4761feb10b86f01d63d8cd6b07c3&per_page=20&page=1&format=json&nojsoncallback=1'; 
    let response = await fetch(url);
    if (response.ok) {
        const json = await response.json();
        const array = json.photos.photo;
        for (let i = 0; i <= array.length; i++) {
            const image = new PhotoUrl(array[i].farm, array[i].server, array[i].id, array[i].secret, array[i].title);
            const wrapper = document.getElementsByClassName('image-wrapper');
            wrapper[i]!.querySelector('img')!.setAttribute('src', image.makeUrl());
            //wrapper[i]!.querySelector('p')!.textContent(image.title);
        }
    }
    else console.log(response.status);
}

class PhotoUrl {
    farm: number;
    server: number;
    id: number;
    secret: number;
    title: string;
    constructor(farm: number, server: number, id: number, secret: number, title: string) {
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