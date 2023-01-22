import styled from 'styled-components'
import { type City } from '../../types'
import { Title, ListContainer } from './components'

const CityName = styled.span<{ capital: boolean }>`
    text-decoration: ${({ capital }) => (capital ? 'underline' : 'none')};
    padding-right: 1em;
`

interface CityListProps {
    cities: City[]
    shownCountries: string[]
}

const CityRowContainer = styled.div``
interface CityProps {
    city: City
}
const CityRow = ({ city }: CityProps) => (
    <CityRowContainer>
        <CityName capital={city.capital}>{city.name}</CityName>
        {city.population}
    </CityRowContainer>
)

export default function CityList({ cities, shownCountries }: CityListProps) {
    return (
        <ListContainer>
            <Title>City List</Title>
            {cities
                .filter((c) => shownCountries.includes(c.countrycode))
                .map((city) => (
                    <CityRow key={city.name} city={city} />
                ))}
        </ListContainer>
    )
}
