$(document).ready(function() {

    console.log("Hi");

    $('.window_container').hide();

    $("#open_system").click(function() {

        $('.window_container').show();

        $('.card_container').hide();
        $('#System_Window').css("width", "850px");


        $('#System_Window').css("overflow-y", "scroll");
        $('#basic_info').css("overflow-y", "hidden");
        $('#graphic_modific').css("overflow-y", "hidden");
        $('.system_dot').hide();
    });

    $("#open_basic_info").click(function() {
        $('.window_container').show();
        $('.card_container').hide();
        $('#basic_info').css("width", "850px");
        $('#System_Window').css("overflow-y", "hidden");
        $('#basic_info').css("overflow-y", "scroll");
        $('#graphic_modific').css("overflow-y", "hidden");

        $('#content_basic').css("background-image", "url('assets/middle_content_background.png')");

        $('.basic_dot').hide();
    });

    $("#open_graphic_modific").click(function() {
        $('.window_container').show();
        $('.card_container').hide();
        $('#graphic_modific').css("width", "850px");

        $('#System_Window').css("overflow-y", "hidden");
        $('#basic_info').css("overflow-y", "hidden");
        $('#graphic_modific').css("overflow-y", "scroll");

        $('.graphic_dot').hide();

    });


    $("#content_system").click(function() {
        $('#System_Window').css("width", "850px");
        $('#basic_info').css("width", "0px");
        $('#graphic_modific').css("width", "0px");

        $('#System_Window').css("overflow-y", "scroll");
        $('#basic_info').css("overflow-y", "hidden");
        $('#graphic_modific').css("overflow-y", "hidden");

        $('#content_basic').css("background-image", "none");

        $('.system_dot').hide();
        $('.basic_dot').show();
        $('.graphic_dot').show();


    });
    $("#content_basic").click(function() {
        $('#basic_info').css("width", "850px");
        $('#System_Window').css("width", "0px");
        $('#graphic_modific').css("width", "0px");

        $('#System_Window').css("overflow-y", "hidden");
        $('#basic_info').css("overflow-y", "scroll");
        $('#graphic_modific').css("overflow-y", "hidden");

        $('#content_basic').css("background-image", "url('assets/middle_content_background.png')");

        $('.basic_dot').hide();
        $('.graphic_dot').show();
        $('.system_dot').show();

    });
    $("#content_graphic").click(function() {
        $('#graphic_modific').css("width", "850px");
        $('#System_Window').css("width", "0px");
        $('#basic_info').css("width", "0px");


        $('#System_Window').css("overflow-y", "hidden");
        $('#basic_info').css("overflow-y", "hidden");
        $('#graphic_modific').css("overflow-y", "scroll");

        $('#content_basic').css("background-image", "none");
        $('.graphic_dot').hide();
        $('.basic_dot').show();
        $('.system_dot').show();
    });
});