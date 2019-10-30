$(document).ready(function() {
  initGPATracker();
});

function initGPATracker(){
  initListeners();
  loadCurrentGrades();
}

function initListeners(){

}

function loadCurrentGrades() {
  $('#GPA_Table').DataTable({
    ajax: {
      url: "grades.txt",
      dataSrc: '',
      type: "GET"
    },
    columns: [
      { data: 'Class_Num' },
      { data: 'Class_Name' },
      { data: 'Class_Grade_Percent' },
      { data: 'Class_Grade_Letter' },
      { data: 'Class_CredHour' }
    ]
  });

}

function loadAddMenu() {

}

function deleteEntry() {

}

function getGrades() {
  var fileUrl = "grades.txt";

  return $.ajax({
    url: fileUrl,
    method: "GET",
    headers: {
      "Accept": "application/json; odata=verbose",
      "X-RequestDigest": $("#__REQUESTDIGEST").val(),
      "Cache-Control": "no-cache"
    },
  });
}
