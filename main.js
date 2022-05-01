(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Yeiko\Documents\Paginas web\PruebasProyecto\primeng\src\main.ts */"zUnb");


/***/ }),

/***/ "2420":
/*!***************************************************************!*\
  !*** ./src/app/Components/ofisadmin/ofi52/ofi52.component.ts ***!
  \***************************************************************/
/*! exports provided: Ofi52Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ofi52Component", function() { return Ofi52Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");


class Ofi52Component {
    constructor() { }
    ngOnInit() {
    }
}
Ofi52Component.ɵfac = function Ofi52Component_Factory(t) { return new (t || Ofi52Component)(); };
Ofi52Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Ofi52Component, selectors: [["app-ofi52"]], decls: 2, vars: 0, consts: [[1, "container", "w-75", "mx-auto"], ["src", "assets/Oficina 5-2v.png", "alt", "Oficina 5-1"]], template: function Ofi52Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0NvbXBvbmVudHMvb2Zpc2FkbWluL29maTUyL29maTUyLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Ofi52Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-ofi52',
                templateUrl: './ofi52.component.html',
                styleUrls: ['./ofi52.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "335p":
/*!***************************************************************!*\
  !*** ./src/app/Components/ofisadmin/ofi53/ofi53.component.ts ***!
  \***************************************************************/
/*! exports provided: Ofi53Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ofi53Component", function() { return Ofi53Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _fullcalendar_interaction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fullcalendar/interaction */ "Gbwi");
/* harmony import */ var _fullcalendar_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fullcalendar/list */ "+Izv");
/* harmony import */ var primeng_lts_tabview__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng-lts/tabview */ "NKTi");
/* harmony import */ var primeng_lts_fullcalendar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng-lts/fullcalendar */ "4f/R");






