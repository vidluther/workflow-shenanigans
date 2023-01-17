# Workflow Shenanigans

This is a repository where I experiment with Github Actions and Workflows.

Hopefully, I can collect a list of snippets and examples that I can then use in my work projects.

## Caching npm installs

npm install can take forever.. so I want to see if I can cache the results of npm install for future runs and save some build times.

## Build NextJS/CRA apps

I want to be able to build ReactJS, or NextJS, or whatever framework du-jour app


## Deploy Said apps

## Setting values for Environment on run time.

I like to set a variable called REACT_APP_VERSION during the build time

## Shared Workflows

I work a lot with REACT and NodeJS apps, one thing I run into a lot, is building the app, but with different environment variables per environment.

So, I want to be able to one action that builds the app, but is called from different workflows triggered by a merge or push to a specific branch.

Maybe I'm thinking of it in the completely wrong way, so if I am, please hit me up and show me how to think.