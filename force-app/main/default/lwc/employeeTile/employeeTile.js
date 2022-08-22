import { LightningElement,api} from 'lwc';

export default class EmployeeTile extends LightningElement {

    @api student = {
        Name: '[Muthu Balaji]',
        PhotoUrl: '/services/images/photo/003B0FakePictId',
        };
     @api isSelected = false;
     get tileSelected() {
        return this.isSelected ? "tile selected" : "tile";
        }
}