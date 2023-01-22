import App from './App'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ApiContext } from './api/context'
const ApiProvider = ApiContext.Provider

const mockApi = {
    fetchCountries: async () => [
        {
            code: 'FIN',
            name: 'Finland',
            population: 5000000,
            flag: 'FI',
        },
    ],
    fetchCities: async () => [
        {
            countrycode: 'FIN',
            name: 'Helsinki',
            population: 600000,
            capital: true,
        },
    ],
}

describe('Main App', () => {
    it('Renders', async () => {
        render(<App />, {
            wrapper: ({ children }) => (
                <ApiProvider value={mockApi}>{children}</ApiProvider>
            ),
        })
        expect(await screen.findByText(/Country list/i)).toBeInTheDocument()
        expect(await screen.findByText(/City list/i)).toBeInTheDocument()
        expect(
            await screen.findByText(/Filter countries by population/i)
        ).toBeInTheDocument()
        // By default, no cities are shown
        expect(screen.queryByText(/Helsinki/i)).not.toBeInTheDocument()
        const FinlandElement = await screen.findByText(/Finland/i)
        await userEvent.click(FinlandElement)
        // After a country is clicked, the cities of that country should be visible
        expect(screen.queryByText(/Helsinki/i)).toBeInTheDocument()
    })
})
