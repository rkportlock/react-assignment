//create a login with username and password input. It should have an h3 that says Log in and a border.
//Style the component using the default css file.
//Create a Navigation component that contains style links like a nav bar, they don't have to go anywhere.
//Put the Navigation component at the top of the page and the login form in the center of the page.

import React from 'react';

export default class Navigation extends React.Component {
    render () {
        return (
            <div class="navContainer">
                <ul class="navBar">
                    <li class="navLink"><a href="navigation.js">Home</a></li>
                    <li class="navLink"><a href="navigation.js">About</a></li>
                    <li class="navLink"><a href="navigation.js">Contact</a></li>
                </ul>
            </div>
        )
    }
}