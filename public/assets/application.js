
function dropdown( elem )
{
    $( elem ).dropdown( { belowOrigin: true } );

    $( elem ).dropdown('open');
}

function collapsible( elem )
{
   $( elem ).parent().parent().collapsible( { accordion: false } );
}
