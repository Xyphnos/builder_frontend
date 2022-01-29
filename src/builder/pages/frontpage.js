import React from 'react';
import { Card, Button } from '@material-ui/core'
import Selection from '../fragments/selection'
import {useNavigate} from 'react-router-dom'

const Frontpage = () => {

    let navigate = useNavigate();
    const { Listing } = Selection();

    return (
        <Card>
            <Listing/>
            <Button onClick={() => {navigate('/newSheet')}}>New character</Button>
        </Card>
    )
}

export default Frontpage