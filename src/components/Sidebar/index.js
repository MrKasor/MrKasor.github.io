import React from 'react'
import {SidebarContainer,Icon,CloseIcon, SidebarWrapper, SidebarLink, SidebarMenu, SideBtnWrap, SidebarRoute} from './SidebarElements'

const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon/>
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to='about' onClick={toggle}>Under Construction</SidebarLink>
                    <SidebarLink to='discover' onClick={toggle}>Developer</SidebarLink>
                    <SidebarLink to='services' onClick={toggle}>Abilities</SidebarLink>
                    <SidebarLink to='signup' onClick={toggle}>Perspective</SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to='/signin'>Sign In</SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
