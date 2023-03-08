import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import {submitPromptToOpenai} from"./submitPromptToOpenai"




function PreviewAndAdjustPrompt({copiedPrompt, setComposerPhaseFunc}){
    const [revisedPromt, setRevisedPromt] = useState(copiedPrompt)
    function handleRevisedPromt(e){
        setRevisedPromt(e.target.value)
    }


    return (
        <>
            <Box
                component="form"
                sx={{
                    "margin" :"10px",
                    '& .MuiTextField-root': { m: 1, width: '100%' },
                }}
                noValidate
                autoComplete="off"
            >
                <div style={{width: '50%'}}>
                    <TextField
                        id="outlined-multiline-static"
                        label="Adjust your prompt"
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
                            <Button variant="outlined" size="small" onClick={()=>submitPromptToOpenai(revisedPromt)}>
                                Sumbit
                            </Button>
                            <Button variant="outlined" size="small" onClick={()=>setComposerPhaseFunc("ChoosePrompt")}>
                                Cancel
                            </Button>  
                    </div>
                </div>
            </Box>
        </>
      );
}


export {PreviewAndAdjustPrompt}