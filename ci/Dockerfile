FROM cypress/included:3.2.0
MAINTAINER David Bartolome 
ADD ./ E2E-Automation-Cypress
WORKDIR E2E-Automation-Cypress
RUN npm i
CMD ["npm","run","cypress:run"]