import React from 'react';

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Frontpage from '../pages/frontpage'
import CharacterSheet from '../pages/characterSheet'
import NewSheet from '../pages/newSheet'

const CustomRouter = () => {

    return(
        <Router>
            <Routes>
                <Route path="/" element={<Frontpage/>}/>
                <Route path="/newSheet" element={<NewSheet/>}/>
                <Route path="/characterSheet/:characterID" element={<CharacterSheet/>}/>
            </Routes>
        </Router>
    )
}

export default CustomRouter;