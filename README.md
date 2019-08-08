# E2E-Automation-Cypress

Step by step guide to start E2E automation with Cypress.

The web parabank.parasoft.com, which is a bank demo, is used in this tutorial.

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

### Start writing E2E Automation

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

To run the test write in the terminal:

```
npm run cypress:open
```

![Alt text](picture/CypressTestRunner.png?raw=true "Title")

Double-click the login.spec.js and run the test:

![Alt text](picture/Cypress_cyvisit.png?raw=true "Title")

### Cypress write first test using cy.get()

The next test will be to login with username and password. You can use the target icon beside the url in the picture above to fetch the username textbox attribute.

That´s the result for user name: cy.get(':nth-child(2) > .input')

The test looks like this:

```
it("Login with username and password", () => {
    cy.get(':nth-child(2) > .input').type('pedroR')
    cy.get(':nth-child(4) > .input').type('87654321')
    cy.get(':nth-child(5) > .button').click()
  })
```

![Alt text](picture/Cypress_cyget.png?raw=true "Title")

### Cypress write first test using cy.request()

## Run Cypress with Docker

In the ci folder you wil find the Dockerfile to build the docker image.

```
FROM cypress/included:3.2.0
MAINTAINER David Bartolome
ADD ./ E2E-Automation-Cypress
WORKDIR E2E-Automation-Cypress
RUN npm i
CMD ["npm","run","cypress:run"]

```

Run the commands below in your terminal to build the image.

```
docker build --rm -t cypress:1 -f ci/Dockerfile .
```

If the terminal shows "Successfully tagged cypress:1", then you are ready to run the container with this command:

```
docker run -it cypress:1
```

This is the result after running the container:

```
![Alt text](picture/Cypress_Dockerfile.png?raw=true "Title")

```

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

## Versioning

## Authors

- **David Bartolome** - _Quality Assurance Developer_ -

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments
