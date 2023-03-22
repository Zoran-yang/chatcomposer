
export function deleteFavoritePrompt(FavoritePrompt, index, isEnglish, setFavoritePrompt, setPromptDetailAndState) {
    if (index > -1) {
        // Send state-changing info back to "DisplayDefaultPrompt"
        let sourceOfPrompt = FavoritePrompt[index]["sourceInfo"]["source"]||""
  
        switch (sourceOfPrompt) {
          case  "DisplayDefaultPrompt" :  //At same time, this function will delete the info saved in corresponding prompt.  
            let {typeIndex, titleIndex} = FavoritePrompt[index]["sourceInfo"]
            setPromptDetailAndState(prevState => {
              const updatedState = prevState.map((type, idx) => {
                if (idx === typeIndex) {
                  return {
                    ...type,
                    [titleIndex]: {
                      ...type[titleIndex],
                      IsFavorite: false,                // it will affect the form of button
                      favoritePromptPos: undefined,     // The position of the prompt in favoritePrompt
                    },
                  };
                }
                return type;
              });    
              localStorage.setItem(isEnglish, JSON.stringify(updatedState));
              return updatedState;
            })
            break
          default :
            break
        }
  
        //delete prompt in FavoritePrompt
        setFavoritePrompt((prevFavoritePrompt) => {
          const updatedFavoritePrompt = prevFavoritePrompt.filter((_, idx) => idx !== index);
          localStorage.setItem(isEnglish + 'Favorite', JSON.stringify(updatedFavoritePrompt));
          return updatedFavoritePrompt;
        });
      }
  }