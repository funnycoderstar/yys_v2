import React, { Component } from 'react';

class heroSkill extends Component {
    render() {
        return (
            <div className="heroSkill">
                <div className="skillTitle">
                    {this.props.skillName}
                </div>
                <div className="skillList">
                    <div className="skillListTitle">
                        消耗
                    </div>
                    <div className="skillInfo">
                        <p>{this.props.consumption}</p>
                    </div>
                </div>
                <div className="skillList">
                    <div className="skillListTitle">
                        效果
                    </div>
                    <div className="skillInfo">
                        <p>{this.props.effect}</p>
                    </div>
                </div>
                <div className="skillList">
                    <div className="skillListTitle">
                        升级
                    </div>
                    <div className="skillInfo">
                        {
                            this.props.upgrade.map((item, index) => (
                                <p key={index}>
                                    {item}
                                </p>
                            ))
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default heroSkill;