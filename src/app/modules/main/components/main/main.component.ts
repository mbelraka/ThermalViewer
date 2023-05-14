import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { debounceTime, Subject, takeUntil } from 'rxjs';
import { ERRORS } from 'src/app/modules/shared/utilities/Errors';

import { PATTERNS } from 'src/app/modules/shared/utilities/Patterns';
import { MAIN_CONFIG } from '../../config/main.config';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit, OnDestroy {
  // Public Variables
  public minimumTemperature = 0;
  public currentTemperature = 0;
  public maximumTemperature = 100;
  public form = new FormGroup({
    minimumTemperature: new FormControl(0, [
      Validators.required,
      Validators.pattern(PATTERNS.NUMBERS),
    ]),
    currentTemperature: new FormControl(0, [
      Validators.required,
      Validators.pattern(PATTERNS.NUMBERS),
    ]),
    maximumTemperature: new FormControl(100, [
      Validators.required,
      Validators.pattern(PATTERNS.NUMBERS),
    ]),
  });
  public ERRORS = ERRORS;

  // Private Variables
  private readonly _destory$ = new Subject<void>();

  public ngOnInit(): void {
    // @ts-ignore
    Object.keys(this.form.controls).forEach((key: string) =>
      this.form
        .get(key)
        .valueChanges.pipe(
          takeUntil(this._destory$),
          debounceTime(MAIN_CONFIG.DEBOUNCE_TIME)
        )
        .subscribe((newVal: string): void => {
          if (this.form.get(key).valid && !isNaN(parseFloat(newVal))) {
            this[key] = parseFloat(newVal);
          }
        })
    );
  }

  public ngOnDestroy(): void {
    this._destory$.next();
    this._destory$.complete();
  }
}
