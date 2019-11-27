import React, { Component, useContext } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import Switch from "@material-ui/core/Switch";
import { withStyles } from "@material-ui/core/styles";
import { fade } from "@material-ui/core/styles/colorManipulator";
import { LanguageContext } from "./Contexts/LanguageContext";

//context
import { ThemeContext } from "./Contexts/ThemeContext";

const styles = theme => ({
  root: {
    width: "100%",
    marginBottom: 0
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block"
    }
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing.unit,
      width: "auto"
    }
  },
  searchIcon: {
    width: theme.spacing.unit * 9,
    height: "100%",
    position: "absolute",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  inputRoot: {
    color: "inherit",
    width: "100%"
  },
  inputInput: {
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 10,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: 120,
      "&:focus": {
        width: 200
      }
    }
  }
});

const content = {
  english: {
    search: "Search",
    flag: "🇬🇧"
  },
  french: {
    search: "Chercher",
    flag: "🇫🇷"
  },
  spanish: {
    search: "Buscar",
    flag: "🇪🇸"
  }
};

function Navbar({ classes }) {
  const { isDark, toggleTheme } = useContext(ThemeContext);
  const { language } = useContext(LanguageContext);
  const { search, flag } = content[language];
  return (
    <div className={classes.root}>
      <AppBar position="static" color={isDark ? "default" : "primary"}>
        <Toolbar>
          <IconButton className={classes.menuButton} color="inherit">
            <span>{flag}</span>
          </IconButton>
          <Typography className={classes.title} variant="h6" color="inherit">
            App Title
          </Typography>
          <Switch onChange={toggleTheme} />
          <div className={classes.grow} />
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder={`${search}...`}
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput
              }}
            />
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default withStyles(styles)(Navbar);
