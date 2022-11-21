import Image from "next/image";
import {logo} from "./banner.module.css";

const Banner = () => {
    return(
        <header className="row mb-4">
            <div className="col-5">
                <Image src="/GloboLogo.png" alt="logo" 
                className={logo} width="200" height="150"/>
            </div>
            <div className="col-7 mt-5">
                Providing houses all over the world.
            </div>
        </header>
    );
};

export default Banner;