import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs'; 
import { trigger, transition, style, stagger, animate,query } from '@angular/animations';
@Component({
    selector: 'app-users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.css'],
    animations :[
        trigger('listStagger',[
            transition('* <=> *',[
                query(':enter',[ 
                    style( {opacity:0 , transform:'translateX(-10px)'} ), 
                    stagger('100ms', animate('500ms ease-out', style( {opacity:1,transform:'translateX(10px)'} ) ))
                ],{optional:true}) ,
                // query(':leave',[
                //     style( { opacity:1 , transform:'translateX(10px)' } ),
                //     stagger('50ms',animate('550ms ease-out',style({opacity:1,transform:'translateY(0px)' }))
                // )],{optional:true})
            ])
        ])
    ]
})
export class UsersComponent implements OnInit {

    users$: Object;
    constructor(private data: DataService) { }

    ngOnInit() {
        this.data.getUsers().subscribe(
        data => this.users$ = data 
        );
    }

}
