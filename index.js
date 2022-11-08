var post=1;
$('.add-link').on('click', function()
{
    let gif =$('.gif-link').val();
    let str =`<div class="card1 border m-4">
    <img class="card-img-top" src="${gif}" alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title">Title</h5>
      <p class="card-text">Description</p>
      <div class="main">
       <button id=`+post+` onclick=add_like(`+post+`)>💗 like 0</button>
    </div>
  </div>`
  console.log(gif);
  post=post+1;
  console.log(post);
  $('.gifs').append(str);
});
var button = document.getElementById("clickme"),
  count = 0;
// button.onclick = function() {
//   count += 1;
//   button.innerHTML = "💗 like " + count;
// };

function add_like(post_id){
    console.log(post_id);
    var cuurent_like_count= parseInt(document.getElementById(post_id).innerText.split(" ")[2])+1;
    document.getElementById(post_id).innerHTML ="💗 like "+ cuurent_like_count;
}
$.ajax({
  url: 'http://localhost:5500',
  type:'GET',
  success: function(data){
    data.forEach(element =>{
      let str =`<div class="card1 border m-4">
    <img class="card-img-top" src="${element.link}" alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title">Title</h5>
      <p class="card-text">Description</p>
      <div class="main">
       <button id=`+post+` onclick=add_like(`+post+`)>💗 like 0</button>
    </div>
  </div>`
  post=post+1;
  console.log(post);
  $('.gifs').append(str);
    });
 }
});
