import {compose, pipe} from 'lodash/fp';
import {Map} from 'immutable';  // Useful to create a Map or Hashmap just as a regular js object, but immutable
import {produce} from 'immer';

const trim = str => str.trim();
const wrap = type => str => `<${type}>${str}</${type}>`; // currying
const toLowerCase = str => str.toLowerCase();
// Example of high-order function
const transform = compose(wrap('div'), toLowerCase, trim); // instead of wrapInDiv(toLowerCase(trim(input)))
const transform_pipe = pipe(trim, toLowerCase, wrap('div'));
let input = "   JavaScript   ";

console.log(transform(input) === transform_pipe(input));

// #### Immutability 
const numbers = [1,2,3];
// Adding
const index = numbers.indexOf(2);
const added = [...numbers.slice(0,index), 4, ...numbers.slice(2)];
// Removing
const removed = numbers.filter(n => n !== 2);
// Updating
numbers.map(n => n === 2 ? 20 : n);
// Immutable.js
let book = Map({ title: 'Harry Potter'});
console.log(book.get('title'));

function publish(book) {
    return book.set('isPublished', true);
}

book = publish(book);

// Immer.js
let immerBook = {title: 'Harry Potter'};
// Here we can create a copy of the previous object but without using spread operators and mainly
// without being verbosely
function immerPublish(book) {
    return produce(book, draftBook => {
        draftBook.isPublished = true;
    });
}

let updated = immerPublish(immerBook);