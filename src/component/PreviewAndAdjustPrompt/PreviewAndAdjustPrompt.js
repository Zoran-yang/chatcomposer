import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';




function PreviewAndAdjustPrompt({copiedPrompt, setComposerPhaseFunc}){


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
                        rows={4}
                        defaultValue={copiedPrompt}
                    />
                    <div style={{
                            display:"flex",
                            justifyContent:"flex-end",
                            flexWrap: "wrap"
                        }}>
                            <Button id="paste-button" variant="outlined" size="small">
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