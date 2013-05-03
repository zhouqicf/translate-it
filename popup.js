window.addEventListener('load', function(){
    if(localStorage['translate_it_target_language']){
        document.querySelector('input[value="'+localStorage['translate_it_target_language']+'"]').setAttribute('checked', 'checked');
    }
    document.getElementById('select-language').addEventListener('click', function(e){
        localStorage['translate_it_target_language'] = document.querySelector('input:checked').value;
    });
});