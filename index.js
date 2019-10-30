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
      url: "https://github.com/diamo12/gpa-tracker/blob/master/grades.txt",
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
