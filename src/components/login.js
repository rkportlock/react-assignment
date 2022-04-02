//create a login with username and password input. It should have an h3 that says Log in and a border.
//Style the component using the default css file.
//Create a Navigation component that contains style links like a nav bar, they don't have to go anywhere.
//Put the Navigation component at the top of the page and the login form in the center of the page.

import React from 'react';

export default class Login extends React.Component {
    render () {
        return (
            <div className="container">
                <form>
                    <h3 class="input">Log In</h3>
                    <div>
                        <input className="input" type="text" name="username" placeholder="Username"/>
                    </div>
                    <div>
                        <input className="input" type="password" name="password" placeholder="Password"/>
                    </div>
                    <div>
                        <input className="button" type="submit" value="Log in"/>
                    </div>
                </form>
            </div>
        )
    }
}