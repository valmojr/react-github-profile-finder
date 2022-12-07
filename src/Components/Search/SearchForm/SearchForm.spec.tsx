import { render, screen } from '@testing-library/react';
import SearchForm from './SearchForm';

describe('SearchForm Test', () => {
    it('should be rendered in the DOM',()=>{
        render(<SearchForm/>)
        expect(screen.getByTestId('searchForm')).toBeInTheDocument();
    })
})