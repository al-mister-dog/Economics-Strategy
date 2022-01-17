import { Link } from "react-router-dom";
import {
  List,
  Divider,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles
} from "@material-ui/core";

const useStyles = makeStyles(() => ({
  menuItem: {
    // color: "white",
    // fontWeight: "bold"
  },

}))
export default function MainMenu({departments, getDepartment}) {
  const classes = useStyles()
  return (
    <>
      <List className={classes.menuItem}>
        {["Game", "Mode", "Goes", "Here"].map((text, index) => (
          <ListItem button key={text}>
            <Link key={index} style={{ textDecoration: 'none', color: "black" }} to="/game">
            <ListItemText primary={/*<p style={{fontWeight: bold  margin: "0px"}}>{text}</p>}*/text}/>
            </Link>
            
          </ListItem>
        ))}
      </List>
      <Divider className={classes.menuItem}/>
      <List>
        {departments.map((department, index) => (
          <Link key={index} style={{ textDecoration: 'none', color: "black" }} to={department.path}>
            <ListItem button key={index} onClick={() => getDepartment(department)}>
              <ListItemText primary={/*<p style={{fontWeight: bold  margin: "0px"}}>{text}</p>}*/department.name}/>
            </ListItem>
          </Link>
        ))}
      </List>
    </>
  );
}
