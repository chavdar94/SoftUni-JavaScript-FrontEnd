function employeesFunc(employeesInfo) {
    class employees {}

    for (const employee of employeesInfo) {
        employees[employee] = employee.length
        console.log(`Name: ${employee} -- Personal Number: ${employees[employee]}`);
    }

    // for (const key of employeesInfo) {
    //     console.log(`Name: ${key} -- Personal Number: ${employees[key]}`);
    // }

}

employeesFunc([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
])