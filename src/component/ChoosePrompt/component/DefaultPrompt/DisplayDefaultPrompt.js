import { PromptInfo } from "./PromptInfo"
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


function DisplayDefaultPrompt(){
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
      
      console.log(newValue)
      setValue(newValue);
    };

    
    function DisplayPromptDetail(){
        return Object.values(PromptInfo).reduce((arr,curr,index) =>{

            let x = Object.entries(curr).map((type) => {
                return(
                <Accordion key={type[0]}>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    key={type[0]}
                    >
                        <Typography sx={{display: "flex",alignItems:"center"}}>{type[0]}</Typography>
                    </AccordionSummary>
                    <AccordionDetails >
                        <Typography>
                            {type[1]}
                        </Typography>
                        <Button variant="outlined" size="small">
                                COPY
                            </Button>
                    </AccordionDetails>
                </Accordion>
                )
                
            })
            
            arr.push(
                <TabPanel key={value} value={value} index={index}>
                {x}
                </TabPanel>
            )
            return arr      
        },[])
    }

    return (
        <Box sx={{ width: '100%' }}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                {Object.keys(PromptInfo).map((type, index) =>{return <Tab label={type} key={type} {...a11yProps(index)} />})}
            </Tabs>
          </Box>
            <DisplayPromptDetail></DisplayPromptDetail>
        </Box>
      );
}

export {DisplayDefaultPrompt}
