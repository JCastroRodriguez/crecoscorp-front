"use strict";
$(document).ready(function() {
    // toastr

    $(".toast1").click(function() {
        $.toast().reset('all');
        $.toast({
            heading: 'Top left',
            text: 'Use the predefined ones, or specify a custom position object.',
            position: 'top-left',
            bgColor: "#3F51B5",
            loaderBg: '#ff6849',
            icon: 'info',
            hideAfter: 3500
        });

    });
    $(".toast2").click(function() {
        $.toast().reset('all');
        $.toast({
            heading: 'Top right',
            text: 'Use the predefined ones, or specify a custom position object.',
            position: 'top-right',
            bgColor: "#3F51B5",
            loaderBg: '#ff6849',
            icon: 'info',
            hideAfter: 3500
        });

    });
    $(".toast3").click(function() {
        $.toast().reset('all');
        $.toast({
            heading: 'Bottom left',
            text: 'Use the predefined ones, or specify a custom position object.',
            position: 'bottom-left',
            bgColor: "#3F51B5",
            loaderBg: '#ff6849',
            icon: 'info',
            hideAfter: 3500
        });

    });
    $(".toast4").click(function() {
        $.toast().reset('all');
        $.toast({
            heading: 'Bottom right',
            text: 'Use the predefined ones, or specify a custom position object.',
            position: 'bottom-right',
            bgColor: "#3F51B5",
            loaderBg: '#ff6849',
            icon: 'info',
            hideAfter: 3500
        });
    });
    $(".toast5").click(function() {
        $.toast().reset('all');
        $("body").addClass("top-center-fullwidth");
        $.toast({
            heading: 'Top center',
            text: 'Use the predefined ones, or specify a custom position object.',
            position: 'top-center',
            bgColor: "#3F51B5",
            loaderBg: '#ff6849',
            icon: 'info',
            hideAfter: 3500
        });
    });
    $(".toast6").click(function() {
        $.toast().reset('all');
        $("body").addClass("bottom-center-fullwidth");
        $.toast({
            heading: 'Bottom right',
            text: 'Use the predefined ones, or specify a custom position object.',
            position: 'bottom-center',
            bgColor: "#3F51B5",
            loaderBg: '#ff6849',
            icon: 'info',
            hideAfter: 3500
        });
    });

    /*Sweet Alert*/

    var SweetAlert = function() {};

    //examples 
    SweetAlert.prototype.init = function() {

            //Basic
            $('#sa-basic').click(function() {
                swal({
                    title: "Here's a message!",
                    confirmButtonColor: "#566FC9",
                });
            });

            //A title with a text under
            $('#sa-title').click(function() {
                swal({
                    title: "Here's a message!",
                    text: "Lorem ipsum dolor sit amet",
                    confirmButtonColor: "#566FC9",
                });
            });

            //Success Message
            $('#sa-success').click(function() {
                swal({
                    title: "good job!",
                    type: "success",
                    text: "Lorem ipsum dolor sit amet",
                    confirmButtonColor: "#3cb878",
                });
            });

            //Warning Message
            $('#sa-warning').click(function() {
                swal({
                    title: "Are you sure?",
                    text: "You won't be able to revert this!",
                    type: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#fcb03b",
                    confirmButtonText: "Yes, delete it!",
                    closeOnConfirm: false
                }, function() {
                    swal("Deleted!", "Your file has been deleted.", "success");
                });
            });

            //Parameter
            $('#sa-option').click(function() {
                swal({
                    title: "Are you sure?",
                    text: "You won't be able to revert this!",
                    type: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#fcb03b",
                    confirmButtonText: "Yes, delete it!",
                    cancelButtonText: "No, cancel plx!",
                    closeOnConfirm: false,
                    closeOnCancel: false
                }, function(isConfirm) {
                    if (isConfirm) {
                        swal("Deleted!", "Your file has been deleted.", "success");
                    } else {
                        swal("Cancelled", "Your file is safe :)", "error");
                    }
                });
            });

            //Custom Image
            $('#sa-image').click(function() {
                swal({
                    title: "Gary Robinson",
                    text: "Commented on your status",
                    imageUrl: "../../img/avatars/avatar.png",
                    confirmButtonColor: "#ea65a2",

                });
            });


        },
        //init
        $.SweetAlert = new SweetAlert, $.SweetAlert.Constructor = SweetAlert;

    $.SweetAlert.init();
});
