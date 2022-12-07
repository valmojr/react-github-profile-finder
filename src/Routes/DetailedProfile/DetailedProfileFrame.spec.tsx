import {render, screen, waitFor, waitForElementToBeRemoved} from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { DetailedUserSearchMock } from '../../Test/mocks';
import DetailedProfileFrame from './DetailedProfileFrame';

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
        data: DetailedUserSearchMock
    })
}))

describe('Detailed Profile Frame Tests', () => {
    it('should render the loading info while retrieving the API', async ()=>{
        render(<MemoryRouter initialEntries={['/detailed-profile/valmojr']}>
                <DetailedProfileFrame/>
            </MemoryRouter>);
        expect(screen.getByText('Loading...')).toBeInTheDocument();
    })
    it('should call the gitHub API and render the profile details', async ()=>{
        render(<MemoryRouter initialEntries={['/detailed-profile/valmojr']}>
                    <DetailedProfileFrame/>
                </MemoryRouter>);
        await waitForElementToBeRemoved(()=>screen.getByText('Loading...'));
        const userDetails = await screen.findByTestId('detailed-profile');
        expect(userDetails).toBeInTheDocument();
    })
});