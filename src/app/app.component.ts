import { Component } from '@angular/core';
import { MatSnackBar, MatSnackBarRef, MatDialog} from '@angular/material'
import { DialogExampleComponent } from './dialog-example/dialog-example.component';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

// const ELEMENT_DATA: PeriodicElement[] = [
//   {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
//   {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
//   {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
//   {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
//   {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
//   {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
//   {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
//   {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
//   {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
//   {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
// ];
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'material-demo';
  public notification = 0;
  public showSpinner = false;


  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  //dataSource = ELEMENT_DATA;
  
  addNotification(){
    this.notification += 1;
  }

  checkZero(){
    if(this.notification == 0){
      return true;
    }else{
      return false;
    }
  }

  loadData(){
    this.showSpinner = true;
    setTimeout(() =>{
      this.showSpinner = false;
    },5000)
  }

  public opened = false;


  minDate = new Date();
  maxDate = new Date(2020,2,5);

  dateFilter = date =>{
    const day = date.getDay();
    return day != 0 && day != 6;
  }

  constructor(/*private snackBar : MatSnackBar*/public dialog : MatDialog ){}
  // openSnackBar (message,action){
  //   let snackBarRef = this.snackBar.open(message,action,{duration : 2000});

  //   snackBarRef.afterDismissed().subscribe(() =>{
  //     console.log('snackbar dismissed');
      
  //   });
  //   snackBarRef.onAction().subscribe(() =>{
  //     console.log('snackbar action');
      
  //   });
  // }

  openDialog(){
    this.dialog.open(DialogExampleComponent);
  }

  
}
