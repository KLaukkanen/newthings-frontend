import styled from 'styled-components'
import { Title } from './components'

const MAX_POPULATION = 50 * 1000 * 1000
const FILTER_STEP = 10 * 1000

const RangeInput = styled.input`
    width: 50em;
`

const FilterContainer = styled.div``

interface FilterProps {
    filter: number
    setFilter: (filterValue: number) => void
}

export default function Filter({ filter, setFilter }: FilterProps) {
    return (
        <FilterContainer>
            <Title>Filter countries by population</Title>
            <div>Current value: {filter}</div>
            <RangeInput
                type="range"
                min={0}
                max={MAX_POPULATION}
                value={filter}
                step={FILTER_STEP}
                onChange={(evt) => {
                    setFilter(Number(evt.target.value))
                }}
            />
        </FilterContainer>
    )
}