class Ofi53Component {
    constructor() {
        this.events = [];
        this.events2 = [];
    }
    ngOnInit() {
        this.options = {
            plugins: [_fullcalendar_interaction__WEBPACK_IMPORTED_MODULE_1__["default"], _fullcalendar_list__WEBPACK_IMPORTED_MODULE_2__["default"]],
            defaultView: 'listWeek',
            defaultDate: '2022-04-26',
            //locale: esLocale,
            header: {
                left: 'prev,today',
                center: 'title',
                right: 'listDay,listWeek,next'
            },
            buttonText: {
                today: 'Reservas de Hoy',
                listDay: 'Día',
                listWeek: 'Semana'
            }
        };
        this.events = [
            {
                id: 1,
                title: 'Carlos Matarrita - Cubículo #3',
                start: '2022-04-26T10:30:00',
                end: '2022-04-26T15:00:00'
            },
            {
                id: 2,
                title: 'Lucía Mora - Cubículo #8',
                start: '2022-04-28T09:00:00',
                end: '2022-04-28T16:00:00'
            }
        ];
        this.options2 = {
            plugins: [_fullcalendar_interaction__WEBPACK_IMPORTED_MODULE_1__["default"], _fullcalendar_list__WEBPACK_IMPORTED_MODULE_2__["default"]],
            defaultView: 'listWeek',
            defaultDate: '2022-04-26',
            //locale: esLocale,
            header: {
                left: 'prev,today',
                center: 'title',
                right: 'listDay,listWeek,next'
            },
            buttonText: {
                today: 'Reservas de hoy',
                listDay: 'Día',
                listWeek: 'Semana'
            }
        };
        this.events2 = [
            {
                id: 1,
                title: 'Carlos Matarrita - Sala 1: Asesoría Académica',
                start: '2022-04-27T10:30:00',
                end: '2022-04-27T11:30:00'
            }
        ];
    }
    userReser() {
        Swal.fire({
            title: '¿Deseas inhabilitar este usuario?',
            text: "El usuario no podra ingresar al sistema ni realizar ninguna reserva",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: 'rgb(0, 81, 158)',
            cancelButtonColor: 'rgb(204, 204, 204)',
            confirmButtonText: 'Aceptar',
            calcelButtonText: 'Cancelar',
        }).then((result) => {
            if (result.isConfirmed) {
                const { value: accept } = Swal.fire({
                    input: 'textarea',
                    inputLabel: 'Justificación',
                    inputPlaceholder: 'Justificación...',
                    inputAttributes: {
                        'aria-label': 'Type your message here'
                    },
                    showCancelButton: true,
                    confirmButtonColor: 'rgb(0, 81, 158)',
                    cancelButtonColor: 'rgb(204, 204, 204)',
                    confirmButtonText: 'Desactivar',
                    calcelButtonText: 'Cancelar',
                }).then((result) => {
                    if (result.isConfirmed) {
                        Swal.fire({
                            icon: 'success',
                            title: 'Usuario Desactivado',
                            confirmButtonText: 'Aceptar',
                            confirmButtonColor: 'rgb(0, 81, 158)'
                        });
                    }
                });
            } //uu
        });
    }
    salaReserv() {
        Swal.fire({
            title: '¿Deseas eliminar esta reserva?',
            text: "El usuario no podrá utilizar esta sala",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: 'rgb(0, 81, 158)',
            cancelButtonColor: 'rgb(204, 204, 204)',
            confirmButtonText: 'Aceptar',
            calcelButtonText: 'Cancelar',
        }).then((result) => {
            if (result.isConfirmed) {
                const { value: accept } = Swal.fire({
                    input: 'textarea',
                    inputLabel: 'Justificación',
                    inputPlaceholder: 'Justificación...',
                    inputAttributes: {
                        'aria-label': 'Type your message here'
                    },
                    showCancelButton: true,
                    confirmButtonColor: 'rgb(0, 81, 158)',
                    cancelButtonColor: 'rgb(204, 204, 204)',
                    confirmButtonText: 'Desactivar',
                    calcelButtonText: 'Cancelar',
                }).then((result) => {
                    if (result.isConfirmed) {
                        Swal.fire({
                            icon: 'success',
                            title: 'Reserva eliminada',
                            text: 'Se enviará una notificación por correo al usuario',
                            confirmButtonText: 'Aceptar',
                            confirmButtonColor: 'rgb(0, 81, 158)'
                        });
                    }
                });
            } //uu
        });
    }
    resev() {
        Swal.fire({
            icon: 'info',
            title: '<strong>Cubículo Reservado</strong>',
            html: '<h5><b>Usuario: </b>Carlos Matarrita</h5>' +
                '<h5><b>Rol: </b>Encargado de XXXXXX</h5>' +
                '<h5><b>Fecha: </b>2022-04-26</h5>' +
                '<h5><b>Hora: </b>8:00am - 3:00pm</h5>',
            confirmButtonText: 'Aceptar',
            confirmButtonColor: 'rgb(0, 81, 158)',
            showDenyButton: true,
            denyButtonText: 'Eliminar Reserva',
            denyButtonColor: 'rgb(255, 108, 54)'
        });
    }
    resev2() {
        Swal.fire({
            icon: 'info',
            title: '<strong>Cubículo Reservado</strong>',
            html: '<h5><b>Usuario: </b>Lucia Mora</h5>' +
                '<h5><b>Rol: </b>Asistente de XXXXXX</h5>' +
                '<h5><b>Fecha: </b>2022-04-28</h5>' +
                '<h5><b>Hora: </b>9:00am - 4:00pm</h5>',
            confirmButtonText: 'Aceptar',
            confirmButtonColor: 'rgb(0, 81, 158)'
        });
    }
    nodisp() {
        Swal.fire({
            icon: 'question',
            title: 'Cubículo no disponible',
            text: '¿Desea habilitar este cubículo?',
            showCancelButton: true,
            confirmButtonText: 'Si',
            confirmButtonColor: 'rgb(0, 81, 158)',
            cancelButtonText: 'No',
            cancelButtonColor: 'rgb(255, 108, 54)'
        });
    }
    disp() {
        Swal.fire({
            icon: 'question',
            title: 'Cubículo disponible',
            text: '¿Desea inhabilitar este cubículo?',
            confirmButtonText: 'Si',
            showCancelButton: true,
            confirmButtonColor: 'rgb(0, 81, 158)',
            cancelButtonText: 'No',
            cancelButtonColor: 'rgb(255, 108, 54)'
        });
    }
    admin() {
        Swal.fire({
            icon: 'info',
            title: 'Administrador',
            html: '<h5><b>Usuario: </b>Marta Bolaños</h5>',
            confirmButtonText: 'Aceptar',
            confirmButtonColor: 'rgb(0, 81, 158)'
        });
    }
}
Ofi53Component.ɵfac = function Ofi53Component_Factory(t) { return new (t || Ofi53Component)(); };
Ofi53Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Ofi53Component, selectors: [["app-ofi53"]], decls: 210, vars: 4, consts: [[1, "text-center"], [1, "container", "mx-auto", "row", "g-0"], [1, "col-12", "col-lg-3"], [1, "p-3", "border", "text-center", 2, "background-color", "rgb(255, 108, 54)", "font-size", "22px", "font-weight", "bold"], [1, "p-3", "border", "text-center", 2, "background-color", "rgb(204, 204, 204)", "font-size", "22px", "font-weight", "bold"], [1, "p-3", "border", "text-center", 2, "background-color", "rgb(255, 200, 67)", "font-size", "22px", "font-weight", "bold"], [1, "p-3", "border", "text-center", "text-light", 2, "background-color", "rgb(0, 81, 158)", "font-size", "22px", "font-weight", "bold"], [1, "container-fluid", "m-0", "p-0"], [1, "principal"], [1, "parteA", "row", "border"], [1, "col-8", "border", "d-flex", "justify-content-center", "align-items-center"], [1, "col-4", "border", "m-0", "p-0", "d-flex", "justify-content-center", "align-items-center"], [1, "parteB", "row", "border"], [1, "col-2", "border", "p-0", "m-0", "row", "align-items-center"], [1, "p-0", "m-0"], ["type", "button", 1, "btn", "btnNoD", "col-12", "p-4"], ["type", "button", 1, "btn", "btnD", "col-12", "mt-1", "p-4"], ["id", "parteB2", 1, "col-7", "border", "p-0", "m-0"], [1, "row", "p-0", "m-0"], ["type", "button", 1, "btn", "btnR", "col-3", "p-4", 3, "click"], ["type", "button", 1, "btn", "btnNoD", "col-3", "p-4"], ["type", "button", 1, "btn", "btnD", "col-3", "p-4"], [1, "col-9"], [1, "row", "row-cols-3", "gy-1"], ["type", "button", 1, "btn", "btnNoD", "p-4", 3, "click"], ["type", "button", 1, "btn", "btnD", "p-4"], ["type", "button", 1, "btn", "btnNoD", "p-4"], [1, "flex-row", "ms-5"], ["type", "button", 1, "btn", "btnAD", "p-4", "ms-3", "text-light", 3, "click"], ["id", "parteB3", 1, "col-3", "border", "p-0", "m-0"], ["type", "button", 1, "btn", "btnD", "col-6", "p-4", 3, "click"], ["type", "button", 1, "btn", "btnR", "col-6", "p-4", 3, "click"], [1, "parteC", "row", "border"], [1, "col-2", "border", "m-0", "p-0", "d-flex", "justify-content-center", "align-items-center"], [1, "col-7", "border", "p-0", "m-0"], ["id", "parteC2", 1, "row", "p-0", "m-0"], [1, "col-3", "border", "p-0", "m-0", "row", "align-items-end"], ["type", "button", 1, "btn", "btnNoD", "col-12", "mt-1", "p-4"], [1, "col-6", "border", "p-0", "m-0", "row"], ["type", "button", 1, "btn", "btnNoD", "col-6", "mt-1", "p-4"], [1, "p-0", "m-0", "align-self-end"], [1, "col-3", "border", "p-0", "m-0", "row", "g-1", "flex-row-reverse", "justify-content-between"], ["type", "button", 1, "btn", "btnNoD", "col-12", "p-3"], [1, "col-3", "border", "m-0", "p-1", "d-flex", "justify-content-center", "align-items-center"], ["type", "button", "data-bs-toggle", "offcanvas", "data-bs-target", "#offcanvasExample3", "aria-controls", "offcanvasExample", 1, "btn", "btn-primary"], ["tabindex", "-1", "id", "offcanvasExample3", "aria-labelledby", "offcanvasExampleLabel", 1, "offcanvas", "offcanvas-top", 2, "height", "100vh"], [1, "offcanvas-header"], ["id", "offcanvasExampleLabel", 1, "offcanvas-title"], ["type", "button", "data-bs-dismiss", "offcanvas", "aria-label", "Close", 1, "btn-close", "text-reset"], [1, "offcanvas-body"], [1, "container-fluid", "text-center"], ["type", "button", "data-bs-toggle", "modal", "data-bs-target", "#reservas", 1, "btn", "btn-primary"], [1, "container-fluid"], ["header", "Salas de reuni\u00F3n"], [1, "table-responsive"], [1, "table", "table-bordered"], ["scope", "col"], ["scope", "row"], ["type", "button", 1, "btn", "btn-danger", 3, "click"], ["header", "Calendario de reservas de cub\u00EDculos"], [1, "col-12"], [1, "text-center", "fw-bold"], [3, "events", "options"], ["header", "Calendario de reservas de salas de reuni\u00F3n"], ["type", "button", "data-bs-dismiss", "offcanvas", 1, "btn", "btn-primary", "float-end", "mr-2"], ["id", "reservas", "tabindex", "-1", "aria-labelledby", "exampleModalLabel", "aria-hidden", "true", 1, "modal", "fade"], [1, "modal-dialog"], [1, "modal-content"], [1, "modal-header"], ["id", "exampleModalLabel", 1, "modal-title"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "btn-close"], [1, "modal-body"], [1, "modal-footer"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "btn-secondary"]], template: function Ofi53Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Estado de los cub\u00EDculos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Disponible");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "No Disponible");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Reservado");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Administrador");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Cub\u00EDculos (Trabajo Colaborativo)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " Sala #2 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Ofi53Component_Template_button_click_34_listener() { return ctx.resev(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "12");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "button", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Ofi53Component_Template_button_click_47_listener() { return ctx.nodisp(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "11");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "button", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "10");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "button", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "9");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "button", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "13");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "button", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "14");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "button", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "15");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "button", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Ofi53Component_Template_button_click_60_listener() { return ctx.admin(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Admin");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "16");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "button", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Ofi53Component_Template_button_click_65_listener() { return ctx.disp(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "button", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Ofi53Component_Template_button_click_67_listener() { return ctx.resev2(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "8");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, " Sala ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, " #1 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "button", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "button", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "button", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "button", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "button", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "button", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "button", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "button", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, " Almac\u00E9n ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](100, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, " ECEN ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](102, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](103, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "h3", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "Cub\u00EDculos y salas reservadas");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](107, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "button", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, " Desplegar lista ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](111, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "h3", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, "Cub\u00EDculos y salas de reuni\u00F3n reservadas");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](117, "button", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "button", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, " Informaci\u00F3n ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](122, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "p-tabView");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "p-tabPanel", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "table", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "th", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](131, "Ubicaci\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "th", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](133, "Sala");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "th", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](135, "Nombre y Apellidos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "th", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](137, "Rol");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "th", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](139, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "th", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](141, "Fecha de reserva");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "th", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](143, "Hora de inicio");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "th", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](145, "Hora de salida");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "th", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](147, "Tipo de reuni\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "th", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](149, "Eliminar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "th", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](153, "Oficina 5-3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](155, "Sala 1: Sala de asesor\u00EDa acad\u00E9mica");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](157, "Carlos Matarrita");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](159, "Encargado de XXXXXX");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](161, "carlos.matarrita@empesa.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](163, "2022-04-27");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](165, "10:30 am");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](167, "11:30 am");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](169, "Reunion XXXXXXXXXX");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "button", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Ofi53Component_Template_button_click_171_listener() { return ctx.salaReserv(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](172, "Eliminar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "p-tabPanel", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "h4", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](178, "Lista reservas de cub\u00EDculos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](179, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](180, "p-fullCalendar", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "p-tabPanel", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](182, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](185, "h4", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](186, "Lista reservas de salas de reuni\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](187, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](188, "p-fullCalendar", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](189, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](190, "button", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](191, "Cerrar lista");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](192, "div", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](193, "div", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](194, "div", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](195, "div", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](196, "h5", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](197, "Cub\u00EDculos y salas de reuni\u00F3n reservadas");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](198, "button", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](199, "div", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](200, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](201, "En esta secci\u00F3n se muestran todas las reservas activas de los cubiculos y de las salas de reuniones");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](202, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](203, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](204, "Se incluyen calendarios que muestran el d\u00EDa y las horas de las reservas");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](205, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](206, "El calendario muestra una lista de todas las reservas, ya sea de toda la semana y de un d\u00EDa de la semana.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](207, "div", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](208, "button", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](209, "Cerrar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](180);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("events", ctx.events)("options", ctx.options);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("events", ctx.events2)("options", ctx.options2);
    } }, directives: [primeng_lts_tabview__WEBPACK_IMPORTED_MODULE_3__["TabView"], primeng_lts_tabview__WEBPACK_IMPORTED_MODULE_3__["TabPanel"], primeng_lts_fullcalendar__WEBPACK_IMPORTED_MODULE_4__["FullCalendar"]], styles: [".principal[_ngcontent-%COMP%] {\n  width: 75%;\n  margin: auto;\n}\n\n.parteA[_ngcontent-%COMP%] {\n  height: 100px;\n}\n\n.parteB[_ngcontent-%COMP%] {\n  height: 400px;\n}\n\n.parteB[_ngcontent-%COMP%]   #parteB2[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  flex-direction: column;\n}\n\n.parteB[_ngcontent-%COMP%]   #parteB3[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-end;\n  flex-direction: column;\n}\n\n.parteC[_ngcontent-%COMP%] {\n  height: 300px;\n}\n\n.parteC[_ngcontent-%COMP%]   #parteC2[_ngcontent-%COMP%] {\n  height: 300px;\n}\n\n.btnD[_ngcontent-%COMP%] {\n  background-color: #ff6c36;\n  font-size: 25px;\n  font-weight: bold;\n}\n\n.btnD[_ngcontent-%COMP%]:hover {\n  background-color: rgba(255, 108, 54, 0.8);\n}\n\n.btnNoD[_ngcontent-%COMP%] {\n  background-color: #cccccc;\n  font-size: 25px;\n  font-weight: bold;\n}\n\n.btnNoD[_ngcontent-%COMP%]:hover {\n  background-color: rgba(204, 204, 204, 0.8);\n}\n\n.btnAD[_ngcontent-%COMP%] {\n  background-color: #00519e;\n}\n\n.btnAD[_ngcontent-%COMP%]:hover {\n  background-color: rgba(0, 81, 158, 0.8);\n}\n\n.btnR[_ngcontent-%COMP%] {\n  background-color: #ffc843;\n  font-size: 25px;\n  font-weight: bold;\n}\n\n.btnR[_ngcontent-%COMP%]:hover {\n  background-color: rgba(255, 200, 67, 0.8);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQ29tcG9uZW50cy9vZmlzYWRtaW4vb2ZpNTMvb2ZpNTMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxVQUFBO0VBQ0EsWUFBQTtBQUNKOztBQUdBO0VBQ0ksYUFBQTtBQUFKOztBQUdBO0VBQ0ksYUFBQTtBQUFKOztBQUVJO0VBQ0ksYUFBQTtFQUNBLDhCQUFBO0VBQ0Esc0JBQUE7QUFBUjs7QUFFSTtFQUNJLGFBQUE7RUFDQSw4QkFBQTtFQUNBLHFCQUFBO0VBQ0Esc0JBQUE7QUFBUjs7QUFJQTtFQUNJLGFBQUE7QUFESjs7QUFHSTtFQUNJLGFBQUE7QUFEUjs7QUFLQTtFQUNJLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBRko7O0FBR0k7RUFDSSx5Q0FBQTtBQURSOztBQUtBO0VBQ0kseUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUFGSjs7QUFHSTtFQUNJLDBDQUFBO0FBRFI7O0FBS0E7RUFDSSx5QkFBQTtBQUZKOztBQUdJO0VBQ0ksdUNBQUE7QUFEUjs7QUFLQTtFQUNJLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBRko7O0FBR0k7RUFDSSx5Q0FBQTtBQURSIiwiZmlsZSI6InNyYy9hcHAvQ29tcG9uZW50cy9vZmlzYWRtaW4vb2ZpNTMvb2ZpNTMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJpbmNpcGFse1xyXG4gICAgd2lkdGg6IDc1JTtcclxuICAgIG1hcmdpbjogYXV0bztcclxufVxyXG5cclxuXHJcbi5wYXJ0ZUF7XHJcbiAgICBoZWlnaHQ6IDEwMHB4O1xyXG59XHJcblxyXG4ucGFydGVCe1xyXG4gICAgaGVpZ2h0OiA0MDBweDtcclxuXHJcbiAgICAjcGFydGVCMntcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgfVxyXG4gICAgI3BhcnRlQjN7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICB9XHJcbn1cclxuXHJcbi5wYXJ0ZUN7XHJcbiAgICBoZWlnaHQ6IDMwMHB4O1xyXG5cclxuICAgICNwYXJ0ZUMye1xyXG4gICAgICAgIGhlaWdodDogMzAwcHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5idG5Ee1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMTA4LCA1NCk7XHJcbiAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICY6aG92ZXJ7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDEwOCwgNTQsIDAuOCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5idG5Ob0R7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjA0LCAyMDQsIDIwNCk7XHJcbiAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICY6aG92ZXJ7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMDQsIDIwNCwgMjA0LCAwLjgpO1xyXG4gICAgfVxyXG59XHJcblxyXG4uYnRuQUR7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgODEsIDE1OCk7XHJcbiAgICAmOmhvdmVye1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgODEsIDE1OCwgMC44KTtcclxuICAgIH1cclxufVxyXG5cclxuLmJ0blJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyMDAsIDY3KTtcclxuICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgJjpob3ZlcntcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjAwLCA2NywgMC44KTtcclxuICAgIH1cclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Ofi53Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-ofi53',
                templateUrl: './ofi53.component.html',
                styleUrls: ['./ofi53.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "9S7Z":
/*!*********************************************************!*\
  !*** ./src/app/Components/plugins/plugins.component.ts ***!
  \*********************************************************/
/*! exports provided: PluginsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PluginsComponent", function() { return PluginsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");


class PluginsComponent {
    constructor() { }
    ngOnInit() {
    }
}
PluginsComponent.ɵfac = function PluginsComponent_Factory(t) { return new (t || PluginsComponent)(); };
PluginsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PluginsComponent, selectors: [["app-plugins"]], decls: 7, vars: 0, consts: [[1, "text-center"], [1, "d-flex", "justify-content-evenly"], ["src", "assets/reloj.png", "alt", ""], ["src", "assets/Calendar.png", "alt", ""]], template: function PluginsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Plugins y Herramientas del proyecto");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0NvbXBvbmVudHMvcGx1Z2lucy9wbHVnaW5zLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PluginsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-plugins',
                templateUrl: './plugins.component.html',
                styleUrls: ['./plugins.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "BCOl":
/*!*******************************************************!*\
  !*** ./src/app/Components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");


class HeaderComponent {
    constructor() { }
    ngOnInit() {
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 10, vars: 0, consts: [[1, "container-fluid", "p-0", "m-0"], [1, "title", "p-2"], [1, "logo", "d-flex", "justify-content-center", "align-items-center", "border", "text-light"], [1, "titulo", "text-light", "ms-2"], [1, "ecen", "p-2", "border-top"], [1, "text-light"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Logo UNED");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Agenda de Reservas de Espacios de Trabajo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h3", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Escuela de Ciencias Exactas y Naturales");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".title[_ngcontent-%COMP%] {\n  display: flex;\n  background-color: #00519e;\n}\n.title[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n  width: 80px;\n  height: 80px;\n}\n.title[_ngcontent-%COMP%]   .titulo[_ngcontent-%COMP%] {\n  align-self: center;\n}\n.ecen[_ngcontent-%COMP%] {\n  background-color: #00519e;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQ29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLHlCQUFBO0FBQ0Y7QUFDRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FBQ0o7QUFFRTtFQUNJLGtCQUFBO0FBQU47QUFJQTtFQUNJLHlCQUFBO0FBREoiLCJmaWxlIjoic3JjL2FwcC9Db21wb25lbnRzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGl0bGUge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDgxLCAxNTgpO1xyXG5cclxuICAubG9nbyB7XHJcbiAgICB3aWR0aDogODBweDtcclxuICAgIGhlaWdodDogODBweDtcclxuICB9XHJcblxyXG4gIC50aXR1bG97XHJcbiAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICB9XHJcbn1cclxuXHJcbi5lY2Vue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDgxLCAxNTgpO1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "CVoa":
/*!*******************************************************!*\
  !*** ./src/app/Components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");


class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 6, vars: 0, consts: [[1, "ecen", "d-flex"], ["src", "assets/Logo-ECEN-prov2.png", "alt", "ECEN", "width", "60", "height", "60", 1, "img-fluid", "bg-light", "rounded-3"], [1, "uned", "text-light"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Universidad Estatal a Distancia, Costa Rica");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  padding: 15px;\n  background-color: #15284b;\n}\n@media screen and (max-width: 540px) {\n  footer[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: center;\n  }\n  footer[_ngcontent-%COMP%]   .uned[_ngcontent-%COMP%] {\n    margin-top: 10px;\n  }\n}\n@media screen and (min-width: 541px) and (max-width: 720px) {\n  footer[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: center;\n  }\n  footer[_ngcontent-%COMP%]   .uned[_ngcontent-%COMP%] {\n    margin-top: 10px;\n  }\n}\nfooter[_ngcontent-%COMP%]   .uned[_ngcontent-%COMP%] {\n  align-self: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQ29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLDhCQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0FBQ0o7QUFDSTtFQU5KO0lBT1Esc0JBQUE7SUFDQSxtQkFBQTtFQUVOO0VBRE07SUFDSSxnQkFBQTtFQUdWO0FBQ0Y7QUFESztFQWJMO0lBY1Esc0JBQUE7SUFDQSxtQkFBQTtFQUlOO0VBSE07SUFDSSxnQkFBQTtFQUtWO0FBQ0Y7QUFGSztFQUNJLGtCQUFBO0FBSVQiLCJmaWxlIjoic3JjL2FwcC9Db21wb25lbnRzL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJmb290ZXJ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgcGFkZGluZzogMTVweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMSwgNDAsIDc1KTtcclxuXHJcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NDBweCl7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIC51bmVke1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgICAgIH1cclxuICAgICB9XHJcbiAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNTQxcHgpIGFuZCAobWF4LXdpZHRoOiA3MjBweCl7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIC51bmVke1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgICAgIH1cclxuICAgICB9XHJcblxyXG4gICAgIC51bmVke1xyXG4gICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICAgfVxyXG4gICAgXHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "I8Qr":
/*!*********************************************************!*\
  !*** ./src/app/Components/page404/page404.component.ts ***!
  \*********************************************************/
/*! exports provided: Page404Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Page404Component", function() { return Page404Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../header/header.component */ "BCOl");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../footer/footer.component */ "CVoa");




