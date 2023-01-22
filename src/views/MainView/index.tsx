import { useEffect, useState, useCallback } from 'react'
import styled from 'styled-components'
import { useApi } from '../../api/context'
import type { Country, City } from '../../types'
import CityList from './CityList'
import CountryList from './CountryList'
import Filter from './Filter'

const Layout = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
`

function MainView() {
    const [selectedCountries, setSelectedCountries] = useState<
        Record<string, boolean>
    >({})
    const [countries, setCountries] = useState<Country[]>([])
    const [cities, setCities] = useState<City[]>([])
    const [filter, setFilter] = useState(0)
    const api = useApi()

    const fetchCities = useCallback(
        async (countryCode: string) => {
            const newSelectedCountries = {
                ...selectedCountries,
                [countryCode]: !selectedCountries[countryCode],
            }
            setSelectedCountries(newSelectedCountries)
            const returnedCities = await api.fetchCities(newSelectedCountries)
            setCities(returnedCities)
        },
        [countries, setCountries, setCities, selectedCountries]
    )
    useEffect(() => {
        const fetchCountries = async () => {
            const returnedCountries = await api.fetchCountries()
            setCountries(returnedCountries)
        }
        void fetchCountries()
    }, [])

    return (
        <>
            <Filter filter={filter} setFilter={setFilter} />
            <Layout>
                <CountryList
                    countries={countries}
                    onSelectCountry={fetchCities}
                    selectedCountries={selectedCountries}
                    filter={filter}
                />
                <CityList
                    cities={cities}
                    shownCountries={countries
                        .filter((c) => c.population > filter)
                        .map((c) => c.code)}
                />
            </Layout>
        </>
    )
}

export default MainView
