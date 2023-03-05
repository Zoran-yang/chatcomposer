
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';



function DisplayDefaultPromptDetail({choosedPromptType}){
    return(
        <div className="promptType">
            {Object.entries(choosedPromptType).map((type) =>{
                return(
                    <Accordion>
                        <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        >
                            <Typography sx={{display: "flex",alignItems:"center"}}>{type[0]}</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                {type[1]}
                            </Typography>
                            <Button variant="outlined" size="small">
                                    COPY
                                </Button>
                        </AccordionDetails>
                    </Accordion>
                )
            }
            )}
        </div>
    )
}

export {DisplayDefaultPromptDetail}