
$(document).ready(function() {
    $('#covid-19-form').on('submit', function(e) {
		e.preventDefault();
        $('#covid-19-form').reset();
        
//		$('#msgButton').attr('disabled', '');
//		$(".output").html('<div><i class="fa fa-spinner fa-spin fa-2x"></i> Processing...</div>');
//		$(this).ajaxSubmit({
//			target: '.output',
//			success: afterSuccess
//		});
	});
    
    
    
$('#estimateModalCenter').on('show.bs.modal', function (event) {
  var button = $(event.relatedTarget) // Button that triggered the modal
  var recipient = button.data('whatever') // Extract info from data-* attributes
  // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
  // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
  var modal = $(this)
  modal.find('.modal-title').text('Covid-19 Estimate: ')
  modal.find('.modal-body input').val(recipient)
});
    
});