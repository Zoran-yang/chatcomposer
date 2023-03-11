import { Box, Button, Divider, List, ListItem, ListItemText, Typography } from "@mui/material";
import { Fragment, useState } from "react";




function YourFavorite({copyPromptToNextPhase, FavoritePrompt}){
    
    // function handleFavoritePrompt(){
    //     localStorage.removeItem('My Favorite prompt');
    //     setFavoritePrompt([])
    // }
    
    if (!FavoritePrompt.length){
        return(
            <Typography>
                Add your favorite prompt.
            </Typography>
        )
    }
    return (
        <Box >
            <List sx={{maxHeight: 300, overflow:'auto'}}>
                {FavoritePrompt.map((prompt) => {
                    return(
                        <Fragment key={prompt}>
                            <ListItem component="div" sx={{display:"block"}}>
                                <ListItemText primary={prompt} />
                                <>
                                    <Button variant="outlined" size="small" onClick={() => copyPromptToNextPhase(prompt)}>
                                        Choose and Next
                                    </Button>                       
                                </>
                            </ListItem>                            
                            <Divider />                 
                        </Fragment>
                    )
                })}
            </List>
            <div style={{
                    display:"flex",
                    justifyContent:"flex-end",
                    flexWrap: "wrap"
            }}>
            </div>
        </Box>
    )
}


export {YourFavorite}