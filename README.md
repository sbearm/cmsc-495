# cmsc-495

495 Project

## Instructions on getting set-up

- Install Node.js for running angular project [Here](https://nodejs.org/en/)
- Install the angular cli to run the angular project with ``` npm install -g @angular/cli ```
- Install node dependencies with ``` npm install ```
- Install Python and all dependencies in requirements.txt
- **NOTE** be sure to have python and pip added as environment variables when installing, these should be check boxes when installing

## Console Instructions
Angular
```
cd src\front-end\student-app
npm install
ng serve
```
Python
```
cd src\back-end
pip install -r requirements.txt
python .\app.py
```


Running each

- Python Back-End ``` Python .\app.py ```
- Angular Front-End ``` ng serve ```


## Python and Virtual Environments

It may be a good idea to set up a virtual environemnt to run you python application

See this article for more details https://www.liquidweb.com/kb/how-to-setup-a-python-virtual-environment-on-windows-10/


## What it does and how everything links up

### Python

- app.py has a few example endpoints that can be browsed with chrome easily
    - POST "/login", accepts an email and password and returns a jwt token
    - POST "/register" accepts a email, name, and password and inserts a new user to the database
    - GET "/authTest", tests out proper authentication (will be removed in final)

### Angular

- Uses Angular modules to separate out logical places of code
    - Core Module
        - Services, these are collections of functions for similar needs, like a student service for getting student data
        - Models, collections of models to bind to for easier use of data, like a student model with name and id
    - Shared Module,
        - Holds shared stuff for the entire app to have availible to it
        - Header and Footer needs to be in entire app, so its stored here
    - Home / Student / Other page Modules
        - Unlike the others, this holds a collection of pages and other things for the home page
        - Has a component for the home screen with an HTML file, .ts file for code, and CSS file for styling

- Modules are a way of grouping code, whereas components are individual pages or screens. 
- Components can be nested inside one another for reuse if needed.
- Modules also contain a routing file, this is for defining different pages or screens, this also allows for passing of parameters similar to Python, for example a route for looking at an individual student might be "/student/4" where 4 is the database Id for that student.
