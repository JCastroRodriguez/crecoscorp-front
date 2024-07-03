jQuery(document).ready(function($) {
    'use strict';
    /*Default table*/
    $('#example').DataTable({
        "pagingType": "full_numbers",
        "lengthMenu": [
            [10, 25, 50, -1],
            [10, 25, 50, "All"]
        ],
        responsive: true,
        language: {
            search: "_INPUT_",
            searchPlaceholder: "Search records",
        }

    });

    $('.outlay-datatables label').addClass('form-group');

    /*Exportable datatables*/
    $('#example-2').DataTable({
        dom: 'Bfrtip',
        buttons: [
            'copyHtml5',
            'excelHtml5',
            'csvHtml5',
            'pdfHtml5'
        ]
    });

    $('.dt-buttons a').addClass('btn btn-primary');


});
