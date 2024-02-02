import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './card.css'
import StarBorderIcon from '@mui/icons-material/StarBorder';
export default function ImgMediaCard({ item }) {

    console.log("dk;jklsj")
    console.log(item)
    // "id": 1,
    // "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    // "price": 109.95,
    // "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    // "category": "men's clothing",
    // "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    // "rating": {
    //     "rate": 3.9,
    //     "count": 120
    // }

    return (
        // <Card sx={{ maxWidth: 365, maxHeight: 400 }}>
        //     <CardMedia
        //         component="img"
        //         alt={item.description}
        //         height="200"
        //         width={167}
        //         image={item.image}
        //     />
        //     <CardContent>
        //         <Typography gutterBottom variant="h5" component="div">
        //             {item.title}
        //         </Typography>
        //         {/* <Typography variant="body2" color="text.secondary">
        //            {item.description}
        //         </Typography> */}
        //     </CardContent>
        //     <CardActions>
        //         <Button size="small">Add to cart</Button>
        //         <Button size="small">Learn More</Button>
        //     </CardActions>


        // </Card>
        <div class="card" style={{height:400}}>
           <img src={item.image} alt="Denim Jeans" style={{ width: 100,Height:150}} />
           
            <h3>{item.title}</h3>
            <p class="price">${item.price}</p>
            {/* <p style={{fontSize:10}}>{item.description}</p> */}
            <p><StarBorderIcon/> </p>
            <p><button>Add to Cart</button></p>
        </div>
    );
}
