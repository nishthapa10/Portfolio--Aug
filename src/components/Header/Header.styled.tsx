import styled from 'styled-components';
import '../../../src/App.css';

export const Container = styled.div`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: var(--z-index-fixed);
  background-color: var(--body-color);

  .nav {
    height: calc(var(--header-height) + 1.5rem);
    display: flex;
    justify-content: space-between;
    align-items: center;
    column-gap: 1rem;
  }

  .nav__logo,
  .nav__toggle {
    color: var(--title-color);
    font-weight: var(--font-medium);
  }

  .nav__list {
    display: flex;
    column-gap: 2rem;
  }

  .nav__link {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: var(--small-font-size);
    color: var(--title-color);
    font-weight: var(--font-medium);
    transition: 0.3s;
  }
  .nav__icon,
  .nav__close,
  .nav__toggle {
    display: none;
  }

  // ACTIVE LINK
  .active-link,
  .nav__link:hover {
    color: var(--title-color-dark);
  }

  /* For medium devices */
@media screen and (max-width: 576px) {
    .header {
      top: initial;
      bottom: 0;
    }

    .nav {
      height: var(--header-height);

    }

    .nav__menu {
      position: fixed;
      bottom: 0;
      left: 0;
      width: 100%;
      background-color: var(--body-color);
      padding: 2rem 1.5rem 4rem ;
      box-shadow: 0 -1px 4px rgba(0, 0, 0, 0.15);
      border-radius: 1.5rem 1.5rem 0 0;
      transition: .3s;
    }

    .nav__list {
      display: grid;
      grid-template-columns: repeat(3, )
    }

    .nav__icon, .nav__close, .nav__toggle {
      display: none;
    }
}
`;
