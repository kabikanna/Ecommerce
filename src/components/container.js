import * as React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import ImgMediaCard from './card';

import { useEffect } from 'react';
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function ResponsiveGrid() {
    const [items, setItems] = React.useState([]);
    useEffect(() => {
        async function getCharacters() {
            const response = await fetch("https://fakestoreapi.com/products");
            const body = await response.json();
            console.log(body)
            setItems(body);
        }
        getCharacters();
    }, []);

    return (
        // <Box sx={{ flexGrow: 1 }}>
            
        //     <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        //         {/* {Array.from(Array(6)).map((_, index) => (
        //             <Grid item xs={2} sm={4} md={4} key={index}>
        //                 <ImgMediaCard />
        //             </Grid>
        //         ))} */}

        //         {items.map((item) => (
        //             <Grid item xs={2} sm={4} md={4} >
        //                 {/* <div style={{ height: 400 }}></div> */}
        //                 <ImgMediaCard item={item} style={{ height: 400, width: 300 }} />
        //             </Grid>
        //         ))}
        //     </Grid>
        // </Box>


<Grid container spacing={2}>
 
  {items.map((item) => (
  <Grid item md={4}>
      
                    {/* <Grid item xs={2} sm={4} md={4} > */}
                        {/* <div style={{ height: 400 }}></div> */}
                        <ImgMediaCard item={item} style={{ height: 400, width: 300 }} />
                    {/* </Grid> */}
             
  </Grid>
     ))}
</Grid>








    );
}
