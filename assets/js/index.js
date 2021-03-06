function submit(emailInputFld, errorLable){
    var isValid = validateEmail($(emailInputFld).val());
    if(isValid === false){
        $(errorLable).show();
            return;
    }

    $.post('https://docs.google.com/forms/d/1maFVnw1Za1ZT28KBD2Oyuooke4DbxwZw_Sg3rNGW5ZM/formResponse',{'entry.173499496':$(emailInputFld).val()})
    .always(function(){
        //ovde moze i neka redirekcija ili conformation popup
        $(emailInputFld).val('');
        $(errorLable).hide();
            $("#myModal").modal();
        //location.reload();    
        
        // notify google analytics about event
        // ga('send', 'event', [eventCategory], [eventAction], [eventLabel], [eventValue], [fieldsObject]);
        // see https://developers.google.com/analytics/devguides/collection/analyticsjs/events#implementation 
        ga('send', 'event', 'Conversion', 'Subscribe', 'Subscribe for updates and beta access');
    });   
}
        
function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

function enterKeyPress(e, submitId) {
    e = e || window.event;
    if (e.keyCode == 13)
    {
        document.getElementById(submitId).click();
        return false;
    }
    return true;
}
