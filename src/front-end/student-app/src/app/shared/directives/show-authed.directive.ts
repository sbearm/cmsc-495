import {
    Directive,
    TemplateRef,
    ViewContainerRef,
    OnInit,
    Input,
  } from "@angular/core";
import { AuthenticationService } from "src/app/core/services/authentication.service";
  
  @Directive({
    selector: "[appShowAuthed]",
  })
  export class ShowAuthedDirective implements OnInit {
    constructor(
      private templateRef: TemplateRef<any>,
      private authenticationService: AuthenticationService,
      private viewContainer: ViewContainerRef
    ) {}
  
    condition: boolean;
  
    ngOnInit() {
      if (
        (this.authenticationService.currentUserValue.role && this.condition) ||
        (!this.authenticationService.currentUserValue.role && !this.condition)
      ) {
        this.viewContainer.createEmbeddedView(this.templateRef);
      } else {
        this.viewContainer.clear();
      }
    }
  
    @Input() set appShowAuthed(condition: boolean) {
      this.condition = condition;
    }
  }
  