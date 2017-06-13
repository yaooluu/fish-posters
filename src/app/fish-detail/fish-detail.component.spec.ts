import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FishDetailComponent } from './fish-detail.component';
import { By } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { ProductsService } from 'app/products.service';

describe('FishDetailComponent', () => {
  let component: FishDetailComponent;
  let fixture: ComponentFixture<FishDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FishDetailComponent ],
      providers: [{
        provide: ActivatedRoute,
        useValue: {
          paramMap: new BehaviorSubject(new Map([['id', 99]]))
        }
      }, {
        provide: ProductsService,
        useValue: {
          fish: [{
            id: 99,
            name: 'Puffer',
            pic: '/assets/halibut-full.jpg'
          }, {
            id: 100,
            name: 'Dory',
            pic: '/assets/squid-full.jpg'
          }]
        }
      }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FishDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should have a title for the fish', () => {
    expect(fixture.debugElement.query(By.css('h1.title')).nativeElement.textContent).toBe('Puffer');
  });

  it('should have an image with alt text', () => {
    expect(fixture.debugElement.query(By.css('img')).nativeElement.getAttribute('alt')).toBe('Puffer preview');
  });
});
