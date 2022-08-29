import React from 'react';
import { Menu } from 'antd';

function LeftMenu(props) {
  return (
    <Menu mode={props.mode}>
    <Menu.Item key="search">
      <a href="/searchpage">Search</a>
    </Menu.Item>
    <Menu.Item key="favorite">
      <a href="/favorite">Favorite</a>
    </Menu.Item>
    <Menu.Item key="toprated">
      <a href="/toprated">Toprated</a>
    </Menu.Item> 
    <Menu.Item key="genre">
      <a href="/genre">Genre</a>
    </Menu.Item>        
  </Menu>
  )
}

export default LeftMenu