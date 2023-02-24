# Workflow Shenanigans

This is a repository where I experiment with Github Actions and Workflows.

Hopefully, I can collect a list of snippets and examples that I can then use in my work projects.

## Caching npm installs

[x] npm install can take forever.. so I want to see if I can cache the results of npm install for future runs and save some build times.

## Create and handle artifacts

Sometimes, after running some actions like ```npm run build``` we need to take the output folder, and send it somewhere else.


## Build NextJS/CRA apps
## Setting values for Environment on run time.

When I'm working with frontend apps, I like to set a variable called REACT_APP_VERSION during the build time, which is then displayed on the footer of the app. Usually the value of this variable is calculated at build time, where we take the branch that we're building, and the current date and time.

The workflow here assumes you're using NextJS so sets the variable called NEXT_PUBLIC_APP_VERSION , and then builds the app.


## Deploy Said apps


## Shared Workflows

I work a lot with REACT and NodeJS apps, one thing I run into a lot, is building the app, but with different environment variables per environment.

So, I want to be able to one action that builds the app, but is called from different workflows triggered by a merge or push to a specific branch.

Maybe I'm thinking of it in the completely wrong way, so if I am, please hit me up and show me how to think.