$(function(){
    console.log('hello world');
    var $width = $('#width'),$height = $('#height'),$btnCal = $('#calculate'),$perimeter = $('#perimeter'),$area = $('#area');
    function roundF(x, n) {
        return Math.round(x * Math.pow(10, n)) / Math.pow(10, n);
    }
    /**calc button click event */
    $btnCal.click(function(){
        //get value
        var w =Number($width.val()),h =Number($height.val());
        //calculate
        var p = roundF(2 *(w + h), 2),a = roundF(w * h, 2);
        //output
        $perimeter.val(p);
        $area.val(a);
    });
});