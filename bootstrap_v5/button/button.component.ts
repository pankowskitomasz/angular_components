import {Component,Input, OnInit} from "@angular/core";

@Component({
    selector: "Btn",
    templateUrl: "./button.component.html",
    styleUrls:["./button.component.css"]
})
export class ButtonComponent implements OnInit{
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
    clss="btn";
    @Input() outline;
    @Input() ext;
    @Input() type;

    ngOnInit(){
        this.clss+=(this.outline!==undefined)?" btn-outline-":" btn-";        
        this.clss+=(this.colors.indexOf(this.type)>=0 && this.type!==undefined)?this.type:"";
    }
}