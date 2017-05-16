import React, { Component } from 'react';

class heroInfo extends Component {
    static contextTypes = {
        router: React.PropTypes.object.isRequired,
    }
    handleClick = (name) => {
        this.context.router.history.push(`/aboutHero/${name}`);
    }

    render() {
        return (
            <div className="heroInfo">
                <div className="heroWrap" onClick={this.handleClick.bind(this, this.props.heroName)}>
                    <div className="heroImg">
                        <img src={this.props.imgSrc} />
                    </div>
                    <p>{this.props.heroName}</p>
                </div>
            </div>
        );
    }
}

export default heroInfo;