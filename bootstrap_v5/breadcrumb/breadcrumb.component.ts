import {Component,Input} from "@angular/core";

@Component({
    selector: "Breadcrumb",
    templateUrl:"./breadcrumb.component.html",
    styleUrls:["./breadcrumb.component.css"]
})
export class BreadcrumbComponent {
    private clss="breadcrumb";
    @Input() ext;
}