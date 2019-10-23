$(document).ready(function() {

    console.log("Hi");

    $('.window_container').hide();

    $("#open_system").click(function() {

        $('.window_container').show();

        $('.card_container').hide();
        $('#System_Window').css("width", "700px");


        $('#System_Window').css("overflow-y", "scroll");
        $('#basic_info').css("overflow-y", "hidden");
        $('#graphic_modific').css("overflow-y", "hidden");
    });

    $("#open_basic_info").click(function() {
        $('.window_container').show();
        $('.card_container').hide();
        $('#basic_info').css("width", "700px");

        $('#System_Window').css("overflow-y", "hidden");
        $('#basic_info').css("overflow-y", "scroll");
        $('#graphic_modific').css("overflow-y", "hidden");
    });

    $("#open_graphic_modific").click(function() {
        $('.window_container').show();
        $('.card_container').hide();
        $('#graphic_modific').css("width", "700px");

        $('#System_Window').css("overflow-y", "hidden");
        $('#basic_info').css("overflow-y", "hidden");
        $('#graphic_modific').css("overflow-y", "scroll");

    });


    $("#System_Window").click(function() {
        $('#System_Window').css("width", "700px");
        $('#basic_info').css("width", "0px");
        $('#graphic_modific').css("width", "0px");

        $('#System_Window').css("overflow-y", "scroll");
        $('#basic_info').css("overflow-y", "hidden");
        $('#graphic_modific').css("overflow-y", "hidden");
    });
    $("#basic_info").click(function() {
        $('#basic_info').css("width", "700px");
        $('#System_Window').css("width", "0px");
        $('#graphic_modific').css("width", "0px");

     $('#System_Window').css("overflow-y", "hidden");
        $('#basic_info').css("overflow-y", "scroll");
        $('#graphic_modific').css("overflow-y", "hidden");
    });
    $("#graphic_modific").click(function() {
        $('#graphic_modific').css("width", "700px");
        $('#System_Window').css("width", "0px");
        $('#basic_info').css("width", "0px");


       $('#System_Window').css("overflow-y", "hidden");
        $('#basic_info').css("overflow-y", "hidden");
        $('#graphic_modific').css("overflow-y", "scroll");
    });
});