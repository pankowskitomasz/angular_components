import {Component,Input, OnInit} from "@angular/core";

@Component({
    selector: "Badge",
    templateUrl:"./badge.component.html",
    styleUrls:["./badge.component.css"]
})
export class BadgeComponent 
implements OnInit{
    colors=[
        "primary",
        "secondary",
        "info",
        "success",
        "warning",
        "danger",
        "light",
        "dark"
    ];
    clss = "badge";

    @Input() ext;
    @Input() type;
    @Input() pill;

    constructor(){
    }

    ngOnInit(){
        this.clss+=(this.colors.indexOf(this.type)>=0)?" bg-"+this.type:"";
        this.clss+=(this.pill!==undefined)?" rounded-pill":"";

    }
}