import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const SidebarLink = styled(Link)`
    display: flex;
    color: #f5f5f5;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    list-style: none;
    height: 60px;
    text-decoration: none;
    font-size: 18px;

    &:hover{
        background: #45d0d6;
        border-left: 4px solid #fc5185;
        cursor: pointer;
    }
`;

const SidebarLabel = styled.span`
    color: #f5f5f5;
    margin-left: 16px;
`;

const DropdownLink = styled(Link)`
    background: #3fc1c9;
    height: 60px;
    padding-left: 3rem;
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #f5f5f5;
    font-size: 18px;

    &:hover {
        background: #fc5185;
        cursor: pointer;
    }
`;


const SubMenu = ({item}) => {
    const [ subnav, setSubnav ] = useState(false)
    const showSubnav = () => setSubnav(!subnav)

    return (
        <>
          <SidebarLink to={item.path} onClick={item.subNav && showSubnav}>
            <div>
              <SidebarLabel>{item.title}</SidebarLabel>
            </div>
            <div>
              {item.subNav && subnav
                ? item.iconOpened
                : item.subNav
                ? item.iconClosed
                : null}
            </div>
          </SidebarLink>
          {subnav &&
            item.subNav.map((item, index) => {
              return (
                <DropdownLink to={item.path} key={index}>
                  <SidebarLabel>{item.title}</SidebarLabel>
                </DropdownLink>
              )
            })}
        </>
      )
}

export default SubMenu;