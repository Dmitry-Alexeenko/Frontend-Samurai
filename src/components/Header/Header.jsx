import React from 'react';
import c from '../../styles/Header.module.scss';
import {NavLink} from "react-router-dom";
import userPhoto from "../../assets/images/user.png";
import logo from "../../assets/images/logo.svg";
import { Row, Col, Button} from 'antd';
import 'antd/dist/antd.css';
import {ExportOutlined } from '@ant-design/icons';



const Header = (props) => {
    let {logout} = props;
    let {photo, login, isAuth} = props;
    //style={{border: '1px solid red'}}
    return (
        <div className={c.header_container}>
            <Row className={c.header__content} justify={'center'} align={'middle'}>
                <Col xs={16} sm={18} md={18} lg={20} xl={20} style={{border: '1px solid red'}}>
                    <img className={c.header__logo} src={logo} alt="logo"/>
                    <span className={c.header__name}>Frontend Samurai</span>
                </Col>
                {
                    isAuth &&
                    <Col xs={5} sm={4} md={4} lg={3} xl={3} style={{ textAlign:'right', border: '1px solid red'}}>
                        <img className={c.header__UserPhoto} src={photo != null ? photo : userPhoto}
                             alt="userPhoto"/>
                    </Col>
                }
                {
                    isAuth &&
                    <Col xs={3} sm={2} md={2} lg={1} xl={1} style={{ textAlign:'center', border: '1px solid red'}}>
                        <Button type="primary" shape="circle" icon={<ExportOutlined  />} size={'small'} onClick={logout}/>
                    </Col>
                }
                {
                    !isAuth &&
                    <Col xs={8} sm={6} md={6} lg={4} xl={4} style={{ textAlign:'right', border: '1px solid red'}}>
                        <NavLink className={c.header__btn} to={"/Login"}>Log in</NavLink>
                    </Col>
                }
            </Row>
        </div>
    )
};

export default Header;