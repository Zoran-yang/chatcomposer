
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import {Button} from '@mui/material';
import { useState } from 'react';


export function IsFavoriteButton({ 
  isFavoriteState, 
  PromptInfo, 
  typeIndex, 
  titleIndex, 
  source, 
  favoritePromptPos, 
  setPromptToMyFavorite, 
  deleteFavoritePrompt, 
  FavoritePrompt, 
  isEnglish, 
  setFavoritePrompt, 
  setPromptDetailAndState 
}){
  const [buttonState, setButtonState] = useState(isFavoriteState)
    function handleButtonState() {
      setButtonState(!buttonState)
    }

    function RenderButton({buttonState, PromptInfo, favoritePromptPos}){
      
      if (!buttonState) {  
        return (
          <Button 
            variant="outlined" 
            size="small" 
            onClick={()=> {
              setPromptToMyFavorite(FavoritePrompt, isEnglish, PromptInfo, {"source":source,"typeIndex" : typeIndex, "titleIndex" : titleIndex},setFavoritePrompt, setPromptDetailAndState)
              handleButtonState()
            }}
          >
            <FavoriteBorderOutlinedIcon />                                    
          </Button> 
        )
      }
      return (
        <Button 
          variant="outlined" 
          size="small" 
          onClick={() => {
            deleteFavoritePrompt(FavoritePrompt, favoritePromptPos, isEnglish, setFavoritePrompt, setPromptDetailAndState)
            handleButtonState()
          }}
        >
          <FavoriteOutlinedIcon />                               
        </Button>       
      )
    }

    return (
        <RenderButton buttonState = {buttonState} PromptInfo={PromptInfo} favoritePromptPos = {favoritePromptPos}/> 
    )
  }
