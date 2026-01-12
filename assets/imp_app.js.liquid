var APP_URL = "XEPATH";
//Start Name and number 
//End Name and number 


/*
Utility function to allow for simple query string lookups
*/
function queryString()
{
   // This function is anonymous, is executed immediately and 
  // the return value is assigned to QueryString!
  var query_string = {};
  var query = window.location.search.substring(1);
  var varss = query.split("&");
    var vars = varss[1].split("--");
    
  
  for (var i=0;i<vars.length;i++) {
    var pair = vars[i].split("=");
        // If first entry with this name
    if (typeof query_string[pair[0]] === "undefined") {
      query_string[pair[0]] = decodeURIComponent(pair[1]);
        // If second entry with this name
    } else if (typeof query_string[pair[0]] === "string") {
      var arr = [ query_string[pair[0]],decodeURIComponent(pair[1]) ];
      query_string[pair[0]] = arr;
        // If third or later entry with this name
    } else {
      query_string[pair[0]].push(decodeURIComponent(pair[1]));
    }
  } 
  
  return query_string;
}



function addItem()
{
    var query_string = {};
  var query = window.location.search.substring(1);
  var vars = query.split("&");
//   var url = new URL(url_string);
//   var c = url.searchParams.get("c");
  

   // var vars = varss[1].split("--");

   
   for (var i=0;i<vars.length;i++) {
    var pair = vars[i].split("=");
         // If first entry with this name
    if (typeof query_string[pair[0]] === "undefined") {
      query_string[pair[0]] = decodeURIComponent(pair[1]);
        // If second entry with this name
    } else if (typeof query_string[pair[0]] === "string") {
      var arr = [ query_string[pair[0]],decodeURIComponent(pair[1]) ];
      query_string[pair[0]] = arr;
        // If third or later entry with this name
    } else {
      query_string[pair[0]].push(decodeURIComponent(pair[1]));
    }
   }
   
      //get potential of multiple items
      var cartItems = decodeURI(query_string.ref).replace( /\+/g, ' ' );
      var items = JSON.parse(cartItems);
      var itemNum = (items.length)-1;
     
      var waiting = 3000;
      if(itemNum > 4){
        waiting = (itemNum/2)*3000;
      }

      for(var i in items){    
        var this_item =items[i];
        var properties= this_item.properties;
        if (this_item.design_id > 0){
          properties['_refid'] = this_item.design_id;
        }
        
        //add the item
        CartJS.addItem(this_item.variant_id,this_item.quantity, properties, {

          // Define a success callback to display a success message.
          "success": function(data, textStatus, jqXHR) {
            $('#info').addClass('message-success');
            $('#info').html('Redirecting to the cart.....Please Wait.');

            if(i == itemNum){
              setTimeout(function() { window.location.href = '/cart';}, waiting);

            }

          },

          // Define an error callback to display an error message.
          "error": function(jqXHR, textStatus, errorThrown) {
            $('#info').addClass('message-error');
            $('#info').html('There was a problem adding to the cart! <br><p style="color:black;"> Attempting cart addition again...<p>');
            location.reload();
            console.log(errorThrown);
         
          }
        });  
      }
}
