import "./featuredProperties.css";

const FeaturedProperties = () => {
    return (
        <div className="fp">
            <div className="fpItem">
                <img
                    src="https://cdn1.goibibo.com/voy_ing/t_g/806c81ac334e11e9b4b20242ac110002.jpg"
                    alt=""
                    className="fpImg"
                />
                <span className="fpName">Svelte Hotel & Personal Suites</span>
                <span className="fpCity">Delhi</span>
                <span className="fpPrice">Starting from Rs.8000</span>
                <div className="fpRating">
                    <button>8.9</button>
                    <span>Excellent</span>
                </div>
            </div>
            <div className="fpItem">
                <img
                    src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/215955381.jpg?k=ff739d1d9e0c8e233f78ee3ced82743ef0355e925df8db7135d83b55a00ca07a&o=&hp=1"
                    alt=""
                    className="fpImg"
                />
                <span className="fpName">Meluha - The Fern</span>
                <span className="fpCity">Mumbai</span>
                <span className="fpPrice">Starting from Rs.6000</span>
                <div className="fpRating">
                    <button>9.3</button>
                    <span>Exceptional</span>
                </div>
            </div>
            <div className="fpItem">
                <img
                    src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/232902339.jpg?k=3947def526b8af0429568b44f9716e79667d640842c48de5e66fd2a8b776accd&o=&hp=1"
                    alt=""
                    className="fpImg"
                />
                <span className="fpName">Radisson Blu Hotel New Delhi
                </span>
                <span className="fpCity">New Delhi</span>
                <span className="fpPrice">Starting from Rs.6000</span>
                <div className="fpRating">
                    <button>8.8</button>
                    <span>Excellent</span>
                </div>
            </div>
            <div className="fpItem">
                <img
                    src="https://cdn1.goibibo.com/voy_mmt/t_g/htl-imgs/201006011120009706-77f0958259cd11edac9c0a58a9feac02.jpg"
                    alt=""
                    className="fpImg"
                />
                <span className="fpName">Four Points By Sheraton</span>
                <span className="fpCity">Navi Mumbai</span>
                <span className="fpPrice">Starting from $105</span>
                <div className="fpRating">
                    <button>8.9</button>
                    <span>Excellent</span>
                </div>
            </div>
        </div>
    );
};

export default FeaturedProperties;