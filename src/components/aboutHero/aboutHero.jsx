import React, { Component } from 'react';
import {
    Tabs,
} from 'antd';
import { connect } from 'react-redux';
import HeroSkill from './heroSkill.jsx';
import '../../styles/aboutHero.less';
import ApiUrl from '../../config/apiUrl.js';
import { updateHeroDetail } from '../../redux/action.js';


const TabPane = Tabs.TabPane;

class aboutHero extends Component {
    static contextTypes = {
        router: React.PropTypes.object.isRequired,
    }
    componentWillMount() {
        updateHeroDetail(this.props.dispatch, this.context.router.route.match.params.heroName);
    }
    render() {
        const heroMessage = this.props.heroDetail[0];
        return (
            <div className="aboutHero">
                <div className="heroMes heroItem">
                    <div className="heroImg">
                        <img src={`${ApiUrl.apiUrl}${heroMessage.name}.jpg`} />
                    </div>
                    <div className="hero-info">
                        <ul>
                            <li>名称: <span>{heroMessage.name}</span></li>
                            <li>CV: <span>{heroMessage.cv}</span></li>
                            <li>稀有度: <span>{heroMessage.rarity}</span></li>
                            <li>类型: <span>{heroMessage.type}</span></li>
                            <li>斗技指数: <span>{heroMessage.pkExponent}</span></li>
                            <li>刷图指数: <span>{heroMessage.brushMapExponent}</span></li>
                        </ul>
                    </div>
                </div>
                <div className="heroRemark heroItem">
                    <h1>式神评价</h1>
                    <div className="remark">
                        <p className="remarkItem">
                            {heroMessage.heroRemark.remark}
                        </p>
                    </div>
                </div>
                <div className="heroSkills heroItem">
                    <h1>式神技能</h1>
                    <Tabs defaultActiveKey="1" >
                        <TabPane tab="技能1" key="1">
                            {
                                heroMessage.skills.map((item, index) => (
                                    <HeroSkill
                                        key={index}
                                        consumption={item.Consumption}
                                        effect={item.effect}
                                        skillName={item.name}
                                        upgrade={item.upgrade}
                                        style={{ display: index === 0 ? 'block' : 'none' }}
                                    />
                                ))
                            }
                        </TabPane>
                        <TabPane tab="技能2" key="2">
                            {
                                heroMessage.skills.map((item, index) => (
                                    <HeroSkill
                                        key={index}
                                        consumption={item.Consumption}
                                        effect={item.effect}
                                        skillName={item.name}
                                        upgrade={item.upgrade}
                                        style={{ display: index === 1 ? 'block' : 'none' }}
                                    />
                                ))
                            }
                        </TabPane>
                        <TabPane tab="技能3" key="3">
                            {
                                heroMessage.skills.map((item, index) => (
                                    <HeroSkill
                                        key={index}
                                        consumption={item.Consumption}
                                        effect={item.effect}
                                        skillName={item.name}
                                        upgrade={item.upgrade}
                                        style={{ display: index === 2 ? 'block' : 'none' }}
                                    />
                                ))
                            }
                        </TabPane>
                    </Tabs>
                </div>
                <div className="awakeMaterial heroItem">
                    <h1>觉醒材料</h1>
                    <ul className="material">
                        {
                            heroMessage.awaken.material.map((item, index) => (
                                <li key={index}>
                                    <p>{item.count}</p>
                                    <p>{item.name}</p>
                                </li>
                            ))
                        }

                    </ul>
                    <ul className="skillChange">
                        <li>
                            <p>攻击</p>
                            <p><span>{heroMessage.awaken.attack.from} ~ {heroMessage.awaken.attack.to}</span></p>
                        </li>
                        <li>
                            <p>生命</p>
                            <p><span>{heroMessage.awaken.life.from} ~ {heroMessage.awaken.life.to}</span></p>
                        </li>
                        <li>
                            <p>防御</p>
                            <p><span>{heroMessage.awaken.defense.from} ~ {heroMessage.awaken.defense.to}</span></p>
                        </li>
                        <li>
                            <p>速度</p>
                            <p><span>{heroMessage.awaken.speed.from} ~ {heroMessage.awaken.speed.to}</span></p>
                        </li>
                        <li>
                            <p>暴击</p>
                            <p><span>{heroMessage.awaken.crit.from} ~ {heroMessage.awaken.crit.to}</span></p>
                        </li>
                    </ul>
                    <div className="skillInfo">
                        <p>{heroMessage.awaken.skill}</p>
                    </div>
                </div>
                <div className="defenseMatch heroItem">
                    <h1>御魂搭配</h1>
                    <ul>
                        <li><span>搭配方案：</span>{heroMessage.heroYuxun.matchInfo}</li>
                        <li><span>搭配点评：</span>{heroMessage.heroYuxun.matchRemark}</li>
                        <li>
                            <p><span>御魂位置：</span></p>
                            <p>{heroMessage.heroYuxun.two}</p>
                            <p>{heroMessage.heroYuxun.four}</p>
                            <p>{heroMessage.heroYuxun.six}</p>
                        </li>
                    </ul>
                </div>
                <div className="heroMatch heroItem">
                    <h1>搭配阵容</h1>
                    <ul className="match">
                        <li>
                            <img src={heroMessage.heroMatchInfo.heroMatchImg} />
                        </li>
                        <li><span>搭配方案：</span>{heroMessage.heroMatchInfo.matchInfo}</li>
                        <li><span>阵容点评：</span>{heroMessage.heroMatchInfo.matchRemark}</li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default connect(
    state => ({
        heroDetail: state.get('heroDetail'),
    }),
)(aboutHero);