console.log($());


// function moveup(){
//     $('#mainpic').click(function(){
//         alert('you clicked me!');

//     });
// }





 $(document).ready(function(){


//     $('#mainpic').click(function() {
//         console.log($(this).attr("src"));
//         var temp = $(this).attr("src");
//         $(this).attr("src", $(this).attr("data-alt-src"));
//         $(this).attr("data-alt-src", temp);
        
        
        
       
    // });

    
    
    $('#selectionbox2').hide();
    $('#player1').hide();
    $('#player2').hide();

     
    $('#beach').hover(
        function(){
        $('#backgroundwindow').addClass('class1 shadow');
        $('#opaque').addClass('opacity');
        },
        function(){
            $('#backgroundwindow').removeClass('class1 shadow');
            $('#opaque').removeClass('opacity');
        });
    
    $('#planet').hover(
        function(){
        $('#backgroundwindow').addClass('class2 shadow');
        $('#opaque').addClass('opacity');
        },
        
        function(){
            $('#backgroundwindow').removeClass('class2 shadow');
            $('#opaque').removeClass('opacity');
        });

    $('#dojo').hover(
        function(){
        $('#backgroundwindow').addClass('class3 shadow');
        $('#opaque').addClass('opacity');
        },
        
        function(){
            $('#backgroundwindow').removeClass('class3 shadow');
            $('#opaque').removeClass('opacity');
        });

    $('#forest').hover(
        function(){
        $('#backgroundwindow').addClass('class4 shadow');
        $('#opaque').addClass('opacity');
        },
        
        function(){
            $('#backgroundwindow').removeClass('class4 shadow');
            $('#opaque').removeClass('opacity');
        });

    $('#matrix').hover(
        function(){
        $('#backgroundwindow').addClass('class5 shadow');
        $('#opaque').addClass('opacity');
        },
        
        function(){
            $('#backgroundwindow').removeClass('class5 shadow');
            $('#opaque').removeClass('opacity');
        });
    
    $('#snow').hover(
        function(){
        $('#backgroundwindow').addClass('class6 shadow');
        $('#opaque').addClass('opacity');
        },
        
        function(){
            $('#backgroundwindow').removeClass('class6 shadow');
            $('#opaque').removeClass('opacity');
            
        });

        // $('button').hover(
        //     function(){
        //         var preview = $(this).val();
        //         $('#backgroundwindow').css('background-image', preview);
        //         $('#backgroundwindow').addClass('shadow');
        //         $('#opaque').addClass('opacity');
        //     },
        //     function(){
        //         var preview = $(this).val();
        //         $('#backgroundwindow').css('background-image', 'none');
        //         $('#backgroundwindow').removeClass('shadow');
        //         $('#opaque').removeClass('opacity');
        //     }
        // );

    // $('#beach').click(function(){
    //    $('#wrapper').addClass("class1");  
       
    // });

    // $('#planet').click(function(){
    //     $('#wrapper').addClass("class2");
    // });

    // $('#dojo').click(function(){
    //     $('#wrapper').addClass("class3");
    // });

    // $('#forest').click(function(){
    //     $('#wrapper').addClass("class4");
    // });
    // $('#matrix').click(function(){
    //     $('#wrapper').addClass("class5");
    // });
    // $('#snow').click(function(){
    //     $('#wrapper').addClass("class6");
    // });
    $('button').click(function(){
            var newbackground = $(this).val();
            $('#backgroundwindow').css('background-image', newbackground);
        $('#selectionbox').hide(); 
        $('#selectionbox2').show();
        $('#opaque').css('background-color','rgba(16,16,16,0)'); // sets the opacity of the opaque div to zero
        
         });

    
    $('#select1').change(function(){
        var player1 = $(this).val();
        $('#player1').attr('src', player1); 
        $('#player1').show();
    });
    $('#select2').change(function(){
        var player2 = $(this).val();
        $('#player2').attr('src', player2);
        $('#player2').show();
    });
 });

