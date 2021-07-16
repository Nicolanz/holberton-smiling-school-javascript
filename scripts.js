
// Task 1 code
$.get( "https://smileschool-api.hbtn.info/quotes", function(data, statusText, xhr) {
    if (xhr.status == "200") {
        for (let i = 0; i < data.length; i++) {

            for (const property in data[i]) {
                if (property == "id"){
                    id = data[i][property];
                }
                else if (property == "pic_url"){
                    image = data[i][property];
                }
                else if (property == "name"){
                    name = data[i][property];
                }
                else if (property == "text"){
                    text = data[i][property];
                }
                else if (property == "title"){
                    title = data[i][property];
                }
            }
            if (id == 1){
                $(".loader").css("display", "none");
                $(".quotes").append('<div class="carousel-inner quotes-carousel"></div>');
            }
            $(".quotes-carousel").append(`
                <div class='carousel-item mt-5 mb-5 text-white'>
                    <div class='div-slider d-flex flex-row flex-wrap m-auto justify-content-between align-items-center col-10'>\
                        <div class='col-12 col-md-3 d-flex align-items-center justify-content-center m-auto'> 
                            <img class=''  src='${image}'> 
                        </div> 
                        <div class="col-12 mt-5 mt-md-0 col-md-8">
                            <p>« ${text}</p>
                            <div class="mt-5">
                                <h2>${name}</h2>
                                <span>${title}</span>
                            </div>
                        </div> 
                    </div> 
                </div>`
            );
            if (id == 1){
                $( ".quotes-carousel .carousel-item" ).addClass("active");
            }
        }
        $(".quotes").append(`
        <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
            <span class="prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
            <span class="next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
        </a>
        `);
    }
});


// Task 2

