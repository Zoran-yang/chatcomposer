// import { PromptInfo } from "./PromptInfo"
// import {ChinesePromptInfo} from "./ChinesePromptInfo"
import {NewChinesePromptInfo, NewPromptInfo} from "./DataProcessingPrompt"
import { useState } from "react"
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import { Divider } from "@mui/material";




function TabPanel(props) {
    const { children, value, index, ...other } = props;
    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
            <Box sx={{ p: 3 }}>
                <Box>{children}</Box>
            </Box>
            )}
        </div>
        );
}
  
TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

function switchLanguage(status, english, chinese){
    if (status) return english
    return chinese

}

 
function DisplayDefaultPrompt({isEnglish, copyPromptToNextPhase, IsFavoriteButton, FavoritePrompt}){
    const [value, setValue] = useState(0);
    const language = switchLanguage(isEnglish, NewPromptInfo, NewChinesePromptInfo);
    const {PromptActivityType, PromptActivityTitle, PromptDetail} = language;

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
        return (
            <Box sx={{ width: '100%' }}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs value={value} onChange={handleChange} variant="scrollable" scrollButtons="auto" aria-label="scrollable auto tabs example">
                        {PromptActivityType.map((type, index) =>{return <Tab label={type} key={type} {...a11yProps(index)} />})}
                    </Tabs>
                </Box>                
                {PromptActivityType.map((item, typeIndex)=>{
                    
                    return (
                        <>
                            <TabPanel key={typeIndex} value={value} index={typeIndex}>
                            {PromptActivityTitle[typeIndex].map((title, titleIndex)=>{
                                const promptDetailContent = PromptDetail[typeIndex][titleIndex]["PromptDetail"]
                                return (
                                    <Accordion key={title}>
                                        <AccordionSummary
                                            expandIcon={<ExpandMoreIcon />}
                                            aria-controls="panel1a-content"
                                            id="panel1a-header"
                                            key={title}
                                        >
                                            <Typography sx={{display: "flex",alignItems:"center"}}>{title}</Typography>
                                        </AccordionSummary>
                                        <Divider />
                                        <AccordionDetails >
                                            <div style={{display:"flex"}}>
                                                <Typography>
                                                    {promptDetailContent}
                                                </Typography>
                                                <IsFavoriteButton isFavoriteState={PromptDetail[typeIndex][titleIndex]["IsFavorite"]} PromptInfo={promptDetailContent} PromptInfoindex={FavoritePrompt.indexOf(promptDetailContent)} />
                                                <Button variant="outlined" size="small" onClick={() => copyPromptToNextPhase(promptDetailContent)}>
                                                        Choose and Next
                                                </Button> 
                                            </div>    
                                        </AccordionDetails>
                                    </Accordion>
                                )
                            })}
                            </TabPanel>
                        </>
                    )
                })}
            </Box>
        )
}

export {DisplayDefaultPrompt}
