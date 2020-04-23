import $ from 'jquery';

const day = ["a good&nbsp;",
'Wrppaer',
'Inner',
'Box',
'Panel',
'Content',
'Body',
'Container',
'Outer',
'Cover',
'Section',
'Frame',
'Module',
'Block',
'Set',
'Group',
];

let allDays = day.length;
let firstDay = 0;
let change = $('.day')

function changeDay() {
    change.html(day[firstDay]);
    firstDay = (firstDay + 1) % allDays;
};

let ohYeah = null;

function ohNo() {
    ohYeah = setInterval(changeDay, 150); //must match css animation
};

/*$('.day').hover(function() {
    ohNo();
}, function() {
    clearInterval(ohYeah);
});*/