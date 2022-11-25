import React, {useState} from 'react';
import styled from 'styled-components';
import * as FaIcons from 'react-icons/fa';
import * as IoIcons from 'react-icons/io';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import { IconContext } from 'react-icons/lib';
import SubMenu from './SubMenu.js';

const Nav = styled.div`
/*
    background: #3fc1c9;
    height: 80px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
*/
`;

const NavIcon = styled(Link)`
    margin-left: 2rem;  
    font-size: 2rem;
    height: 80px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`;

const SidebarNav = styled.nav`
    background: #3fc1c9;
    width: 250px;
    height: 100vh;
    display: flex;
    justify-content: center;
    position: fixed;
    top: 0;
    left: ${({ sidebar }) => (sidebar ? '0' : '-100%')};
    transition: 750ms;
    z-index: 10;
`;

const SidebarWrap = styled.div`
    width: 100%;
`;

const Sidebar = () => {
    const [sidebar, setSidebar] = useState(false)
    const showSidebar = () => setSidebar(!sidebar)
    return(
        <>
            <IconContext.Provider value={{ color: '#f5f5f5'}}>
                <Nav>
                    <NavIcon to='#'>
                        <IconContext.Provider value={{color: '#3fc1c9'}}>
                            <FaIcons.FaBars onClick={showSidebar}/>
                        </IconContext.Provider>
                    </NavIcon>
                </Nav>
                <SidebarNav sidebar={sidebar}>
                    <SidebarWrap>
                        <NavIcon to='#'>
                            <IoIcons.IoMdClose onClick={showSidebar}/>
                        </NavIcon>
                        {SidebarData.map((item, index) => {
                            return <SubMenu item={item} key={index}/>
                        })}
                    </SidebarWrap>
                </SidebarNav>
            </IconContext.Provider>
        </>
    )
}

export default Sidebar