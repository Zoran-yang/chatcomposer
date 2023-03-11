import { Button, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import {submitPromptToOpenai} from"./submitPromptToOpenai"
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';




function PreviewAndAdjustPrompt({copiedPrompt, handleNext, handleBack, activeStep, TabName, setPromptToMyFavorite}){
    const [revisedPromt, setRevisedPromt] = useState(copiedPrompt)
    function handleRevisedPromt(e){
        setRevisedPromt(e.target.value)
    }


    function savePromptInBrowser(prompt){
        let promptHistory = JSON.parse(localStorage.getItem('promptHistory')||"[]") ;
        promptHistory.unshift(prompt);
        localStorage.setItem('promptHistory', JSON.stringify(promptHistory));
        
    }
    
    async function submitAndSavePrompt(){
        handleNext()
        await savePromptInBrowser(revisedPromt)
        // setTimeout(()=>submitPromptToOpenai(revisedPromt), 500)        
    }

    return (
        <>
            <Typography sx={{ mt: 2, mb: 1 }}>Step{activeStep + 1}  {TabName} </Typography>
            <Box
                component="form"
                sx={{
                    "margin" :"10px",
                    '& .MuiTextField-root': { m: 1, width: '100%' },
                }}
                noValidate
                autoComplete="off"
            >
                <div>
                    <TextField
                        id="outlined-multiline-static"
                        label="Revise your prompt"
                        multiline
                        rows={10}
                        defaultValue={copiedPrompt}
                        onChange = {handleRevisedPromt}
                    />
                    <div style={{
                            display:"flex",
                            justifyContent:"flex-end",
                            flexWrap: "wrap"
                    }}>
                        <Button>
                            <FavoriteBorderOutlinedIcon onClick={()=> setPromptToMyFavorite(revisedPromt)}/>
                        </Button>                        
                        <Button variant="outlined" size="small" onClick={()=>{
                            submitAndSavePrompt()
                        }}>
                            Sumbit
                        </Button>
                        <Button variant="outlined" size="small" onClick={handleBack}>
                            Back
                        </Button>  
                    </div>
                </div>
            </Box>
        </>
      );
}


export {PreviewAndAdjustPrompt}