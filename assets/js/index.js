function submit1(emailInputFld, errorLable){
    var isValid1 = validateEmail($("#email1").val());
    if(isValid1 === false){
        $(".alert-show1").show();
            return;
    }

    $.post('https://docs.google.com/forms/d/1maFVnw1Za1ZT28KBD2Oyuooke4DbxwZw_Sg3rNGW5ZM/formResponse',{'entry.173499496':$("#email1").val()})
    .always(function(){
        //ovde moze i neka redirekcija ili conformation popup
        $("#email1").val('');
        $(".alert-show1").hide();
            $("#myModal").modal();
        //location.reload();    
        
        // notify google analytics about event
        // ga('send', 'event', [eventCategory], [eventAction], [eventLabel], [eventValue], [fieldsObject]);
        // see https://developers.google.com/analytics/devguides/collection/analyticsjs/events#implementation 
        ga('send', 'event', 'Conversion', 'Subscribe', 'Subscribe for updates and beta access');
    });   
}

function submit2(emailInputFld, errorLable){
    var isValid2 = validateEmail($("#email2").val());
    if(isValid2 === false){
        $(".alert-show2").show();
            return;
    }

    $.post('https://docs.google.com/forms/d/1maFVnw1Za1ZT28KBD2Oyuooke4DbxwZw_Sg3rNGW5ZM/formResponse',{'entry.173499496':$("#email2").val()})
    .always(function(){
        //ovde moze i neka redirekcija ili conformation popup
        $("#email2").val('');
        $(".alert-show2").hide();
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

function enterKeyPress1(e) {
    e = e || window.event;
    if (e.keyCode == 13)
    {
        document.getElementById('submit1').click();
        return false;
    }
    return true;
}

function enterKeyPress2(e) {
    e = e || window.event;
    if (e.keyCode == 13)
    {
        document.getElementById('submit2').click();
        return false;
    }
    return true;
}
