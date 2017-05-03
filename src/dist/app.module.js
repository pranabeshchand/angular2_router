"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var app_component_1 = require("./app.component");
var user_component_1 = require("./components/user.component");
var about_component_1 = require("./components/about.component");
var portfollio_component_1 = require("./components/portfollio.component");
var contact_component_1 = require("./components/contact.component");
var faq_component_1 = require("./components/faq.component");
var route_1 = require("./route");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, route_1.routing],
        declarations: [app_component_1.AppComponent, user_component_1.UserComponent, about_component_1.AboutComponent, contact_component_1.ContactComponent, portfollio_component_1.PortfollioComponent, faq_component_1.FaqComponent],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map