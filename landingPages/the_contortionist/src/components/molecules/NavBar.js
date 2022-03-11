import { useState } from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import AppBar from "@mui/material/AppBar";
import ClearIcon from "@mui/icons-material/Clear";
import IconButton from "@mui/material/IconButton";

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
        <ListItem
          button
          key="closeIcon"
          sx={{ display: "flex", justifyContent: "flex-end" }}
        >
          <ClearIcon sx={{ color: "white" }} />
        </ListItem>
        {["Home", "Music", "Tour Dates", "Contact"].map((text, index) => (
          // TODO: Add anchor tag or Link component here
          <ListItem button key={text}>
            <ListItemText
              primary={text}
              sx={{
                color: "primary.main",
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
      <AppBar
        sx={{
          position: "fixed",
          backgroundColor: "transparent",
          boxShadow: "none",
        }}
      >
        {["right"].map((anchor) => (
          <Box key={anchor} sx={{ position: "absolute", right: 0 }}>
            <NavToggleButton onClick={toggleDrawer(anchor, true)} />
            <SwipeableDrawer
              PaperProps={{
                style: {
                  backgroundColor: "#1B1B1B",
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
      </AppBar>
    </div>
  );
}

/* 

{["right"].map((anchor) => (
  <Box key={anchor}>
    <NavToggleButton onClick={toggleDrawer(anchor, true)} />
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
*/
