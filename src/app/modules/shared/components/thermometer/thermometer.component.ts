import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-thermometer',
  templateUrl: './thermometer.component.html',
  styleUrls: ['./thermometer.component.scss'],
})
export class ThermometerComponent {
  // Public Variables
  public rotationDegree = 0;
  public valid = true;

  // Private Varaibles
  private _minimumTemparature = 0;
  private _currentTemparature = 0;
  private _maximumTemparature = 100;

  public get minimumTemparature(): number {
    return this._minimumTemparature;
  }

  @Input() public set minimumTemparature(_minimumTemparature: number) {
    this._minimumTemparature = _minimumTemparature;
    this._calculateRotationDegree();
  }

  public get currentTemparature(): number {
    return this._currentTemparature;
  }

  @Input() public set currentTemparature(_currentTemparature: number) {
    this._currentTemparature = _currentTemparature;
    this._calculateRotationDegree();
  }

  public get maximumTemparature(): number {
    return this._maximumTemparature;
  }

  @Input() public set maximumTemparature(_maximumTemparature: number) {
    this._maximumTemparature = _maximumTemparature;
    this._calculateRotationDegree();
  }

  private _calculateRotationDegree(): void {
    if (
      this.minimumTemparature <= this.currentTemparature &&
      this.currentTemparature <= this.maximumTemparature
    ) {
      this.valid = true;
      // Range divided by the arc size (266deg) then shifting by the start point -225deg(minimum)
      this.rotationDegree = -225 +
        ((266.0 / (this.maximumTemparature - this.minimumTemparature)) * this.currentTemparature);
      // @ts-ignore
      const indicator = document.getElementById(
        'indicator'
      );

      if(indicator) {
        indicator.style.transform = `rotate(${this.rotationDegree}deg)`
      }
    } else {
      this.valid = false;
    }
  }
}
