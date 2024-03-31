export interface IRoute {
    title: string,
    path: string
}

export const ROUTES: IRoute[] = [
    {
        title: 'Home',
        path: '/'
    },
    {
        title: 'About',
        path: '/about',
    },
    {
        title: 'Blog',
        path: '/blog',
    },
    {
        title: 'Contact',
        path: '/contact'
    }
]