import { useEffect, useState } from 'react';

import { Table, TableBody, TableCell, TableHead, TableRow, Button, styled } from '@mui/material';

import { getUsers, deleteUser } from '../service/api';

import { Link } from 'react-router-dom';

const StyledTable = styled(Table)`
    width: 90%;
    margin: 20px 10px 10px 50px;
`;

const THead = styled(TableRow)`
    & > th {
        font-size: 20px;
        background: #000000;
        color: #FFFFFF;
        padding: 10px 80px 15px 10px;
    }
`;

const TRow = styled(TableRow)`
    & > td{
        font-size: 18px
    }
`;


const Allplayer = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        getAllUsers();
    }, []);

    const deleteUserData = async (id) => {
        await deleteUser(id);
        getAllUsers();
    }


    // const getAllUsers = async () => {
    //     let response = await getUsers();
    //     setUsers(response.data);
    // fetch(`http://localhost:8000/all`)
    // .then((data)=>console.log(data))
    // .catch((e)=>console.log(e))
    //}

    const getAllUsers = async () => {
        let response = await getUsers();
        setUsers(response.data);
    }


    return (
        <StyledTable>
            <TableHead>
                <THead>
                    <TableCell>ID</TableCell>
                    <TableCell>Image</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Country</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Phone</TableCell>
                    <TableCell>Action</TableCell>
                </THead>
            </TableHead>
            <TableBody>
                {
                    users.map(user => (
                        <TRow key={user.id}>
                            <TableCell>{user._id}</TableCell>
                            <TableCell><img src={user.image} alt="image" /></TableCell>
                            <TableCell>{user.name}</TableCell>
                            <TableCell>{user.country}</TableCell>
                            <TableCell>{user.email}</TableCell>
                            <TableCell>{user.phone}</TableCell>
                            <TableCell>
                            <Button color="primary" variant="contained" style={{marginRight:10}} component={Link} to={`/edit/${user._id}`}>Edit</Button> {/* change it to user.id to use JSON Server */}
                            <Button color="secondary" variant="contained" onClick={() => deleteUserData(user._id)}>Delete</Button> {/* change it to user.id to use JSON Server */}
                        </TableCell>
                    </TRow>
                ))}
            </TableBody>
        </StyledTable>
    )
}

export default Allplayer;