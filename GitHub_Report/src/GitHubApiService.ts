import * as request from "request"
import {User} from "./User"
import {Repo} from "./Repo"

const OPTIONS:any = {
    "headers":{
        "User-Agent":"request"
    },
    json: true
};


export class GitHubApiService
{
    getUserInfo(userName:string, cb:(userInfo : User)=> any)
    {
        request.get("https://api.github.com/users/"+userName, 
                    OPTIONS, 
                    (error:any, response:any, body:any) => {
                        let user = new User(body);
                        cb(user);
                    })
    }

    getRepoInfo(userName: string, cb:(repoArray: Repo[]) => any){
        request.get("https://api.github.com/users/"+userName+"/repos", 
                    OPTIONS, 
                    (error: any, response: any, body: any) => {
                        let repoArray = body.map((repoInfo:any) => new Repo(repoInfo));
                        cb(repoArray);
                    });
    }
}