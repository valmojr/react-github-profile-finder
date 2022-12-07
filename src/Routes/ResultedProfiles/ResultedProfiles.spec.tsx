import {render, screen, waitFor, waitForElementToBeRemoved} from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { UserSearchMock } from '../../Test/mocks';
import ResultedProfilesFrame from './ResultedProfilesFrame';

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'), // use actual for all non-hook parts
    useParams: () => (
        {
            user: 'valmojr'
                }
            )
        }
    )
);

jest.mock('axios',() => ({
    ...jest.requireActual('axios'),
    get: () => ({
        data: UserSearchMock
    })
}))

describe('Resulted Profiles Tests', () => {
    it('should be renderable', () => {
        render(<MemoryRouter initialEntries={['/search-profile/valmojr']}>
            <ResultedProfilesFrame/>
        </MemoryRouter>)
        waitFor(() => expect(screen.getByText('Loading...')).toBeInTheDocument())
    });
    it('should call the API for retrieving desired users', async () => {
        render(<MemoryRouter initialEntries={['/detailed-profile/valmojr']}>
                    <ResultedProfilesFrame/>
                </MemoryRouter>);
        await waitForElementToBeRemoved(()=>screen.getByText('Loading...'));
        const resultedProfiles = await screen.findByTestId('resulted-profiles');
        expect(resultedProfiles).toBeInTheDocument();
    });
});