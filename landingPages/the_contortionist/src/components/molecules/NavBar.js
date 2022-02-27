import { useState } from "react";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import NavToggleButton from "../atoms/NavToggleButton";

export default function SwipeableTemporaryDrawer() {
  const [state, setState] = useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const renderList = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {["Home", "Music", "Tour Dates", "Contact"].map((text, index) => (
          // TODO: Add anchor tag or Link component here
          <ListItem button key={text}>
            <ListItemText
              primary={text}
              sx={{
                color: "white",
              }}
            />
          </ListItem>
        ))}
      </List>
      <Divider />
    </Box>
  );

  return (
    <div>
      {["right"].map((anchor) => (
        <Box key={anchor}>
          {/* TOGGLE BUTTON */}
          <NavToggleButton onClick={toggleDrawer(anchor, true)} />
          {/* DRAWER */}
          <SwipeableDrawer
            PaperProps={{
              style: {
                backgroundColor: "black",
              },
            }}
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {renderList(anchor)}
          </SwipeableDrawer>
        </Box>
      ))}
    </div>
  );
}
