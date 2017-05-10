import React, { Component } from 'react';

class heroSkill extends Component {
    render() {
        return (
            <div className="heroSkill">
                <div className="skillTitle">
                    罪罚·黑
                </div>
                <div className="skillList">
                    <div className="skillListTitle">
                        消耗
                    </div>
                    <div className="skillInfo">
                        <p>0</p>
                    </div>
                </div>
                <div className="skillList">
                    <div className="skillListTitle">
                        效果
                    </div>
                    <div className="skillInfo">
                        <p>黑童子对1名敌人发起攻击，对目标造成100%的伤害，该伤害波动区间较大。</p>
                    </div>
                </div>
                <div className="skillList">
                    <div className="skillListTitle">
                        升级
                    </div>
                    <div className="skillInfo">
                        <p>Lv.2技能伤害额外+5%</p>
                        <p>Lv.3技能伤害额外+5%</p>
                        <p>Lv.4技能伤害额外+5%</p>
                        <p>Lv.5技能伤害额外+10%</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default heroSkill;