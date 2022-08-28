import { Component, EventEmitter, inject, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  providers: [AppService]
})
export class AppComponent implements OnChanges {
  @Input() name!: string;
  @Input() surname!: string;
  @Output() formChange = new EventEmitter<string>(); 

  protected _form = inject(FormBuilder).nonNullable.group({
    firstName: [''],
    lastName: ['']
  });

  #appService = inject(AppService)

  ngOnChanges(changes: SimpleChanges): void {
    if ('name' in changes) {
      this._form.patchValue({ firstName: changes['name'].currentValue });
    }

    if ('surname' in changes) {
      this._form.patchValue({ lastName: changes['surname'].currentValue });
    }
  }

  onSub(e: SubmitEvent, value: Partial<{firstName: string; lastName: string}>) {
    e.preventDefault();
    console.log({angularComponent: value});
    const toEmit = Object.fromEntries(
      Object.entries(value).map(([key, value]) => [key, this.#appService.toUpperCase(value)])
    );
    this.formChange.emit(JSON.stringify(toEmit));
  }
}
