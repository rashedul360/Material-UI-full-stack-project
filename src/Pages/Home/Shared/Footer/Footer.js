import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import StarIcon from "@mui/icons-material/Star";
import { Typography } from "@mui/material";
import footerbg from "../../../../images/footer-bg.png";
const footerStyle = {
  backgroundImage: `url(${footerbg})`,
  backgroundPosition: "cover",
  backgroundRepeat: "no-repeat",
};
const Footer = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Box style={footerStyle}>
        <Grid container spacing={2} sx={{ mt: 15 }}>
          <Grid item xs={3}>
            <List
              sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
              aria-label="contacts"
            >
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemText inset primary="Eric Hoffman" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemText inset primary="Eric Hoffman" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemText inset primary="Eric Hoffman" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemText inset primary="Eric Hoffman" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemText inset primary="Eric Hoffman" />
                </ListItemButton>
              </ListItem>
            </List>
          </Grid>
          <Grid item xs={3}>
            <Typography variant="h5">Services</Typography>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText inset primary="Eric Hoffman" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText inset primary="Eric Hoffman" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText inset primary="Eric Hoffman" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText inset primary="Eric Hoffman" />
              </ListItemButton>
            </ListItem>
          </Grid>
          <Grid item xs={3}>
            <Typography variant="h5">Oral Health</Typography>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText inset primary="Eric Hoffman" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText inset primary="Eric Hoffman" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText inset primary="Eric Hoffman" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText inset primary="Eric Hoffman" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText inset primary="Eric Hoffman" />
              </ListItemButton>
            </ListItem>
          </Grid>
          <Grid item xs={3}>
            <Typography variant="h5">Our Address</Typography>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText inset primary="Eric Hoffman" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText inset primary="Eric Hoffman" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText inset primary="Eric Hoffman" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText inset primary="Eric Hoffman" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText inset primary="Eric Hoffman" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText inset primary="Eric Hoffman" />
              </ListItemButton>
            </ListItem>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Footer;
