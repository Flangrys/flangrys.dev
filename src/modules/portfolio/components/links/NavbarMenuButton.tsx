import SVGHamburgerMenuIcon from "/src/assets/hamburger-menu-icon.svg?react";

export function NavbarMenuButtonComponent() {
    return (
        <button type="button"  className="lg:hidden" id="navigation-menu-toggler">
            <span className="sr-only">Open Navigation Menu</span>
            <SVGHamburgerMenuIcon/>
        </button>
    )
}