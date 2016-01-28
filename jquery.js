$(document).ready(function () {

    

    $("#delete").on("click", function () {
        $('table tr').has('input:checked').remove()
    })

    $('#checkAll').click(function() {
    var c = this.checked;
    $(':checkbox').prop('checked',c);
});
});