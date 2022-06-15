import React from "react";
import bannerimg1 from '../images/table1.jpg';
// Import Swiper React components
import {Swiper, SwiperSlide} from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import {Container} from "@mui/system";
import {Box, IconButton, Typography} from "@mui/material";
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShareIcon from '@mui/icons-material/Share';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
const ProductCards = () => {
    return ( <> <section className="py-4">
        <Container maxWidth="lg" className="container-xxl custom-card-slider">
            <Box>
                <Typography variant="h5" className="card-wrapper-title">Product Title</Typography>
            </Box>
            <Swiper
                spaceBetween={10}
                slidesPerView={4}
                grabCursor={true}
                pagination={true}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                >
                <SwiperSlide>
                    <Card>
                        <CardMedia component="img" image={bannerimg1} alt="green iguana"/>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Lizard
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Lizards are a widespread group of squamate reptiles, with over 6,000 species,
                                ranging across all continents except Antarctica
                            </Typography>
                        </CardContent>
                        <CardActions className="justify-content-between">
                            <Box>
                                <IconButton aria-label="add to favorites">
                                    <FavoriteBorderOutlinedIcon/>
                                </IconButton>
                                <IconButton aria-label="share">
                                    <ShareIcon/>
                                </IconButton>
                            </Box>
                            <Button size="small"><ShoppingCartIcon/></Button>
                        </CardActions>
                    </Card>
                </SwiperSlide>

                <SwiperSlide>
                    <Card>
                        <CardMedia component="img" image={bannerimg1} alt="green iguana"/>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Lizard
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Lizards are a widespread group of squamate reptiles, with over 6,000 species,
                                ranging across all continents except Antarctica
                            </Typography>
                        </CardContent>
                        <CardActions className="justify-content-between">
                             <Box>
                                <IconButton aria-label="add to favorites">
                                    <FavoriteBorderOutlinedIcon/>
                                </IconButton>
                                <IconButton aria-label="share">
                                    <ShareIcon/>
                                </IconButton>
                            </Box>
                            <Button size="small"><ShoppingCartIcon/></Button>
                        </CardActions>
                    </Card>
                </SwiperSlide>

                <SwiperSlide>
                    <Card>
                        <CardMedia component="img" image={bannerimg1} alt="green iguana"/>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Lizard
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Lizards are a widespread group of squamate reptiles, with over 6,000 species,
                                ranging across all continents except Antarctica
                            </Typography>
                        </CardContent>
                        <CardActions className="justify-content-between">
                             <Box>
                                <IconButton aria-label="add to favorites">
                                    <FavoriteBorderOutlinedIcon/>
                                </IconButton>
                                <IconButton aria-label="share">
                                    <ShareIcon/>
                                </IconButton>
                            </Box>
                            <Button size="small"><ShoppingCartIcon/></Button>
                        </CardActions>
                    </Card>
                </SwiperSlide>

                <SwiperSlide>
                    <Card>
                        <CardMedia component="img" image={bannerimg1} alt="green iguana"/>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Lizard
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Lizards are a widespread group of squamate reptiles, with over 6,000 species,
                                ranging across all continents except Antarctica
                            </Typography>
                        </CardContent>
                        <CardActions className="justify-content-between">
                             <Box>
                                <IconButton aria-label="add to favorites">
                                    <FavoriteBorderOutlinedIcon/>
                                </IconButton>
                                <IconButton aria-label="share">
                                    <ShareIcon/>
                                </IconButton>
                            </Box>
                            <Button size="small"><ShoppingCartIcon/></Button>
                        </CardActions>
                    </Card>
                </SwiperSlide>
                <SwiperSlide>
                    <Card>
                        <CardMedia component="img" image={bannerimg1} alt="green iguana"/>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Lizard
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Lizards are a widespread group of squamate reptiles, with over 6,000 species,
                                ranging across all continents except Antarctica
                            </Typography>
                        </CardContent>
                        <CardActions className="justify-content-between">
                            <Box>
                                <IconButton aria-label="add to favorites">
                                    <FavoriteBorderOutlinedIcon/>
                                </IconButton>
                                <IconButton aria-label="share">
                                    <ShareIcon/>
                                </IconButton>
                            </Box>
                            <Button size="small"><ShoppingCartIcon/></Button>
                        </CardActions>
                    </Card>
                </SwiperSlide>

            </Swiper>
        </Container>
    </section> </>)
}

export default ProductCards;