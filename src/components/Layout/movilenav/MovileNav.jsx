import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import InputBase from '@mui/material/InputBase';
import Icon from '../../../../public/icon.png'
import { fetchMovieAllGenere } from "../../../services";
import { useLocation, useNavigate } from "react-router-dom";
import { styled, alpha } from '@mui/material/styles';
import './MobileNav.scss'
const drawerWidth = 240;



const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));



function ResponsiveDrawer(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [genre, setGenre] = useState();
  const [name, setName] = useState("");
  const [search,setSearch]=useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleValue = (id, name) => {
    setName(name);
    navigate(`/movies/${id}`);
    setAnchorEl(null);
  };
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  useEffect(() => {
    fetchMovieAllGenere().then((data) => {
      setGenre(data);
  
    });
  }, []);

  

  const drawer = (
    <div className="menu-items">
      <Toolbar />
      <Divider />
      <List className="-mt-10 mb-10 ml-3 flex gap-10 items-center">
        <img src={Icon}/>
      </List>
      <List>
        <ListItem onClick={() => navigate("/")}> Home</ListItem>
      </List>
      <List>
        <ListItem onClick={() => navigate("/MobileMovies")}> Movies</ListItem>
      </List>
      <Divider />
      <List>
        <ListItem onClick={() => navigate("/MobileTv")}> Tv</ListItem>
      </List>
      <Divider />
      <List>
        <ListItem onClick={() => navigate("/Animation")}>Anime</ListItem>
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: { sm: "flex", md: "none" } }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          ml: { sm: `${drawerWidth}px` },
          backgroundColor: "black",
          width:'100vw'
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { md: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          {location.pathname === "/" ? (
            ""
          ) : (
            <div>
              {/* <Button
                id="basic-buttons"
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
                sx={{ backgroundColor: "white", color: "black" }}
              >
                {name}
              </Button>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
              >
                {genre?.genres.slice(0, 8).map((item) => (
                  <MenuItem
                    key={item.id}
                    sx={{ fontSize: "14px" }}
                    onChange={() => handleValue(item.id, item.name)}
                  >
                    {item.name}
                  </MenuItem>
                ))}
              </Menu> */}
            </div>
          )}
          <Search sx={{display:'flex'}}>
            <SearchIconWrapper>
              <SearchIcon   />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder={error || 'Search...'}
              inputProps={{ "aria-label": "search" }}
              onChange={(e)=>setSearch(e.target.value)}
          
            />
            <Button  variant="outlined" sx={{margin:'1px',color:'#0FEFFD'}} onClick={()=>{search?navigate(`/search/${search}`):setError('Enter something')}}>Search</Button>
          </Search>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
  
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, 
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default ResponsiveDrawer;
