import { Box, Button, Divider, List, ListItem, ListItemText, Typography } from "@mui/material"
import { Fragment, useState } from "react";
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';



const localPromptHistory = JSON.parse(localStorage.getItem('promptHistory')||"[]");

function YourHistory({copyPromptToNextPhase, setPromptToMyFavorite}){

    const [promptHistory, setPromptHistory] = useState(localPromptHistory)
    function handlePromptHistory(){
        localStorage.removeItem('promptHistory');
        setPromptHistory([])
    }
    
    if (!promptHistory.length){
        return(
            <Typography>
                No History.
            </Typography>
        )
    }
    return (
        <Box >
            <List sx={{maxHeight: 300, overflow:'auto'}}>
                {promptHistory.map((prompt) => {
                    return(
                        <Fragment key={prompt}>
                            <ListItem component="div" sx={{display:"block"}}>
                                <div style={{display:"flex"}}>
                                    <ListItemText primary={prompt} />
                                    <Button>
                                        <FavoriteBorderOutlinedIcon onClick={()=> setPromptToMyFavorite(prompt)}/>
                                    </Button>
                                </div>                                

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
                <Button variant="outlined" size="small" onClick={handlePromptHistory}>
                    Clear history
                </Button>  
            </div>
        </Box>
    )
}

export {YourHistory}