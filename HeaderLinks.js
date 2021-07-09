/*eslint-disable*/
import React,{useState,useEffect} from "react";
// import DeleteIcon from "@material-ui/icons/Delete";
// import IconButton from "@material-ui/core/IconButton";
// react components for routing our app without refresh
import { Link } from "react-router-dom";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";
import NotificationsIcon from '@material-ui/icons/Notifications';
import Badge from '@material-ui/core/Badge';

// @material-ui/icons
// import { Apps, CloudDownload } from "@material-ui/icons";

// core components
// import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-react/components/headerLinksStyle.js";
import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";
import userImg from "assets/img/User.png";
import { useSelector } from "react-redux";
import classNames from "classnames";

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const [notificationCount, setnotificationCount] = useState(17);
  const classes = useStyles();
  const userInfo = useSelector((state) => state.authentication.user);
  const checknotificationcount = () =>{
      if(notificationCount > 0){
        return (<>
          <Badge color="secondary" badgeContent={notificationCount}>
            <NotificationsIcon/>
          </Badge>
        </>);
      }else{
          return (<>
            <NotificationsIcon/>
          </>);
      }
  }

  // useEffect(() => {
  //   console.log('Hello World');
  //   const url = `http://www.randomnumberapi.com/api/v1.0/random?min=0&max=10&count=1`;
  //   fetch(url)  
  //       .then(res=>res.json())
  //       .then(
  //           (res)=>{
  //              console.log(res[0]);
  //           }
  //       )
  // })

  const checkUserStatus = () => {
    if (userInfo) {
      return (
        <CustomDropdown
          left
          caret={false}
          hoverColor="primary"
          buttonText={
            userInfo?.imageUrl ? (
              <img src={userInfo.imageUrl} alt="..." className={classes.img} />
            ) : (
              <img src={userImg} alt="..." className={classes.img} />
            )
          }
          buttonProps={{
            className: classes.navLink + " " + classes.imageDropdownButton,
            color: "transparent",
          }}
          dropdownList={[
            <Link to="/dashboard" className={classes.dropdownLink}>
              Dashboard
            </Link>,
            <Link to="/profile" className={classes.dropdownLink}>
              Profile
            </Link>,
            <Link to="/login" className={classes.dropdownLink}>
              Sign Out
            </Link>,
          ]}
        />
      );
    } else {
      return (
        <Tooltip
          id="login-tooltip"
          title="Login"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Link to={"/login"} className={classes.link}>
            <Button className={classes.registerNavLink} color="primary" round>
              Login
            </Button>
          </Link>
        </Tooltip>
      );
    }
  };

  return (
    <List className={classes.list}>
      {/* <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          buttonText="Components"
          buttonProps={{
            className: classes.navLink,
            color: "transparent"
          }}
          buttonIcon={Apps}
          dropdownList={[
            <Link to="/" className={classes.dropdownLink}>
              All components
            </Link>,
            <a
              href="https://creativetimofficial.github.io/material-kit-react/#/documentation?ref=mkr-navbar"
              target="_blank"
              className={classes.dropdownLink}
            >
              Documentation
            </a>
          ]}
        />
      </ListItem> */}
      <ListItem className={classes.listItem}>
        <Tooltip
          id="startup"
          title="StartUp Program"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Link to="/startup" className={classes.navLink}>
            StartUp
          </Link>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
        {/*<Tooltip title="Delete">
          <IconButton aria-label="Delete">
            <DeleteIcon />
          </IconButton>
        </Tooltip>*/}
        {/* <Tooltip
          id="instagram-twitter"
          title="Follow us on twitter"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            href="https://twitter.com/CreativeTim?ref=creativetim"
            target="_blank"
            color="transparent"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-twitter"} />
          </Button>
        </Tooltip> */}
        <Tooltip
          id="trainer"
          title="Expert Program: School of Excellence"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Link to="/expert" className={classes.navLink}>
            Experts
          </Link>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="job"
          title="Job Seeker Program"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Link to="/jobseeker" className={classes.navLink}>
            Job Seeker
          </Link>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="investor"
          title="Investor Program"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Link to="/investor" className={classes.navLink}>
            Investor
          </Link>
        </Tooltip>
      </ListItem>
      {
        userInfo && <ListItem className={classes.listItem}>
          <Tooltip
            id="investor"
            title="Notification"
            placement={window.innerWidth > 959 ? "top" : "left"}
            classes={{ tooltip: classes.tooltip }}
          >
            <Link to="#" className={classes.notificationNavLink}>
              {checknotificationcount()}
            </Link>
          </Tooltip>
        </ListItem>
      }
      <ListItem className={classes.listItem}>{checkUserStatus()}</ListItem>
    </List>
  );
}
