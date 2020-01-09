import { NgModule } from '@angular/core';
import { MatButtonModule, MatRadioModule, MatMenuModule, MatGridListModule, MatDividerModule, MatExpansionModule, MatCardModule, MatTabsModule, MatStepperModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatCheckboxModule, MatDatepicker, MatDatepickerModule, MatNativeDateModule, MatTooltipModule, MatSnackBarModule, MatDialogModule, MatTableModule } from '@angular/material'
import { MatListModule, MatSidenavModule, MatToolbarModule, MatProgressBarModule, MatButtonToggleModule, MatIconModule, MatBadgeModule, MatProgressSpinnerModule } from '@angular/material';

const MaterialComponents = [
  MatButtonModule,
  MatButtonToggleModule,
  MatIconModule,
  MatBadgeModule,
  MatProgressSpinnerModule,
  MatProgressBarModule,
  MatToolbarModule,
  MatSidenavModule,
  MatMenuModule,
  MatListModule,
  MatGridListModule,
  MatDividerModule,
  MatExpansionModule,
  MatCardModule,
  MatTabsModule,
  MatStepperModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatCheckboxModule,
  MatRadioModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatTooltipModule,
  MatSnackBarModule,
  MatDialogModule,
  MatTableModule
];
@NgModule({
  imports: [
    MaterialComponents
  ],
  exports: [
    MaterialComponents
  ]
})
export class MaterialModule { }
