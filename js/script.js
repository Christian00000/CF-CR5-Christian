var jsonData = JSON.parse(data);

$(document).ready(function() {

    for (var i = 0; i < jsonData.length; i++) {
        $(".content").append(`
        <div id= "frame" class="frame my-3  col-12 col-md-6 ">
            <div id="box"class= " col-12">   
                    <div class="img"><img id="img${i}"src='${jsonData[i].image}'></div>
                    <div class="right ml-2  ">
                        <div class="up">
                         <p id= "name" class="h3"> ${jsonData[i].movieName}  </p>
                         <p class="description"> ${jsonData[i].description}</p>
                        </div>
                        <div id="${i}"class="down d-flex align-items-baseline">
                        <button class = "btn"><img class="thumb" src="img/thumb.png"></button>
                         <div class="likes rounded-circle"> ${jsonData[i].likes}</div> 
                         
                         
                        </div>
                       
                    </div >
                   
            </div>
        </div>`);
    }

})

$(document).ready(function() {
    $(".btn").on("click", function() {
        var index = $(this).parent().attr("id");
        jsonData[index].likes++;
        $(this).parent().find(".likes").html(jsonData[index].likes);


    })
})