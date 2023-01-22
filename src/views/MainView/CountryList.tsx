import styled from 'styled-components'
import type { Country } from '../../types'
import { Title, ListContainer } from './components'

const Flag = styled.span`
    font-family: 'Noto Color Emoji';
`
const Name = styled.span<{ selected: boolean }>`
    color: ${({ selected }) => (selected ? 'red' : 'black')};
    font-weight: ${({ selected }) => (selected ? '600' : '100')};
`

const CountryRowContainer = styled.div`
    :hover {
        cursor: pointer;
    }
`

interface CountryRowProps {
    country: Country
    onSelect: (country: string) => Promise<void>
    selected?: boolean
}

const CountryRow = ({ country, onSelect, selected }: CountryRowProps) => (
    <CountryRowContainer
        onClick={() => {
            void onSelect(country.code)
        }}
    >
        <Flag>{country.flag}</Flag>
        <Name selected={selected === undefined ? false : selected}>
            {country.name}
        </Name>
    </CountryRowContainer>
)

interface CountryListProps {
    countries: Country[]
    onSelectCountry: (country: string) => Promise<void>
    selectedCountries: Record<string, boolean>
    filter: number
}

export default function CountryList({
    countries,
    onSelectCountry,
    selectedCountries,
    filter,
}: CountryListProps) {
    return (
        <ListContainer>
            <Title>Country List</Title>
            {countries
                .filter((c) => c.population > filter)

                .map((c) => (
                    <CountryRow
                        key={c.name}
                        country={c}
                        onSelect={onSelectCountry}
                        selected={selectedCountries[c.code]}
                    />
                ))}
        </ListContainer>
    )
}
