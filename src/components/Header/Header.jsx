import React from 'react';
import c from '../../styles/Header.module.scss';
import {NavLink} from "react-router-dom";
import userPhoto from "../../assets/images/user.png";
import logo from "../../assets/images/logo.svg";
import {Row, Col, Button } from 'antd';
import 'antd/dist/antd.css';
import {ExportOutlined } from '@ant-design/icons';


const Header = (props) => {

    let {logout} = props;
    let {photo, login, isAuth} = props;
    //style={{border: '1px solid red'}}
    return (
        <div className={c.header_container}>
            <Row className={c.header__content} justify={'center'} align={'middle'}>
                <Col span={20} >
                    <img className={c.header__logo} src={logo} alt="logo"/>
                    <span className={c.header__name}>Frontend Samurai</span>
                </Col>
                {
                    isAuth &&
                    <Col span={2} style={{ textAlign:'right'}}>
                        <img className={c.header__UserPhoto} src={photo != null ? photo : userPhoto}
                             alt="userPhoto"/>
                    </Col>
                }
                {
                    isAuth &&
                    <Col span={2} style={{ textAlign:'center'}}>
                        <Button type="primary" shape="circle" icon={<ExportOutlined  />} size={'small'} onClick={logout}/>
                    </Col>
                }
                {
                    !isAuth &&
                    <Col span={4} style={{ textAlign:'right'}}>
                        <NavLink className={c.header__btn} to={"/Login"}>Log in</NavLink>
                    </Col>
                }
            </Row>
        </div>
    )
};

export default Header;