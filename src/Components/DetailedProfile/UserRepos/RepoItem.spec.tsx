import {render, screen} from '@testing-library/react';
import RepoItem from './RepoItem';
import { RepoSearchMock } from '../../../Test/mocks';

describe('Individual Repo Component Tests', () => {
    it('should be renderable', () => {
        render (<RepoItem repo={RepoSearchMock}/>)
        expect(screen.getByTestId('RepoItemFrame')).toBeInTheDocument();
    });
    it('should render repo infos', () => {
        render (<RepoItem repo={RepoSearchMock}/>)
        expect(screen.getByText('Repo name')).toBeInTheDocument();
        expect(screen.getByText('this is a mocked repo description')).toBeInTheDocument();
        expect(screen.getByText('typescript')).toBeInTheDocument();
    });
});