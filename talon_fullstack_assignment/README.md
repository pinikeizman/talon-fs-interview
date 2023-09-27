Talon Fullstack Home Assignment

Prerequisite:

1. Get familiar with the data schema of 'data.json', it contains a list of events as JSON objects.
2. Go over the attached image file.

Main guidelines:

1. Build a Node.js web server that will serve the required data to the client.
2. Build a webpage according to the attached design, using React/Angular/Vue.
3. The page should present the data rows sorted by the "time" field in descending order.
4. The page should have a multiselect dropdown element for filtering on the "eventType" field.
5. The page should have a dropdown element for choosing how many lines would be presented (options: 5, 10, 25).
6. The page should have a pagination option in order to get to the previous and next pages
7. You should assume that after the initial data fetch, new events can be added to the data, this can effect the pagination, think how.
8. The webpage should be pixel perfect like the design.
9. When you're done send us a zip file containing the solution.

The page design:

1. Goto: https://www.figma.com/file/vFCNqMAzpORjgkAXIkJYcH/talon_assignment?node-id=0%3A1.
2. The design is provided in Figma, which is an interface design application that runs in the browser (similar to Zeplin, Avocode, InvVision etc..).
3. You need to log-in or create a user in Figma in order to see all the details.
4. The numbers in the design are just for example and do not reflect the final solution.

Code standards emphasis:

1. Add a README.md with instructions that explain how to run your app.
2. Do not leave unused lines, files and folders.
3. Do not leave debugging code.
4. You can use any external server/client side library that will help you build a better application (e.g Material UI)
5. Make sure your code works on a clean environment.
6. It is recommended to use a linting tool that will validate the code standards.

Bonus points:

1. Put the provided data in a Mongodb/PostgreSQL instance and pull/calculate the data from the DB.
2. Use docker for running the instances in the project.
3. Make the page responsive
