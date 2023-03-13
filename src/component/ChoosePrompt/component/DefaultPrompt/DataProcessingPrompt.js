

import { ChinesePromptInfo } from "./ChinesePromptInfo";
import { PromptInfo } from "./PromptInfo";

let NewChinesePromptInfo = DataProcess(ChinesePromptInfo)
let NewPromptInfo = DataProcess(PromptInfo)


function DataProcess(data){
    let object = data
    let PromptActivityType = Object.keys(data)
    let PromptActivityTitle = getPromptActivityTitle(data)
    let PromptDetail = getPromptActivityDetail(data)
    return {
        "object" : object,
        "PromptActivityType" : PromptActivityType,
        "PromptActivityTitle" : PromptActivityTitle,
        "PromptDetail" : PromptDetail,
    }
}

function getPromptActivityTitle(data){
    let promptActivityTypeAndDetail = Object.values(data)
    let promptActivityType = promptActivityTypeAndDetail.reduce((arr, curr) =>{
        arr.push( Object.keys(curr))
        return arr
    },[])
    return promptActivityType
}

function getPromptActivityDetail(data) {
    let promptActivityTypeAndDetail = Object.values(data)
    let promptActivityDetail = promptActivityTypeAndDetail.reduce((arr, curr) =>{
        arr.push( Object.values(curr))
        return arr
    },[])
    promptActivityDetail = addIsFavoriteProp(promptActivityDetail)
    return promptActivityDetail
}



function addIsFavoriteProp(data){
    if (!data) return
    let newData = Object.values(data).map((items) => {
        return Object.values(items).map((item)=>{
            let obj = {}
            obj["PromptDetail"] = item
            obj["IsFavorite"] = false
            return obj
        })
    })
    return newData
}



export {NewChinesePromptInfo, NewPromptInfo}