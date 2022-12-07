import {render, screen, waitForElementToBeRemoved} from '@testing-library/react';
import { RepoSearchMock } from '../../../Test/mocks';
import UserRepos from './UserRepos';

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
        data: [RepoSearchMock]
    })
}))

describe('User Repos Tests', () => {
    it('should render a loading message when just rendered', () => {
        render(<UserRepos user='valmojr'/>)
        expect(screen.getByText('Retrieving Repos')).toBeInTheDocument();
    });
    it('should do the API Call', async () => {
        render (<UserRepos user='valmojr'/>);
        expect(screen.getByText('Retrieving Repos')).toBeInTheDocument();
        await waitForElementToBeRemoved(()=>screen.getByText('Retrieving Repos'));
        const resultedRepos = await screen.findByTestId('repo-search');
        expect(resultedRepos).toBeInTheDocument();
    });
});