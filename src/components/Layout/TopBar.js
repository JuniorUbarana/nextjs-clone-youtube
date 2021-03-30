import {
  AppBar,
  Box,
  Button,
  Hidden,
  IconButton,
  InputBase,
  Paper,
  Toolbar,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { AccountCircle, MoreVert, Apps, VideoCall } from '@material-ui/icons';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme) => ({
  root: {
    boxShadow: 'none',
    zIndex: theme.zIndex.drawer + 1,
    backgroundColor: theme.palette.background.default,
  },
  toolbar: {
    minHeight: 56,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  logo: {
    cursor: 'pointer',
    height: 18,
    marginLeft: theme.spacing(3),
  },
  search: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    height: 35,
    width: 600,
  },
  input: {
    flex: 1,
  },
}));

export default function TopBar() {
  const classes = useStyles();
  return (
    <AppBar className={classes.root} color="default">
      <Toolbar className={classes.toolbar}>
        <Box display="flex" align-items="center">
          <MenuIcon />
          <img
            src="/new-youtube-logo.svg"
            alt="logo"
            className={classes.logo}
          />
        </Box>
        <Hidden smDown>
          <Box>
            <Paper component="form" className={classes.search}>
              <InputBase
                className={classes.input}
                placeholder="Pesquisar"
                inputProps={{ 'aria-label': 'search google maps' }}
              />
              <IconButton type="submit" aria-label="search">
                <SearchIcon />
              </IconButton>
            </Paper>
          </Box>
          <Box display="flex">
            <IconButton className={classes.icons}>
              <VideoCall />
            </IconButton>
            <IconButton className={classes.icons}>
              <Apps />
            </IconButton>
            <IconButton className={classes.icons}>
              <MoreVert />
            </IconButton>
            <Button
              color="secondary"
              component="a"
              variant="outlined"
              startIcon={<AccountCircle />}
            >
              Fazer Login
            </Button>
          </Box>
        </Hidden>
      </Toolbar>
    </AppBar>
  );
}