$('.latest_videos_carousel').css("display", "none");
$.get( "https://smileschool-api.hbtn.info/popular-tutorials", function(data, statusText, xhr) {
    if (xhr.status == "200") {

        $('.pink_loader').css("display", "none");
        $('#carouselExampleControls2').append(`
        <div class="carousel-inner container col-9 latest_videos_carousel" role="listbox">

        <!--First slide-->
       <div class="carousel-item active">
           <div class="row ">
               <div class="col-12 col-md-6 col-lg-3">
                   <div class="card-deck p-3 card_1">
                       <div class="view overlay position-relative">
                           <div class="position-absolute  h-100 w-100 d-flex align-items-center justify-content-center">
                               <img class="w-30 h-50" src="images/play.png" alt="">
                           </div>
                           <img class="img-fluid img_card_1" src="" alt="">
                       </div>
                       <div class="c-body">
                           <h5 class="card-title mt-3 bold-font"></h5>
                           <p class="light-font">
                           </p>
                           <div class="d-flex justify-content-start align-items-center">
                               <img class="author_image" src="" alt="">
                               <h6 class="ml-3 mt-2 regular-font"></h6>
                           </div>
                           <div class="mt-3 d-flex align-items-center card_stars">
                           </div>
                       </div>
                   </div>
               </div>
               <div class="col-md-6 col-lg-3 clearfix d-none d-md-block">
                   <div class="card-deck p-3 card_2">
                       <div class="view overlay position-relative">
                           <div class="position-absolute  h-100 w-100 d-flex align-items-center justify-content-center">
                               <img class="w-30 h-50" src="images/play.png" alt="">
                           </div>
                           <img class="img-fluid img_card_2" src="" alt="">
                       </div>
                       <div class="c-body">
                           <h5 class="card-title mt-3 bold-font"></h5>
                           <p class="light-font">
                               
                           </p>
                           <div class="d-flex justify-content-start align-items-center">
                               <img class="author_image" src="" alt="">
                               <h6 class="ml-3 mt-2 regular-font"></h6>
                           </div>
                           <div class="mt-3 d-flex align-items-center card_stars">
                           </div>
                       </div>
                   </div>
               </div>
               <div class="col-md-3 clearfix d-none d-lg-block">
                   <div class="card-deck p-3 card_3">
                       <div class="view overlay position-relative">
                           <div class="position-absolute  h-100 w-100 d-flex align-items-center justify-content-center">
                               <img class="w-30 h-50" src="" alt="">
                           </div>
                           <img class="img-fluid img_card_3" src="" alt="">
                       </div>
                       <div class="c-body">
                           <h5 class="card-title mt-3 bold-font"></h5>
                           <p class="light-font">
                           </p>
                           <div class="d-flex justify-content-start align-items-center">
                               <img class="author_image" src="" alt="">
                               <h6 class="ml-3 mt-2 regular-font"></h6>
                           </div>
                           <div class="mt-3 d-flex align-items-center card_stars">
                           </div>
                       </div>
                   </div>
               </div>
               <div class="col-md-3 clearfix d-none d-lg-block">
                   <div class="card-deck p-3 card_4">
                       <div class="view overlay position-relative">
                           <div class="position-absolute  h-100 w-100 d-flex align-items-center justify-content-center">
                               <img class="w-30 h-50" src="images/play.png" alt="">
                           </div>
                           <img class="img-fluid img_card_4" src="" alt="">
                       </div>
                       <div class="c-body">
                           <h5 class="card-title mt-3 bold-font"></h5>
                           <p class="light-font">
                           </p>
                           <div class="d-flex justify-content-start align-items-center">
                               <img class="author_image" src="" alt="">
                               <h6 class="ml-3 mt-2 regular-font"></h6>
                           </div>
                           <div class="mt-3 d-flex align-items-center card_stars">
                           </div>
                       </div>
                   </div>
               </div>
           </div>
       </div>
       <!--/.First slide-->

       <!--Second slide-->
       <div class="carousel-item">
           <div class="row">
               <div class="col-md-3 clearfix d-none d-lg-block">
                   <div class="card-deck p-3 card_5">
                       <div class="view overlay position-relative">
                           <div class="position-absolute  h-100 w-100 d-flex align-items-center justify-content-center">
                               <img class="w-30 h-50" src="images/play.png" alt="">
                           </div>
                           <img class="img-fluid img_card_5" src="" alt="">
                       </div>
                       <div class="c-body">
                           <h5 class="card-title mt-3 bold-font"></h5>
                           <p class="light-font">
                           </p>
                           <div class="d-flex justify-content-start align-items-center">
                               <img class="author_image" src="" alt="">
                               <h6 class="ml-3 mt-2 regular-font"></h6>
                           </div>
                           <div class="mt-3 d-flex align-items-center card_stars">
                           </div>
                       </div>
                   </div>
               </div>
               <div class="col-12 col-md-0 col-lg-3 d-block d-md-none d-lg-block">
                   <div class="card-deck p-3 card_6">
                       <div class="view overlay position-relative">
                           <div class="position-absolute  h-100 w-100 d-flex align-items-center justify-content-center">
                               <img class="w-30 h-50" src="images/play.png" alt="">
                           </div>
                           <img class="img-fluid img_card_6" src="" alt="">
                       </div>
                       <div class="c-body">
                           <h5 class="card-title mt-3 bold-font"></h5>
                           <p class="light-font">
                           </p>
                           <div class="d-flex justify-content-start align-items-center">
                               <img class="author_image" src="" alt="">
                               <h6 class="ml-3 mt-2 regular-font"></h6>
                           </div>
                           <div class="mt-3 d-flex align-items-center card_stars">
                           </div>
                       </div>
                   </div>
               </div>
               <div class="col-md-6 col-lg-3 clearfix d-none d-md-block">
                   <div class="card-deck p-3 card_7">
                       <div class="view overlay position-relative">
                           <div class="position-absolute  h-100 w-100 d-flex align-items-center justify-content-center">
                               <img class="w-30 h-50" src="images/play.png" alt="">
                           </div>
                           <img class="img-fluid img_card_7" src="" alt="">
                       </div>
                       <div class="c-body">
                           <h5 class="card-title mt-3 bold-font"></h5>
                           <p class="light-font">
                           </p>
                           <div class="d-flex justify-content-start align-items-center">
                               <img class="author_image" src="" alt="">
                               <h6 class="ml-3 mt-2 regular-font"></h6>
                           </div>
                           <div class="mt-3 d-flex align-items-center card_stars">
                           </div>
                       </div>
                   </div>
               </div>
               <div class="col-md-6 col-lg-3 clearfix d-none d-md-block">
                   <div class="card-deck p-3 card_1">
                       <div class="view overlay position-relative">
                           <div class="position-absolute  h-100 w-100 d-flex align-items-center justify-content-center">
                               <img class="w-30 h-50" src="images/play.png" alt="">
                           </div>
                           <img class="img-fluid img_card_1" src="" alt="">
                       </div>
                       <div class="c-body">
                           <h5 class="card-title mt-3 bold-font"></h5>
                           <p class="light-font">
                           </p>
                           <div class="d-flex justify-content-start align-items-center">
                               <img class="author_image" src="" alt="">
                               <h6 class="ml-3 mt-2 regular-font"></h6>
                           </div>
                           <div class="mt-3 d-flex align-items-center card_stars">
                           </div>
                       </div>
                   </div>
               </div>
           </div>
       </div>
       <!--/.Second slide-->

       <!--Third slide-->
       <div class="carousel-item">
           <div class="row">
               <div class="col-12 col-md-6 col-lg-3 clearfix d-none d-md-block">
                   <div class="card-deck p-3 card_2">
                       <div class="view overlay position-relative">
                           <div class="position-absolute  h-100 w-100 d-flex align-items-center justify-content-center">
                               <img class="w-30 h-50" src="images/play.png" alt="">
                           </div>
                           <img class="img-fluid img_card_2" src="" alt="">
                       </div>
                       <div class="c-body">
                           <h5 class="card-title mt-3 bold-font"></h5>
                           <p class="light-font">
                           </p>
                           <div class="d-flex justify-content-start align-items-center">
                               <img class="author_image" src="" alt="">
                               <h6 class="ml-3 mt-2 regular-font"></h6>
                           </div>
                           <div class="mt-3 d-flex align-items-center card_stars">
                           </div>
                       </div>
                   </div>
               </div>
               <div class="col-md-6 col-lg-3 clearfix d-none d-md-block">
                   <div class="card-deck p-3 card_3">
                       <div class="view overlay position-relative">
                           <div class="position-absolute  h-100 w-100 d-flex align-items-center justify-content-center">
                               <img class="w-30 h-50" src="images/play.png" alt="">
                           </div>
                           <img class="img-fluid img_card_3" src="" alt="">
                       </div>
                       <div class="c-body">
                           <h5 class="card-title mt-3 bold-font"></h5>
                           <p class="light-font">
                           </p>
                           <div class="d-flex justify-content-start align-items-center">
                               <img class="author_image" src="" alt="">
                               <h6 class="ml-3 mt-2 regular-font"></h6>
                           </div>
                           <div class="mt-3 d-flex align-items-center card_stars">
                           </div>
                       </div>
                   </div>
               </div>
               <div class="col-12 col-md-3 d-block d-md-none d-lg-block">
                   <div class="card-deck p-3 card_4">
                       <div class="view overlay position-relative">
                           <div class="position-absolute  h-100 w-100 d-flex align-items-center justify-content-center">
                               <img class="w-30 h-50" src="images/play.png" alt="">
                           </div>
                           <img class="img-fluid img_card_4" src="" alt="">
                       </div>
                       <div class="c-body">
                           <h5 class="card-title mt-3 bold-font"></h5>
                           <p class="light-font">
                           </p>
                           <div class="d-flex justify-content-start align-items-center">
                               <img class="author_image" src="" alt="">
                               <h6 class="ml-3 mt-2 regular-font"></h6>
                           </div>
                           <div class="mt-3 d-flex align-items-center card_stars">
                           </div>
                       </div>
                   </div>
               </div>
               <div class="col-md-3 clearfix d-none d-lg-block">
                   <div class="card-deck p-3 card_5">
                       <div class="view overlay position-relative">
                           <div class="position-absolute  h-100 w-100 d-flex align-items-center justify-content-center">
                               <img class="w-30 h-50" src="images/play.png" alt="">
                           </div>
                           <img class="img-fluid img_card_5" src="" alt="">
                       </div>
                       <div class="c-body">
                           <h5 class="card-title mt-3 bold-font"></h5>
                           <p class="light-font">
                           </p>
                           <div class="d-flex justify-content-start align-items-center">
                               <img class="author_image" src="" alt="">
                               <h6 class="ml-3 mt-2 regular-font"></h6>
                           </div>
                           <div class="mt-3 d-flex align-items-center card_stars">
                           </div>
                       </div>
                   </div>
               </div>
           </div>
       </div>
       <!--/.Third slide-->

       <!-- Four slide -->
       <div class="carousel-item">
           <div class="row">
               <div class="col-md-3 clearfix d-none d-lg-block">
                   <div class="card-deck p-3 card_6">
                       <div class="view overlay position-relative">
                           <div class="position-absolute  h-100 w-100 d-flex align-items-center justify-content-center">
                               <img class="w-30 h-50" src="images/play.png" alt="">
                           </div>
                           <img class="img-fluid img_card_6" src="" alt="">
                       </div>
                       <div class="c-body">
                           <h5 class="card-title mt-3 bold-font"></h5>
                           <p class="light-font">
                           </p>
                           <div class="d-flex justify-content-start align-items-center">
                               <img class="author_image" src="" alt="">
                               <h6 class="ml-3 mt-2 regular-font"></h6>
                           </div>
                           <div class="mt-3 d-flex align-items-center card_stars">
                           </div>
                       </div>
                   </div>
               </div>
               <div class="col-md-3 clearfix d-none d-lg-block">
                   <div class="card-deck p-3 card_7">
                       <div class="view overlay position-relative">
                           <div class="position-absolute  h-100 w-100 d-flex align-items-center justify-content-center">
                               <img class="w-30 h-50" src="images/play.png" alt="">
                           </div>
                           <img class="img-fluid img_card_7" src="" alt="">
                       </div>
                       <div class="c-body">
                           <h5 class="card-title mt-3 bold-font"></h5>
                           <p class="light-font">
                           </p>
                           <div class="d-flex justify-content-start align-items-center">
                               <img class="author_image" src="" alt="">
                               <h6 class="ml-3 mt-2 regular-font"></h6>
                           </div>
                           <div class="mt-3 d-flex align-items-center card_stars">
                           </div>
                       </div>
                   </div>
               </div>
               <div class="col-md-6 col-lg-3 clearfix d-none d-md-block">
                   <div class="card-deck p-3 card_1">
                       <div class="view overlay position-relative">
                           <div class="position-absolute  h-100 w-100 d-flex align-items-center justify-content-center">
                               <img class="w-30 h-50" src="images/play.png" alt="">
                           </div>
                           <img class="img-fluid img_card_1" src="" alt="">
                       </div>
                       <div class="c-body">
                           <h5 class="card-title mt-3 bold-font"></h5>
                           <p class="light-font">
                           </p>
                           <div class="d-flex justify-content-start align-items-center">
                               <img class="author_image" src="" alt="">
                               <h6 class="ml-3 mt-2 regular-font"></h6>
                           </div>
                           <div class="mt-3 d-flex align-items-center card_stars">
                           </div>
                       </div>
                   </div>
               </div>
               <div class="col-12 col-md-6 col-lg-3 d-block">
                   <div class="card-deck p-3 card_2">
                       <div class="view overlay position-relative">
                           <div class="position-absolute  h-100 w-100 d-flex align-items-center justify-content-center">
                               <img class="w-30 h-50" src="images/play.png" alt="">
                           </div>
                           <img class="img-fluid img_card_2" src="" alt="">
                       </div>
                       <div class="c-body">
                           <h5 class="card-title mt-3 bold-font"></h5>
                           <p class="light-font">
                           </p>
                           <div class="d-flex justify-content-start align-items-center">
                               <img class="author_image" src="" alt="">
                               <h6 class="ml-3 mt-2 regular-font"></h6>
                           </div>
                           <div class="mt-3 d-flex align-items-center card_stars">
                           </div>
                       </div>
                   </div>
               </div>
           </div>
       </div>
       <!-- /. Four slide -->
   </div>

   <!-- buttons -->
   <a class="carousel-control-prev" href="#carouselExampleControls2" role="button" data-slide="prev">
     <span class="prev-icon" aria-hidden="true"></span>
     <span class="sr-only">Previous</span>
   </a>
   <a class="carousel-control-next" href="#carouselExampleControls2" role="button" data-slide="next">
     <span class="next-icon" aria-hidden="true"></span>
     <span class="sr-only">Next</span>
   </a>
        `);

        for (let i = 0; i < data.length; i++) {
            
            for (const property in data[i]) {
                if (property == "id"){
                    id = data[i][property];
                }
                else if (property == "title"){
                    title = data[i][property];
                }
                else if (property == "sub-title"){
                    sub_title = data[i][property];
                }
                else if (property == "thumb_url"){
                    image = data[i][property];
                }
                else if (property == "author"){
                    author = data[i][property];
                }
                else if (property == "author_pic_url"){
                    img_author = data[i][property];
                }
                else if (property == "star"){
                    stars = data[i][property];
                }
                else if (property == "duration"){
                    duration = data[i][property];
                }
            }
            if (id == '1'){
                $(`.card_${id} .img_card_${id}`).attr("src", image);
                $(`.card_${id} .c-body h5`).text(title);
                $(`.card_${id} .c-body p`).text(sub_title);
                $(`.card_${id} .c-body div .author_image`).attr("src", img_author);
                $(`.card_${id} .c-body div h6`).text(author);
                for (let j = 0; j < 5; j++) {
                    if (stars > j){
                        $(`.card_${id} .c-body .card_stars`).append(`<img class="p-1" src="images/star_on.png" alt="">`);
                        console.log('This');
                    }
                    else{
                        $(`.card_${id} .c-body .card_stars`).append(`<img class="p-1" src="images/star_off.png" alt="">`);
                    }
                }
                $(`.card_${id} .c-body .card_stars`).append(`<span class="ml-auto">8 min</span>`);
            }
            else if (id == '2'){
                $(`.card_${id} .img_card_${id}`).attr("src", image);
                $(`.card_${id} .c-body h5`).text(title);
                $(`.card_${id} .c-body p`).text(sub_title);
                $(`.card_${id} .c-body div .author_image`).attr("src", img_author);
                $(`.card_${id} .c-body div h6`).text(author);
                for (let j = 0; j < 5; j++) {
                    if (stars > j){
                        $(`.card_${id} .c-body .card_stars`).append(`<img class="p-1" src="images/star_on.png" alt="">`);
                        console.log('This');
                    }
                    else{
                        $(`.card_${id} .c-body .card_stars`).append(`<img class="p-1" src="images/star_off.png" alt="">`);
                    }
                }
                $(`.card_${id} .c-body .card_stars`).append(`<span class="ml-auto">8 min</span>`);

            }
            else if (id == '3'){
                $(`.card_${id} .img_card_${id}`).attr("src", image);
                $(`.card_${id} .c-body h5`).text(title);
                $(`.card_${id} .c-body p`).text(sub_title);
                $(`.card_${id} .c-body div .author_image`).attr("src", img_author);
                $(`.card_${id} .c-body div h6`).text(author);
                for (let j = 0; j < 5; j++) {
                    if (stars > j){
                        $(`.card_${id} .c-body .card_stars`).append(`<img class="p-1" src="images/star_on.png" alt="">`);
                        console.log('This');
                    }
                    else{
                        $(`.card_${id} .c-body .card_stars`).append(`<img class="p-1" src="images/star_off.png" alt="">`);
                    }
                }
                $(`.card_${id} .c-body .card_stars`).append(`<span class="ml-auto">8 min</span>`);
            }
            else if (id == '4'){
                $(`.card_${id} .img_card_${id}`).attr("src", image);
                $(`.card_${id} .c-body h5`).text(title);
                $(`.card_${id} .c-body p`).text(sub_title);
                $(`.card_${id} .c-body div .author_image`).attr("src", img_author);
                $(`.card_${id} .c-body div h6`).text(author);
                for (let j = 0; j < 5; j++) {
                    if (stars > j){
                        $(`.card_${id} .c-body .card_stars`).append(`<img class="p-1" src="images/star_on.png" alt="">`);
                        console.log('This');
                    }
                    else{
                        $(`.card_${id} .c-body .card_stars`).append(`<img class="p-1" src="images/star_off.png" alt="">`);
                    }
                }
                $(`.card_${id} .c-body .card_stars`).append(`<span class="ml-auto">8 min</span>`);
            }
            else if (id == '5'){
                $(`.card_${id} .img_card_${id}`).attr("src", image);
                $(`.card_${id} .c-body h5`).text(title);
                $(`.card_${id} .c-body p`).text(sub_title);
                $(`.card_${id} .c-body div .author_image`).attr("src", img_author);
                $(`.card_${id} .c-body div h6`).text(author);
                for (let j = 0; j < 5; j++) {
                    if (stars > j){
                        $(`.card_${id} .c-body .card_stars`).append(`<img class="p-1" src="images/star_on.png" alt="">`);
                        console.log('This');
                    }
                    else{
                        $(`.card_${id} .c-body .card_stars`).append(`<img class="p-1" src="images/star_off.png" alt="">`);
                    }
                }
                $(`.card_${id} .c-body .card_stars`).append(`<span class="ml-auto">8 min</span>`);
            }
            else if (id == '6'){
                $(`.card_${id} .img_card_${id}`).attr("src", image);
                $(`.card_${id} .c-body h5`).text(title);
                $(`.card_${id} .c-body p`).text(sub_title);
                $(`.card_${id} .c-body div .author_image`).attr("src", img_author);
                $(`.card_${id} .c-body div h6`).text(author);
                for (let j = 0; j < 5; j++) {
                    if (stars > j){
                        $(`.card_${id} .c-body .card_stars`).append(`<img class="p-1" src="images/star_on.png" alt="">`);
                        console.log('This');
                    }
                    else{
                        $(`.card_${id} .c-body .card_stars`).append(`<img class="p-1" src="images/star_off.png" alt="">`);
                    }
                }
                $(`.card_${id} .c-body .card_stars`).append(`<span class="ml-auto">8 min</span>`);
            }
            else if (id == '7'){
                $(`.card_${id} .img_card_${id}`).attr("src", image);
                $(`.card_${id} .c-body h5`).text(title);
                $(`.card_${id} .c-body p`).text(sub_title);
                $(`.card_${id} .c-body div .author_image`).attr("src", image);
                $(`.card_${id} .c-body div h6`).text(author);
                for (let j = 0; j < 5; j++) {
                    if (stars > j){
                        $(`.card_${id} .c-body .card_stars`).append(`<img class="p-1" src="images/star_on.png" alt="">`);
                        console.log('This');
                    }
                    else{
                        $(`.card_${id} .c-body .card_stars`).append(`<img class="p-1" src="images/star_off.png" alt="">`);
                    }
                }
                $(`.card_${id} .c-body .card_stars`).append(`<span class="ml-auto">8 min</span>`);
            }
        }
    }
});

