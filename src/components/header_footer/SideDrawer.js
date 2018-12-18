import React from 'react'

import Drawer from '@material-ui/core/Drawer';
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

const SideDrawer = (props) => {
    return (
        <Drawer
            anchor="left"
            open={props.open}
            onClose={() => props.onClose(false) }
        >
           <List component="nav"
           >
            <ListItem button onClick={()=> console.log('dfdf')}>
                Event star in
            </ListItem>

            <ListItem button onClick={()=> console.log('dfdf')}>
                Venue info
            </ListItem>

            <ListItem button onClick={()=> console.log('dfdf')}>
                Hightlight
            </ListItem>

            <ListItem button onClick={() => console.log('dfdf')}>
                    Pricing
            </ListItem>

            <ListItem button onClick={() => console.log('dfdf')}>
                    Location
            </ListItem>

           </List>
        </Drawer>
    )
}

export default SideDrawer