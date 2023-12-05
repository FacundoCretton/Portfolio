import styled from 'styled-components';


export const SidebarWrapper = styled.div`
    height: 100%;
    width: 250px;
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    background-color: #000;
    display: flex;
    flex-direction: column;


`

export const ProfileImage = styled.img`
    width: 60%;
    height: 150px;
    object-fit: cover;
    object-position: center;
    border-radius: 50%;
    border: 1px solid #000;
    margin: 1rem auto;
`


export const SidebarTitle = styled.h1`

    color: #fff;
    font-size: 1.5rem;
    margin-top: 1rem;
    text-align: center;
`


export const SidebarSubTitle = styled.h2`
    color: #fff;
    font-size: 1rem;
    margin-top: 0.5rem;
    text-align: center;
`

export const SidebarNav = styled.nav`

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 1rem;
    


`

export const UlNav = styled.ul`

    list-style: none;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0px;
    
    
    


`

export const LinkNav = styled.li`
  margin: 0.5rem 0;
  padding: 0.5rem;
  width: 100%;
  text-align: center;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #fff;

  &.activeLink {
    background-color: aliceblue;
  }

  a {
    color: #fff;
    font-size: 1rem;
    font-weight: bold;
    text-decoration: none;

    &:hover {
      color: red;
      text-decoration: underline;
    }

    &.active {
      color: #983;
    }
  }
`;