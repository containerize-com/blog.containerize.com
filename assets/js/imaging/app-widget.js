$(document).ready(function () {
	if ($("#imaging-widget").length > 0) {
		$("#imaging-widget").load($('#imaging-widget-url').val());
	}
});
