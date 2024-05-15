import { FaStar } from "react-icons/fa";
import { IconContext } from "react-icons";
import { FaRegStar } from "react-icons/fa";

const starsCreator = (starsRecieved) => {
    const starer = [];
    for (let i = 0; i < starsRecieved; i++) {
        starer.push(<FaStar size={10} />);
    };
    for (let i = 0; i < (5 - starsRecieved); i++) {
        starer.push(<FaRegStar size={10} />);
    };
    return starer;
};

const ReviewItem = (props) => {
    const starsCount = starsCreator(props.starsRecieved);
    return (
        <div className="flex flex-col gap-y-3 w-fit">
            <div className="font-inter flex items-center gap-x-6">
                <img src={window.location.origin + props.profileImgPath}
                    alt="" className="w-14 h-14" />
                <div className="flex flex-col gap-y-2">
                    <div className="flex items-baseline gap-x-5">
                        <h4 className="font-semibold text-2xl">{props.customerName}</h4>
                        <p className="font-light text-sm">{props.location}</p>
                    </div>
                    <div className="flex items-baseline gap-x-5">
                        <p className="font-light text-sm">{props.time}</p>
                        <IconContext.Provider
                            value={{ color: "#F6CF00", className: "global-class-name" }}>
                            <div className="flex gap-x-1">
                                {starsCount.map((e, i) => <div key={i}>{e}</div>)}
                            </div>
                        </IconContext.Provider>
                    </div>
                </div>
            </div>
            <p className="font-normal text-sm leading-6 text-[#3C3C3C] pl-20">
                {props.comment}
            </p>
        </div>
    );
}

export default ReviewItem;