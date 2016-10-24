/// <reference path="../typings/tsd.d.ts" />
System.register(['angular2/core', './post.service', 'angular2/http'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, post_service_1, http_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (post_service_1_1) {
                post_service_1 = post_service_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            //import { OnInit } from 'angular2/core';
            //import { GitHubProfileComponent } from './github.profile.component';
            AppComponent = (function () {
                //isLoading = true;
                function AppComponent(_postService) {
                    //	this._postService.getPosts().subscribe(posts => console.log(posts));
                    this._postService = _postService;
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
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n        <github-profile></github-profile>\n    ",
                        providers: [post_service_1.PostService, http_1.HTTP_PROVIDERS]
                    }), 
                    __metadata('design:paramtypes', [post_service_1.PostService])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app-sample.component.js.map