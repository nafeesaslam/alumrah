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
            var mess = `Name: ${name} \n Phone: ${phone}, Email: ${email}`;
            mess.toString();

            var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                // Typical action to be performed when the document is ready:
                document.getElementById("demo").innerHTML = xhttp.responseText;
                }
            };
            xhttp.open("GET", "newMail.php", true);
            xhttp.send();

            // var url = "https://graph.facebook.com/v14.0/112437674980577/messages";

            // var xhr = new XMLHttpRequest();
            // xhr.open("POST", url);

            // xhr.setRequestHeader("Authorization", "Bearer EAAZAyUITb5QsBALK5UOcxaZAdZBC5c8h9RFIrXWyoRaBhfrNi6ohe3HmdPCqJCxH0sGR2r69HOu2OVZATZCZAAViC43lCezhaB631Phr9jyA87JXzFJQkeV4cNIzWgopPGa67DI3f4pFeTOSsUgXCKiZB9bK4Nr9s4Pu2xigaLPncg3AUN720CSbmcRNW09GE2jdSpHI1YfbITlWXLgGRne");
            // xhr.setRequestHeader("Content-Type", "application/json");

            // xhr.onreadystatechange = function () {
            // if (xhr.readyState === 4) {
            //     console.log(xhr.status);
            //     console.log(xhr.responseText);
            // }};

            // var data = '{ "messaging_product": "whatsapp", "to": "917001214053", "type": "template", "template": { "name":'+"Name: " + name + "Phone: " + phone +', "language": { "code": "en_US" } } }';

            // xhr.send(data);
             var settings = {
                 "async": true,
                 "crossDomain": true,
                 "url": "https://graph.facebook.com/v14.0/112437674980577/messages",
                 "method": "POST",
                 "Content-Type": "application/json",
            
                 "headers": {
                    "Authorization": "Bearer EAAZAyUITb5QsBAPIWfRHA8JzjZBDGuSfABOZCdMX40UuxcVJJt8Paet8w7ZBttgvybu0z13lHcZCqYDDZBNiqDDGTxXvZCShbjdxfVWHrkWJJlDh8NC4HH5f41G2YDWg03IZBOntK4LGq5As02IINNOYfPEu6Hqs4SSL56oEdg143SVTeiFT803iEQCcgSxWYtZCJNQ17u726anxAPprJ6sbo"
                 },
                "data": {
                    "messaging_product": "whatsapp",
                    "to": "918210739741",
                    "type": "template",
                    "template": { "name": "get_to_know", "language": { "code": "en_US" } ,
                    "components": [
                        {
                            "type": "body",
                            "parameters": [
                                {
                                    "type": "text",
                                    "text": name
                                },
                                {
                                    "type": "text",
                                    "text": phone
                                },
                                {
                                    "type": "text",
                                    "text": email
                                }
                            ]
                        }
                    ]
                }

                //   "token": "kh6dgclz5k0tiwz1",
                //   "to": "8210739741",
                //   "body": `Name: ${name} \n Phone: ${phone} \n Email: ${email}`,
                //   "priority": "{PRIORITY}",
                //   "referenceId": ""
                }
              }
              
              $.ajax(settings).done(function (response) {
                console.log(response);  
                if(response.messaging_product === "whatsapp"){
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