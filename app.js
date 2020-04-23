import $ from 'jquery';

import odoo from './lib/bounty';

const classes = [
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

let from = 'click me'.toUpperCase();
let to
$('.box').text(from);

$('body').on('click.gen',runGenrator)

function runGenrator(){
        if (classes.length === 0) return

        $('body').off('click.gen')

        let i = Math.floor(Math.random() * classes.length)
        let to = classes.splice(i, 1)[0].toUpperCase()
        let maxLenth = Math.max(from.length, to.length)
    
        from = fitToCenter(from, maxLenth)
        to = fitToCenter(to, maxLenth)
    
        console.log('"' + from + '"', '"' + to + '"')
        odoo({ el: '.box', from: from, to: to, animationDelay: 1000 });
        from = to
        setTimeout(()=>{
            $('body').on('click.gen',runGenrator)
        },2000)
}
function fitToCenter(str, len) {
    if (str.length >= len) return str
    let s = Math.floor((len - str.length) / 2)
    str = Array(s+1).join(' ') + str + Array(s+1).join(' ')
    if (str.length < len) str = str + ' '
    return str
}