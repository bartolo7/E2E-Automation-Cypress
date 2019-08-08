# E2E-Automation-Cypress

Step by step guide to start E2E automation with Cypress.

I use the web side parabank.parasoft.com, which it is bank demo web for automation.

## Getting Started

Create a project and run the next commands:

```
1. npm init
2. npm install cypress --save-dev
3. ./node_modules/.bin/cypress open

```

In the step 1, you will create the package.json file and the step 2 adds cypress as development dependency to package.json. In the step 3, the cypress will open and you will see the Cypress Test Runner and a new folder in the repo so-called cypress.

Add these two scripts to package.json:

```
"scripts": {
    "cypress:open": "cypress open",
    "cypress:run": "cypress run"
  }
```
Cypress:open will run the Test Run while cypress:run runs in the terminal. 

## Configure Cypress to have access to all Cypress libraries 

Add a file tsconfig.json in the root of the directory and copy the next config:

```
{
  "compilerOptions": {
    "allowJs": true,
    "baseUrl": "../node_modules",
    "types": ["cypress"]
  },
  "include": ["**/*.*"]
}
```
For instance, now if you type "cy.", you will have access to all the methods from the Cypress framework while writing you test. It is really handy!

### Cypress write first test using cy.visit()

Add the baseUrl value to the cypress.json configuration file. 

```
{
    "baseUrl": "https://parabank.parasoft.com"
}
```

Cypress folder will have the next folders:
```
fixtures
integration
plugins
support 

```

Create a new folder called Login within integration and add a new test script so-called login.spec.js

Write the first two test to see the website Parabank. 

```
describe("Login Parabank", () => {
  it("Visit the website", () => {
    cy.visit("https://parabank.parasoft.com/parabank/index.htm");
  });

  it("Visit the website using baseUrl", () => {
    cy.visit("/");
  });
});

```
In the first test the url is passed as string while in the second the url is fetch fron the value baseUrl in the cypress.json

To run the test write in the terminal: npm run cypress:open 

![Alt text](picture/Cypress Test Runner.png
?raw=true "Title")

### Installing

A step by step series of examples that tell you how to get a development env running

Say what the step will be

```
Give the example
```

And repeat

```
until finished
```

End with an example of getting some data out of the system or using it for a little demo

## Running the tests

Explain how to run the automated tests for this system

### Break down into end to end tests

Explain what these tests test and why

```
Give an example
```

### And coding style tests

Explain what these tests test and why

```
Give an example
```

## Deployment

Add additional notes about how to deploy this on a live system

## Built With

- [Dropwizard](http://www.dropwizard.io/1.0.2/docs/) - The web framework used
- [Maven](https://maven.apache.org/) - Dependency Management
- [ROME](https://rometools.github.io/rome/) - Used to generate RSS Feeds

## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags).

## Authors

- **Billie Thompson** - _Initial work_ - [PurpleBooth](https://github.com/PurpleBooth)

See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

- Hat tip to anyone whose code was used
- Inspiration
- etc
