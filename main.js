$(document).ready(function () {
  console.log("jQuery is ready!");

  $("#update-headline-btn").click(function () {
    $("#student-name").text("Abylaikhan Zhumagul (Sports Lead)");

    $(".headline").html("<em>Competitive Chess & Endurance Cyclist</em>");

    $("h1").css("color", "#15803d");
    $(".intro-text").css({
      "font-weight": "bold",
      color: "#374151",
    });
  });

  $("#light-theme-btn").click(function () {
    $("body").css({
      "background-color": "#f0fdf4",
      color: "#166534",
    });
    $(".box").css({
      "background-color": "#ffffff",
      color: "#166534",
      "border-color": "#bbf7d0",
    });
    $(".slide-heading").css({
      "background-color": "#dcfce7",
      color: "#166534",
    });
    $(".slide-panel").css({
      "background-color": "#ffffff",
      color: "#166534",
    });
  });

  $("#dark-theme-btn").click(function () {
    $("body").css({
      "background-color": "#064e3b",
      color: "#ecfdf5",
    });
    $(".box").css({
      "background-color": "#065f46",
      color: "#ecfdf5",
      "border-color": "#047857",
    });
    $(".slide-heading").css({
      "background-color": "#047857",
      color: "#ecfdf5",
    });
    $(".slide-panel").css({
      "background-color": "#064e3b",
      color: "#ecfdf5",
    });
  });

  $("#hide-btn").click(function () {
    $("#fun-facts, #status-message").hide();
  });

  $("#show-btn").click(function () {
    $("#fun-facts, #status-message").show();
  });

  $("#toggle-btn").click(function () {
    $("#fun-facts, #status-message").toggle();
  });

  $("#fade-in-btn").click(function () {
    $(".gallery-img").fadeIn(600);
  });

  $("#fade-out-btn").click(function () {
    $(".gallery-img").fadeOut(600);
  });

  $("#fade-toggle-btn").click(function () {
    $(".gallery-img").fadeToggle(600);
  });

  $(".slide-heading").click(function () {
    $(this).next(".slide-panel").slideToggle(400);
  });

  $("#slide-up-all").click(function () {
    $(".slide-panel").slideUp(400);
  });

  $("#slide-down-all").click(function () {
    $(".slide-panel").slideDown(400);
  });

  $("#add-skill-btn").click(function () {
    var newSkill = $("#skill-input").val().trim();
    if (newSkill !== "") {
      $("#skills-list").append("<li>" + newSkill + "</li>");
      $("#skill-input").val("");
    } else {
      alert("Please enter a hobby or skill first!");
    }
  });

  $("#prepend-skill-btn").click(function () {
    var newSkill = $("#skill-input").val().trim();
    if (newSkill !== "") {
      $("#skills-list").prepend("<li>" + newSkill + "</li>");
      $("#skill-input").val("");
    } else {
      alert("Please enter a hobby or skill first!");
    }
  });
  $("#remove-skill-btn").click(function () {
    $("#skills-list li:last-child").remove();
  });

  var isInstagram = true;
  $("#change-link-btn").click(function () {
    if (isInstagram) {
      $("#social-link").attr("href", "https://www.strava.com");
      $("#social-link").text("My Strava Cycling Profile");
      $(this).text("Change Link to Instagram");
      isInstagram = false;
    } else {
      $("#social-link").attr("href", "https://www.instagram.com");
      $("#social-link").text("My Instagram Profile");
      $(this).text("Change Link to Strava Profile");
      isInstagram = true;
    }
  });

  $("#name-input").on("input", function () {
    var currentName = $(this).val();
    $("#live-name").text(currentName !== "" ? currentName : "-");
  });
  $("#email-input").on("input", function () {
    var currentEmail = $(this).val();
    $("#live-email").text(currentEmail !== "" ? currentEmail : "-");
  });
  var animated = false;
  $("#animate-skills-btn").click(function () {
    if (!animated) {
      $("#bar-chess").animate({ width: "85%" }, 800);
      $("#bar-tennis").animate({ width: "75%" }, 800);
      $("#bar-cycling").animate({ width: "80%" }, 800);
      animated = true;
    } else {
      $("#bar-chess").animate({ width: "0%" }, 800);
      $("#bar-tennis").animate({ width: "0%" }, 800);
      $("#bar-cycling").animate({ width: "0%" }, 800);
      animated =false;
    }
  });
});