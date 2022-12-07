import styled from "styled-components";

export const Container = styled.div`

    .mobile_mobile {
      display: none;
    }

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

  @media (max-width: 600px) {
    .main-container {
      display: none;
    }

    .main_mobile {
      position: fixed;
      width: 100%;
      height: 75px;
      display: flex;

      background-color: var(--color-white);
      box-shadow: 5px 5px 30px rgba(0,0,0,0.5);
    }

    .mobile_mobile {
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      padding: 1rem;

    }

    .logo__casa {
      max-width: 50px;
      /* margin-left: 10rem; */
    }

      .sidenav {
        position: fixed;
        width: 100%;
        height: 100vh;
        background: #fff;
        transform: translateX(-110%);
        transition: all 0.5s ease-in-out;
        z-index: 1;
      }

      .activeSidenav {
        position: fixed;
        width: 100%;
        height: 100vh;
        background: #fff;
        transform: translateX(-50%);
        transition: all 0.5s ease-in-out;
        z-index: 1;

      .hamburguer {
        background: transparent;
      }

      .btn_doe2 {
        margin-top: 2rem;
        width: 110px;
        display: inline-block;
        background: var(--color-red);
        color: var(--color-white);
        padding: 0.75rem 1.2rem;
        right: 0.05rem;
        bottom: 1.1rem;
        border-radius: 1rem;
        cursor: pointer;
        letter-spacing: 1.5px;

        transition: var(--transition);
      }

      .btn_doe2:hover {
        background: var(--color-green-primary);
        color: var(--color-white);
        border-color: transparent;
      }
    }
  }
`;