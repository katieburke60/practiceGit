//add a remote repository
//name of the remote is typically origin
git remote add [name-of-remote] [address-of-repository]
git remote add origin git@github.com:krb3p/practiceGit.git

//push files from computer to remote repository
git push -u origin master
git push [remote-name] [branch-name-to-push-to-remote]

//push up to github to a new branch
//so that it doesn't immediately get merged into master.
git push origin add-event-listener
git push [remote-name] [branch-name-to-push-to-remote that is not master]

//create a pull request
//A pull request is a formal way of merging code from one branch to another so that someone can come in and review the code before it is merged. Often chance for 'code review'.

//pull down changes from github to local repository
git pull [remote-name] [branch-of-remote-to-pull-down]
