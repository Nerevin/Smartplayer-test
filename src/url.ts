export class Url {
    static url: string = 'https://api.flickr.com/services/rest/?method=flickr.interestingness.getList';
    static api: string = '&api_key=f58a4761feb10b86f01d63d8cd6b07c3';
    static photoPerPage: string = '&per_page=';
    static page: string = '&page=';
    static type: string = '&format=json&nojsoncallback=1';
    pageNumber: number;
    photoNumber: number;
    constructor(pageNumber: number, photoNumber: number) {
        this.pageNumber = pageNumber;
        this.photoNumber = (photoNumber <= 1) ? 1 : (photoNumber >= 20) ? 20 : photoNumber;
    }
    makeUrl() : string {
        console.log(this.pageNumber, this.photoNumber);
        return Url.url + Url.api + Url.photoPerPage + this.photoNumber + Url.page + this.pageNumber + Url.type;
    }
}