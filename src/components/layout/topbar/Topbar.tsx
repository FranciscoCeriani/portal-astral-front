import * as React from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import {AccountCircle} from '@material-ui/icons';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';


const drawerWidth = 240;

const styles = (theme: any) => ({
    appBar: {
        position: 'absolute',
        backgroundColor: '#2196f3',
        marginLeft: drawerWidth,
        [theme.breakpoints.up('md')]: {
            width: `calc(100% - ${drawerWidth}px)`,
        },
    },
    navIconHide: {
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
    accountBtn: {
        marginLeft: 'auto',
    },
});

class Topbar  extends React.Component<any, any> {
    state = {
        mobileOpen: false,
        anchorEl: null,
    };

    handleDrawerToggle = () => {
        this.setState((state: any) => ({ mobileOpen: !state.mobileOpen }));
    };

    handleMenu = (event: any) => {
        this.setState({ anchorEl: event.currentTarget });
    };

    handleClose = () => {
        this.setState({ anchorEl: null });
    };

    render() {
        const { classes, anchorEl, userName}: any = this.props;
        const open = Boolean(anchorEl);

        return (
            <div>
                <AppBar className={classes.appBar}>
                    <Toolbar>
                        <IconButton
                            color='inherit'
                            aria-label='Open drawer'
                            onClick={this.handleDrawerToggle}
                            className={classes.navIconHide}
                        >
                            <MenuIcon/>
                        </IconButton>
                        <Typography variant='title' color='inherit' noWrap>
                            {userName}
                        </Typography>
                        <IconButton
                            aria-owns={open ? 'menu-appbar' : undefined}
                            className={classes.accountBtn}
                            aria-haspopup="true"
                            onClick={this.handleMenu}
                            color="inherit"
                        >
                            <AccountCircle/>
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorEl}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={open}
                            onClose={this.handleClose}
                        >
                            <MenuItem onClick={this.handleClose}>Profile</MenuItem>
                            <MenuItem onClick={this.handleClose}>My account</MenuItem>
                        </Menu>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}

export default withStyles(styles as any, { withTheme: true })(Topbar);
