export function urlToPath(url: string) {
    return url.replace(window.location.origin, '');
}