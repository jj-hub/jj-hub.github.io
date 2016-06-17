/*
.top {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  width: 100%;
  height: 23px;
}
*/
$(window).scroll(function() {
    var wt = $(window).scrollTop();
    var wh = $(window).height();
    var dh = $(document).height();
//    console.log('wt['+wt+']==dh['+dh+']+wh['+wh+']('+(dh-wh)+')');
    if( wt == dh - wh) {
        gl_page.n();
    }
});

$('.pheader').hide();
var gl_page = new Page();
    gl_page.initCache();
/*
//var intervalID = setInterval(function(){alert("Interval reached");}, 5000);
$(document).ready(function(e){
    $('.search-panel .dropdown-menu').find('a').click(function(e) {
		e.preventDefault();
		var param = $(this).attr("href").replace("#","");
		var concept = $(this).text();
		$('.search-panel span#search_concept').text(concept);
		$('.input-group #search_param').val(param);
	});
});

*/

function igo(){
    $( "tr" ).hide();
    $( "tr:contains("+$("#search_string").val()+")" ).show();
    return false;
}

function istrcmp_asc ( str1, str2 ) {return ( ( str1 == str2 ) ? 0 : ( ( str1 > str2 ) ? 1 : -1 ) );}
function istrcmp_dsc ( str1, str2 ) {return ( ( str1 == str2 ) ? 0 : ( ( str1 < str2 ) ? 1 : -1 ) );}

function isort_str_asc(by_id){$('tr').sort(function(a,b){return istrcmp_asc($('>#'+by_id,a).html(),$('>#'+by_id,b).html());}).appendTo('#my_table');}
function isort_str_dsc(by_id){$('tr').sort(function(a,b){return istrcmp_dsc($('>#'+by_id,a).html(),$('>#'+by_id,b).html());}).appendTo('#my_table');}

function isort_int_asc(by_id){$('tr').sort(function(a,b){return parseFloat($('>#'+by_id,a).html())-parseFloat($('>#'+by_id,b).html());}).appendTo('#my_table');}
function isort_int_dsc(by_id){$('tr').sort(function(a,b){return parseFloat($('>#'+by_id,b).html())-parseFloat($('>#'+by_id,a).html());}).appendTo('#my_table');}

/*
function handleClick(cb,tag) {
  console.log("Clicked, new value = " + cb.checked);
  if(cb.checked){isort_asc(tag);}else{isort_dsc(tag);}
  return false;
}
*/

