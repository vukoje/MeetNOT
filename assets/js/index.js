function submit(emailInputFld, errorLable){
    var isValid = validateEmail($(emailInputFld).val());
    if(isValid === false){
        $(errorLable).text('You email address is not correct');
            return;
    }
    $.post('https://docs.google.com/forms/d/1maFVnw1Za1ZT28KBD2Oyuooke4DbxwZw_Sg3rNGW5ZM/formResponse',{'entry.173499496':$(emailInputFld).val()})
    .always(function(){
        //ovde moze i neka redirekcija ili conformation popup
        $(emailInputFld).val('');
        $(errorLable).text('');
            $("#myModal").modal();
        //location.reload();
    });
}
        
function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}