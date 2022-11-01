import styled from "styled-components";

export const Container = styled.div`

    .main-container {
      position: fixed;
      width: 100%;
      height: 75px;
      display: flex;
      justify-content: center;

      background-color: var(--color-white);
      box-shadow: 5px 5px 30px rgba(0,0,0,0.5);
    }

    .mobile {
      position: fixed;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      width: 87%;
      height: 75px;
    }
    
    .sidenav {
      top: 75px;
      position: fixed;
      width: 100%;
      height: 100vh;
      background: var(--color-white);
      transform: translateX(-110%);
      transition: all 0.5s ease-in-out;
      z-index: 1;
    }

    .activeSidenav {
      top: 75px;
      position: fixed;
      width: 100%;
      height: 100vh;
      background: var(--color-white);
      transform: translateX(-80%);
      transition: all 0.5s ease-in-out;
      z-index: 1;

    .hamburguer {
      background: transparent;
    }

    .hamburguer-container {
      position: fixed;
      width: 100%;
      height: 100%;
    }

    .logo__casa {
      max-width: 60px;
    }
  }
`