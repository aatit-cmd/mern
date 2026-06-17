//! git / github

//* github, gitlab, bitbucket

//* git 
//? distributed vcs
// branching

//! git commands
//? config

//* git config --global --list
//* git config --global user.name "<user_name>"
//* git config --global user.email "<user_email>"
//* git config --global init.defaultbranch "main"
//* git push origin <branch_name>

//! repository / repo
//? local repo
//? remote repo

//! git working flow

//? working directory       ->staging area      ->local repo            ->remote repo
//? changes                   ready state         new version /commit

//! initialize empty local repo
//* git init

//* git status
//* git add <file_path>
//* git add .
//* git commit -m "<commit_message>"


//? remote repo
//* git remote -v -> list remote repo
//* git remote add origin <remote_repo_url>
//* git remote remove origin

//! branch
//* git branch
//* git branch <branch_name> -> create new branch
//* git switch <branch_name> -> switch branch
//* git switch -c <branch_name> -> create and switch branch
//* git merge <branch_name> -> merge branch

//* git stash -> it push the line that has not been commited into cache
// git stash list
// git stash pop -> it pop the temp stored that has not been commited

//* git log
//* git log --oneline