class Page404Component {
    constructor() { }
    ngOnInit() {
    }
}
Page404Component.ɵfac = function Page404Component_Factory(t) { return new (t || Page404Component)(); };
Page404Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Page404Component, selectors: [["app-page404"]], decls: 11, vars: 0, consts: [[1, "d-flex", "justify-content-center", "w-50", "mx-auto"], [1, "text-danger"], ["type", "button", 1, "btn", "btn-primary", "ms-4"], [1, "fixed-bottom"]], template: function Page404Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Error 404: P\u00E1gina no encontrada");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Inicio");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "app-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_2__["FooterComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0NvbXBvbmVudHMvcGFnZTQwNC9wYWdlNDA0LmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Page404Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-page404',
                templateUrl: './page404.component.html',
                styleUrls: ['./page404.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "Q/My":
/*!*****************************************************!*\
  !*** ./src/app/Components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../header/header.component */ "BCOl");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../footer/footer.component */ "CVoa");





class LoginComponent {
    constructor() { }
    ngOnInit() {
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 24, vars: 0, consts: [[1, "loginBG", "container-fluid", "p-3"], [1, "d-flex", "justify-content-center"], ["src", "assets/Logo-ECEN-prov2.png", "alt", "Logo ECEN", "width", "150", "height", "150", 1, "img-fluid", "bg-light", "rounded-3"], [1, "text-center"], [1, "login", "mt-4"], [1, "mt-2"], ["for", "titulo"], ["type", "email", "id", "correo", 1, "form-control", "form-control-lg"], ["for", "password"], ["type", "password", "id", "pass", 1, "form-control", "form-control-lg"], ["href", "#", 2, "text-decoration", "none"], [1, "d-grid", "mt-4"], ["type", "submit", 1, "btn", "btn-primary"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h3", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Autentificaci\u00F3n de Usuarios");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Correo electr\u00F3nico");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Contrase\u00F1a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "\u00BFOlvid\u00F3 su contrase\u00F1a?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Ingresar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "app-footer");
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]], styles: [".bodyLogin[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100vh;\n  background-color: #cccccc;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.loginBG[_ngcontent-%COMP%] {\n  background-color: #cccccc;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQ29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQUNKOztBQUVBO0VBQ0kseUJBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQUNKIiwiZmlsZSI6InNyYy9hcHAvQ29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ib2R5TG9naW57XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjA0LCAyMDQsIDIwNCk7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4ubG9naW5CR3tcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMDQsIDIwNCwgMjA0KTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login',
                templateUrl: './login.component.html',
                styleUrls: ['./login.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "iInd");



class AppComponent {
    constructor() {
        this.title = 'primeng';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 24, vars: 0, consts: [[1, "navbar", "navbar-expand-lg", "navbar-dark", "bg-secondary"], [1, "container-fluid"], ["href", "#", 1, "navbar-brand", 2, "font-size", "25px"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#navbarNav", "aria-controls", "navbarNav", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarNav", 1, "collapse", "navbar-collapse"], [1, "navbar-nav"], [1, "nav-item"], ["aria-current", "page", "routerLink", "/", 1, "nav-link", "active"], ["routerLink", "/admin", 1, "nav-link"], ["routerLink", "/reservas", 1, "nav-link"], ["routerLink", "/page404", 1, "nav-link"], ["routerLink", "/plugins", 1, "nav-link"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Prototipos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ul", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Administrador");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Usuarios");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "P\u00E1gina 404");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Plugins");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "Y31y":
/*!****************************************!*\
  !*** ./src/app/Pipes/buscador.pipe.ts ***!
  \****************************************/
/*! exports provided: BuscadorPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuscadorPipe", function() { return BuscadorPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");


class BuscadorPipe {
    transform(value, args) {
        const usuario = [];
        for (const user of value) {
            if (user.nombre.toLowerCase().indexOf(args.toLowerCase()) > -1) {
                usuario.push(user);
            }
        }
        return usuario;
    }
}
BuscadorPipe.ɵfac = function BuscadorPipe_Factory(t) { return new (t || BuscadorPipe)(); };
BuscadorPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "buscador", type: BuscadorPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BuscadorPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'buscador'
            }]
    }], null, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "cUpR");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "omvX");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _Services_usuarios_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Services/usuarios.service */ "tYC2");
/* harmony import */ var primeng_lts_inputtext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng-lts/inputtext */ "GLSp");
/* harmony import */ var primeng_lts_tabview__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng-lts/tabview */ "NKTi");
/* harmony import */ var primeng_lts_calendar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng-lts/calendar */ "u9kx");
/* harmony import */ var primeng_lts_inputnumber__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng-lts/inputnumber */ "fxKY");
/* harmony import */ var primeng_lts_accordion__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng-lts/accordion */ "nKrT");
/* harmony import */ var primeng_lts_fullcalendar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng-lts/fullcalendar */ "4f/R");
/* harmony import */ var ngx_material_timepicker__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-material-timepicker */ "cw5Z");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _Components_login_login_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./Components/login/login.component */ "Q/My");
/* harmony import */ var _Components_admin_admin_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./Components/admin/admin.component */ "dHHE");
/* harmony import */ var _Components_ofisadmin_ofi53_ofi53_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./Components/ofisadmin/ofi53/ofi53.component */ "335p");
/* harmony import */ var _Components_ofisadmin_ofi52_ofi52_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./Components/ofisadmin/ofi52/ofi52.component */ "2420");
/* harmony import */ var _Components_ofisadmin_ofi51_ofi51_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./Components/ofisadmin/ofi51/ofi51.component */ "g2Gk");
/* harmony import */ var _Components_mantenimientos_usuarios_usuarios_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./Components/mantenimientos/usuarios/usuarios.component */ "fnnu");
/* harmony import */ var _Components_mantenimientos_salas_salas_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./Components/mantenimientos/salas/salas.component */ "fEZP");
/* harmony import */ var _Components_reservas_reservas_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./Components/reservas/reservas.component */ "iU4l");
/* harmony import */ var _Components_plugins_plugins_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./Components/plugins/plugins.component */ "9S7Z");
/* harmony import */ var _Components_page404_page404_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./Components/page404/page404.component */ "I8Qr");
/* harmony import */ var _Components_header_header_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./Components/header/header.component */ "BCOl");
/* harmony import */ var _Components_footer_footer_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./Components/footer/footer.component */ "CVoa");
/* harmony import */ var _Pipes_buscador_pipe__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./Pipes/buscador.pipe */ "Y31y");





























