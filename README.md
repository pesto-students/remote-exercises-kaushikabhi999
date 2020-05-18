# Instructions


Please read through the instructions carefully.

## Requirements
- Please ensure that you have these or later version of `node` and `npm`.
    - `node` >= `12.11.0`
    - `npm` >= `6.11.3`
- If you are using Unix-based system
    - use latest version of `bash` or `zsh` terminals.
- If you are windows
    - use [`Git bash`](https://gitforwindows.org/). 
    - **The VSCode internal terminal may not work properly. So use Git Bash where ever possible.**
- It is recommended that you use `nvm` to manage node versions.
- We recommend that you use [VSCode](https://code.visualstudio.com/) with these extensions installed/enabled.
    - [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

## Steps

1. Clone **your** version of the repo on your local system
2. `cd` into the folder where the repo was cloned and run `npm install`.
3. Then, `cd` into `js-exercises` and run `npm install` for this sub-folder.
4. For each new day, follow the following steps --
    1. Create a new branch.
        - For example, if the topic is **Expressing Programs**, the branch can be `solutions-expressing-programs`
    2. Use the commands mentioned below download the questions
    3. **Read the README file for instructions.**
    4. Solve the question
    5. Commit the files
    6. Push the branch to **your** repo
    7. Create a pull request on your repo from the above branch to master.
        - **DO NOT MERGE THE PR**


## Adding `.env` file
If you are getting the warning of _Too Many Requests_ from GitHub, then
you can add an `.env` file in the root directory with your GITHUB api key.
You can refer to this [link](https://help.github.com/en/github/authenticating-to-github/creating-a-personal-access-token-for-the-command-line) to generate your own token. 

Here's an example of an `.env` file:
```
GITHUB_API_KEY=here_goes_your_api_key
```
_(Make sure to not commit your `.env`);_

**You do NOT need to check any checkbox in "Select Scopes" section.** The token is just used to extend the rate limit for downloading files from Github.

## Docs

### Fetching a question (npx pesto download -e <question-name>)
This command lets you fetch a question. Here is an example usage. If you want to fetch a question, you can use `npx pesto download -e <question-name>` and type your question. Here's an example fetching questions `cache-function` and `flip-args`

```shell
$ npx pesto download -e cache-function

Fetching files of cache-function
Downloaded file README.md at js-exercises/cache-function
Downloaded file cacheFunction.js at js-exercises/cache-function
Downloaded file cacheFunction.test.js at js-exercises/cache-function
Completed. Fetched README.md,cacheFunction.js,cacheFunction.test.js of cache-function

$ npx pesto download -e flip-args

Fetching files of flip-args
Downloaded file README.md at js-exercises/flip-args
Downloaded file flipArgs.js at js-exercises/flip-args
Downloaded file flipArgs.test.js at js-exercises/flip-args
Completed. Fetched README.md,flipArgs.js,flipArgs.test.js of flip-args
```

An **alias** of the above command is also available. You can fetch a file like this as well --
```shell
$ npm run download <question-name>
```

## Restrictions
- Don't modify `.babelrc`, `.eslintrc`, `jest.config.json`.
    - If you need to disable any eslint rule, use inline comments. Refer to this [link](https://eslint.org/docs/2.13.1/user-guide/configuring#disabling-rules-with-inline-comments) for more info.
- Don't download any extra dependency for solving any question. You can only use internal node modules.
- A solution will not be considered complete until an implementation and a test file are both provided.
    - For example — if the question is to code `add` function, then `add.js` should contain the implementation and `add.test.js` should contain the test cases.
    - For some questions, test cases are provided. **For questions where test cases are missing, you need to add them.**
    - Write tests for all the questions using [Jest](https://jestjs.io/)
- For daily exercises the pull request should be created before 8 PM (IST) the next day.
- For long exercises the pull request should be created before 8 PM (IST) on Monday.
- Your homework will not be counted as complete if the pull request is not created within the above time frame.

## Note

- **One** question per Pull Request
- Each Pull Request should have code only related to that question
- If you have changes related to `babel` etc. please create a separate PR for that and merge it
