$(function(){
    //get elem
//     var $width = $('#width'),
//       $height = $('#height'),
//       $btnCal = $('#calculate'),
//       $perimeter = $('#perimeter'),
//       $area = $('#area'),
//       $widthValidate = $('#width-validate'),
//       $heightValidate = $('#height-validate'),
//       isPassValidate = false;

//   $forkMeGH.show('https://github.com/wangding/rectangle');
//   $bszPageFooter.show('body');

//   $width.focusout(function() {
//     var result = validate($width.val());
//     isPassValidate = result.isOK;
//     if(!result.isOK) {
//       $widthValidate.html('宽度' + result.reason);
//       $width.select();
//     } else {
//       $widthValidate.html('');
//     }
//   });

//   $width.keypress(function(e) {
//     if(!isLegalKey(e.key, e.target.value, e.target.selectionStart)) {
//       e.preventDefault();
//     }
//   });

//   $height.focusout(function() {
//     var result = validate($height.val());
//     isPassValidate = result.isOK;
//     if(!result.isOK) {
//       $heightValidate.html('高度' + result.reason);
//       $height.select();
//     } else {
//       $heightValidate.html('');
//     }
//   });

//   $height.keypress(function(e) {
//     if(!isLegalKey(e.key, e.target.value, e.target.selectionStart)) {
//       e.preventDefault();
//     }
//   });

//   $btnCal.click(function(){
//     if(!isPassValidate) return;

//     var w = $width.val(),
//         h = $height.val();

//     var r = new Rectangle(w, h);

//     $perimeter.val(r.perimeter());
//     $area.val(r.area());
//   });

    console.log("hello world");
    var $width = $('#width'),
    $height = $('#height'),
    $btnCal = $('#calculate'),
    $perimeter = $('#perimeter'),
    $area = $("#area");
    /**calc button click event */
    $btnCal.click(function(){
    //get dom elem

    //get value
    var w =Number($width.val()) ,
        h =Number($height.val());
    //calculate
    var p = 2*(w+h),
        a=w*h;
    //output
    $perimeter.val(p);
    $area.val(a);
    });
    
    


})