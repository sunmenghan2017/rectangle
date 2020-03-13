/* global Rectangle: true */
$(function() {
    var $width = $('#width'),
    $height = $('#height'),
  
        $area = $('#area');
  
  
    $btnCal.click(function(){
        var w = $width.val(),
            h = $height.val();
  
  
        var r = new Rectangle(w, h);
            a = w * h;	
  
  
        $perimeter.val(r.perimeter());
        $area.val(r.area());
    });
});