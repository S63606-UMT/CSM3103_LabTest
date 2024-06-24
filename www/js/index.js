$(document).ready(function() {
  $.ajax({
    url: "https://kerbau.odaje.biz/getstaff.php",
    dataType: "json",
    success: function(data) {
      var employeeList = $("#employeeList");
      data.forEach(function(employee) {
        var employeeData = JSON.parse(employee);
        var email = employeeData.email;
        var employeeNumber = employeeData.employeeNumber;
        var listItem = $("<li>")
          .addClass("list-group-item")
          .text(email)
          .attr("id", employeeNumber)
          .on("click", function() {
            window.location.href = "secondpage.html?id=" + employeeNumber;
          });

        employeeList.append(listItem);
      });
    },
    error: function() {
      alert("Error occurred while fetching employee data.");
    }
  });
});
