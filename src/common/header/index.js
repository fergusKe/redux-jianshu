import React, { Component } from 'react';
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  NavSearch,
  Addition,
  Button
} from './style';

class Header extends Component {
  render() {
    return (
      <HeaderWrapper>
        <Logo />
        <Nav>
          <NavItem className="left active">首页</NavItem>
          <NavItem className="left">下载App</NavItem>
          <NavItem className="right">登陆</NavItem>
          <NavItem className="right">Aa</NavItem>
          <NavSearch />
        </Nav>
        <Addition>
          <Button className="reg">写文章</Button>
          <Button className="writting">注册</Button>
        </Addition>
      </HeaderWrapper>
    );
  }
}

export default Header;
