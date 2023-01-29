import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";

function Rating({value, text}) {
    return (
        <div className="rating">
            <i>{
                value >= 1 ?
                <BsStarFill /> :
                value >= 0.5 ?
                <BsStarHalf /> :
                <BsStar />
            }</i>

            <i>{
                value >= 2 ?
                <BsStarFill /> :
                value >= 1.5 ?
                <BsStarHalf /> :
                <BsStar />
            }</i>
            <i>{
                value >= 3 ?
                <BsStarFill /> :
                value >= 2.5 ?
                <BsStarHalf /> :
                <BsStar />
            }</i>
            <i>{
                value >= 4 ?
                <BsStarFill /> :
                value >= 3.5 ?
                <BsStarHalf /> :
                <BsStar />
            }</i>
            <i>{
                value >= 5 ?
                <BsStarFill /> :
                value >= 4.5 ?
                <BsStarHalf /> :
                <BsStar />
            }</i>

            <span>{text && text}</span>
        </div>
    )
};

export default Rating;