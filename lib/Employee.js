class Employee {
    constructor(id, name, email) {
      this.id = id;
      this.name = name;
      this.email = email;
    }

    getName() {
        return this.name;
    }

    getId() {
        return this.id;
    }

    getEmail() {
        return this.email;
    }

    getRole() {
        // Return "Employee"
        const employee = "Employee";
        return employee;
    }

  }

  module.exports = Employee;