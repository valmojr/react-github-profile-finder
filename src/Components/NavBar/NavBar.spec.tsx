import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter, MemoryRouter, useLocation } from 'react-router-dom';
import NavBar from './NavBar';

describe('NavBar Tests', () => {
    it('should be renderedable', () => {
        const { getByTestId } = render(
            <BrowserRouter>
                <NavBar/>
            </BrowserRouter>
        );
        expect(getByTestId('NavBarFrame')).toBeInTheDocument();
    });
    it('should have a button', () => {
        const { getByText } = render(
            <BrowserRouter>
                <NavBar/>
            </BrowserRouter>
        );
        expect(getByText('Home')).toBeInTheDocument();
    });
    it('should link to the home page when clicked', async () => {
        render(<MemoryRouter initialEntries={['/other/path']}>
            <NavBar/>
        </MemoryRouter>);
        await userEvent.click(screen.getByText('Home'));
        expect(screen.getByTestId('home-button-link-id')).toBeInTheDocument();
    });
});