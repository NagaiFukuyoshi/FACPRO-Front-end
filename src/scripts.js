/*!
    * Start Bootstrap - SB Admin v7.0.7 (https://startbootstrap.com/template/sb-admin)
    * Copyright 2013-2023 Start Bootstrap
    * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-sb-admin/blob/master/LICENSE)
    */
    // 
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Toggle the side navigation
    const sidebarToggle = document.body.querySelector('#sidebarToggle');
    if (sidebarToggle) {
        // Uncomment Below to persist sidebar toggle between refreshes
        // if (localStorage.getItem('sb|sidebar-toggle') === 'true') {
        //     document.body.classList.toggle('sb-sidenav-toggled');
        // }
        sidebarToggle.addEventListener('click', event => {
            event.preventDefault();
            document.body.classList.toggle('sb-sidenav-toggled');
            localStorage.setItem('sb|sidebar-toggle', document.body.classList.contains('sb-sidenav-toggled'));
        });
    }

});

    /*$(document).ready(function(){
        function agregarfila(){
            var html = '<tr class="infotable">';
            html += '<td><input class="tamaño" type="text" required="required" (keydown.enter)="filtrarc(dato)" [(ngModel)]="dato"></td>';
            html += '</tr>';
            $('tbody').append(html);
        }
        $("a[id*='agregar_celda']").on("click",function(){});
        $(html).appendTo($("table:eq(0)").find("tbody"));
    });*/

    /*function agregarfila(){
        var html ='<tr class="infotable">';
        html += '<td><input class="tamaño" type="text" required="required" (keydown.enter)="filtrarc(dato)" [(ngModel)]="dato"></td>';
        html += '</tr>';
        $('#codeSearchcuenta').append(html);
    }

    $(document).ready(function(){
        $('#agregar_celda').click(function(agregarfila()));
    });*/

    /*$(document).ready(function(){
        $('agregar_celda').click(function(
            $('#codeSearchcuenta').append('<tr class="infotable"><td><input class="tamaño" type="text" required="required" (keydown.enter)="filtrarc(dato)" [(ngModel)]="dato"></td></tr>')
        ));
    });*/

    function agregarfila(){
        var tabla = 0;
        tabla = document.querySelector("#codeSearchcuenta > tbody");
        tabla.innerHTML+='<tr class="infotable"><td><input class="tamaño" type="text" required="required" (keydown.enter)="filtrarc(dato)" [(ngModel)]="dato"></td></tr>';
    }
