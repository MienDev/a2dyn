var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", '@angular/core', '../session.service'], function (require, exports, core_1, session_service_1) {
    "use strict";
    var ShellComponent = (function () {
        function ShellComponent(sessionService) {
            this.sessionService = sessionService;
        }
        ShellComponent.prototype.ngOnInit = function () {
        };
        ShellComponent = __decorate([
            core_1.Component({
                selector: 'app-shell',
                templateUrl: './shell.component.html',
                styleUrls: ['./shell.component.css']
            }), 
            __metadata('design:paramtypes', [session_service_1.SessionService])
        ], ShellComponent);
        return ShellComponent;
    }());
    exports.ShellComponent = ShellComponent;
});
//# sourceMappingURL=shell.component.js.map