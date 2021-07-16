
$(document).ready(function(){

    // Task 1 & 4 code
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

    // Task 2 code
    $.get( "https://smileschool-api.hbtn.info/popular-tutorials", function(data, statusText, xhr) {
        if (xhr.status == "200") {

            if (document.getElementsByClassName("pink_loader")[0]){
                $('#carouselExampleControls2 .pink_loader').css("display", "none");
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
                            }
                            else{
                                $(`.card_${id} .c-body .card_stars`).append(`<img class="p-1" src="images/star_off.png" alt="">`);
                            }
                        }
                        $(`.card_${id} .c-body .card_stars`).append(`<span class="ml-auto">${duration}</span>`);
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
                            }
                            else{
                                $(`.card_${id} .c-body .card_stars`).append(`<img class="p-1" src="images/star_off.png" alt="">`);
                            }
                        }
                        $(`.card_${id} .c-body .card_stars`).append(`<span class="ml-auto">${duration}</span>`);

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
                            }
                            else{
                                $(`.card_${id} .c-body .card_stars`).append(`<img class="p-1" src="images/star_off.png" alt="">`);
                            }
                        }
                        $(`.card_${id} .c-body .card_stars`).append(`<span class="ml-auto">${duration}</span>`);
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
                            }
                            else{
                                $(`.card_${id} .c-body .card_stars`).append(`<img class="p-1" src="images/star_off.png" alt="">`);
                            }
                        }
                        $(`.card_${id} .c-body .card_stars`).append(`<span class="ml-auto">${duration}</span>`);
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
                            }
                            else{
                                $(`.card_${id} .c-body .card_stars`).append(`<img class="p-1" src="images/star_off.png" alt="">`);
                            }
                        }
                        $(`.card_${id} .c-body .card_stars`).append(`<span class="ml-auto">${duration}</span>`);
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
                            }
                            else{
                                $(`.card_${id} .c-body .card_stars`).append(`<img class="p-1" src="images/star_off.png" alt="">`);
                            }
                        }
                        $(`.card_${id} .c-body .card_stars`).append(`<span class="ml-auto">${duration}</span>`);
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
                            }
                            else{
                                $(`.card_${id} .c-body .card_stars`).append(`<img class="p-1" src="images/star_off.png" alt="">`);
                            }
                        }
                        $(`.card_${id} .c-body .card_stars`).append(`<span class="ml-auto">${duration}</span>`);
                    }
                }
            }
            else {
                // pass
            }
        }
    });

    // Task 3 code
    $.get("https://smileschool-api.hbtn.info/latest-videos", function(data, statusText, xhr) {
        if (xhr.status == "200") {
            if(document.getElementsByClassName("pink_loader")[1]){
                $('#carouselExampleControls3 .pink_loader').css("display", "none");
                $('#carouselExampleControls3').append(`
                <div class="carousel-inner container col-9 latest_videos_carousel" role="listbox">

                    <!--First slide-->
                    <div class="carousel-item active">
                        <div class="row ">
                            <div class="col-12 col-md-6 col-lg-3">
                                <div class="card-deck p-3 card-1">
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
                                <div class="card-deck p-3 card-2">
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
                                <div class="card-deck p-3 card-3">
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
                            <div class="col-md-3 clearfix d-none d-lg-block">
                                <div class="card-deck p-3 card-4">
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
                                <div class="card-deck p-3 card-1">
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
                            <div class="col-12 col-md-0 col-lg-3 d-block d-md-none d-lg-block">
                                <div class="card-deck p-3 card-2">
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
                                <div class="card-deck p-3 card-3">
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
                            <div class="col-md-6 col-lg-3 clearfix d-none d-md-block">
                                <div class="card-deck p-3 card-4">
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
                    <!--/.Second slide-->

                    <!--Third slide-->
                    <div class="carousel-item">
                        <div class="row">
                            <div class="col-12 col-md-6 col-lg-3 clearfix d-none d-md-block">
                                <div class="card-deck p-3 card-1">
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
                                <div class="card-deck p-3 card-2">
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
                            <div class="col-12 col-md-3 d-block d-md-none d-lg-block">
                                <div class="card-deck p-3 card-3">
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
                            <div class="col-md-3 clearfix d-none d-lg-block">
                                <div class="card-deck p-3 card-4">
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
                    <!--/.Third slide-->

                    <!-- Four slide -->
                    <div class="carousel-item">
                        <div class="row">
                            <div class="col-md-3 clearfix d-none d-lg-block">
                                <div class="card-deck p-3 card-1">
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
                            <div class="col-md-3 clearfix d-none d-lg-block">
                                <div class="card-deck p-3 card-2">
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
                                <div class="card-deck p-3 card-3">
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
                            <div class="col-12 col-md-6 col-lg-3 d-block">
                                <div class="card-deck p-3 card-4">
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
                    <!-- /. Four slide -->
                </div>

                <!-- buttons -->
                <a class="carousel-control-prev" href="#carouselExampleControls3" role="button" data-slide="prev">
                <span class="prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleControls3" role="button" data-slide="next">
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
                        $(`.card-${id} .img_card_${id}`).attr("src", image);
                        $(`.card-${id} .c-body h5`).text(title);
                        $(`.card-${id} .c-body p`).text(sub_title);
                        $(`.card-${id} .c-body div .author_image`).attr("src", img_author);
                        $(`.card-${id} .c-body div h6`).text(author);
                        for (let j = 0; j < 5; j++) {
                            if (stars > j){
                                $(`.card-${id} .c-body .card_stars`).append(`<img class="p-1" src="images/star_on.png" alt="">`);
                            }
                            else{
                                $(`.card-${id} .c-body .card_stars`).append(`<img class="p-1" src="images/star_off.png" alt="">`);
                            }
                        }
                        $(`.card-${id} .c-body .card_stars`).append(`<span class="ml-auto">${duration}</span>`);
                    }
                    else if (id == '2'){
                        $(`.card-${id} .img_card_${id}`).attr("src", image);
                        $(`.card-${id} .c-body h5`).text(title);
                        $(`.card-${id} .c-body p`).text(sub_title);
                        $(`.card-${id} .c-body div .author_image`).attr("src", img_author);
                        $(`.card-${id} .c-body div h6`).text(author);
                        for (let j = 0; j < 5; j++) {
                            if (stars > j){
                                $(`.card-${id} .c-body .card_stars`).append(`<img class="p-1" src="images/star_on.png" alt="">`);
                            }
                            else{
                                $(`.card-${id} .c-body .card_stars`).append(`<img class="p-1" src="images/star_off.png" alt="">`);
                            }
                        }
                        $(`.card-${id} .c-body .card_stars`).append(`<span class="ml-auto">${duration}</span>`);

                    }
                    else if (id == '3'){
                        $(`.card-${id} .img_card_${id}`).attr("src", image);
                        $(`.card-${id} .c-body h5`).text(title);
                        $(`.card-${id} .c-body p`).text(sub_title);
                        $(`.card-${id} .c-body div .author_image`).attr("src", img_author);
                        $(`.card-${id} .c-body div h6`).text(author);
                        for (let j = 0; j < 5; j++) {
                            if (stars > j){
                                $(`.card-${id} .c-body .card_stars`).append(`<img class="p-1" src="images/star_on.png" alt="">`);
                            }
                            else{
                                $(`.card-${id} .c-body .card_stars`).append(`<img class="p-1" src="images/star_off.png" alt="">`);
                            }
                        }
                        $(`.card-${id} .c-body .card_stars`).append(`<span class="ml-auto">${duration}</span>`);
                    }
                    else if (id == '4'){
                        $(`.card-${id} .img_card_${id}`).attr("src", image);
                        $(`.card-${id} .c-body h5`).text(title);
                        $(`.card-${id} .c-body p`).text(sub_title);
                        $(`.card-${id} .c-body div .author_image`).attr("src", img_author);
                        $(`.card-${id} .c-body div h6`).text(author);
                        for (let j = 0; j < 5; j++) {
                            if (stars > j){
                                $(`.card-${id} .c-body .card_stars`).append(`<img class="p-1" src="images/star_on.png" alt="">`);
                            }
                            else{
                                $(`.card-${id} .c-body .card_stars`).append(`<img class="p-1" src="images/star_off.png" alt="">`);
                            }
                        }
                        $(`.card-${id} .c-body .card_stars`).append(`<span class="ml-auto">${duration}</span>`);
                    }
                }
            }
            else{
                // pass
            }
        }
    })


    // Task 4 code
    $(".search-div #search").change(function(){
        listResults($(".search-div #search").val(), 
        $(".search-div #exampleFormControlSelect1").val(),
        $(".search-div #exampleFormControlSelect2").val().toLowerCase().replace(" ","_")
        );
    });
    $(".search-div #exampleFormControlSelect1").change(function(){
        listResults($(".search-div #search").val(), 
        $(".search-div #exampleFormControlSelect1").val(),
        $(".search-div #exampleFormControlSelect2").val().toLowerCase().replace(" ","_")
        );
    });
    $(".search-div #exampleFormControlSelect2").change(function(){
        listResults($(".search-div #search").val(), 
        $(".search-div #exampleFormControlSelect1").val(),
        $(".search-div #exampleFormControlSelect2").val().toLowerCase().replace(" ","_")
        );
    });
    
    function listResults(q, topic, sort){
        $.get("https://smileschool-api.hbtn.info/courses", {q:q, topic:topic, sort:sort} ,function(data, statusText, xhr){

            if (xhr.status == "200") {
                new_array = data['courses'];

                console.log(new_array);

                $(".results-courses .pink-loader").css("display", "none");
                $(".results-courses").empty();
                $(".results-courses").append(`<span class="col-12 regular-font my-5"><h6 class="p">${new_array.length} results</h6></span>`);
                for (let i = 0; i < new_array.length; i++) {
                    for (const property in new_array[i]) {
                        if (property == "id"){
                            id = new_array[i][property];
                        }
                        else if (property == "title"){
                            title = new_array[i][property];
                        }
                        else if (property == "sub-title"){
                            sub_title = new_array[i][property];
                        }
                        else if (property == "thumb_url"){
                            image = new_array[i][property];
                        }
                        else if (property == "author"){
                            author = new_array[i][property];
                        }
                        else if (property == "author_pic_url"){
                            img_author = new_array[i][property];
                        }
                        else if (property == "star"){
                            stars = new_array[i][property];
                        }
                        else if (property == "duration"){
                            duration = new_array[i][property];
                        }
                    }
                    $(".results-courses").append(`
                        <div class="card-deck card_no_${id} mt-md-5 mt-5 mt-sm-0 p-3 col-12 col-sm-5 col-md-6 col-lg-3"">
                            <div class="view overlay position-relative">
                                <div class="position-absolute  h-100 w-100 d-flex align-items-center justify-content-center">
                                    <img class="w-30 h-50" src="images/play.png" alt="">
                                </div>
                                <img class="img-fluid" src="${image}" alt="">
                            </div>
                            <div class="c-body">
                                <h5 class="card-title mt-3 bold-font">${title}</h5>
                                <p class="light-font">
                                    ${sub_title}
                                </p>
                                <div class="d-flex justify-content-start align-items-center">
                                    <img src="${img_author}" alt="">
                                    <h6 class="ml-3 mt-2 regular-font">${author}</h6>
                                </div>
                                <div class="mt-3 d-flex stars_div align-items-center ">
                                </div>
                            </div>
                        </div>
                    `);
                    for (let j = 0; j < 5; j++) {
                        if (stars > j){
                            $(`.results-courses .card_no_${id} .stars_div`).append(`<img class="p-1" src="images/star_on.png" alt="">`);
                        }
                        else{
                            $(`.results-courses .card_no_${id} .stars_div`).append(`<img class="p-1" src="images/star_off.png" alt="">`);
                        }
                    }
                    $(`.results-courses .card_no_${id} .stars_div`).append(`<span class="ml-auto">${duration}</span>`)
                }
            }
        });
    }
    listResults();
});

