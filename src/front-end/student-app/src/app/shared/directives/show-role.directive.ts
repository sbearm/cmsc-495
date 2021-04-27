import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { AuthenticationService } from 'src/app/core/services/authentication.service';

@Directive({
  selector: '[appShowRole]'
})
export class ShowRoleDirective {
  constructor(
    private templateRef: TemplateRef<any>,
    private authenticationService: AuthenticationService,
    private viewContainer: ViewContainerRef
  ) {}

  condition: string;

  ngOnInit() {

      if (this.authenticationService.currentUserValue.userType == this.condition) {
        this.viewContainer.createEmbeddedView(this.templateRef);
      } else {
        this.viewContainer.clear();
      }
  }

  @Input() set appShowRole(condition: string) {
    this.condition = condition;
  }
}
