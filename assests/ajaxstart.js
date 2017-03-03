/*$(document).ajaxStart(function(){
  $("#user-image").attr("src","progress.gif");
  }).ajaxStop(function(){
    console.log("Ajax Stopped.");
  }).ajaxSuccess(function(){
    console.log("Ajax Success");
  }).ajaxComplete(function(){
    console.log("Ajax Completed");
  });
  */

  $("#get-data").on("click",function(){
    var myurl = "https://public-api.wordpress.com/rest/v1/sites/dotnetask.wordpress.com"
    $.ajax({
      url:myurl,
      success: function(data){
        console.log(data);             //for debug only
        $("#user-id").text("User's id is :"+data.ID);
        $("#user-name").text("User's name is : "+data.name);
        $("#user-description").text("User's Company is : "+data.description);
        $("#user-url").text("User's Email id is : "+data.URL);
        $("#user-jetpack").text("User's Account created at : "+data.jetpack);
        $("#user-subcribers-count").text("User's Location is : "+data.subcribers_count);
        $("#user-lang").text("User's url is : "+data.lang);

        $('#user-id').addClass("user-name-responsive");
        $('#user-name').addClass("user-company-responsive");
        $('#user-description').addClass("user-email-responsive");
        $('#user-url').addClass("user-name-responsive");
        $('#user-jetpack').addClass("user-company-responsive");
        $('#user-lang').addClass("user-email-responsive");
      },
      error: function(){
        $("#user-image").attr("src","no-user.png");
        $("#user-name").text("User not found");
        $("#user-name").addClass("user-name-responsive");
      }
    });
  });