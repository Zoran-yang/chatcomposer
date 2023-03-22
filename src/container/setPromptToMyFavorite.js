

export function setPromptToMyFavorite(FavoritePrompt, isEnglish, prompt, sourceInfo, setFavoritePrompt, setPromptDetailAndState) {
    const {typeIndex, titleIndex, source} = sourceInfo
    const newObj = {
      prompt,
      sourceInfo,
    };
    setFavoritePrompt((prevFavorites) => {
      const updatedFavorites = [...prevFavorites, newObj];
      localStorage.setItem(isEnglish + 'Favorite', JSON.stringify(updatedFavorites));
      return updatedFavorites;
    })
    

    if (source === "DisplayDefaultPrompt"){
      setPromptDetailAndState((prevState) => {
        const updatedState = prevState.map((type, idx) => {
          if (idx === typeIndex) {
            return {
              ...type,
              [titleIndex]: {
                ...type[titleIndex],
                favoritePromptPos: FavoritePrompt.length, 
                //We need the "FavoritePrompt.length-1" as our index of array.However, FavoritePrompt is state which will change after render. 
                IsFavorite: true,
              },
            };
          }
          return type;
        });
        localStorage.setItem(isEnglish, JSON.stringify(updatedState));
        return updatedState;
      });
    }
}