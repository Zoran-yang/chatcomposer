import { Typography } from "@mui/material"


function YourHistory(){
    let promptHistory = JSON.parse(localStorage.getItem('promptHistory')) || []
    if (!promptHistory.length){
        return(
            <Typography>
                No History.
            </Typography>
        )
    }
    return (
        promptHistory.map((prompt) => {
            return(
                <Typography>
                    {prompt}
                </Typography>
            )
        })
    )
}

export {YourHistory}