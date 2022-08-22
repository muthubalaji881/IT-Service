import { LightningElement } from 'lwc';

export default class EmployeeBrowser extends LightningElement {

    employeeList = [];
    constructor() {
        super();
        const employeeNames = ['Rad', 'Stuart', 'Andres', 'Rahul',
        'Amit', 'Simon'];
        this.employeeList = employeeNames.map( (employee, index) =>  {
        return {
        'sobjectType': 'Employee__c',
        'Name': employee,
        'PhotoUrl': '/services/images/photo/003B0FakePictId',
        'Id': index
        };
        });
        }
}