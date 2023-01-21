export interface Options {
    active: boolean,
    icon: string,
    value: string
}

export const options: Options[] = [
    {
        active: true,
        icon: 'search',
        value: 'Search'
    },
    {
        active: false,
        icon: 'image',
        value: 'Images'
    },
    {
        active: false,
        icon: 'book',
        value: 'Book'
    },
    {
        active: false,
        icon: 'local_offer',
        value: 'Shopping'
    },
    {
        active: false,
        icon: 'room',
        value: 'Maps'
    },
    {
        active: false,
        icon: 'more_vert',
        value: 'More'
    },
]