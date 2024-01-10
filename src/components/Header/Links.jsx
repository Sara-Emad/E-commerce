import { Box, Paper, Typography } from '@mui/material';
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

const Links = () => {
  return (
    <Box sx={{display:"flex" , alignItems:"center" , position:"relative"}}>
        <Typography variant="body1">
                Home 
        </Typography>
      
        <ExpandMoreIcon  sx={{fontSize:"16px" , ml:1}}/>

      <Paper sx={{position:"absolute" , left:"50%" ,top:55, minWidth:"170px" ,transform:"traslateX(-50%)"}}>
          <nav aria-label="secondary mailbox folders">
          <List>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText primary="Trash" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton component="a" href="#simple-list">
                <ListItemText primary="Spam" />
              </ListItemButton>
            </ListItem>
          </List>
        </nav>
      </Paper>


    </Box>
  );
}

export default Links;
