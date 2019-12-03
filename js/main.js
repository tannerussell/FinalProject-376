$(function(){
   //initializes the "console" with a starting message
  $('#console-box').append('console is ready...');
  
    //displays the attributes and contents of the month drop down box selected
    $('input[type=text]').change(function(){
        var sel = $('select').val();
        $('#console-box').append('<br>month:|value:' + sel);
    })
    
    //displays the attributes and contents of the text input box
  $('input[type=text]').blur(function(){
    $('#console-box').append('<br>class:'+$(this).attr("class")+'|value:'+$(this).val());
    $(this).toggleClass('selected').siblings().removeClass('selected');
  });
});