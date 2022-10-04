
import { AppBar, Toolbar, styled } from '@mui/material';

import { NavLink } from 'react-router-dom';

const Header = styled(AppBar)`
background: #111111`
;

const Tabs = styled(NavLink)`
font-size: 20px;
margin-right: 20px;
color: inherit;
text-decoration: none
`;

const Navbar = () =>{
    return (
        <Header position='static'>
            <Toolbar>
                <Tabs to='/'>World Cup</Tabs>
                <Tabs to='/all'>All Players</Tabs>
                <Tabs to='/add'>Add players</Tabs>
            </Toolbar>
        </Header>
    )
} 

export default Navbar;