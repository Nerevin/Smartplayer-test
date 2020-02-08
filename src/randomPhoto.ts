import {fromEvent} from 'rxjs';
import {map} from 'rxjs/operators';
import {Url} from './url';
import {PhotoUrl} from './photoUrl';

export function randomPhoto(): void {
    const input = document.getElementById('in');
    if (input) {
        const stream$ = fromEvent(input, 'input').pipe(
            map((event) => {
                if (parseInt((event!.target as HTMLTextAreaElement).value) < 1) {
                    (event!.target as HTMLTextAreaElement).value = '1';
                }
                else if (parseInt((event!.target as HTMLTextAreaElement).value) > 20) {
                    (event!.target as HTMLTextAreaElement).value = '20';
                }
                else {
                    (event!.target as HTMLTextAreaElement).value;
                }
            })
        )
        stream$.subscribe();
    }

    const button = document.getElementById('getButton');
    button!.addEventListener('click', async () => {
        const photo = new Url(Math.round(Math.random() * 24) + 1, parseInt((input as HTMLTextAreaElement)!.value));
        const url = photo.makeUrl();
        const response = await fetch(url);
        if (response.ok) {
            for (let i = 0; i < 20; i++) {
                const wrapper = document.getElementsByClassName('image-wrapper');
                wrapper[i]!.querySelector('img')!.setAttribute('src', '');
                wrapper[i]!.querySelector('p')!.textContent = '';
            };
            const json = await response.json();
            const array = json.photos.photo;
            for (let i = 0; i < array.length; i++) {
                const image = new PhotoUrl(array[i].farm, array[i].server, array[i].id, array[i].secret, array[i].title);
                const wrapper = document.getElementsByClassName('image-wrapper');
                wrapper[i]!.querySelector('img')!.setAttribute('src', image.makeUrl());
                wrapper[i]!.querySelector('p')!.textContent = image.title;
            }
        }
        else {
            console.log(response.status);
        }
    })
} 
