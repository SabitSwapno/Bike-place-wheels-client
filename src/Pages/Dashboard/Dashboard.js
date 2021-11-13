import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {
    Switch,
    Route,
    Link,
    useRouteMatch
} from "react-router-dom";
import Myorders from './Myorders/Myorders';
import Payment from './Payment/Payment';
import AddFeedback from './AddFeedback/AddFeedback';
import Manageorders from './ManageOrders/Manageorders';
import AddAProduct from './AddAProduct/AddAProduct';
import ManageProducts from './Manageproducts/ManageProducts';
import MakeAdmin from './MakeAdmin/MakeAdmin';
import AdminRoute from '../PrivateRoute/AdminRoute/AdminRoute';
import useAuth from '../../Hooks/useAuth';


const drawerWidth = 240;

function Dashboard(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const { admin } = useAuth();

    let { path, url } = useRouteMatch();

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div style={{
            backgroundColor: "#eee",
        }}>
            <Toolbar />
            <Link style={{
                fontSize: "25px",
                textDecoration: 'none',
                color: "#0f0c2f"
            }} to="/">Back to Home</Link>
            <Divider />
            <Toolbar />
            <Link style={{
                fontSize: "20px",
                textDecoration: 'none',
                color: "#0f0c2f",
            }} to={`${url}`}>My Orders</Link>
            <br />
            <Link style={{
                fontSize: "20px",
                textDecoration: 'none',
                color: "#0f0c2f"
            }} to={`${url}/payment`}>Payment</Link>
            <br />
            <Link style={{
                fontSize: "20px",
                textDecoration: 'none',
                color: "#0f0c2f"
            }} to={`${url}/addfeedback`}>Add Feedback</Link>
            <Divider />
            <Toolbar />
            {/* secured only admins */}

            {
                admin && <div>
                    <Link style={{
                        fontSize: "20px",
                        textDecoration: 'none',
                        color: "#0f0c2f",
                    }} to={`${url}/manageorders`}>Manage Orders</Link>
                    <br />
                    <Link style={{
                        fontSize: "20px",
                        textDecoration: 'none',
                        color: "#0f0c2f"
                    }} to={`${url}/addaproduct`}>Add A Product</Link>
                    <br />
                    <Link style={{
                        fontSize: "20px",
                        textDecoration: 'none',
                        color: "#0f0c2f"
                    }} to={`${url}/manageproducts`}>Manage Products</Link>
                    <br />
                    <Link style={{
                        fontSize: "20px",
                        textDecoration: 'none',
                        color: "#0f0c2f"
                    }} to={`${url}/makeadmin`}>Make A New Admin</Link>
                </div>
            }
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                    backgroundColor: "#ee163b"
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        The B & P Dashboard
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />
                <Switch>
                    <Route exact path={path}>
                        <Myorders></Myorders>
                    </Route>
                    <Route path={`${path}/payment`}>
                        <Payment></Payment>
                    </Route>
                    <Route path={`${path}/addfeedback`}>
                        <AddFeedback></AddFeedback>
                    </Route>
                    <AdminRoute path={`${path}/manageorders`}>
                        <Manageorders></Manageorders>
                    </AdminRoute>
                    <AdminRoute path={`${path}/addaproduct`}>
                        <AddAProduct></AddAProduct>
                    </AdminRoute>
                    <AdminRoute path={`${path}/manageproducts`}>
                        <ManageProducts></ManageProducts>
                    </AdminRoute>
                    <AdminRoute path={`${path}/makeadmin`}>
                        <MakeAdmin></MakeAdmin>
                    </AdminRoute>
                </Switch>
            </Box>
        </Box>
    );
}

Dashboard.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default Dashboard;
