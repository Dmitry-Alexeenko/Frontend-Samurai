import React from 'react';
import c from '../../styles/Header.module.scss';
import {NavLink} from "react-router-dom";
import userPhoto from "../../assets/images/user.png";
import logo from "../../assets/images/logo.svg";
import {Row, Col, Button} from 'antd';
import 'antd/dist/antd.css';
import {ExportOutlined} from '@ant-design/icons';
import useBreakpoint from "../../custom_hook/useBreakpoint";


const Header = (props) => {
    const screenWidth = useBreakpoint();
    let {logout} = props;
    let {photo, login, isAuth} = props;


    return (
        <div className={c.header_container}>
            <Row className={c.header__content} justify={'center'} align={'middle'}>
                <Col flex={'auto'}>
                    <img className={c.header__logo} src={logo} alt="logo"/>
                    {
                        screenWidth !== 'xs' &&
                        <span className={c.header__name}>Frontend Samurai</span>
                    }

                </Col>
                {
                    isAuth &&
                    <Col flex={'230px'} style={{textAlign: 'right'}}>
                        <span style={{color: 'white'}}>{login}</span>
                        <img className={c.header__UserPhoto} src={photo != null ? photo : userPhoto}
                             alt="userPhoto"/>
                    </Col>
                }
                {
                    isAuth &&
                    <Col flex={'50px'} style={{textAlign: 'center'}}>
                        <Button type="primary" shape="circle" icon={<ExportOutlined/>} size={'small'} onClick={logout}/>
                    </Col>
                }
                {
                    !isAuth &&
                    <Col flex={'60px'} style={{textAlign: 'right', border: '1px solid red'}}>
                        <NavLink className={c.header__btn} to={"/Login"}>Log in</NavLink>
                    </Col>
                }
            </Row>
        </div>
    )
};

export default Header;