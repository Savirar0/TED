import "./ShootingStars.css";

const Shootingstars = () => {
    console.log("Shootingstars component rendered");
    return (
        <div className="shootingStars">
            <span className="star"></span>
            <span className="star pink"></span>
            <span className="star blue"></span>
            <span className="star yellow"></span>
        </div>
    );
};

export default Shootingstars;
