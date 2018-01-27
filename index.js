
$(document).ready(function(){
$('#btn1').click(function(){
    var searchTerm = $('#txt').val();
  var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search="+searchTerm+"&format=json&callback=?";
    
    $.ajax({
      type: 'GET',
      url: url,
      async: false,
      dataType: 'json',
      success: function(data){
        $('#result').html('');
        for (i=0; i<data[1].length; i++){
       $('#result').append("<li><a href="+data[3][i]+" target='_blank'><h3>"+data[1][i]+"</h3></a><p>"+data[2][i]+"</p></li>");
        }
      },
      error: function(errorMessage){
        alert('Error');
      }
      
           });
      });
  
});

$("#txt").keyup(function(event){
    if(event.keyCode == 13){
       $('#btn1').click(); 
    }
});