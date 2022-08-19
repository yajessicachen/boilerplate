# boilerplate

## Setup

To use this as boilerplate, you'll need to take the following steps:

- Don't fork or clone this repo! Instead, create a new, empty
  directory on your machine and `git init` (or create an empty repo on
  Github and clone it to your local machine)

- Now you will have to add the boilerplate as a remote and merge it into your own repository.

```
git remote add boilerplate git@github.com:yajessicachen/boilerplate.git
git fetch boilerplate
git merge boilerplate/main
git branch -m main
```

## Customize

Now that you've got the code, follow these steps to get acclimated:

- Update project name and description in `package.json`
- `npm install`
- Create postgres database (`project-name` should match the `name`
  parameter in `package.json`):
- These commands will create both your **development** and **test** databases

```
createdb <YOUR APP NAME HERE FROM package.json>
createdb <YOUR APP NAME HERE FROM package.json>-test
```

- By default, running `npm test` will use your test database, while
  regular development uses development database

## Start

Sync and seed your database by running `npm run seed`. Running `npm run start:dev` will make great things happen!

- start:dev will both start your server and build your client side files using webpack
- start:dev:logger is the same as start:dev, but you will see your SQL queries (can be helpful for debugging)
- start:dev:seed will start your server and also seed your database (this is useful when you are making schema changes and you don't want to run your seed script separately)

```
Running on localhost:8080
```
