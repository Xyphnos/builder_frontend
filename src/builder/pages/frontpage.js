import React from 'react';
import { Card, Button, Container } from '@material-ui/core'
import Selection from '../fragments/selection'
import TopBar from '../fragments/topbar';

const Frontpage = () => {

    const { Listing } = Selection();

    return (
        <Container>
            <TopBar/>
            <Card>
                <Listing/>
            </Card>
        </Container>
    )
}

export default Frontpage