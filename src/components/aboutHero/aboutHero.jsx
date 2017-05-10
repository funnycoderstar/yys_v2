import React, { Component } from 'react';
import {
    Tabs,
} from 'antd';
import HeroSkill from './heroSkill.jsx';
import '../../styles/aboutHero.less';

const TabPane = Tabs.TabPane;

class aboutHero extends Component {
    handleCallback = (key) => {
        console.log(key);
    }
    render() {
        return (
            <div className="aboutHero">
                <div className="heroMes heroItem">
                    <div className="heroImg">
                        <img src={require('../../assets/hei.jpg')} />
                    </div>
                    <div className="hero-info">
                        <ul>
                            <li>名称: <span>黑童子</span></li>
                            <li>CV: <span>杉田智和</span></li>
                            <li>稀有度: <span>SR</span></li>
                            <li>类型: <span>输出</span></li>
                            <li>斗技指数: <span>5</span></li>
                            <li>刷图指数: <span>4</span></li>
                        </ul>
                    </div>
                </div>
                <div className="heroRemark heroItem">
                    <h1>式神评价</h1>
                    <div className="remark">
                        <p className="remarkItem">
                            黑童子的出现，还有待各种阵容的开发，虽然不能和椒图体系，但是他依旧是目前阴阳师攻击最高的式神。
                        </p>
                    </div>
                </div>
                <div className="heroSkills heroItem">
                    <h1>式神技能</h1>
                    <Tabs defaultActiveKey="1" onChange={this.callback}>
                        <TabPane tab="技能1" key="1">
                            <HeroSkill />
                        </TabPane>
                        <TabPane tab="技能2" key="2">
                            <HeroSkill />
                        </TabPane>
                        <TabPane tab="技能3" key="3">
                            <HeroSkill />
                        </TabPane>
                    </Tabs>
                </div>
                <div className="awakeMaterial heroItem">
                    <h1>觉醒材料</h1>
                    <ul className="material">
                        <li>
                            <p>16</p>
                            <p>风转轮·中级</p>
                        </li>
                        <li>
                            <p>8</p>
                            <p>风转轮·高级</p>
                        </li>
                        <li>
                            <p>16</p>
                            <p>天雷鼓·中级</p>
                        </li>
                        <li>
                            <p>16</p>
                            <p>天雷鼓·高级</p>
                        </li>
                    </ul>
                    <ul className="skillChange">
                        {/* <li>
                            <p>技能</p>
                            <p><span>觉醒前~ 觉醒后</span></p>
                        </li>*/}
                        <li>
                            <p>攻击</p>
                            <p><span>A ~ A</span></p>
                        </li>
                        <li>
                            <p>生命</p>
                            <p><span>C ~ A</span></p>
                        </li>
                        <li>
                            <p>防御</p>
                            <p><span>D ~ C</span></p>
                        </li>
                        <li>
                            <p>速度</p>
                            <p><span>D ~ C</span></p>
                        </li>
                        <li>
                            <p>暴击</p>
                            <p><span>S ~ S</span></p>
                        </li>
                    </ul>
                    <div className="skillInfo">
                        <p>技能【连斩】增强，消灭敌人时，会自动追加一次无消耗的连斩，该次伤害减少40%。</p>
                    </div>
                </div>
                <div className="defenseMatch heroItem">
                    <h1>御魂搭配</h1>
                    <ul>
                        <li><span>搭配方案：</span>镇墓兽4件套+暴击2件</li>
                        <li><span>搭配点评：</span>黑童子是血量越少，伤害越高的高爆发式神，配合镇墓兽在低血量的暴击伤害加成，效果更佳。</li>
                        <li>
                            <p><span>御魂位置：</span></p>
                            <p>2号位：攻击加成</p>
                            <p>4号位：攻击加成</p>
                            <p>6号位：暴击</p>
                        </li>
                    </ul>
                </div>
                <div className="heroMatch heroItem">
                    <h1>搭配阵容</h1>
                    <ul className="match">
                        <li>
                            <img src={require('../../assets/matchhei.jpg')} />
                        </li>
                        <li><span>搭配方案：</span>神乐+黑童子、惠比寿、蝴蝶精、独眼小僧、兵俑。</li>
                        <li><span>阵容点评：</span>阵容思路是，黑童子+惠比寿+独眼小僧3薙魂体系，薙魂可以触发黑童子的被动反击，独眼的被动加抵抗和反伤，惠比寿的被动回火。蝴蝶精只要奶就够了，推荐树妖，兵俑带返魂香，控制的时候，挨打了还能概率触发眩晕</li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default aboutHero;