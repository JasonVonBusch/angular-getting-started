import { TestBed, async } from '@angular/core/testing';
import { ProductListComponent } from './product-list.component';
import { ConvertToSpacesPipe } from '../shared/convert-to-spaces.pipe';

describe('ProductListComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ProductListComponent,
        ConvertToSpacesPipe
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(ProductListComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });

  it(`should have as pageTitle 'Product List'`, () => {
    const fixture = TestBed.createComponent(ProductListComponent);
    const component = fixture.componentInstance;
    expect(component.pageTitle).toEqual('Product List');
  });
});
