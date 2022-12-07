import {render, screen} from '@testing-library/react';
import Error from './Error';
import App from '../../App';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';

  describe('MainFrame Tests', () => {
    it('should be renderable', () => {
        const { getByTestId } = render(<Error/>);
        expect(getByTestId('badroutehandler')).toBeInTheDocument();
    })
    it('should be rendered in case of bad path', async () => {
        const renderWithBadRouteRouter = (ui: any, {route = '/bad/path'} = {}) => {
            window.history.pushState({}, 'Test page', route)
        
            return {
            user: userEvent.setup(),
            ...render(ui, {wrapper: BrowserRouter}),
            }
        }

        renderWithBadRouteRouter (<App/>);

        expect(screen.getByTestId('badroutehandler')).toBeInTheDocument();
    });
});