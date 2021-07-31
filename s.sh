 
#! /bin/sh

git pull https://github.com/honeybharatandani/Reactjs/tree/master/Todo-list
git status 
git add .
git status 
git remote add origin https://github.com/honeybharatandani/Reactjs/tree/master/Todo-list
git commit -m "updates"
git push -u origin master 
