$(document).ready(function(){

    $("button").click(function(){
        var inputCity = $("input").val();
        if (inputCity == "") {
            alert("Write something");
        } 
        else {
            $.ajax({
                url : "http://api.openweathermap.org/data/2.5/weather?q=" + inputCity + "&units=metric&lang=en&appid=f0c170410de0255297f9766be6b89684",
                success: function(data){
                    console.log("Load was performed.");

                    var city = data.name;
                    var countryCode = data.sys.country;
                    var temp = data.main.temp;
                    var description = data.weather[0].description;
                    var icon = "https://openweathermap.org/img/w/" + data.weather[0].icon + ".png";

                    if ($("#outputtable tbody").length == 0) {
                        $("#outputtable").append("<tbody></tbody>");
                    }
                        
                    $("#outputtable tbody").append(
                        "<tr>" +
                            "<td>" + city + "</td>" +
                            "<td>" + countryCode + "</td>" +
                            "<td>" + temp + " °C" + "</td>" +
                            "<td>" + description + "</td>" +
                            "<td>" + "<img src=" + icon + " alt='' />" + "</td>" +
                        "</tr>"
                    );
                },
                error: function(jqXHR, textStatus, errorThrown){
                    console.log("Request failed: " + textStatus +": "+ errorThrown);
                }
            });
        }
    });

    $('a[href*="#"]').not('[href="#"]').not('[href="#0"]').click(function(event) {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                event.preventDefault();
                $('html, body').animate({ scrollTop: target.offset().top }, 800, function() {
                    var $target = $(target);
                    $target.focus();
                    if ($target.is(":focus")) {
                        return false;
                    } else {
                        $target.attr('tabindex','-1');
                        $target.focus();
                    };
                });
            }
        }
    });




});