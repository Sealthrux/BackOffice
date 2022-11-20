import React from 'react';
import SideNav, {Toggle, NavItem, NavIcon, NavText} from '@trendmicro/react-sidenav';
import "@trendmicro/react-sidenav/dist/react-sidenav.css";

function MySideNav() {
    return <SideNav
    onSelect={selected =>{
        console.log(selected)
    }}
    className='mysidenav'
    >
        <SideNav.Toggle/>
        <SideNav.Nav defaultSelected="home">
            <NavItem eventKey="dashboard">
                <NavIcon><i className="fa fa-fw  fa-home" style={{fontSize:"1,5em"}}></i></NavIcon>
                <NavText>Dashboard</NavText>
            </NavItem>
            <NavItem eventKey="utilizadores">
                <NavIcon className="fa fa-fw fa-solid fa-user" ><i style={{fontSize:"1,5em"}}></i></NavIcon>
                <NavText>Utilizadores</NavText>
            </NavItem>
            <NavItem eventKey="pontos de interesse">
                <NavIcon><i style={{fontSize:"1,5em"}}></i></NavIcon>
                <NavText>Pontos de interesse</NavText>
            </NavItem>
            <NavItem eventKey="categoria">
                <NavIcon><i style={{fontSize:"1,5em"}}></i></NavIcon>
                <NavText>Categoria</NavText>
            </NavItem>
            <NavItem eventKey="regiao">
                <NavIcon><i  style={{fontSize:"1,5em"}}></i></NavIcon>
                <NavText>Região</NavText>
            </NavItem>
            <NavItem eventKey="atividades">
                <NavIcon><i style={{fontSize:"1,5em"}}></i></NavIcon>
                <NavText>Atividades</NavText>
            </NavItem>
            <NavItem eventKey="reservas">
                <NavIcon><i style={{fontSize:"1,5em"}}></i></NavIcon>
                <NavText>Reservas</NavText>
            </NavItem>
            <NavItem eventKey="recompensas">
                <NavIcon><i  style={{fontSize:"1,5em"}}></i></NavIcon>
                <NavText>Recompensas</NavText>
            </NavItem>
            <NavItem eventKey="vouchers">
                <NavIcon><i  style={{fontSize:"1,5em"}}></i></NavIcon>
                <NavText>Vouchers</NavText>
            </NavItem>
        </SideNav.Nav>
    </SideNav>
}
export default MySideNav;