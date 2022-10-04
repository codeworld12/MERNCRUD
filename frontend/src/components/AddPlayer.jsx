import { useState } from 'react';
import { FormGroup, FormControl, InputLabel, Input, Button, styled, Typography } from '@mui/material';

import { addPlayer } from '../service/api';
import { useNavigate } from 'react-router-dom';

const Container = styled(FormGroup)`
    width: 50%;
    margin: 5% auto 0 auto;
    & > div {
        margin-top: 20px
    }
`
const defaultValue = {
    name: '',
    country: '',
    email: '',
    phone: '',
    image: ''
}

const Addplayer = () => {

    const [user, setUser] = useState(defaultValue);

    const [selectedFile, setSelectedFile] = useState("");

    const { name, country, email, phone } = user;

    let navigate = useNavigate();

    const onValueChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    }

    const addPlayerDetails = async () => {
        const data = new FormData();
        data.append("file", selectedFile);
        data.append("upload_preset", "zgtokjvy");
        data.append("cloud_name", "dwlhhtjms");

        fetch("https://api.cloudinary.com/v1_1/dwlhhtjms/image/upload", {
            method: "post",
            body: data,
        })
            .then((res) => res.json())
            .then( async (data) => {
                console.log(data);
                if (data.url) {
                    user["image"] = data.url;
                    console.log("User", user);
                    await addPlayer(user);
                }
            })
            .catch((err) => {
                console.log(err);
            });


        navigate('/all');
    }


    return (
        <Container>
            <Typography variant="h4">Add Players</Typography>
            <FormControl>
                <InputLabel>Name</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="name" value={name} id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel>Country</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="country" value={country} id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel>Email</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="email" value={email} id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel>Phone</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="phone" value={phone} id="my-input" />
            </FormControl>

            <FormControl><Button variant="contained" component="label">
                Upload
                <input hidden accept="image/*" multiple type="file" name="image" onChange={(e) => {
                    setSelectedFile(e.target.files[0]);
                }} />
            </Button></FormControl>

            <FormControl>
                <Button variant='contained' onClick={() => addPlayerDetails()}>Add player</Button>
            </FormControl>
        </Container>
    )
}

export default Addplayer;