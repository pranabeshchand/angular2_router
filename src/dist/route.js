"use strict";
var router_1 = require("@angular/router");
var user_component_1 = require("./components/user.component");
var about_component_1 = require("./components/about.component");
var portfollio_component_1 = require("./components/portfollio.component");
var contact_component_1 = require("./components/contact.component");
var faq_component_1 = require("./components/faq.component");
var appRouters = [
    {
        path: "",
        component: user_component_1.UserComponent
    },
    {
        path: "about",
        component: about_component_1.AboutComponent
    },
    {
        path: "portfollio",
        component: portfollio_component_1.PortfollioComponent
    },
    {
        path: "faq",
        component: faq_component_1.FaqComponent
    },
    {
        path: "contact",
        component: contact_component_1.ContactComponent
    }
];
exports.routing = router_1.RouterModule.forRoot(appRouters);
//# sourceMappingURL=route.js.map