const routes = [
    { path: '', component: _Components_login_login_component__WEBPACK_IMPORTED_MODULE_14__["LoginComponent"], pathMatch: 'full' },
    { path: 'admin', component: _Components_admin_admin_component__WEBPACK_IMPORTED_MODULE_15__["AdminComponent"] },
    { path: 'salas', component: _Components_mantenimientos_salas_salas_component__WEBPACK_IMPORTED_MODULE_20__["SalasComponent"] },
    { path: 'usuarios', component: _Components_mantenimientos_usuarios_usuarios_component__WEBPACK_IMPORTED_MODULE_19__["UsuariosComponent"] },
    { path: 'reservas', component: _Components_reservas_reservas_component__WEBPACK_IMPORTED_MODULE_21__["ReservasComponent"] },
    { path: 'plugins', component: _Components_plugins_plugins_component__WEBPACK_IMPORTED_MODULE_22__["PluginsComponent"] },
    { path: 'page404', component: _Components_page404_page404_component__WEBPACK_IMPORTED_MODULE_23__["Page404Component"] }
];
class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_13__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [_Services_usuarios_service__WEBPACK_IMPORTED_MODULE_5__["UsuariosService"]], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            primeng_lts_inputtext__WEBPACK_IMPORTED_MODULE_6__["InputTextModule"],
            primeng_lts_tabview__WEBPACK_IMPORTED_MODULE_7__["TabViewModule"],
            primeng_lts_calendar__WEBPACK_IMPORTED_MODULE_8__["CalendarModule"],
            primeng_lts_inputnumber__WEBPACK_IMPORTED_MODULE_9__["InputNumberModule"],
            primeng_lts_accordion__WEBPACK_IMPORTED_MODULE_10__["AccordionModule"],
            ngx_material_timepicker__WEBPACK_IMPORTED_MODULE_12__["NgxMaterialTimepickerModule"],
            primeng_lts_fullcalendar__WEBPACK_IMPORTED_MODULE_11__["FullCalendarModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(routes)
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_13__["AppComponent"],
        _Components_login_login_component__WEBPACK_IMPORTED_MODULE_14__["LoginComponent"],
        _Components_admin_admin_component__WEBPACK_IMPORTED_MODULE_15__["AdminComponent"],
        _Components_ofisadmin_ofi53_ofi53_component__WEBPACK_IMPORTED_MODULE_16__["Ofi53Component"],
        _Components_ofisadmin_ofi52_ofi52_component__WEBPACK_IMPORTED_MODULE_17__["Ofi52Component"],
        _Components_ofisadmin_ofi51_ofi51_component__WEBPACK_IMPORTED_MODULE_18__["Ofi51Component"],
        _Components_mantenimientos_usuarios_usuarios_component__WEBPACK_IMPORTED_MODULE_19__["UsuariosComponent"],
        _Components_mantenimientos_salas_salas_component__WEBPACK_IMPORTED_MODULE_20__["SalasComponent"],
        _Components_reservas_reservas_component__WEBPACK_IMPORTED_MODULE_21__["ReservasComponent"],
        _Components_plugins_plugins_component__WEBPACK_IMPORTED_MODULE_22__["PluginsComponent"],
        _Components_page404_page404_component__WEBPACK_IMPORTED_MODULE_23__["Page404Component"],
        _Components_header_header_component__WEBPACK_IMPORTED_MODULE_24__["HeaderComponent"],
        _Components_footer_footer_component__WEBPACK_IMPORTED_MODULE_25__["FooterComponent"],
        _Pipes_buscador_pipe__WEBPACK_IMPORTED_MODULE_26__["BuscadorPipe"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
        primeng_lts_inputtext__WEBPACK_IMPORTED_MODULE_6__["InputTextModule"],
        primeng_lts_tabview__WEBPACK_IMPORTED_MODULE_7__["TabViewModule"],
        primeng_lts_calendar__WEBPACK_IMPORTED_MODULE_8__["CalendarModule"],
        primeng_lts_inputnumber__WEBPACK_IMPORTED_MODULE_9__["InputNumberModule"],
        primeng_lts_accordion__WEBPACK_IMPORTED_MODULE_10__["AccordionModule"],
        ngx_material_timepicker__WEBPACK_IMPORTED_MODULE_12__["NgxMaterialTimepickerModule"],
        primeng_lts_fullcalendar__WEBPACK_IMPORTED_MODULE_11__["FullCalendarModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_13__["AppComponent"],
                    _Components_login_login_component__WEBPACK_IMPORTED_MODULE_14__["LoginComponent"],
                    _Components_admin_admin_component__WEBPACK_IMPORTED_MODULE_15__["AdminComponent"],
                    _Components_ofisadmin_ofi53_ofi53_component__WEBPACK_IMPORTED_MODULE_16__["Ofi53Component"],
                    _Components_ofisadmin_ofi52_ofi52_component__WEBPACK_IMPORTED_MODULE_17__["Ofi52Component"],
                    _Components_ofisadmin_ofi51_ofi51_component__WEBPACK_IMPORTED_MODULE_18__["Ofi51Component"],
                    _Components_mantenimientos_usuarios_usuarios_component__WEBPACK_IMPORTED_MODULE_19__["UsuariosComponent"],
                    _Components_mantenimientos_salas_salas_component__WEBPACK_IMPORTED_MODULE_20__["SalasComponent"],
                    _Components_reservas_reservas_component__WEBPACK_IMPORTED_MODULE_21__["ReservasComponent"],
                    _Components_plugins_plugins_component__WEBPACK_IMPORTED_MODULE_22__["PluginsComponent"],
                    _Components_page404_page404_component__WEBPACK_IMPORTED_MODULE_23__["Page404Component"],
                    _Components_header_header_component__WEBPACK_IMPORTED_MODULE_24__["HeaderComponent"],
                    _Components_footer_footer_component__WEBPACK_IMPORTED_MODULE_25__["FooterComponent"],
                    _Pipes_buscador_pipe__WEBPACK_IMPORTED_MODULE_26__["BuscadorPipe"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                    primeng_lts_inputtext__WEBPACK_IMPORTED_MODULE_6__["InputTextModule"],
                    primeng_lts_tabview__WEBPACK_IMPORTED_MODULE_7__["TabViewModule"],
                    primeng_lts_calendar__WEBPACK_IMPORTED_MODULE_8__["CalendarModule"],
                    primeng_lts_inputnumber__WEBPACK_IMPORTED_MODULE_9__["InputNumberModule"],
                    primeng_lts_accordion__WEBPACK_IMPORTED_MODULE_10__["AccordionModule"],
                    ngx_material_timepicker__WEBPACK_IMPORTED_MODULE_12__["NgxMaterialTimepickerModule"],
                    primeng_lts_fullcalendar__WEBPACK_IMPORTED_MODULE_11__["FullCalendarModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(routes)
                ],
                providers: [_Services_usuarios_service__WEBPACK_IMPORTED_MODULE_5__["UsuariosService"]],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_13__["AppComponent"]],
                schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["CUSTOM_ELEMENTS_SCHEMA"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "dHHE":
/*!*****************************************************!*\
  !*** ./src/app/Components/admin/admin.component.ts ***!
  \*****************************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../header/header.component */ "BCOl");
/* harmony import */ var primeng_lts_tabview__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng-lts/tabview */ "NKTi");
/* harmony import */ var _ofisadmin_ofi53_ofi53_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ofisadmin/ofi53/ofi53.component */ "335p");
/* harmony import */ var _mantenimientos_usuarios_usuarios_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../mantenimientos/usuarios/usuarios.component */ "fnnu");
/* harmony import */ var _mantenimientos_salas_salas_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../mantenimientos/salas/salas.component */ "fEZP");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../footer/footer.component */ "CVoa");








