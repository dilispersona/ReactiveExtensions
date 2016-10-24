/// <reference path="../typings/tsd.d.ts" />

import {Component} from 'angular2/core';
import {Observable} from 'rxjs/Rx';
import { PostService } from './post.service';
import { HTTP_PROVIDERS } from 'angular2/http';
//import { OnInit } from 'angular2/core';
//import { GitHubProfileComponent } from './github.profile.component';
 
@Component({
    selector: 'my-app',
    template: `
        <github-profile></github-profile>
    `,
	providers:[PostService, HTTP_PROVIDERS]
})
export class AppComponent {
	//isLoading = true;
    constructor(private _postService: PostService){

	//	this._postService.getPosts().subscribe(posts => console.log(posts));
 	
/*	var keyups = Observable.fromEvent($('#search'),'keyup')
							.map(e => e.target.value)
							.filter(text => text.length >= 4)
							.debounceTime(500)
							.distinctUntilChanged()
							.flatMap(_postService.getPost);
	
	var subscription = keyups.subscribe(data => console.log(data));*/
	//subscription.unsubscribe();

		/*searchTerm => {
			var url = "https://api.spotify.com/v1/search?type=artist&q=" + searchTerm;
			var promise = $.getJSON(url);
			return Observable.fromPromise(promise);
		}*/
	
   /* 	var debounced = _.debounce(function(text){
    		var url = "https://api.spotify.com/v1/search?type=artist&q=" + text;
    		$.getJSON(url, function(artists){
    			console.log(artists);
    		});
    	},400);

    	$("#search").keyup(function(e){
    		var text = e.target.value;

    		if(text.length < 3)
    			return;
    		debounced(text);
    	});*/



    }
/*
	ngOnInit(){
		this._postService.getPosts().subscribe(posts => {
				this.isLoading = false;
				console.log(posts[0].title);
			});
		//this._postService.createPost({userId:11111,title:"title one",body:"a"});
	}
*/
}