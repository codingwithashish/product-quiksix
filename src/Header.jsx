import React from "react";
// import logo from './images/Brand.png';
import {
    Box,
    List,
    ListItem,
    Link,
    Container
} from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import HowToRegIcon from '@mui/icons-material/HowToReg';

const Header = () => {
//   const [age, setAge] = React.useState('');

//   const handleChange = (event) => {
//     setAge(event.target.value);
//   };
    return ( <> <header className="main-header">
        <Container maxWidth="xl" className="container-xxl navbar-expand-lg">
            <Box className="top-nav">
                <List className="list-unstyled custom-divider flex-between">
                    <ListItem className="w-auto">
                        <Link className="nav-link" underline="none" href="#">Chat with us</Link>
                        <Link className="nav-link" underline="none" href="tel:+420 336 775 664">+420 336 775 664</Link>
                        <Link className="nav-link" underline="none" href="mailto:quiksix@gmail.com">quiksix@gmail.com</Link>
                    </ListItem>
                    <ListItem className="w-auto">
                        <Link className="nav-link" underline="none" href="#">
                            Blog
                        </Link>
                        <Link className="nav-link" underline="none" href="#">
                            About Us
                        </Link>
                        <Link className="nav-link" underline="none" href="#">
                            Careers
                        </Link>
                    </ListItem>
                </List>
            </Box>
            <Box className="center-nav flex-between">
                <Box className="brand">quiksix</Box>
                {/* <form class="d-flex search-container position-relative">
                    <Box className="select-wrap">
                        <FormControl fullWidth>
                            <InputLabel id="selectCategory">Age</InputLabel>
                            <Select
                                labelId="selectCategory"
                                id="demo-simple-select"
                                value={age}
                                label="Age"
                                onChange={handleChange}>
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                    <Box className="search-input position-relative w-100"></Box>
                    <Link href="#" underline="none" className="magnifying-glass"></Link>
                </form> */}
                <Box className="custom-icons flex-between">
                    <Link href="" className="nav-link flex-between" underline="none">
                        <HowToRegIcon/><span className=" me-2">Login</span>
                    </Link>
                    <Link href="" className="nav-link flex-between" underline="none">
                        <ShoppingCartIcon/><span className="">Cart</span>
                    </Link>
                </Box>
            </Box>
            <Box className="bottom-nav"></Box>
        </Container>
    </header>
    
    </>
    )
}

export default Header;