
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';

//components
import SwipeDrawer from './SwipeDrawer';
import Notes from "./Note";


const Home = () => {
    return (
        <Box style={{ display: 'flex', width: '100%' }}>
            <Router>
                <SwipeDrawer />
                <Routes>        
                    <Route path='/' element={"Note"} />
                    <Route path='/archive' element={"archive"} />
                    <Route path='/delete' element={"delete"} />
                </Routes>
            </Router>
        </Box>
    )
}

export default Home;