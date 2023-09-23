////////////////////////////////////////////////////
///////////////////EMPLOYEES.JS/////////////////////
////////////////////////////////////////////////////
/*
    In this file, you'll be writing classes to 
    store information about restaurant employees.
*/

//////////////////PROBLEM 1////////////////////
/*  
    Create a new class called `Employee`.
    Make sure to call your constructor, and 
    require these 2 parameters: name, shifts.

    Create a method on the class called 
    `getSchedule` that prints a string:
    [NAME] works on [SHIFTS]
    Where NAME and SHIFTS reference the values
    stored on the object.
*/

//CODE HERE

class Employee {
  constructor(name, shifts) {
    this.name = name;
    this.shifts = shifts;
  }

  getSchedule() {
    console.log(`${this.name} works on ${this.shifts}`);
  }
}

/*
    Create a new instance of your class.
    Save it to a variable called `empOne`.

    You can use this sample data or make
    up your own:
    name: Jess
    shifts: weekday mornings, weekday afternoons
*/

//CODE HERE

/*
    I'm veering from the directions a bit, creating a way to invoke functions that will add employees.
*/

// Modifyable array to store the employee objects
let employeeList = [];

// Function to add new employees
const newEmployee = (name, shifts) => {
  const employee = new Employee(name, shifts);
  employeeList.push(employee);

  console.log(`new employee, ${name} created,`, employeeList);
};

newEmployee(`Jasmine`, `mornings`);

/*
    Call the `getSchedule` method on the
    `empOne` object.
*/

//CODE HERE

const getSchedule = (thisName) => {
  const thisEmployee = employeeList.filter(
    (employee) => employee.name === thisName
  );
  thisEmployee[0].getSchedule();
};

getSchedule(`Jasmine`);

/*
    Make a copy of the empOne object
    using the spread operator.
    Save it to a variable called `empTwo`.

    Change the name of `empTwo` to 'Nick'.

    Hint: you can do this inline with the 
    spread operator or reassign it using 
    dot or bracket notation.
*/

//CODE HERE

const duplicateEmployee = (originalName, newName) => {
  const originalEmployee = employeeList.filter(
    (employee) => employee.name === originalName
  );
  const newEmployee = { ...originalEmployee[0], name: newName };
  employeeList.push(newEmployee);

  console.log(
    `employee ${originalName} duplicated to ${newName}`,
    employeeList
  );
};

duplicateEmployee(`Jasmine`, `Nick`);
newEmployee(`Dan`, `evenings`);

//////////////////PROBLEM 2////////////////////
/*  
    Write a class called Manager that *extends* 
    the Employee class. In the constructor, 
    make sure you require all of the parameters 
    from the Employee class as well as 1 
    new one: employees, which will be an array of 
    employees that report to this manager. 
    (Hint: don't forget to call the super function)

    Create a method called `getEmployees` that
    console.logs a string:
    [NAME] manages [EMPLOYEES]
    Where NAME and EMPLOYEES reference the values
    stored on the object.

    Create a second method called `addEmployee`
    that takes in one argument, `emp`, which
    should be a string of an employee name.
    The function should push the name into 
    the employees array. 
*/

//CODE HERE

class Manager extends Employee {
  constructor(name, shifts) {
    super(name, shifts);

    const getEmployees = () => {
      const employeeNames = [];
      employeeList.forEach(employee => {employeeNames.push(employee.name)});
      }
      console.log(employeeNames)
    };

    // oh look, I already did this up above - simple copy and paste I think
    const addEmployees = () => {};
  }
}

/*
    Create a new instance of your class.
    Save it to a variable called `manager`.

    You can use this sample data or make
    up your own:
    name: Winston
    shifts: weekday mornings, weekday afternoons
    employees: Cece and Schmidt
*/

//CODE HERE

/*
    Call the `getEmployees` method on the
    `manager` object.  
*/

//CODE HERE

/*
    Call the `addEmployee` method on the 
    `manager` object passing in the string 
    'Coach' or whatever name you'd like.
*/

//CODE HERE

/*
    Call the `getEmployees` method on the
    `manager` object again to confirm 
    that an employee was added.
*/

//CODE HERE