class AdminComponent {
    constructor() { }
    ngOnInit() {
    }
}
AdminComponent.ɵfac = function AdminComponent_Factory(t) { return new (t || AdminComponent)(); };
AdminComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AdminComponent, selectors: [["app-admin"]], decls: 127, vars: 0, consts: [[1, "container-fluid", "p-2", "d-flex", "justify-content-between", 2, "background-color", "rgb(255, 200, 67)"], [1, "align-self-center"], ["title", "Administradora: Hilda", 1, "dropdown", "me-2"], ["href", "#", "role", "button", "id", "dropdownMenuLink", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "btn", "btn-light", "dropdown-toggle"], [1, "fa-solid", "fa-circle-user", 2, "font-size", "40px"], ["aria-labelledby", "dropdownMenuLink", 1, "dropdown-menu"], ["data-bs-toggle", "offcanvas", "data-bs-target", "#Ayuda", 1, "dropdown-item", 2, "cursor", "pointer"], ["href", "#", 1, "dropdown-item"], [1, "dropdown-divider"], [1, "text-center", "bol"], ["tabindex", "-1", "id", "Ayuda", "aria-labelledby", "offcanvasExampleLabel", 1, "offcanvas", "offcanvas-top", 2, "height", "100vh"], [1, "offcanvas-header", "border-bottom"], ["id", "offcanvasExampleLabel", 1, "offcanvas-title", "fw-bold"], ["type", "button", "data-bs-dismiss", "offcanvas", "aria-label", "Close", 1, "btn-close", "text-reset"], [1, "offcanvas-body"], [1, "text-center"], ["header", "Reservas de cub\u00EDculos y salas de reuni\u00F3n"], [1, "text-center", "fw-bold"], [1, "container-fluid", "text-center"], ["type", "button", "data-bs-toggle", "modal", "data-bs-target", "#admin", 1, "btn", "btn-primary"], ["header", "Mantenimiento de usuarios y salas"], ["type", "button", "data-bs-toggle", "modal", "data-bs-target", "#mant", 1, "btn", "btn-primary"], [1, "container-fluid", "m-0", "p-0"], ["header", "Usuarios"], ["header", "Salas"], ["id", "admin", "tabindex", "-1", "aria-labelledby", "exampleModalLabel", "aria-hidden", "true", 1, "modal", "fade"], [1, "modal-dialog"], [1, "modal-content"], [1, "modal-header"], ["id", "exampleModalLabel", 1, "modal-title"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "btn-close"], [1, "modal-body"], [1, "fw-bold"], [1, "modal-footer"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "btn-secondary"], ["id", "mant", "tabindex", "-1", "aria-labelledby", "exampleModalLabel", "aria-hidden", "true", 1, "modal", "fade"]], template: function AdminComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Administrador");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ul", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Ayuda");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Cerrar Sesi\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "hr", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h6", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Marta Bola\u00F1os");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h3", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Ayuda - Administraci\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Pendiente de agregar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "h1", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "\u00C1rea de Control del Administrador");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "p-tabView");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "p-tabPanel", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "h3", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Oficina 5-3 (Trabajo Colaborativo)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, " Informaci\u00F3n ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "app-ofi53");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "p-tabPanel", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "h3", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Mantenimiento de Usuarios Y Salas de Reuni\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, " Informaci\u00F3n ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "p-tabView");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "p-tabPanel", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "app-usuarios");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "p-tabPanel", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "app-salas");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "app-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "h5", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Administraci\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "button", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "h3", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Reservas de cub\u00EDculos y salas de reuni\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, " Se incluye un mapa de la ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "oficina 5-3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, " con la ubicaci\u00F3n de cada cub\u00EDculo y su n\u00FAmero correspondiente. Cada cub\u00EDculo es un bot\u00F3n y pueden presentar 3 estados y 3 colores. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "La administradora puede presionar los botones para conocer su estado ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "Los botones ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "3, 11 y 7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, " est\u00E1n habilitados como un ejemplo de como funciona");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "La administradora puede habilitar o inhabilitar cub\u00EDculos seg\u00FAn su estado");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "Los cub\u00EDculos que estan ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "Reservados");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, " no se pueden inhabilitar hasta que se desocupen");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "En la parte de ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "cub\u00EDculos y salas de reuni\u00F3n reservadas");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, " se incluye un bot\u00F3n que muestra todas las reservas de cub\u00EDculos y de salas. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "Los botones con el signo ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, " son los que falta de enumerar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "button", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "Cerrar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "h5", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "Mantenimieno de usuarios y salas");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](106, "button", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, "Usuarios");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](110, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, "La administradora puede visualizar en pantalla la lista de usuarios, agregar, modificar o desactivarlos.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, "Se incluye un buscador, donde la administradora busca por el ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, "nombre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, " a los usuarios");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](118, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120, "Salas");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](121, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, "La administradora puede visualizar en pantalla la lista de salas, agregar, modificar o desactivarlas");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "button", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](126, "Cerrar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], primeng_lts_tabview__WEBPACK_IMPORTED_MODULE_2__["TabView"], primeng_lts_tabview__WEBPACK_IMPORTED_MODULE_2__["TabPanel"], _ofisadmin_ofi53_ofi53_component__WEBPACK_IMPORTED_MODULE_3__["Ofi53Component"], _mantenimientos_usuarios_usuarios_component__WEBPACK_IMPORTED_MODULE_4__["UsuariosComponent"], _mantenimientos_salas_salas_component__WEBPACK_IMPORTED_MODULE_5__["SalasComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0NvbXBvbmVudHMvYWRtaW4vYWRtaW4uY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-admin',
                templateUrl: './admin.component.html',
                styleUrls: ['./admin.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "fEZP":
/*!********************************************************************!*\
  !*** ./src/app/Components/mantenimientos/salas/salas.component.ts ***!
  \********************************************************************/
/*! exports provided: SalasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SalasComponent", function() { return SalasComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var primeng_lts_inputnumber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng-lts/inputnumber */ "fxKY");




class SalasComponent {
    constructor() {
        this.capMax = 0;
        this.capPer = 0;
    }
    ngOnInit() {
    }
    desSala() {
        Swal.fire({
            title: '¿Deseas inhabilitar esta sala?',
            text: "Los usuarios no podran realizar reservas a esta sala",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: 'rgb(0, 81, 158)',
            cancelButtonColor: 'rgb(204, 204, 204)',
            confirmButtonText: 'Aceptar',
            calcelButtonText: 'Cancelar',
        }).then((result) => {
            if (result.isConfirmed) {
                const { value: accept } = Swal.fire({
                    input: 'textarea',
                    inputLabel: 'Justificación',
                    inputPlaceholder: 'Justificación...',
                    inputAttributes: {
                        'aria-label': 'Type your message here'
                    },
                    showCancelButton: true,
                    confirmButtonColor: 'rgb(0, 81, 158)',
                    cancelButtonColor: 'rgb(204, 204, 204)',
                    confirmButtonText: 'Aceptar',
                    calcelButtonText: 'Cancelar',
                }).then((result) => {
                    if (result.isConfirmed) {
                        Swal.fire({
                            icon: 'success',
                            title: 'Sala inhabilitada',
                            confirmButtonText: 'Aceptar',
                            confirmButtonColor: 'rgb(0, 81, 158)'
                        });
                    }
                });
            } //uu
        });
    }
}
SalasComponent.ɵfac = function SalasComponent_Factory(t) { return new (t || SalasComponent)(); };
SalasComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SalasComponent, selectors: [["app-salas"]], decls: 85, vars: 6, consts: [[1, "text-center"], [1, "container", "row"], [1, "col-12", "col-lg-3"], ["for", "rol"], ["id", "rol", 1, "form-select", "form-select-lg"], ["value", ""], [1, "mt-2"], ["for", "titulo"], ["type", "text", "id", "nom", 1, "form-control", "form-control-lg"], ["inputId", "minmax-buttons", "name", "max", 1, "img-fluid", 3, "ngModel", "showButtons", "min", "ngModelChange"], ["inputId", "minmax-buttons", "name", "per", 3, "ngModel", "showButtons", "min", "ngModelChange"], [1, "d-grid", "mt-4"], ["type", "submit", 1, "btn", "btn-primary"], [1, "col-12", "col-lg-9"], [1, "table-responsive"], [1, "table", "table-bordered"], ["scope", "col"], ["scope", "row"], ["type", "button", 1, "btn", "btn-warning"], ["type", "button", 1, "btn", "btn-danger", 3, "click"]], template: function SalasComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Control de salas");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "A\u00F1adir salas");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Seleccione la ubicaci\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "select", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "option", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Nombre de la sala");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Capacidad m\u00E1xima");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p-inputNumber", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SalasComponent_Template_p_inputNumber_ngModelChange_22_listener($event) { return ctx.capMax = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Aforo permitido");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p-inputNumber", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SalasComponent_Template_p_inputNumber_ngModelChange_26_listener($event) { return ctx.capPer = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "A\u00F1adir");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "table", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "th", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Ubicaci\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "th", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Sala");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "th", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Capacidad M\u00E1xima");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "th", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Aforo permitido");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "th", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Estado");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "th", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Modificar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "th", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Habilitar/Inhabilitar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "th", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Oficina 5-3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Sala 1: Sala de Asesor\u00EDa Acad\u00E9mica");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Disponible");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "td", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Modificar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "td", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SalasComponent_Template_button_click_66_listener() { return ctx.desSala(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Inhabilitar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "th", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Oficina 5-1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "Sala 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "Disponible");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "td", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "Modificar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "td", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SalasComponent_Template_button_click_83_listener() { return ctx.desSala(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "Inhabilitar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.capMax)("showButtons", true)("min", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.capPer)("showButtons", true)("min", 0);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"], primeng_lts_inputnumber__WEBPACK_IMPORTED_MODULE_2__["InputNumber"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0NvbXBvbmVudHMvbWFudGVuaW1pZW50b3Mvc2FsYXMvc2FsYXMuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SalasComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-salas',
                templateUrl: './salas.component.html',
                styleUrls: ['./salas.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "fnnu":
/*!**************************************************************************!*\
  !*** ./src/app/Components/mantenimientos/usuarios/usuarios.component.ts ***!
  \**************************************************************************/
/*! exports provided: UsuariosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsuariosComponent", function() { return UsuariosComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var src_app_Services_usuarios_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/Services/usuarios.service */ "tYC2");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _Pipes_buscador_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../Pipes/buscador.pipe */ "Y31y");






function UsuariosComponent_tr_43_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "th", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "td", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Modificar");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "td", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UsuariosComponent_tr_43_Template_button_click_19_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.desUser(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Desactivar");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const usuario_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](usuario_r1.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](usuario_r1.nombre);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](usuario_r1.apellido1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](usuario_r1.apellido2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](usuario_r1.rol);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](usuario_r1.correo);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](usuario_r1.estado);
} }
class UsuariosComponent {
    constructor(ser) {
        this.ser = ser;
        this.buscador = '';
        this.usuarios = [];
        this.usuarios = this.ser.getUsuarios();
    }
    ngOnInit() {
    }
    actUser() {
        Swal.fire({
            title: '¿Deseas habilitar este usuario?',
            text: 'El usuario podrá acceder al sistema y realizar reservas',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: 'rgb(0, 81, 158)',
            cancelButtonColor: 'rgb(204, 204, 204)',
            confirmButtonText: 'Aceptar',
            calcelButtonText: 'Cancelar',
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    icon: 'success',
                    title: 'Usuario habilitado',
                    confirmButtonText: 'Aceptar',
                    confirmButtonColor: 'rgb(0, 81, 158)'
                });
            }
        });
    }
    desUser() {
        Swal.fire({
            title: '¿Deseas inhabilitar este usuario?',
            text: "El usuario no podra ingresar al sistema ni realizar ninguna reserva",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: 'rgb(0, 81, 158)',
            cancelButtonColor: 'rgb(204, 204, 204)',
            confirmButtonText: 'Aceptar',
            calcelButtonText: 'Cancelar',
        }).then((result) => {
            if (result.isConfirmed) {
                const { value: accept } = Swal.fire({
                    input: 'textarea',
                    inputLabel: 'Justificación',
                    inputPlaceholder: 'Justificación...',
                    inputAttributes: {
                        'aria-label': 'Type your message here'
                    },
                    showCancelButton: true,
                    confirmButtonColor: 'rgb(0, 81, 158)',
                    cancelButtonColor: 'rgb(204, 204, 204)',
                    confirmButtonText: 'Desactivar',
                    calcelButtonText: 'Cancelar',
                }).then((result) => {
                    if (result.isConfirmed) {
                        Swal.fire({
                            icon: 'success',
                            title: 'Usuario Desactivado',
                            confirmButtonText: 'Aceptar',
                            confirmButtonColor: 'rgb(0, 81, 158)'
                        });
                    }
                });
            } //uu
        });
    }
}
UsuariosComponent.ɵfac = function UsuariosComponent_Factory(t) { return new (t || UsuariosComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_Services_usuarios_service__WEBPACK_IMPORTED_MODULE_1__["UsuariosService"])); };
UsuariosComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UsuariosComponent, selectors: [["app-usuarios"]], decls: 111, vars: 5, consts: [[1, "text-center"], [1, "princ", "p-1"], [1, "card"], [1, "card-header", "d-flex", "justify-content-between"], [1, "d-flex"], [1, "fa-regular", "fa-circle-user", "align-self-center", 2, "font-size", "35px"], [1, "ms-2"], ["type", "button", "data-bs-toggle", "offcanvas", "data-bs-target", "#addUser", 1, "btn", "btn-primary"], [1, "card-body"], [1, "buscador"], [1, "form-floating"], ["type", "text", "id", "floatingInput", "placeholder", "carlos", "name", "buscador", 1, "form-control", "form-control-lg", 3, "ngModel", "ngModelChange"], ["for", "floatingInput"], [1, "table-responsive"], [1, "table", "table-bordered"], ["scope", "col"], [4, "ngFor", "ngForOf"], ["tabindex", "-1", "id", "addUser", "aria-labelledby", "offcanvasExampleLabel", 1, "offcanvas", "offcanvas-end"], [1, "offcanvas-header", "border-bottom"], ["id", "offcanvasExampleLabel", 1, "offcanvas-title"], ["type", "button", "data-bs-dismiss", "offcanvas", "aria-label", "Close", 1, "btn-close", "text-reset"], [1, "offcanvas-body"], ["action", ""], ["for", "titulo"], ["type", "text", "id", "nom", 1, "form-control", "form-control-lg"], [1, "mt-2"], ["for", "rol"], ["id", "rol", 1, "form-select", "form-select-lg"], ["value", "", "selected", ""], ["type", "email", "id", "correo", 1, "form-control", "form-control-lg"], [1, "d-grid", "mt-4"], ["type", "submit", 1, "btn", "btn-primary"], ["tabindex", "-1", "id", "modUser", "aria-labelledby", "offcanvasExampleLabel", 1, "offcanvas", "offcanvas-end"], ["scope", "row"], ["type", "button", "data-bs-toggle", "offcanvas", "data-bs-target", "#modUser", 1, "btn", "btn-warning"], ["type", "button", 1, "btn", "btn-danger", 3, "click"]], template: function UsuariosComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Usuarios del sistema");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h2", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Lista de Usuarios");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "A\u00F1adir Usuarios");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UsuariosComponent_Template_input_ngModelChange_15_listener($event) { return ctx.buscador = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Buscar por nombre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "table", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "th", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "th", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Nombre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "th", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Primer Apellido");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "th", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Segundo Apellido");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "th", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Rol");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "th", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Correo electr\u00F3nico");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "th", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Estado");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "th", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Modificar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "th", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Activar/Desactivar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](43, UsuariosComponent_tr_43_Template, 21, 7, "tr", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](44, "buscador");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "h5", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "A\u00F1adir usuarios");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "form", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "label", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Nombre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "input", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "label", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Primer Apellido");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "input", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "label", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Segundo Apellido");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "input", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "label", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Seleccione el rol del usuario");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "select", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "option", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Selecciona el rol");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "label", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "Correo electr\u00F3nico");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "input", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "button", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "A\u00F1adir");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "h5", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "Modificar usuarios");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](82, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "form", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "label", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "Nombre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](88, "input", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "label", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "Primer Apellido");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](92, "input", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "label", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "Segundo Apellido");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](96, "input", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "label", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "Seleccione el rol del usuario");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "select", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "option", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "Selecciona el rol");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "label", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "Correo electr\u00F3nico");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](106, "input", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "button", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, "Aceptar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](110, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.buscador);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](44, 2, ctx.usuarios, ctx.buscador));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_x"]], pipes: [_Pipes_buscador_pipe__WEBPACK_IMPORTED_MODULE_4__["BuscadorPipe"]], styles: [".princ[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.buscador[_ngcontent-%COMP%] {\n  width: 30%;\n  margin: auto;\n}\n\n@media screen and (max-width: 540px) {\n  .buscador[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n\n@media screen and (min-width: 541px) and (max-width: 720px) {\n  .buscador[_ngcontent-%COMP%] {\n    width: 70%;\n  }\n}\n\n.addUser[_ngcontent-%COMP%] {\n  width: 30%;\n}\n\n@media screen and (max-width: 540px) {\n  .addUser[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n\n@media screen and (min-width: 541px) and (max-width: 720px) {\n  .addUser[_ngcontent-%COMP%] {\n    width: 50%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQ29tcG9uZW50cy9tYW50ZW5pbWllbnRvcy91c3Vhcmlvcy91c3Vhcmlvcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7QUFDSjs7QUFFQTtFQUNJLFVBQUE7RUFDQSxZQUFBO0FBQ0o7O0FBQUk7RUFISjtJQUlRLFdBQUE7RUFHTjtBQUNGOztBQUZLO0VBTkw7SUFPUSxVQUFBO0VBS047QUFDRjs7QUFBQTtFQUNJLFVBQUE7QUFHSjs7QUFGSTtFQUZKO0lBR1EsV0FBQTtFQUtOO0FBQ0Y7O0FBSEs7RUFOTDtJQU9RLFVBQUE7RUFNTjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvQ29tcG9uZW50cy9tYW50ZW5pbWllbnRvcy91c3Vhcmlvcy91c3Vhcmlvcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcmluY3tcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uYnVzY2Fkb3J7XHJcbiAgICB3aWR0aDogMzAlO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTQwcHgpe1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgIH1cclxuICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA1NDFweCkgYW5kIChtYXgtd2lkdGg6IDcyMHB4KXtcclxuICAgICAgICB3aWR0aDogNzAlO1xyXG4gICAgIH1cclxufVxyXG5cclxuXHJcblxyXG4uYWRkVXNlcntcclxuICAgIHdpZHRoOiAzMCU7XHJcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NDBweCl7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgfVxyXG4gICAgIFxyXG4gICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDU0MXB4KSBhbmQgKG1heC13aWR0aDogNzIwcHgpe1xyXG4gICAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICAgfVxyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UsuariosComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-usuarios',
                templateUrl: './usuarios.component.html',
                styleUrls: ['./usuarios.component.scss']
            }]
    }], function () { return [{ type: src_app_Services_usuarios_service__WEBPACK_IMPORTED_MODULE_1__["UsuariosService"] }]; }, null); })();


