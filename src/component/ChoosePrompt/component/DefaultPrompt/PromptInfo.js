
const PromptInfo = {
    "Programming" : {
        "Write a function" : "Your are [programming language] expert, please write a function that can [do something].",
        "Explain Code" : "You are a [programming language] expert, please explain the following code to me. [attach code]",
        "Refactor Code":"You are a Clean Code expert, I have the following code, please refactor it in a more clean and concise way so that my colleagues can maintain the code more easily. Also, explain why you want to refactor the code so that I can add the explanation to the Pull Request. [attach code]",
        "Debug":"You are a [programming language] expert, I have a piece of code and, I expect this code to [do something], but it fails the [test case]. Please help me find out what I did wrong and rewrite it in the correct way. [attach code]",
        "Write test":"You are a [programming language] expert, I have a piece of code [attach code], please write tests for it. Please provide at least [number] test cases, and cover the extreme cases, so that I can be sure that my code is correct. [attach code]",
        "Write Regex":"You are now a Regex Expert, please write a Regex that can [do something]",
        }
    ,"Useful Prompts" : {
        "How to do something" : "How to [do something]?",
        "Summarize a topic":"Summarize [topic] for me.",
        "Summarize an article":"Summarize [article] for me based on the following content: [attach content]",
        "Teach me something":"You are an expert in [topic], teach me something about [topic].",
    }
    ,"Resume" : {
        "Ask for Resume Feedback":"What can I do to make this [position] resume better? Please provide specific suggestions and rewrite the experience with your suggestions. Please keep the format. [Attach the resume]",
        "Add Quantitative Data to Resume":"Add quantitative data to the following resume. [Attach the resume]",
        "Make Resume More Concise" : "Make the following resume more concise without sacrificing the quality. [Attach the resume]",
        "Customize Resume":"I am applying for [position and company], rewrite the following experience, so that I can better fit [company name]'s corporate culture. [Attach the experience]"
    }
    ,"Copywriting" : {
        "Social Media Copywriting":"Create a compelling, eye-catching [social media] post for [purpose]. The post should include [keyword 1], [keyword 2], and [keyword 3]. Also, it should follow these rules: [rule 1], [rule 2], [rule 3], and [rule 4].",
        "Social Media Post Title":"Write [5] social media post titles about [Topic] for [Social Media Platform], following these rules: [rule 1], [rule 2], and [rule 3]",
        "Email Writing-1":"Write me a [formal] email to [recipient] about [purpose].",
        "Email Writing-2":"You are a [position], I will send you an email, you need to reply to this email. Email: [attach content]",
        "Production Description":"Write a [10] sentence product description for the following product keywords. Product keywords: [keyword 1], [keyword 2], [keyword 3], and [keyword 4].",
        "Outlines":"Write an outline for the following article: [attach content]",
        "Write a Blog Post":"Write a [number] word blog post about [topic].",
    }
    ,"Role Playing":{
        "General Role Playing":"You are a [role], I will ask you some questions, you need to answer them professionally. My first question is: [question]",
        "Interviewer":"You are a [role] interviewer, and I am a [role] interviewee. You need to follow these rules: [rule 1], [rule 2], and [rule 3]. My first sentence is: [sentence]",
        "Tour Guide":"You are a tour guide, I will give you the location of my travel, you need to recommend a place near my location. In some cases, I will also tell you the type of the place I want to travel. You will also recommend me a place similar to the type of the first place near my location. My first request is [request].",
    }
    , "Daily Life":{
        "Provide a recipe":"Please list the shopping list and steps of this recipe: [number] person of [a dish].",
        "Event Planning":"Please help me plan a [event] for [number] people.",
        "Brainstorming":"Please help me brainstorm [topic].",
        "Travel Plan":"Generate a travel plan for [number] days in [location], the transportation is [transportation]. You need to follow these rules: [rule 1], [rule 2], and [rule 3].",
    }
    , "Marketing":{
        "SEO Keyword":"Please list the SEO keywords for [topic].",
    }
    , "Writing":{
        "Short Story":"Write a short story about [topic].",
        "Research Report":"Write a research report about [topic].",
    }
    , "Learning New Things":{
        "Learning and self testing":"As a [domain] expert, teach me [a topic in the domain] and give me a quiz on it. I will answer it and you tell me if I am right or wrong.",
        "Explain a topic in depth":"You are now a [position], I need to understand [topic]. Please explain it in depth.",
        "Explain a complex concept in a simple way":"You are now a [position], I need to understand [topic]. Please describe it in a simple way.",
    }
    , "Language Learning":{
        "Learn English Vocabulary":"Please explain [word], and give me [5] examples of using it in a sentence.",
        "Improve Conversational Skills":"Can we have a conversation about [technology]?",
    }
    
}

// "":"",


// , "":{
//     "":"",
//     "":"",
//     "":"",
// }

export {PromptInfo}