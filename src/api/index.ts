import type { Country, City } from '../types'

const BACKEND_API_URL = 'http://localhost:3001'

export async function fetchCountries(): Promise<Country[]> {
    const res = await fetch(`${BACKEND_API_URL}/countries`)
    const countries = await res.json()
    return countries
}

export async function fetchCities(
    selectedCountries: Record<string, boolean>
): Promise<City[]> {
    console.log('Fetch Cities called')
    console.log(selectedCountries)
    const query = Object.entries(selectedCountries)
        .filter(([_code, selected]) => selected)
        .map(([code]) => `country=${code}`)
        .join('&')
    console.log(query)

    const res = await fetch(`${BACKEND_API_URL}/cities?${query}`)
    const cities = await res.json()
    console.log(cities)
    return cities
}
