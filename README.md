# EDIT-THIS-README
    -make dev branch
1. Load three pokemon
    -make html divs for instructions and images
        -hard code the three images to test html setup
    -three new pokemon show up on the page (function)
        -generate three random pokemon (Math.random)
        -check that theyre unique (no id are the same)(logic)(while loop)
        -if no, generate 3 more until they're all unique
    -Increment the seen property for all 3 new pokemon
        -on load
        -For each of the three pokemon
            -grab the object from localStorage and increment 'seen' property (getItem() function)
            -if they haven't seen the pokemon before:
            -initialize a new cart with seen: 1 and caught: 0
            setItem() function
        On Click:
        -Increment the caught property of the clicked pokemon
        -if the user has done this 10 times, redirect to the results page (window.location)
        -otherwise, load three more REPEAT
        -Results page
        -clearCart() function


