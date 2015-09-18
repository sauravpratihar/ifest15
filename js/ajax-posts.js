jQuery(document).ready(function(e) {
    var $ = jQuery;

    //Ajax Comment
    $('#commentform #submit').click(function() {
        var current_form = $(this).closest('form');
        var data = {
            action: 'metrika_comment',
            author: $('#author', current_form).val(),
            email: $('#email', current_form).val(),
            comment: $('#comment', current_form).val(),
            comment_id: $('#comment_post_ID', current_form).val(),
            comment_parrent: $('#comment_parent', current_form).val()
        };
        $.post(Metrika_Ajax.ajax_posts_url, data, function(data) {
            $('.form-submit .pull-left', current_form).remove();
            $('.form-submit', current_form).prepend('<span class="pull-left">' + data + '</span>').animate({opacity: 1}, 500, function(){
                $(current_form).trigger( 'reset' );
            });
        });
        return false;
    });
        
});