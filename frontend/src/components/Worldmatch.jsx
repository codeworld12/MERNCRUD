


// const Worldmatch=()=>{
//     return(
//         <p>Worldmatch here</p>
//     )
// }

// export default Worldmatch;



import { Box, Typography, styled } from '@mui/material';

// import Youtube from '../Assets/Images/england.jpg';
import InstaTele from '../Assets/Images/india.jpg';

const Header = styled(Box)`
    margin: 50px;
    & > div {
        margin: 10px;
    }
`;

const Image = styled('img')({
    width: '1200px',
    height: '450px'
})

const WorldMatch = () => {

    return (
        <Header>
            <Typography variant="h4">World Cup Winner !!</Typography>
            <Box style={{display: 'flex'}}>
                {/* <Image src={Youtube} /> */}
                <Image src={InstaTele} />
            </Box>
        </Header>
    )
}

export default WorldMatch;