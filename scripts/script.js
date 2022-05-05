$(window).ready(() => {
    const swap = function(elem1, elem2) {
        let frstElem = elem1, scndElem = elem2;
        
        if (scndElem.length == 0 || frstElem.length == 0) {
            return;
        }

        frstElemContent = frstElem.clone();
        viewerContent = scndElem.clone();

        frstElem.replaceWith(viewerContent);
        scndElem.replaceWith(frstElemContent);
    };

    $('.square-body').delegate('.arrow', 'click', function() {
        if ($(this).hasClass('top')) swap($(this).parent().parent(), $(this).parent().parent().prev().prev().prev().prev().prev());
        if ($(this).hasClass('right')) swap($(this).parent().parent(), $(this).parent().parent().next());
        if ($(this).hasClass('bottom')) swap($(this).parent().parent(), $(this).parent().parent().next().next().next().next().next());
        if ($(this).hasClass('left')) swap($(this).parent().parent(), $(this).parent().parent().prev());
    });

    $('.btn-reset').click(function() {
        let sortResult = $('.block').sort(function(a, b) {
            let numA = parseInt($(a).children('.block-number').text());
            let numB = parseInt($(b).children('.block-number').text());
            return (numA < numB) ? -1 : (numA > numB) ? 1 : 0;
        });

        $('.square-body').empty().html(sortResult);
    });
})