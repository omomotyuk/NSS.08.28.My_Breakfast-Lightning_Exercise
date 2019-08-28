/*
//
*/
/*
    Create an object representing your breakfast.
    Write a function that will accept your breakfast object and return a component. Display the component on the DOM along with your name. You will need index.html and main.js
*/

const breakfast = {
    date: "2019.08.28",
    time: "07:20",
    food: [ "pork sausages", "bacon", "fried potatoes", "eggs", "toast", "cereals", "pancakes", "French toast","maple syrup", "hot oatmeal" ],
    drink: [ "hot tee", "hot coffe", "hot chocolate" ],
    mood: [ "good", "ok", "not ok" ]
}

const randomItem = ( itemArray ) => {
    let randomIndex = Math.floor( itemArray.length * Math.random() );
    return itemArray[ randomIndex ];
}

const makeBreakfast = ( breakfast ) => {
    return (`
        <div>
            <span>Breakfast time: </span>${breakfast.date} ${breakfast.time}
        </div>
        <div>
            <span>Breakfast food: </span>${ randomItem( breakfast.food ) }
        </div>
        <div>
            <span>Breakfast drink: </span>${ randomItem( breakfast.drink ) }
        </div>
        <div>
            <span>Breakfast mood: </span>${ randomItem( breakfast.mood ) }
        </div>
    `)
}

const breakfastElement = document.querySelector( '.breakfast-main' );
breakfastElement.innerHTML = makeBreakfast( breakfast );
