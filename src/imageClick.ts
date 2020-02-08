export function click(): void {
    const images = document.getElementById('clickImg');
    images?.addEventListener('click', (event) => {
        if ((event.target as HTMLElement)?.tagName === 'IMG') {
            const p = document.getElementsByTagName('p');
            for (let i = 0; i < p.length; i++) {
                p[i].classList.toggle('hidden', true);
            };
            const div = (event.target as HTMLElement).parentNode;
            div!.querySelector('p')?.classList.remove('hidden');
        }
    });
}