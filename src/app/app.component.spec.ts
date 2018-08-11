import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { BrowserModule } from "@angular/platform-browser";
import { InputTextModule } from "primeng/inputtext";
import { FormsModule } from "@angular/forms";
import { RadioButtonModule } from "primeng/radiobutton";
import { ConfirmDialogModule } from "primeng/confirmdialog";
import { MessageModule } from "primeng/message";
import { MessagesModule } from "primeng/messages";
import { KeyFilterModule } from "primeng/keyfilter";
import { InputMaskModule} from "primeng/inputmask";
import { ConfirmationService } from "primeng/api";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalendarModule } from 'primeng/calendar';
describe('AppComponent', () => {
  let expected =false;

  // beforeEach(()=>{
  //   expected=true;
  // });
  
  
  beforeEach(async(() => {
    expected=true;
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports:[
        BrowserModule,
        BrowserAnimationsModule,
        InputTextModule,
        FormsModule,
        RadioButtonModule,
        ConfirmDialogModule,
        KeyFilterModule,
        MessagesModule,
        MessageModule,
        CalendarModule,
        InputMaskModule
      ],
      providers:[ConfirmationService]
    }).compileComponents();
  }));
  afterEach(()=>{
    expected=false;
  });
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app');
  }));
  // it('should render title in a h1 tag', async(() => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.debugElement.nativeElement;
  //   expect(compiled.querySelector('h1').textContent).toContain('Welcome to app!');
  // }));
  it('checks for confirmation function call',()=>{
    expect(confirm()).toEqual(expected);
    
  });
});