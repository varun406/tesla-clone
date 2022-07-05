import React,{useState} from 'react';
import styled from "styled-components";
import MenuIcon from '@material-ui/icons/Menu';
import { MenuItem } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import cars from "../carInfo";



function Header() {

    const [burgerStatus,setBurgerStatus] = useState(false)

    console.log(cars);

  return (
    <Container>
        <a>
            <img src="/images/logo.svg" alt='tesla'/>
        </a>
        <Menu>
        {
            cars.map((car,index)=>(
                <a key={index} href='#'>{car.title}</a>
            ))
        }
            
        </Menu>
        <RightMenu>
              <a href='#'>Shop</a>  
             <a href='#'>Account</a>   
             <CustomMenu onClick={()=> setBurgerStatus(true)} />
           
        </RightMenu>
        <BurgerNav show={burgerStatus}>
            <CloseWrapper>
                 <CustomClose onClick={()=> setBurgerStatus(false)}/>
            </CloseWrapper> 

            <FeatureList>
            {
            cars.map((car,index)=>(
                <li key={index}><a href='#'>{car.title}</a></li>
            ))
        }

            <li><a href='#'>Existing Inventory</a></li>
            <li><a href='#'>Used Inventory</a></li>
            <li><a href='#'>Trade-in</a></li>
            <li><a href='#'>Cyber Truck</a></li>
            <li><a href='#'>Tesla Roadster</a></li>
            </FeatureList>
            
        </BurgerNav>
    </Container>
  )
}

export default Header

const Container = styled.div`
    min-height:60px;
    position:fixed;
    display:flex;
    align-items:center;
    justify-content:space-between;
    padding:0 20px;
    width:100%;
    z-index:1;
`
const Menu = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    flex:1;
    
    a{
        font-weight:600;
        text-transform:uppercase;
        padding:0 10px;
        flex-wrap:nowrap;
    }

    @media(max-width:768px) {
        display:none;
    }
`

const RightMenu = styled.div`
    display:flex;
    align-items:center;

    a{
        font-weight:600;
        text-transform:uppercase;
        margin-right:15px;
        
    }
`

const CustomMenu = styled(MenuIcon)`
    cursor:pointer;
    font-weight:600;
`
const BurgerNav = styled.div`
    position:fixed;
    top:0;
    bottom:0;
    right:0;
    background:white;
    width:300px;
    z-index:100;
    list-style:none;
    padding:20px;
    display:flex;
    flex-direction:column;
    text-align:start;
    transform:${props=> props.show ? 'translateX(0)' : 'translateX(100%)'};
    transition: transform 0.2s ;
    li {
        padding:15px 0;
    }

    a{
        font-weight:600;
    }
`

const FeatureList = styled.div`
    margin-top:40px;
`

const CustomClose = styled(CloseIcon)`
    cursor:pointer;
`

const CloseWrapper = styled.div`
    display:flex;
    justify-content:flex-end;
`