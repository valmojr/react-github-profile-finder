import { Routes, Route} from 'react-router-dom';
import MainFrame from './Components/MainFrame'
import NavBar from './Components/NavBar/NavBar';
import ResultedProfilesFrame from './Routes/ResultedProfiles/ResultedProfilesFrame';
import Error from './Routes/Error/Error';
import DetailedProfileFrame from './Routes/DetailedProfile/DetailedProfileFrame';
import SearchFrame from './Routes/Search/SearchFrame';

function App() {

  return (
    <>
      <NavBar/>
      <MainFrame>
          <Routes>
            <Route path='/' element={<SearchFrame/>} />
            <Route path='/react-github-profile-finder' element={<SearchFrame/>} />
            <Route path='/search-profile/:user' element={<ResultedProfilesFrame/>} />
            <Route path='/detailed-profile/:user' element={<DetailedProfileFrame/>} />
            <Route path='*' element={<Error/>} />
          </Routes>
      </MainFrame>
    </>
  )
}

export default App