/***/ }),

/***/ "g2Gk":
/*!***************************************************************!*\
  !*** ./src/app/Components/ofisadmin/ofi51/ofi51.component.ts ***!
  \***************************************************************/
/*! exports provided: Ofi51Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ofi51Component", function() { return Ofi51Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");


class Ofi51Component {
    constructor() { }
    ngOnInit() {
    }
}
Ofi51Component.ɵfac = function Ofi51Component_Factory(t) { return new (t || Ofi51Component)(); };
Ofi51Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Ofi51Component, selectors: [["app-ofi51"]], decls: 2, vars: 0, consts: [[1, "container", "w-75", "mx-auto"], ["src", "assets/Oficina 5-1v.png", "alt", "Oficina 5-1"]], template: function Ofi51Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0NvbXBvbmVudHMvb2Zpc2FkbWluL29maTUxL29maTUxLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Ofi51Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-ofi51',
                templateUrl: './ofi51.component.html',
                styleUrls: ['./ofi51.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "iU4l":
/*!***********************************************************!*\
  !*** ./src/app/Components/reservas/reservas.component.ts ***!
  \***********************************************************/
/*! exports provided: ReservasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReservasComponent", function() { return ReservasComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../header/header.component */ "BCOl");
/* harmony import */ var primeng_lts_tabview__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng-lts/tabview */ "NKTi");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var primeng_lts_calendar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng-lts/calendar */ "u9kx");
/* harmony import */ var ngx_material_timepicker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-material-timepicker */ "cw5Z");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../footer/footer.component */ "CVoa");








