import Container from "../container";

import Logo from "./Logo";
import Search from "./search";
import UserMenu from "./usermenu";

const Navbar = () => {

    return (
        <div className ="fixed w-full bg-white z-10 shadow-sm">
           <div
            className="
                py-4
                border-b-[2px]
                "
           >
            <Container>
                <div
                   className="
                   flex
                   flex-row
                   item-center
                   justify-between
                   gap-3
                   md:gap-0
                   width:700px
                   " 
                   >
                    {/* <Logo />  */}

                    <Logo> </Logo>
                    <Search />
                    <UserMenu  />

                </div>
            </Container>

           </div>
        </div>
    )
}
export default Navbar;
