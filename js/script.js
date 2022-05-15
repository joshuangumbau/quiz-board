$( "form" ).bind( "Submit", function(e) {
    e.preventDefault();
    
    console.log(  $(this).serializeObject() );    

    //console.log(  $(this).serialize() );
    //console.log(  $(this).serializeArray() );

});


$.fn.serializeObject = function() {
    var o = {};
    var a = this.serializeArray();

    $.each( a, function() {
        if ( o[this.name] !== undefined) 
        {
            if ( ! o[this.name].push ) 
            {
                o[this.name] = [o[this.name]];
            }
            o[this.name].push(this.value || '');
        }
        else 
        {
            o[this.name] = this.value || '';
        }
    });

    return o;
};