function ReservasComponent_ng_template_229_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Cancelar");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ReservasComponent_ng_template_231_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Confirmar");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ReservasComponent_ng_template_239_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Cancelar");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ReservasComponent_ng_template_241_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Confirmar");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ReservasComponent_ng_template_275_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Cancelar");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ReservasComponent_ng_template_277_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Confirmar");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ReservasComponent_ng_template_285_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Cancelar");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ReservasComponent_ng_template_287_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Confirmar");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ReservasComponent_ng_template_321_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 138);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Cancelar");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ReservasComponent_ng_template_323_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 139);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Confirmar");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ReservasComponent_ng_template_331_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 138);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Cancelar");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ReservasComponent_ng_template_333_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 139);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Confirmar");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class ReservasComponent {
    constructor() {
        this.date = "";
        this.date2 = "";
        this.date3 = "";
        this.time = "";
        this.time2 = "";
        this.time3 = "";
        this.time4 = "";
        this.time5 = "";
        this.time6 = "";
    }
    ngOnInit() {
    }
    nodisp() {
        Swal.fire({
            icon: 'error',
            title: 'Cubículo no disponible',
            text: 'Motivo abcdefg',
            confirmButtonText: 'Aceptar',
            confirmButtonColor: 'rgb(0, 81, 158)'
        });
    }
    resev() {
        Swal.fire({
            icon: 'info',
            title: '<strong>Cubículo Reservado</strong>',
            html: '<h5><b>Usuario: </b>Carlos Matarrita</h5>' +
                '<h5><b>Rol: </b>Encargado de XXXXXX</h5>' +
                '<h5><b>Fecha: </b>2022-04-26</h5>' +
                '<h5><b>Hora: </b>8:00am - 3:00pm</h5>' +
                '<hr>',
            showDenyButton: true,
            showCancelButton: true,
            showConfirmButton: false,
            denyButtonText: 'Eliminar Reserva',
            cancelButtonText: 'Cerrar'
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire('Saved!', '', 'success');
            }
            else if (result.isDenied) {
                Swal.fire({
                    title: '¿Deseas eliminar tu reserva?',
                    text: "No podrás utilizar este espacio",
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonText: 'Aceptar',
                    cancelButtonText: 'Cerrar',
                    confirmButtonColor: 'rgb(0, 81, 158)'
                }).then((result) => {
                    if (result.isConfirmed) {
                        Swal.fire({
                            icon: 'success',
                            title: 'Reserva eliminada',
                            confirmButtonText: 'Aceptar',
                            confirmButtonColor: 'rgb(0, 81, 158)'
                        });
                    }
                });
            }
        });
    }
    resev2() {
        Swal.fire({
            icon: 'info',
            title: '<strong>Cubículo Reservado</strong>',
            html: '<h5><b>Usuario: </b>Lucia Mora</h5>' +
                '<h5><b>Rol: </b>Asistente de XXXXXX</h5>' +
                '<h5><b>Fecha: </b>2022-04-28</h5>' +
                '<h5><b>Hora: </b>9:00am - 4:00pm</h5>',
            showDenyButton: false,
            showCancelButton: true,
            showConfirmButton: false,
            cancelButtonText: 'Cerrar'
        });
    }
    reservaSala() {
        Swal.fire({
            title: '¿Deseas eliminar tu reserva?',
            text: "No podrás utilizar este espacio",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Aceptar',
            cancelButtonText: 'Cerrar',
            confirmButtonColor: 'rgb(0, 81, 158)'
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    icon: 'success',
                    title: 'Reserva eliminada',
                    confirmButtonText: 'Aceptar',
                    confirmButtonColor: 'rgb(0, 81, 158)'
                });
            }
        });
    }
}
ReservasComponent.ɵfac = function ReservasComponent_Factory(t) { return new (t || ReservasComponent)(); };
ReservasComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ReservasComponent, selectors: [["app-reservas"]], decls: 423, vars: 42, consts: [[1, "container-fluid", "p-2", "d-flex", "justify-content-between", 2, "background-color", "#1976D2"], [1, "align-self-center", "text-light"], ["title", "Usuario: Carlos", 1, "dropdown", "me-2"], ["href", "#", "role", "button", "id", "dropdownMenuLink", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "btn", "btn-light", "dropdown-toggle"], [1, "fa-solid", "fa-circle-user", 2, "font-size", "40px"], ["aria-labelledby", "dropdownMenuLink", 1, "dropdown-menu"], ["data-bs-toggle", "offcanvas", "data-bs-target", "#Ayuda", 1, "dropdown-item", 2, "cursor", "pointer"], ["href", "#", 1, "dropdown-item"], [1, "dropdown-divider"], [1, "text-center", "bol"], [1, "container-fluid", "text-center"], ["type", "button", "data-bs-toggle", "modal", "data-bs-target", "#reservasC", 1, "btn", "btn-primary"], ["header", "Reservar cub\u00EDculos - Oficina 5-3"], [1, "text-center"], [1, "container", "mx-auto", "row", "g-0"], [1, "col-12", "col-lg-3"], [1, "p-3", "border", "text-center", 2, "background-color", "rgb(255, 108, 54)", "font-size", "22px", "font-weight", "bold"], [1, "p-3", "border", "text-center", 2, "background-color", "rgb(204, 204, 204)", "font-size", "22px", "font-weight", "bold"], [1, "p-3", "border", "text-center", 2, "background-color", "rgb(255, 200, 67)", "font-size", "22px", "font-weight", "bold"], [1, "p-3", "border", "text-center", "text-light", 2, "background-color", "rgb(0, 81, 158)", "font-size", "22px", "font-weight", "bold"], [1, "w-100", "row"], [1, "principal", "col-12"], [1, "parteA", "row", "border"], [1, "col-8", "border", "d-flex", "justify-content-center", "align-items-center"], [1, "col-4", "border", "m-0", "p-0", "d-flex", "justify-content-center", "align-items-center"], [1, "parteB", "row", "border"], [1, "col-2", "border", "p-0", "m-0", "row", "align-items-center"], [1, "p-0", "m-0"], ["type", "button", 1, "btn", "btnNoD", "col-12", "p-4"], ["type", "button", 1, "btn", "btnD", "col-12", "mt-1", "p-4"], ["id", "parteB2", 1, "col-7", "border", "p-0", "m-0"], [1, "row", "p-0", "m-0"], ["type", "button", 1, "btn", "btnR", "col-3", "p-4", 3, "click"], ["type", "button", 1, "btn", "btnNoD", "col-3", "p-4"], ["type", "button", 1, "btn", "btnD", "col-3", "p-4"], [1, "col-9"], [1, "row", "row-cols-3", "gy-1"], ["type", "button", 1, "btn", "btnNoD", "p-4", 3, "click"], ["type", "button", 1, "btn", "btnD", "p-4"], ["type", "button", 1, "btn", "btnNoD", "p-4"], [1, "flex-row", "ms-5"], ["type", "button", "disabled", "", 1, "btn", "btnAD", "p-4", "ms-3", "text-light"], ["id", "parteB3", 1, "col-3", "border", "p-0", "m-0"], ["type", "button", "data-bs-toggle", "offcanvas", "data-bs-target", "#offcanvasExample", 1, "btn", "btnD", "col-6", "p-4"], ["type", "button", 1, "btn", "btnR", "col-6", "p-4", 3, "click"], [1, "parteC", "row", "border"], [1, "col-2", "border", "m-0", "p-0", "d-flex", "justify-content-center", "align-items-center"], [1, "col-7", "border", "p-0", "m-0"], ["id", "parteC2", 1, "row", "p-0", "m-0"], [1, "col-3", "border", "p-0", "m-0", "row", "align-items-end"], ["type", "button", 1, "btn", "btnNoD", "col-12", "mt-1", "p-4"], [1, "col-6", "border", "p-0", "m-0", "row"], ["type", "button", 1, "btn", "btnNoD", "col-6", "mt-1", "p-4"], [1, "p-0", "m-0", "align-self-end"], [1, "col-3", "border", "p-0", "m-0", "row", "g-1", "flex-row-reverse", "justify-content-between"], ["type", "button", 1, "btn", "btnNoD", "col-12", "p-3"], [1, "col-3", "border", "m-0", "p-1", "d-flex", "justify-content-center", "align-items-center"], ["header", "Reservar salas de reuni\u00F3n"], [1, "container-fluid"], [1, "table-responsive"], [1, "table", "table-bordered"], ["scope", "col"], ["scope", "row"], [1, "badge", "bg-warning", "text-black", 2, "font-size", "15px"], ["type", "button", "aria-controls", "offcanvasExample", "disabled", "", 1, "btn", "btn-primary"], ["type", "button", 1, "btn", "btn-danger", 3, "click"], ["type", "button", "data-bs-toggle", "modal", "data-bs-target", "#info1", 1, "btn", "btn-primary"], [1, "badge", "text-black", 2, "font-size", "15px", "background-color", "rgb(255, 108, 54)"], ["type", "button", "data-bs-toggle", "offcanvas", "data-bs-target", "#offcanvasExample2", 1, "btn", "btn-primary"], ["type", "button", "disabled", "", 1, "btn", "btn-danger"], ["type", "button", "disabled", "", 1, "btn", "btn-primary"], ["tabindex", "-1", "id", "offcanvasExample", "aria-labelledby", "offcanvasExampleLabel", 1, "offcanvas", "offcanvas-end"], [1, "d-flex", "justify-content-between", "p-3", "border-bottom"], ["id", "offcanvasExampleLabel", 1, "offcanvas-title", "fw-bold"], ["type", "button", "data-bs-dismiss", "offcanvas", "aria-label", "Close", 1, "btn-close", "text-reset"], [1, "offcanvas-body"], ["action", ""], [1, "mt-4"], ["for", "titulo"], ["type", "text", "id", "fecha", 1, "form-control", "form-control-lg"], [1, "mt-2"], ["for", "fecha"], ["dataType", "string", "dateFormat", "yy/mm/dd", "inputId", "icon", "name", "fecja", 3, "readonlyInput", "showButtonBar", "showIcon", "ngModel", "ngModelChange"], ["name", "time", "data-bs-dismiss", "offcanvas", "id", "startTime", "readonly", "", 1, "form-control", "form-control-lg", 3, "ngxTimepicker", "format", "ngModel", "ngModelChange"], [3, "cancelBtnTmpl", "confirmBtnTmpl"], ["picker", ""], ["cancelBtn", ""], ["confirmBtn", ""], ["name", "time2", "data-bs-dismiss", "offcanvas", "id", "startTime", "readonly", "", 1, "form-control", "form-control-lg", 3, "ngxTimepicker", "format", "ngModel", "ngModelChange"], ["picker2", ""], ["cancelBtn2", ""], ["confirmBtn2", ""], [1, "d-grid", "mt-4"], ["type", "submit", 1, "btn", "btn-primary"], ["tabindex", "-1", "id", "offcanvasExample2", "aria-labelledby", "offcanvasExample2Label", 1, "offcanvas", "offcanvas-end"], [1, "offcanvas-header", "border-bottom"], ["id", "offcanvasExampleLabel", 1, "offcanvas-title"], ["type", "text", "id", "nom", 1, "form-control", "form-control-lg"], ["for", "rol"], ["id", "rol", 1, "form-select", "form-select-lg"], ["value", ""], ["dataType", "string", "dateFormat", "yy/mm/dd", "inputId", "icon", "name", "fecha2", 3, "readonlyInput", "showButtonBar", "showIcon", "ngModel", "ngModelChange"], ["name", "time3", "data-bs-dismiss", "offcanvas", "id", "startTime2", "readonly", "", 1, "form-control", "form-control-lg", 3, "ngxTimepicker", "format", "ngModel", "ngModelChange"], ["picker3", ""], ["cancelBtn3", ""], ["confirmBtn3", ""], ["name", "time4", "data-bs-dismiss", "offcanvas", "id", "endTime2", "readonly", "", 1, "form-control", "form-control-lg", 3, "ngxTimepicker", "format", "ngModel", "ngModelChange"], ["picker4", ""], ["cancelBtn4", ""], ["confirmBtn4", ""], ["tabindex", "-1", "id", "offcanvasExample3", "aria-labelledby", "offcanvasExample2Label", 1, "offcanvas", "offcanvas-end"], ["dataType", "string", "dateFormat", "yy/mm/dd", "inputId", "icon", "name", "fecha3", 3, "readonlyInput", "showButtonBar", "showIcon", "ngModel", "ngModelChange"], ["name", "time5", "data-bs-dismiss", "offcanvas", "id", "startTime2", "readonly", "", 1, "form-control", "form-control-lg", 3, "ngxTimepicker", "format", "ngModel", "ngModelChange"], ["picker5", ""], ["cancelBtn5", ""], ["confirmBtn5", ""], ["name", "time6", "data-bs-dismiss", "offcanvas", "id", "endTime2", "readonly", "", 1, "form-control", "form-control-lg", 3, "ngxTimepicker", "format", "ngModel", "ngModelChange"], ["picker6", ""], ["cancelBtn6", ""], ["confirmBtn6", ""], ["tabindex", "-1", "id", "Ayuda", "aria-labelledby", "offcanvasExampleLabel", 1, "offcanvas", "offcanvas-top", 2, "height", "100vh"], ["id", "reservasC", "tabindex", "-1", "aria-labelledby", "exampleModalLabel", "aria-hidden", "true", 1, "modal", "fade"], [1, "modal-dialog"], [1, "modal-content"], [1, "modal-header"], ["id", "exampleModalLabel", 1, "modal-title"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "btn-close"], [1, "modal-body"], [1, "fw-bold"], [1, "modal-footer"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "btn-secondary"], ["id", "info1", "tabindex", "-1", "aria-labelledby", "exampleModalLabel", "aria-hidden", "true", 1, "modal", "fade"], [1, "text-center", "fw-bold"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "btn-primary"], ["data-bs-toggle", "offcanvas", "data-bs-target", "#offcanvasExample", 1, "btn", "btn-secondary", "me-2"], ["data-bs-toggle", "offcanvas", "data-bs-target", "#offcanvasExample", 1, "btn", "btn-primary"], ["data-bs-toggle", "offcanvas", "data-bs-target", "#offcanvasExample2", 1, "btn", "btn-secondary", "me-2"], ["data-bs-toggle", "offcanvas", "data-bs-target", "#offcanvasExample2", 1, "btn", "btn-primary"], ["data-bs-toggle", "offcanvas", "data-bs-target", "#offcanvasExample3", 1, "btn", "btn-secondary", "me-2"], ["data-bs-toggle", "offcanvas", "data-bs-target", "#offcanvasExample3", 1, "btn", "btn-primary"]], template: function ReservasComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Usuarios");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ul", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Ayuda");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Cerrar Sesi\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "hr", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h6", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Carlos Matarrita");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " Informaci\u00F3n ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p-tabView");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p-tabPanel", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "h3", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Resevas de cub\u00EDculos - ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Oficina 5-3 (Trabajo Colaborativo)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "h3", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Estado de los cub\u00EDculos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Disponible");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "No Disponible");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Reservado");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Administrador");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Oficina 5-3 (Trabajo Colaborativo)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, " Sala #2 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "button", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "button", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "button", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ReservasComponent_Template_button_click_65_listener() { return ctx.resev(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "button", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "button", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "button", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "button", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "12");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "button", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ReservasComponent_Template_button_click_78_listener() { return ctx.nodisp(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "11");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "button", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "10");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "button", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "9");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "button", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "13");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "button", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "14");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "button", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "15");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "button", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "Admin");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](93, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "16");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "button", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "button", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ReservasComponent_Template_button_click_98_listener() { return ctx.resev2(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "8");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, " Sala ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](103, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, " #1 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "button", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, "?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "button", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, "?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "button", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, "?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "button", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, "?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "button", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, "?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "button", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](124, "?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "button", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](126, "?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "button", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](128, "?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](130, " Almac\u00E9n ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](131, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](132, " ECEN ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](133, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](134, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "p-tabPanel", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "h2", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](137, "Reservas de salas de reuni\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](138, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "table", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "th", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](145, "Ubicaci\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "th", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](147, "Sala");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "th", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](149, "Capacidad m\u00E1xima");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "th", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](151, "Aforo permitido");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "th", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](153, "Estado");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "th", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](155, "Reserva");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "th", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](157, "Eliminar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "th", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](159, "Informaci\u00F3n de la reserva");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "th", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](163, "Oficina 5-3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](165, "Sala 1: Asesor\u00EDa acad\u00E9mica");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](167, "6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](169, "4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "span", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](172, "Reservado");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "button", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](175, "Reservado");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "button", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ReservasComponent_Template_button_click_177_listener() { return ctx.reservaSala(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](178, "Eliminar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](180, "button", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](181, "Informaci\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](182, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "th", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](184, "Oficina 5-1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](185, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](186, "Sala 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](188, "6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](189, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](190, "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](191, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](192, "span", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](193, "Disponible");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](194, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](195, "button", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](196, "Reservar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](197, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](198, "button", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](199, "Eliminar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](200, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](201, "button", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](202, "Informaci\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](203, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](204, "div", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](205, "div", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](206, "h5", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](207, "Reservar espacio");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](208, "button", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](209, "div", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](210, "form", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](211, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](212, "Cub\u00EDculo # ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](213, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](214, "7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](215, "div", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](216, "label", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](217, "Correo electr\u00F3nico");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](218, "input", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](219, "div", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](220, "label", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](221, "Fecha de la reserva");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](222, "p-calendar", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ReservasComponent_Template_p_calendar_ngModelChange_222_listener($event) { return ctx.date = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](223, "div", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](224, "label", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](225, "Hora de inicio");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](226, "input", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ReservasComponent_Template_input_ngModelChange_226_listener($event) { return ctx.time = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](227, "ngx-material-timepicker", 84, 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](229, ReservasComponent_ng_template_229_Template, 2, 0, "ng-template", null, 86, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](231, ReservasComponent_ng_template_231_Template, 2, 0, "ng-template", null, 87, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](233, "div", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](234, "label", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](235, "Hora de salida");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](236, "input", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ReservasComponent_Template_input_ngModelChange_236_listener($event) { return ctx.time2 = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](237, "ngx-material-timepicker", 84, 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](239, ReservasComponent_ng_template_239_Template, 2, 0, "ng-template", null, 90, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](241, ReservasComponent_ng_template_241_Template, 2, 0, "ng-template", null, 91, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](243, "div", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](244, "button", 93);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](245, "Reservar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](246, "div", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](247, "div", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](248, "h5", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](249, "Reservar sala");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](250, "button", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](251, "div", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](252, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](253, "Sala # 2: Sala general");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](254, "div", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](255, "label", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](256, "Correo electr\u00F3nico");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](257, "input", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](258, "div", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](259, "label", 98);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](260, "Tipo de reuni\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](261, "select", 99);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](262, "option", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](263, "Pendiente de Agregar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](264, "div", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](265, "label", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](266, "Fecha de reserva");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](267, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](268, "p-calendar", 101);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ReservasComponent_Template_p_calendar_ngModelChange_268_listener($event) { return ctx.date2 = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](269, "div", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](270, "label", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](271, "Hora de inicio");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](272, "input", 102);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ReservasComponent_Template_input_ngModelChange_272_listener($event) { return ctx.time3 = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](273, "ngx-material-timepicker", 84, 103);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](275, ReservasComponent_ng_template_275_Template, 2, 0, "ng-template", null, 104, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](277, ReservasComponent_ng_template_277_Template, 2, 0, "ng-template", null, 105, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](279, "div", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](280, "label", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](281, "Hora de salida");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](282, "input", 106);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ReservasComponent_Template_input_ngModelChange_282_listener($event) { return ctx.time4 = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](283, "ngx-material-timepicker", 84, 107);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](285, ReservasComponent_ng_template_285_Template, 2, 0, "ng-template", null, 108, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](287, ReservasComponent_ng_template_287_Template, 2, 0, "ng-template", null, 109, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](289, "div", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](290, "button", 93);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](291, "Reservar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](292, "div", 110);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](293, "div", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](294, "h5", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](295, "Modificar Reserva");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](296, "button", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](297, "div", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](298, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](299, "Sala # 3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](300, "div", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](301, "label", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](302, "Correo electr\u00F3nico");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](303, "input", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](304, "div", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](305, "label", 98);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](306, "Tipo de reuni\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](307, "select", 99);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](308, "option", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](309, "Pendiente de Agregar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](310, "div", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](311, "label", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](312, "Fecha de reserva");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](313, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](314, "p-calendar", 111);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ReservasComponent_Template_p_calendar_ngModelChange_314_listener($event) { return ctx.date3 = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](315, "div", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](316, "label", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](317, "Hora de inicio");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](318, "input", 112);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ReservasComponent_Template_input_ngModelChange_318_listener($event) { return ctx.time5 = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](319, "ngx-material-timepicker", 84, 113);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](321, ReservasComponent_ng_template_321_Template, 2, 0, "ng-template", null, 114, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](323, ReservasComponent_ng_template_323_Template, 2, 0, "ng-template", null, 115, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](325, "div", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](326, "label", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](327, "Hora de salida");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](328, "input", 116);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ReservasComponent_Template_input_ngModelChange_328_listener($event) { return ctx.time6 = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](329, "ngx-material-timepicker", 84, 117);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](331, ReservasComponent_ng_template_331_Template, 2, 0, "ng-template", null, 118, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](333, ReservasComponent_ng_template_333_Template, 2, 0, "ng-template", null, 119, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](335, "div", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](336, "button", 93);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](337, "Reservar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](338, "div", 120);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](339, "div", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](340, "h3", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](341, "Ayuda - Usuarios");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](342, "button", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](343, "div", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](344, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](345, "Pendiente de agregar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](346, "app-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](347, "div", 121);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](348, "div", 122);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](349, "div", 123);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](350, "div", 124);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](351, "h5", 125);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](352, "Reservas de Cub\u00EDculos y salas");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](353, "button", 126);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](354, "div", 127);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](355, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](356, "h2", 128);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](357, "Reservas de cub\u00EDculos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](358, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](359, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](360, "Para realizar una reserva el usuario selecciona el cub\u00EDculo que se encuentre ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](361, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](362, "Disponible");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](363, " y llenar el formulario de reserva.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](364, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](365, "Nota: Solo el usuario que realiza la reserva puede eliminar o modificar su reserva, a los dem\u00E1s no le aparece el bot\u00F3n modificar y eliminar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](366, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](367, "Cada cub\u00EDculo corresponde a un bot\u00F3n y puede presentar 3 estados y 3 colores");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](368, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](369, "Los botones ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](370, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](371, "3, 7 y 11");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](372, " est\u00E1n activos para prueben como funciona seg\u00FAn sus estados");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](373, "h2", 128);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](374, "Reserva de salas de reuni\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](375, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](376, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](377, "En esta secci\u00F3n se muestran todas las salas de reuni\u00F3n que se encuantran activas");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](378, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](379, "Se muestra al usuario la informaci\u00F3n de cada sala y las opciones para reservar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](380, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](381, "Para reservar un sala el usuario presiona el boton ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](382, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](383, "Reservar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](384, " y llenar el formulario");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](385, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](386, "El usuario puede modificar o eliminar su reserva.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](387, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](388, "Nota. Solo el usuario que hace la reserva puede modificar o eliminarla");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](389, "div", 129);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](390, "button", 130);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](391, "Cerrar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](392, "div", 131);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](393, "div", 122);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](394, "div", 123);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](395, "div", 124);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](396, "h5", 125);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](397, "Informaci\u00F3n de la sala");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](398, "button", 126);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](399, "div", 127);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](400, "h4", 132);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](401, "Reserva");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](402, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](403, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](404, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](405, "Reservado para: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](406, "Carlos Matarrita");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](407, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](408, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](409, "Rol: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](410, "Encargado de XXXXXX");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](411, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](412, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](413, "Fecha: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](414, "2022-04-28");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](415, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](416, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](417, "Hora: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](418, "10:30am - 11:30am");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](419, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](420, "div", 129);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](421, "button", 133);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](422, "Aceptar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](228);
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](230);
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](232);
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](238);
        const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](240);
        const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](242);
        const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](274);
        const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](276);
        const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](278);
        const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](284);
        const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](286);
        const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](288);
        const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](320);
        const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](322);
        const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](324);
        const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](330);
        const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](332);
        const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](334);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](222);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("readonlyInput", true)("showButtonBar", true)("showIcon", true)("ngModel", ctx.date);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngxTimepicker", _r0)("format", 12)("ngModel", ctx.time);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cancelBtnTmpl", _r1)("confirmBtnTmpl", _r3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngxTimepicker", _r5)("format", 12)("ngModel", ctx.time2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cancelBtnTmpl", _r6)("confirmBtnTmpl", _r8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("readonlyInput", true)("showButtonBar", true)("showIcon", true)("ngModel", ctx.date2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngxTimepicker", _r10)("format", 12)("ngModel", ctx.time3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cancelBtnTmpl", _r11)("confirmBtnTmpl", _r13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngxTimepicker", _r15)("format", 12)("ngModel", ctx.time4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cancelBtnTmpl", _r16)("confirmBtnTmpl", _r18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("readonlyInput", true)("showButtonBar", true)("showIcon", true)("ngModel", ctx.date3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngxTimepicker", _r20)("format", 12)("ngModel", ctx.time5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cancelBtnTmpl", _r21)("confirmBtnTmpl", _r23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngxTimepicker", _r25)("format", 12)("ngModel", ctx.time6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cancelBtnTmpl", _r26)("confirmBtnTmpl", _r28);
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], primeng_lts_tabview__WEBPACK_IMPORTED_MODULE_2__["TabView"], primeng_lts_tabview__WEBPACK_IMPORTED_MODULE_2__["TabPanel"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], primeng_lts_calendar__WEBPACK_IMPORTED_MODULE_4__["Calendar"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], ngx_material_timepicker__WEBPACK_IMPORTED_MODULE_5__["TimepickerDirective"], ngx_material_timepicker__WEBPACK_IMPORTED_MODULE_5__["NgxMaterialTimepickerComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_x"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"]], styles: [".principal[_ngcontent-%COMP%] {\n  width: 75%;\n  margin: auto;\n}\n@media screen and (max-width: 600px) {\n  .principal[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n.parteA[_ngcontent-%COMP%] {\n  height: 100px;\n}\n.parteB[_ngcontent-%COMP%] {\n  height: 400px;\n}\n.parteB[_ngcontent-%COMP%]   #parteB2[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  flex-direction: column;\n}\n.parteB[_ngcontent-%COMP%]   #parteB3[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-end;\n  flex-direction: column;\n}\n.parteC[_ngcontent-%COMP%] {\n  height: 300px;\n}\n.parteC[_ngcontent-%COMP%]   #parteC2[_ngcontent-%COMP%] {\n  height: 300px;\n}\n.btnD[_ngcontent-%COMP%] {\n  background-color: #ff6c36;\n  font-size: 25px;\n  font-weight: bold;\n}\n.btnD[_ngcontent-%COMP%]:hover {\n  background-color: rgba(255, 108, 54, 0.8);\n}\n.btnNoD[_ngcontent-%COMP%] {\n  background-color: #cccccc;\n  font-size: 25px;\n  font-weight: bold;\n}\n.btnNoD[_ngcontent-%COMP%]:hover {\n  background-color: rgba(204, 204, 204, 0.8);\n}\n.btnAD[_ngcontent-%COMP%] {\n  background-color: #00519e;\n}\n.btnAD[_ngcontent-%COMP%]:hover {\n  background-color: rgba(0, 81, 158, 0.8);\n}\n.btnR[_ngcontent-%COMP%] {\n  background-color: #ffc843;\n  font-size: 25px;\n  font-weight: bold;\n}\n.btnR[_ngcontent-%COMP%]:hover {\n  background-color: rgba(255, 200, 67, 0.8);\n}\n#offcanvasExample[_ngcontent-%COMP%], #offcanvasExample2[_ngcontent-%COMP%], #offcanvasExample3[_ngcontent-%COMP%] {\n  width: 30%;\n}\n@media screen and (max-width: 540px) {\n  #offcanvasExample[_ngcontent-%COMP%], #offcanvasExample2[_ngcontent-%COMP%], #offcanvasExample3[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n@media screen and (min-width: 541px) and (max-width: 720px) {\n  #offcanvasExample[_ngcontent-%COMP%], #offcanvasExample2[_ngcontent-%COMP%], #offcanvasExample3[_ngcontent-%COMP%] {\n    width: 50%;\n  }\n}\n#startTime[_ngcontent-%COMP%]:read-only, #startTime2[_ngcontent-%COMP%]:read-only, #endTime[_ngcontent-%COMP%]:read-only, #endTime2[_ngcontent-%COMP%]:read-only {\n  background-color: #ffffff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQ29tcG9uZW50cy9yZXNlcnZhcy9yZXNlcnZhcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFVBQUE7RUFDQSxZQUFBO0FBQ0o7QUFDSTtFQUpKO0lBS1EsV0FBQTtFQUVOO0FBQ0Y7QUFHQTtFQUNJLGFBQUE7QUFBSjtBQUdBO0VBQ0ksYUFBQTtBQUFKO0FBRUk7RUFDSSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxzQkFBQTtBQUFSO0FBRUk7RUFDSSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxxQkFBQTtFQUNBLHNCQUFBO0FBQVI7QUFJQTtFQUNJLGFBQUE7QUFESjtBQUdJO0VBQ0ksYUFBQTtBQURSO0FBS0E7RUFDSSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQUZKO0FBR0k7RUFDSSx5Q0FBQTtBQURSO0FBS0E7RUFDSSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQUZKO0FBR0k7RUFDSSwwQ0FBQTtBQURSO0FBS0E7RUFDSSx5QkFBQTtBQUZKO0FBR0k7RUFDSSx1Q0FBQTtBQURSO0FBS0E7RUFDSSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQUZKO0FBR0k7RUFDSSx5Q0FBQTtBQURSO0FBS0E7RUFDSSxVQUFBO0FBRko7QUFHSTtFQUZKO0lBR1EsV0FBQTtFQUFOO0FBQ0Y7QUFFSztFQU5MO0lBT1EsVUFBQTtFQUNOO0FBQ0Y7QUFJSTtFQUNJLHlCQUFBO0FBRFIiLCJmaWxlIjoic3JjL2FwcC9Db21wb25lbnRzL3Jlc2VydmFzL3Jlc2VydmFzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByaW5jaXBhbHtcclxuICAgIHdpZHRoOiA3NSU7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBcclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KXtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBcclxuICAgICAgXHJcbiAgICAgfVxyXG59XHJcblxyXG4ucGFydGVBe1xyXG4gICAgaGVpZ2h0OiAxMDBweDtcclxufVxyXG5cclxuLnBhcnRlQntcclxuICAgIGhlaWdodDogNDAwcHg7XHJcblxyXG4gICAgI3BhcnRlQjJ7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIH1cclxuICAgICNwYXJ0ZUIze1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgfVxyXG59XHJcblxyXG4ucGFydGVDe1xyXG4gICAgaGVpZ2h0OiAzMDBweDtcclxuXHJcbiAgICAjcGFydGVDMntcclxuICAgICAgICBoZWlnaHQ6IDMwMHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG4uYnRuRHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDEwOCwgNTQpO1xyXG4gICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAmOmhvdmVye1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAxMDgsIDU0LCAwLjgpO1xyXG4gICAgfVxyXG59XHJcblxyXG4uYnRuTm9Ee1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwNCwgMjA0LCAyMDQpO1xyXG4gICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAmOmhvdmVye1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjA0LCAyMDQsIDIwNCwgMC44KTtcclxuICAgIH1cclxufVxyXG5cclxuLmJ0bkFEe1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDgxLCAxNTgpO1xyXG4gICAgJjpob3ZlcntcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDgxLCAxNTgsIDAuOCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5idG5Se1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjAwLCA2Nyk7XHJcbiAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICY6aG92ZXJ7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDIwMCwgNjcsIDAuOCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbiNvZmZjYW52YXNFeGFtcGxlLCAjb2ZmY2FudmFzRXhhbXBsZTIsICNvZmZjYW52YXNFeGFtcGxlMyB7XHJcbiAgICB3aWR0aDogMzAlO1xyXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTQwcHgpe1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgIH1cclxuICAgICBcclxuICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA1NDFweCkgYW5kIChtYXgtd2lkdGg6IDcyMHB4KXtcclxuICAgICAgICB3aWR0aDogNTAlO1xyXG4gICAgIH0gIFxyXG59XHJcblxyXG5cclxuI3N0YXJ0VGltZSwgI3N0YXJ0VGltZTIsICNlbmRUaW1lLCAjZW5kVGltZTJ7XHJcbiAgICAmOnJlYWQtb25seXtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG4gICAgfVxyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ReservasComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-reservas',
                templateUrl: './reservas.component.html',
                styleUrls: ['./reservas.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "tYC2":
/*!**********************************************!*\
  !*** ./src/app/Services/usuarios.service.ts ***!
  \**********************************************/
/*! exports provided: UsuariosService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsuariosService", function() { return UsuariosService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");


class UsuariosService {
    constructor() {
        this.usuarios = [
            {
                id: 1,
                nombre: 'Carlos',
                apellido1: 'Matarrita',
                apellido2: 'Campos',
                rol: 'Encargado de XXXXXX',
                correo: 'carlos.matarrita@empresa.com',
                estado: 'activo'
            },
            {
                id: 2,
                nombre: 'Lucia',
                apellido1: 'Mora',
                apellido2: 'Castro',
                rol: 'Asistente de XXXXXX',
                correo: 'lucia.mora@empresa.com',
                estado: 'activo'
            },
            {
                id: 3,
                nombre: 'Yadira',
                apellido1: 'Gonzáles',
                apellido2: 'Hernández',
                rol: 'Asistente de XXXXXX',
                correo: 'yadira.gonzales@empresa.com',
                estado: 'activo'
            }
        ];
    }
    getUsuarios() {
        return this.usuarios;
    }
}
UsuariosService.ɵfac = function UsuariosService_Factory(t) { return new (t || UsuariosService)(); };
UsuariosService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UsuariosService, factory: UsuariosService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UsuariosService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "cUpR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map