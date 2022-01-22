import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import $ from 'jquery';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

$('.menu').hide();

//when the menu button is clicked display the menu
$('.menuButton').on('click', function() {
  $('.menu').toggle();
});

//get each item in app
let items = $('.item');
//for each items alert the id
items.each(function(index, item) {
  //place item after the last item in body
  $('.itemLink').append(
    `<div class="link">
      <a href="#${item.id}">${item.id}
     </div>`
  );
});

//when item link is clicked move to that item and hide the menu
$('.itemLink .link a').on('click', function() {
  $('.menu').hide();
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
