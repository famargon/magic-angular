import { Injectable } from "@angular/core";
import { Subject, Subscription } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class UIProviderService{

    public ui : any;

    private subject = new Subject<any>();

    onUIChanges(cb : (newUI: any) => void) : Subscription {
        return this.subject.asObservable().subscribe(cb);
    }

    private emitUIChange(ui: any){
        this.subject.next(ui);
    }

    followLink(link: String, data: any = undefined): any {
        let linkObject = this.ui._links.find(l => l.rel == link);
        if(linkObject) {
            if(data) {

            } else {
                this.loadView(link);
            }
        }else{
            throw Error("link "+link+" not found in "+this.ui._links);
        }
    }

    public loadView(name : String) : void{
        this.ui = this.internalGetView(name);
        this.emitUIChange(this.ui);
    }

    private usersList: any[] = [];

    private internalGetView(name : String) : any{
        if(name == "list-users") {
            return {
                components:[
                    {
                        type: "list",
                        row: {
                            type:"text",
                            style:"redText",
                            model:"username"
                        }
                    },
                    {
                        type: "button",
                        label: "Crear usuario",
                        link: "create-user"
                    }
                ],
                data:[
                    {
                        username: "alice"
                    },
                    {
                        username: "bob"
                    }
                ],
                _links: [
                    {
                        href: "localhost:8080/xxxx",
                        rel: "create-user"
                    }
                ]
            };
        } else if(name == "create-user"){
            return {
                components:[
                    {
                        type: "form",
                        fields: [
                            {
                                model: "username",
                                label: "Nombre de usuario",
                                type: "textbox",
                                order: 1,
                                required: true
                            }
                        ],
                        submitLink: "list-users",
                        cancelLink: "list-users"
                    }
                ],
                model:{

                },
                _links: [
                    {
                        href: "localhost:8080/xxxx",
                        rel: "list-users"
                    }
                ]
            };
        }
    }

    public getApplication() {
        return {
            name: "sample-app",
            title: "sample automatically generated application",
            bootstrap: "list-users",
            views: [
                {
                    name: "create-user"
                },
                {
                    name: "list-users"
                }
            ],
            _links: [
                {
                  href: "localhost:8080/xxxx",
                  rel: "home"
                }
            ]
        };
    }

}