$(function() {
        $.getJSON("<?php echo $fullurl; ?>",
        function(data)
        {
            var offers = '';
            var limitedOffers = data.offers.slice(0, 10);
            $.each(limitedOffers, function(o, offer)
            {
                var imageUrl = offer.creatives && offer.creatives[0] ? offer.creatives[0].url : '';
                var modifiedAmount = (offer.amount * 100).toFixed(0); // Multiply by 100 and round to 0 decimal places
                offers += '<a href="'+offer.link+'" class="list-group-item"><div class="offer-container"><div class="network-icon"><img src="'+imageUrl+'" alt="Image" class="network-icon"></div><div class="offer-info"><div>'+offer.title+'</div><div>'+offer.description+'</div><div>Complete this offer and get '+modifiedAmount+' <?php echo $point_name; ?></div></div></div></a>';
            });
            $(".offer-list").html(offers);
            $(".progress").hide();
        });
    });
