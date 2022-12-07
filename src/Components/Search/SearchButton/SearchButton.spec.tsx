import { render, screen, waitFor } from "@testing-library/react"
import SearchButton from './SearchButton';

describe('SearchButton test', () => {
    it('should be rendered in the DOM',()=>{
        render(<SearchButton/>)
        waitFor(()=>{expect(screen.findByText('Search')).toBeInTheDocument()});
    })
})
