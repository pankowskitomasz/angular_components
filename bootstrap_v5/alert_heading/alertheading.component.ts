import {Component,Input} from "@angular/core";

@Component({
    selector:"AlertHeading",
    templateUrl:"./alertheading.component.html",
    styleUrls:["./alertheading.component.css"]
})
export class AlertHeadingComponent {
    clss="alert-heading";
    @Input() ext;

}