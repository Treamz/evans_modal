    	var modal = document.getElementById('emodal')
    	var modal_frm = document.getElementById('evans_modal');
    	var modal_img = document.getElementsByTagName("img")[0].src;
    	modal.onclick = function() {
           console.log(modal_img);
           var evans_modal_content = '<div class="evans_modal_content"><img id="modaled" src="alt" alt=""></div>';
           modal_frm.innerHTML = evans_modal_content;
           var imgSrc = document.getElementById('modaled').src = modal_img;
           modal_frm.classList.toggle('active_modal');
    	};
       modal_frm.onclick = function() {
       	modal_frm.classList.toggle('active_modal');
       }