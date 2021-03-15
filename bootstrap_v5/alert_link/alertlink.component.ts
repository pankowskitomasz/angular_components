import {Component, Input} from "@angular/core";

@Component({
    selector: "AlertLink",
    templateUrl:"./alertlink.component.html",
    styleUrls:["./alertlink.component.css"]
})
export class AlertLinkComponent {
    clss="alert-link";
    @Input() ext;
    @Input() href;

}