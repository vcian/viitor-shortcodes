// JavaScript Document
jQuery(document).ready(function($) {

// Start Single Shortcode Start
(function() {
    tinymce.create('tinymce.plugins.wwvcscsingleshortcode', {
        init : function(ed, url) {
        	
            ed.addButton('wwvcscsingleshortcode', {
                title : 'My Single Shortcode',  
                image : url+'/images/ww-vcsc-single.png',
                onclick : function() {
                    
				//send_to_editor(str);
		        tinymce.get('content').execCommand('mceInsertContent',false, '[ww_vcsc_button][/ww_vcsc_button]');
                  
 				}
            });
        },
        createControl : function(n, cm) {
            return null;
        },
    });
 
    tinymce.PluginManager.add('wwvcscsingleshortcode', tinymce.plugins.wwvcscsingleshortcode);
})();
// Start Single Shortcode End

// Start Shortcodes Click
(function() {
    tinymce.create('tinymce.plugins.wwvcscshortcodes', {
        init : function(ed, url) {
        	
            ed.addButton('wwvcscshortcodes', {
                title : 'My Shortcodes List',
                image : url+'/images/ww-vcsc.png',
                onclick : function() {
                    
					jQuery('.ww-vcsc-popup-overlay').fadeIn();
                    jQuery('.ww-vcsc-popup-content').fadeIn();
                    
                    jQuery('#ww_vcsc_shortcode').val('');
                    jQuery('#ww_vcsc_box_type_select').val('');
                    jQuery('#ww_vcsc_box_content').val('');
                    jQuery('.ww-vcsc-shortcodes-options').hide();
                    jQuery('.ww_vcsc_box_content').val('');
                    
 				}
            });
        },
        createControl : function(n, cm) {
            return null;
        },
    });
 
    tinymce.PluginManager.add('wwvcscshortcodes', tinymce.plugins.wwvcscshortcodes);
})();
	
	jQuery( document ).on('click', '.ww-vcsc-popup-close-button, .ww-vcsc-popup-overlay', function () {
		jQuery('.ww-vcsc-popup-overlay').fadeOut();
		jQuery('.ww-vcsc-popup-content').fadeOut();
		
	});
	jQuery( document ).on('click', '#ww_vcsc_insert_shortcode', function () {
		
		var shortcode = jQuery('#ww_vcsc_shortcode').val();
		var shortcodestr = '';
		if(shortcode == '') {
			jQuery('.ww-vcsc-popup-error').fadeIn();
			return false;
		} else {
			jQuery('.ww-vcsc-popup-error').hide();
				
				switch(shortcode) {
					case 'button' 	:
										shortcodestr += '[ww_vcsc_button][/ww_vcsc_button]';
										break;
					case 'box' 		:
										
										var content = jQuery('#ww_vcsc_box_content').val();
										var boxtype = jQuery('#ww_vcsc_box_type_select').val();
										shortcodestr += '[ww_vcsc_boxes boxtype="'+boxtype+'" showcontent="'+content+'"][/ww_vcsc_boxes]';			
										break;
								
					default:break;
				}
			 	
			 	 //send_to_editor(str);
		        tinymce.get('content').execCommand('mceInsertContent',false, shortcodestr);
		  		jQuery('.ww-vcsc-popup-overlay').fadeOut();
				jQuery('.ww-vcsc-popup-content').fadeOut();
			
			
		}
	});
	jQuery('#ww_vcsc_shortcode').change(function() {
		
		var shortcode = jQuery(this).val();
		jQuery('.ww-vcsc-shortcodes-options').hide();
		switch(shortcode) {
			case 'box' 	:
								jQuery('#ww_vcsc_box_type').show();
								break;
								
			default:break;
		}
	});
	
});