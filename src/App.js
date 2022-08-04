import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import theme from './themes/theme';
import { Route, Routes, Link} from 'react-router-dom';
import { Box, ThemeProvider } from '@mui/material';
import Homepage from './containers/homepage';
import Footer from './components/Footer';
import Detail from './containers/Detail';
import TopIndo from './containers/TopIndo';
import TopWorld from './containers/TopWorld';
import Genre from './containers/Genre';
import Artis from './containers/Artis';
import Artists from './containers/Artists';
import Hasil from './containers/Hasil';
import Login from './containers/Login';
import Register from './containers/Register';
import ProtectedRoute from './components/ProtectedRoute';
import TopArtis from './containers/TopArtis';
import TopGenre from './containers/TopGenre';
function App() {
  return (
    <ThemeProvider theme={theme}>
    <div className="App">
     <Navbar />
     <Routes>
     <Route path='/' element={<Homepage />} />
     <Route path='/TopIndo' element={<ProtectedRoute loginOnly={true}><TopIndo /></ProtectedRoute>} />
     <Route path='/TopArtis' element={<ProtectedRoute loginOnly={true}><TopArtis /></ProtectedRoute>} />
     <Route path='/TopGenre' element={<ProtectedRoute loginOnly={true}><TopGenre /></ProtectedRoute>} />
     <Route path='/TopWorld' element={<ProtectedRoute loginOnly={true}><TopWorld /></ProtectedRoute>} />
     <Route path='detail/:id' element={<ProtectedRoute loginOnly={true}><Detail></Detail></ProtectedRoute>}/>
     <Route path='Genre/:id' element={<ProtectedRoute loginOnly={true}><Genre></Genre></ProtectedRoute>}/>
     <Route path='Hasil/:id' element={<Hasil></Hasil>}/>
     <Route path='Artis/:id' element={<ProtectedRoute loginOnly={true}><Artis></Artis></ProtectedRoute>}/>
     <Route path='Similiar/:id' element={<ProtectedRoute loginOnly={true}><Artists></Artists></ProtectedRoute>}/>
     <Route path='login' element={<Login/>}/>
  <Route path='register' element={<Register/>}/>
    <Route
            path="*"
            element={
              <Box sx={{
                display: 'flex', 
                margin: 10, 
                justifyContent: 'center',
                alignItems: 'center', 
                flexDirection: 'column',
              }}>
                <img
                  src="https://cdn3d.iconscout.com/3d/premium/thumb/404-error-4461124-3696774.png"
                  alt="404"
                />
                <p>You have reach the edge of universe</p>
                <Link to="/">Take me home!</Link>
              </Box>
            }
          />
    </Routes>
    <Footer />
    </div>
    </ThemeProvider>
  );
}

export default App;
