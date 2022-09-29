import React, { Component } from "react";

class MainContainer extends Component {
    render() { 
        return (
            <div className="main-container center">
                {this.props.children}
            </div>
        );
    }
}
 
export default MainContainer;