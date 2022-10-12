    // -------   Mail Send ajax

     $(document).ready(function() {
        var form = $('#myForm'); // contact form
        var submit = $('.submit-btn'); // submit button
        var alert = $('.alert-msg'); // alert div for show alert message
        console.log(form);
        // form submit event
        form.on('submit', function(e) {
            e.preventDefault(); // prevent default form submit
            var name = $("#name").val();
            var phone = $("#phone").val();
            var email = $("#email").val();
            console.log(name,email,phone);

            var settings = {
                "async": true,
                "crossDomain": true,
                "url": "https://api.ultramsg.com/instance19949/messages/chat",
                "method": "GET",
                "headers": {},
                "data": {
                  "token": "2hg9pu5vhosg4ev1",
                  "to": "7001214053",
                  "body": `Name: ${name} \n Phone: ${phone} \n Email: ${email}`,
                  "priority": "{PRIORITY}",
                  "referenceId": ""
                }
              }
              
              $.ajax(settings).done(function (response) {
                console.log(response);  
                if(response.message == "ok"){
                    $("#name").val('');
                    $("#phone").val('');
                    $("#email").val('');
                    showSuccessMessage();
                }else{
                    showErrorMessage();
                }
              });






            // $.ajax({
            //     url: 'mail.php', // form action url
            //     type: 'POST', // form submit method get/post
            //     dataType: 'html', // request type html/json/xml
            //     data: form.serialize(), // serialize form data
            //     beforeSend: function() {
                    
            //         alert.fadeOut();
            //         submit.html('Sending....'); // change submit button text
            //     },
            //     success: function(data) {
            //         alert.html(data).fadeIn(); // fade in response data
            //         form.trigger('reset'); // reset form
            //         submit.attr("style", "display: none !important");; // reset submit button text
            //     },
            //     error: function(e) {
            //         console.log(e)
            //     }
            // });

            // const data = JSON.stringify({
            //     "password": "your-password"
            // });
            
            // const xhr = new XMLHttpRequest();
            // xhr.withCredentials = true;
            
            // xhr.addEventListener("readystatechange", function () {
            //     if (this.readyState === this.DONE) {
            //         console.log(this.responseText);
            //     }
            // });
            
            // xhr.open("POST", "https://whatsapp-business.p.rapidapi.com/settings/backup");
            // xhr.setRequestHeader("content-type", "application/json");
            // xhr.setRequestHeader("authorization", "<REQUIRED>");
            // xhr.setRequestHeader("X-RapidAPI-Key", "SIGN-UP-FOR-KEY");
            // xhr.setRequestHeader("X-RapidAPI-Host", "whatsapp-business.p.rapidapi.com");
            
            // xhr.send(data);


            
        });

        function showSuccessMessage(){
            $("#successMessage").show();
            setTimeout(() => {
                $("#successMessage").hide();
            }, 5000);
        }

        function showErrorMessage(){
            $("#errorMessage").show();
            setTimeout(() => {
                $("#errorMessage").hide();
            }, 5000);
        }
    });