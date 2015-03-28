$(function(){
    var $rotatingFella = $('#testWheel');
    
    rotate($rotatingFella, 50);
    
})

function rotate($obj, r){
    var $parent = $obj.parent();
    console.log($obj.offset());
    
    var x0 = $parent.offset().left;
    var y0 = $parent.offset().top;
    var rsq = r*r;
   
//    $obj.offset({left:x++,top:y++});
    
    var x = x0;
    var y = y0;
    
    var interval = window.setInterval(function(){
        console.log((x-x0)*(x-x0), (x-x0)*(x-x0) + y0);
        console.log(Math((x-x0)*(x-x0), (x-x0)*(x-x0) + y0));
        y = Math.sqrt((x-x0)*(x-x0) - rsq) + y0;
        $obj.offset({left:x,top:y})
        x++;
    }, 50)
    
    var timeout = setTimeout(function(){
        window.clearInterval(interval);
    },500)
    
    
    
}