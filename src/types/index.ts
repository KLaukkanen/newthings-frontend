export interface Country {
    name: string
    flag: string
    code: string
    population: number
}

export interface City {
    name: string
    population: number
    countrycode: string
    capital: boolean
}
