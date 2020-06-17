export interface PromptOverview {
    promptId:number
    title:string
    submissions:number,
    createdBy:string
    tags:string
    dateAdded:Date
}

export interface User {
    userId:number
    username:string;
    email:string;    
    pictureUrl?:string;
}
