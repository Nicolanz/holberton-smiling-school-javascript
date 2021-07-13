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
