
/*global $*/
/*global document*/

$(function () {
    
  'use strict';
    
  // Adjust  slider height
 
    
    //featured work shuffle
    $('.featured-work ul li ').on('click',function(){
        $(this).addClass('active').siblings().removeClass('active');
        if($(this).data('class')=='all'){
            $('.shuffle-imgs .col-sm').css('opacity',1);
            
        }else{
            $('.shuffle-imgs .col-sm').css('opacity','.08');
             $($(this).data('class')).parent().css('opacity',1);
             
        }
    });
});


var lis = $(".options-box ul li")
lis.eq(0).css("backgroundColor","tomato")
lis.eq(1).css("backgroundColor","teal")
lis.eq(2).css("backgroundColor","#09c")
lis.eq(3).css("backgroundColor","yellow")
lis.eq(4).css("backgroundColor","orange")

lis.click(function(){
    
    var c = $(this).css("backgroundColor");
    $("body").css("color",c)
})


$(".options-box i").click(function(){
    
    $(".colors-box").toggle(1000);
})

$(document).ready(function(){

    $("#loading .spinner").fadeOut(2000 , function(){
        
        
        $("#loading").fadeOut(2000 , function(){
            
            $("body").css("overflow","auto")
            
    $("#loading").remove();        
            
        })
    })
    
})

