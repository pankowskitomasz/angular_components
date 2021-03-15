import {Component,Input, OnInit} from "@angular/core";

@Component({
    selector: "Alert",
    templateUrl: "./alert.component.html",
    styleUrls:["./alert.component.css"]
})
export class AlertComponent implements OnInit{
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
    clss="alert";
    @Input() dismiss;
    @Input() ext;
    @Input() type;

    ngOnInit(){
        this.clss+=(this.colors.indexOf(this.type)>=0 && this.type!==undefined)?" alert-"+this.type:"";
        this.clss+=(this.dismiss!==undefined)?" alert-dismissable":"";        
    }
}