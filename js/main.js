jQuery("document").ready(function($){
    
    //Declarando variavel para armazenar ID do navbar = #menu
    var nav = $('#menu-scroll');
    
    //Quando a página se movimenta pelo scroll
    $(window).scroll(function () {
        
        //Se o nav for maior que 50
        if ($(this).scrollTop() > 50) {
            //Adiciona a classe Ninty
            nav.addClass('ninty');
        } else {
            //Remove a classe Ninty e adiciona a classe Fifty
            nav.removeClass('ninty').addClass('fifty');
        }
    });
 
    $(".scroll").click(function(event){        
        event.preventDefault();
        $('html,body').animate({scrollTop:$(this.hash).offset().top}, 2000);
   });
   
   $('#input-search').on('keyup', function() {
        var rex = new RegExp($(this).val(), 'i');
        $('.searchable-container .items').hide();
        $('.searchable-container .items').filter(function() {
            return rex.test($(this).text());
        }).show();
    });
    
    
    // Disable scroll zooming and bind back the click event
    var onMapMouseleaveHandler = function (event) {
        var that = $(this);

        that.on('click', onMapClickHandler);
        that.off('mouseleave', onMapMouseleaveHandler);
        that.find('iframe').css("pointer-events", "none");
    }

    var onMapClickHandler = function (event) {
        var that = $(this);

          // Disable the click handler until the user leaves the map area
          that.off('click', onMapClickHandler);

          // Enable scrolling zoom
          that.find('iframe').css("pointer-events", "auto");

          // Handle the mouse leave event
          that.on('mouseleave', onMapMouseleaveHandler);
        }

        // Enable map zooming with mouse scroll when the user clicks the map
        $('.maps.embed-container').on('click', onMapClickHandler);
    
    
    $('#contact-form').bootstrapValidator({
    //        live: 'disabled',
        message: 'This value is not valid',
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            Name: {
                validators: {
                    notEmpty: {
                        message: 'The Name is required and cannot be empty'
                    }
                }
            },
            email: {
                validators: {
                    notEmpty: {
                        message: 'The email address is required'
                    },
                    emailAddress: {
                        message: 'The email address is not valid'
                    }
                }
            },
            tel: {
                validators: {
                    notEmpty: {
                        message: 'The tel is required'
                    }
                }
            },
            Message: {
                validators: {
                    notEmpty: {
                        message: 'The Message is required and cannot be empty'
                    }
                }
            }
        }
    });
   
});