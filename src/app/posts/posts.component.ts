import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { DataService } from '../data.service';
import { trigger, transition, query, style, stagger, animate } from '@angular/animations';

@Component({
    selector: 'app-posts',
    templateUrl: './posts.component.html',
    styleUrls: ['./posts.component.css'],
    animations:[
        trigger('postAnimation',[
            transition('* <=> *',[
                query(':enter',[
                    style({opacity:0 , transform:'translateX(-15px)'}),
                    stagger('0.1s',animate('0.5s ease-out', style( {opacity:1 , transform:'translateY(-15px)'} ) ) )
                ],{optional:true})
            ])
        ])
    ]
})
export class PostsComponent implements OnInit {
    posts : object
    constructor(private data: DataService) { }

    ngOnInit() {
        this.data.getPosts().subscribe(
            data => this.posts = data
        );
    }

}
