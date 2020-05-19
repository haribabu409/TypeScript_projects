import {GitHubApiService} from "./GitHubApiService"
import { User } from "./User";
import { Repo } from "./Repo";
import * as _ from "lodash"

console.log(" ** Project bootstrapped **");

let a = new GitHubApiService();
if(process.argv.length<3)
{
    console.log("please enter username as an argument");
}
else{
    let userName = process.argv[2];
    a.getUserInfo(userName, (user : User) => {
        //console.log(user);
        a.getRepoInfo(userName, (repos: Repo[]) => {
            let sortedRepos = _.sortBy(repos, [(repo: Repo) => repo.size*-1]);
            let filteredRepos = _.take(sortedRepos,5);
            user.repos = filteredRepos;
            console.log(user);
        })
    });
}

