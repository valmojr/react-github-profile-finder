import {render, screen, waitFor} from '@testing-library/react';
import { GithubUserMock } from '../../../Test/mocks';
import ResultedItem from './ResultedItem';

describe('Profile Search ResultedItem Tests', () => {
    it('should be in the DOM', () => {
        render(<ResultedItem user={GithubUserMock}/>)
        waitFor(()=>expect(screen.findByText('ResultedItem')).toBeInTheDocument())
    });
  it('should render avatar and username if there are any', () => {
      render(<ResultedItem user={GithubUserMock}/>)
      waitFor(() => expect(screen.findByText('valmojr')).toBeInTheDocument())
      waitFor(() => expect(screen.findByAltText('https://avatars.githubusercontent.com/u/70849974?v=4')).toBeInTheDocument())
  });
});