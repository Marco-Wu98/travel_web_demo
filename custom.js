$(document).ready(function () {
    // mySlider1
    $(".dropdown-item-custom #mySlider1").on("input", function () {
        // Lấy giá trị từ thanh trượt
        let sliderValue = $(this).val();

        // Hiển thị giá trị trong phần tử có id="slider-value"
        $("#days-range").text(sliderValue + "Days");
        $("#days-range-2").text(sliderValue + "Days");
    });


    var slider1 = document.getElementById("mySlider1");

    slider1.addEventListener("input", function () {
        var percent = (slider1.value - slider1.max) / (slider1.min - slider1.max);
        slider1.style.setProperty("--thumb-percent", percent * 100 + "%");
    });


    // mySlider2

    $(".dropdown-item-custom #mySlider2").on("input", function () {
        // Lấy giá trị từ thanh trượt
        let sliderValue = $(this).val();

        // Hiển thị giá trị trong phần tử có id="slider-value"
        $("#budget-range").text(sliderValue);
    });


    var slider2 = document.getElementById("mySlider2");

    slider2.addEventListener("input", function () {
        var percent = (slider2.value - slider2.max) / (slider2.min - slider2.max);
        slider2.style.setProperty("--thumb-percent", percent * 100 + "%");
    });

    // mySlider3
    $(".dropdown-item-custom #mySlider3").on("input", function () {
        // Lấy giá trị từ thanh trượt
        let sliderValue = $(this).val();

        // Hiển thị giá trị trong phần tử có id="slider-value"
        $("#days-range-2").text(sliderValue + "Days");
    });

    var slider3 = document.getElementById("mySlider3");

    slider3.addEventListener("input", function () {
        var percent = (slider3.value - slider3.max) / (slider3.min - slider3.max);
        slider3.style.setProperty("--thumb-percent", percent * 100 + "%");
    });

    // mySlider4

    $(".dropdown-item-custom #mySlider4").on("input", function () {
        // Lấy giá trị từ thanh trượt
        let sliderValue4 = $(".dropdown-item-custom #mySlider4").val();

        // Hiển thị giá trị trong phần tử có id="slider-value"
        $("#budget-range-2").text(sliderValue4);
    });


    var slider4 = document.getElementById("mySlider4");

    slider4.addEventListener("input", function () {
        var percent = (slider4.value - slider4.max) / (slider4.min - slider4.max);
        slider4.style.setProperty("--thumb-percent", percent * 100 + "%");
    });



    

    $("#Destination__element").click(function (e) { 
        let Activities__drop = document.querySelector("#Activities__drop");
        if(Activities__drop){
            $("#Activities__drop").hide();
        }
        $("#Destination__drop").slideToggle("fast"); 
    });

    
    $("#Activities__element").click(function (e) { 
        $("#Activities__drop").slideToggle("fast");
    });

});