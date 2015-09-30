jQuery(document).ready(function () {

    //jQuery("#fieldCollege").hide();

    jQuery(".errormsg").hide();
    jQuery(".successreg").hide();
    jQuery(".cold").hide();


    jQuery("#fieldCollegeChoose").change(function () {
        if (jQuery("#fieldCollegeChoose").val() == "OTHER") {
            jQuery("#fieldCollege").show();
            jQuery(".col").show();
            jQuery(".cold").hide();

        } else {
            jQuery("#fieldCollege").hide();
            jQuery("#fieldCollege").val("");
            jQuery("#errFieldCollege").val("");
            jQuery("#errFieldCollege").hide();

            jQuery(".col").hide();
            jQuery(".cold").show();

        }
    });

    jQuery("#GetEventList").click(function () {
        var queryString = jQuery('#EventsForm').serialize();
        jQuery.ajax({
            type: "GET",
            url: "events.php",
            data: queryString,
            success: function (result) {
                jQuery("#password").val("");
                var obj = jQuery.parseJSON(result);
                jQuery("#Events").html("");
                jQuery.each(obj, function (key, value) {
                    var str = "<li>" + "<a href='download.php?id=" + key + "&value=" + value + "'>" + value + "</a>" + "</li>";
                    jQuery("#Events").append(str);
                });
            }
        });
    });

    jQuery("#Register").click(function () {
        var queryString = jQuery('#Register-form').serialize();
        jQuery.ajax({
            type: "POST",
            url: "insert.php",
            data: queryString,
            success: function (result) {
                //alert(result);
                jQuery(".errormsg").val("");
                jQuery(".errormsg").hide();
                showErrors(jQuery.parseJSON(result));
            }
        });


    });
});

function showErrors(obj) {
    jQuery.each(obj, function (key, value) {
        if (key == 'noerrr') {
            clearFormData();
            jQuery(".errormsg").val("");
            jQuery(".errormsg").hide();

            jQuery(".successreg").html(value);
            jQuery(".successreg").fadeIn("slow");
            return true;
        }
        if (key == 'errFieldEvenet') {
            jQuery("#errEvent").css("color", "red");
        } else {
            jQuery("#" + key).html(value);
            jQuery("#" + key).show();
        }
    });
}

function clearFormData() {
    jQuery("#Register-form").find('input[type=text]').val("");
    jQuery("#Register-form").find('input[type=number]').val("");
    jQuery("#Register-form").find('input[type=tel]').val("");
    jQuery("#Register-form").find('input[type=email]').val("");
    jQuery("#Register-form").find('input[type=radio]').attr('checked', false);
    jQuery("#Register-form").find('input[type=checkbox]').attr('checked', false);
    jQuery("#fieldAccommodation").prop("selectedIndex", 1);
}