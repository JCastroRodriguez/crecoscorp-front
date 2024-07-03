$(document).ready(function() {
    "use strict";
    /*Validate input*/

    function setFormValidation(id) {
        $(id).validate({
            errorPlacement: function(error, element) {
                $(element).parent('div').addClass('has-error');
            }
        });
    }

    $(document).ready(function() {
        setFormValidation('#TypeValidation');
    });

    /*Input Mask*/

    $('#phone').inputmask("(999) 999-9999");
    $('#date').inputmask("99/99/9999");
    $('#phone2').inputmask("+92 999 999 999");
    $('#product-key').inputmask("a*-999-a999");
    $('#currency').inputmask("$ 999,999,999.99");
    $('#percent').inputmask("99%");
    $('#ip').inputmask("999.999.999.9999");


    /*Select 2*/

    $(".select2").select2();

    /* Bootstrap tagsinput*/
    $('.tagsinput').tagsinput('items');

    /*Bootstrap Color Picker*/

    $('#cp1').colorpicker();
    $('#cp2').colorpicker();

    $('#cp3').colorpicker({
        color: '#AA3399',
        format: 'rgba'
    });

    $('#cp4').colorpicker({
        color: "#88cc33",
        horizontal: true
    });

    $('#cp5').colorpicker({
        color: '#ffaa00',
        container: true,
        inline: true
    });

    $('#cp6').colorpicker({
        customClass: 'colorpicker-2x',
        sliders: {
            saturation: {
                maxLeft: 200,
                maxTop: 200
            },
            hue: {
                maxTop: 200
            },
            alpha: {
                maxTop: 200
            }
        }
    });

    $('#cp7').colorpicker({
        color: "transparent",
        format: "hex"
    });
    /*Date Picker*/

    $('#datetimepicker1').datetimepicker();

    $('#datetimepicker2').datetimepicker({
        format: 'LT'
    });

    $('#datetimepicker3').datetimepicker();

    $('#datetimepicker4').datetimepicker({
        defaultDate: "1/1/2017",
        disabledDates: [
            moment("1/1/2017"),
            new Date(2017, 1, 1),
            "1/2/2017 00:53"
        ]
    });

    $('#datetimepicker5').datetimepicker({
        viewMode: 'years'
    });



    // Code for the Validator
    /*var $validator = $('.wizard-card form').validate({
        rules: {
            nombreSolicitante: {
                required: true,
                minlength: 3
            },
            apellidoSolicitante: {
                required: true,
                minlength: 3
            },
            celularSolicitante: {
                required: true,
                minlength: 10
            },
            emailSolicitante: {
                required: true,
                minlength: 3,
            },
            provinciaSolicitante: {
                required: true
            },
            sectorSolicitante: {
                required: true,
                minlength: 3,
            },
            tipoIdenSolicitante: {
                required: true
            },
            identificacionSolicitante: {
                required: true,
                minlength: 10,
            },
            usuarioSolicitante: {
                required: true,
                minlength: 3,
            },
            claveSolicitante: {
                required: true,
                minlength: 3,
            },
            nombreGarante: {
                required: true,
                minlength: 3
            },
            apellidoGarante: {
                required: true,
                minlength: 3
            },
            celularGarante: {
                required: true,
                minlength: 10
            },
            emailGarante: {
                required: true,
                minlength: 3,
            },
            provinciaGarante: {
                required: true
            },
            sectorGarante: {
                required: true,
                minlength: 3,
            },
            tipoIdenGarante: {
                required: true
            },
            identificacionGarante: {
                required: true,
                minlength: 10,
            },
        },

        errorPlacement: function(error, element) {
            $(element).parent('div').addClass('has-error');
        }
    });*/

    // Wizard Initialization
    $('.wizard-card').bootstrapWizard({
        'tabClass': 'nav nav-pills',
        'nextSelector': '.btn-next',
        'previousSelector': '.btn-previous',

        onNext: function(tab, navigation, index) {
            var $valid = $('.wizard-card form').valid();
            if (!$valid) {
                $validator.focusInvalid();
                return false;
            }
        },

        onInit: function(tab, navigation, index) {

            //check number of tabs and fill the entire row
            var $total = navigation.find('li').length;
            var $width = 100 / $total;
            var $wizard = navigation.closest('.wizard-card');

            var $display_width = $(document).width();

            if ($display_width < 600 && $total > 3) {
                $width = 50;
            }

            navigation.find('li').css('width', $width + '%');
            var $first_li = navigation.find('li:first-child a').html();
            var $moving_div = $('<div class="moving-tab">' + $first_li + '</div>');
            $('.wizard-card .wizard-navigation').append($moving_div);
            refreshAnimation($wizard, index);
            $('.moving-tab').css('transition', 'transform 0s');
        },

        onTabClick: function(tab, navigation, index) {
            var $valid = $('.wizard-card form').valid();

            if (!$valid) {
                return false;
            } else {
                return true;
            }
        },

        onTabShow: function(tab, navigation, index) {
            var $total = navigation.find('li').length;
            var $current = index + 1;

            var $wizard = navigation.closest('.wizard-card');

            // If it's the last tab then hide the last button and show the finish instead
            if ($current >= $total) {
                $($wizard).find('.btn-next').hide();
                $($wizard).find('.btn-finish').show();
            } else {
                $($wizard).find('.btn-next').show();
                $($wizard).find('.btn-finish').hide();
            }

            var button_text = navigation.find('li:nth-child(' + $current + ') a').html();

            setTimeout(function() {
                $('.moving-tab').text(button_text);
            }, 150);

            var checkbox = $('.footer-checkbox');

            if (!index == 0) {
                $(checkbox).css({
                    'opacity': '0',
                    'visibility': 'hidden',
                    'position': 'absolute'
                });
            } else {
                $(checkbox).css({
                    'opacity': '1',
                    'visibility': 'visible'
                });
            }

            refreshAnimation($wizard, index);
        }
    });


    // Prepare the preview for profile picture
    $("#wizard-picture").change(function() {
        readURL(this);
    });

    $('[data-toggle="wizard-radio"]').click(function() {
        wizard = $(this).closest('.wizard-card');
        wizard.find('[data-toggle="wizard-radio"]').removeClass('active');
        $(this).addClass('active');
        $(wizard).find('[type="radio"]').removeAttr('checked');
        $(this).find('[type="radio"]').attr('checked', 'true');
    });

    $('[data-toggle="wizard-checkbox"]').click(function() {
        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
            $(this).find('[type="checkbox"]').removeAttr('checked');
        } else {
            $(this).addClass('active');
            $(this).find('[type="checkbox"]').attr('checked', 'true');
        }
    });

    $('.set-full-height').css('height', 'auto');

    //Function to show image before upload

    function readURL(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();

            reader.onload = function(e) {
                $('#wizardPicturePreview').attr('src', e.target.result).fadeIn('slow');
            }
            reader.readAsDataURL(input.files[0]);
        }
    }

    $(window).resize(function() {
        $('.wizard-card').each(function() {
            var $wizard = $(this);
            var index = $wizard.bootstrapWizard('currentIndex');
            refreshAnimation($wizard, index);

            $('.moving-tab').css({
                'transition': 'transform 0s'
            });
        });
    });

    function refreshAnimation($wizard, index) {
        var total_steps = $wizard.find('li').length;
        var move_distance = $wizard.width() / total_steps;
        var step_width = move_distance;
        move_distance *= index;

        var $current = index + 1;

        if ($current == 1) {
            move_distance -= 8;
        } else if ($current == total_steps) {
            move_distance += 8;
        }

        $wizard.find('.moving-tab').css('width', step_width);
        $('.moving-tab').css({
            'transform': 'translate3d(' + move_distance + 'px, 0, 0)',
            'transition': 'all 0.5s cubic-bezier(0.29, 1.42, 0.79, 1)'

        });
    }

    /*Summernote*/

    $('.summernote').summernote({
        height: 300,
    });


    /*Tinymce*/

    tinymce.init({
        selector: '.tinymce',
        height: 300,
        plugins: [
            'advlist autolink lists link image charmap print preview anchor',
            'searchreplace visualblocks code fullscreen',
            'insertdatetime media table contextmenu paste code'
        ],
        toolbar: 'insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image',

    });

    /*Markdown Editor*/

    $("#textarea").markdown({
        savable: true,
        onShow: function(e) {
            alert("Showing " + e.$textarea.prop("tagName").toLowerCase() + "#" + e.$textarea.attr("id") + " as Markdown Editor...")
        },
        onPreview: function(e) {
            var previewContent

            if (e.isDirty()) {
                var originalContent = e.getContent()

                previewContent = "Prepended text here..." + "\n" + originalContent + "\n" + "Apended text here..."
            } else {
                previewContent = "Default content"
            }

            return previewContent
        },
        onSave: function(e) {
            alert("Saving '" + e.getContent() + "'...")
        },
        onChange: function(e) {
            console.log("Changed!")
        },
        onFocus: function(e) {
            alert("Focus triggered!")
        },
        onBlur: function(e) {
            alert("Blur triggered!")
        }
    })


});
