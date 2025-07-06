import { Link } from 'react-router-dom'
import { useState } from 'react'
function Card() {
    const [Data, setData] = useState([
        {
            img:"/images/bike.png",
            tenology: "HTML5, CSS3, Bootstrap, Responsive Design",
            description: "Optimized layout for mobile and desktop screens using media queries.",
            link: "https://janapunya.github.io/Bike-website/"
        },
        
    ]);

    return (
        <>
            {Data.map((item, idx) => (
                <div key={idx} className="h-80 w-70 border-2 border-gray-500 rounded-lg overflow-hidden">
                    <div className="h-1/2 w-full">
                        <img src={item.img} alt="Website image" className="h-full w-full object-cover" />
                    </div>
                    <div className="h-1/2 w-full px-3 text-[15px] mt-3">
                        <p>{item.tenology}</p>
                        <p>{item.description}</p>
                        <Link to={item.link} className="text-blue-500">Explore More...</Link>
                    </div>
                </div>
            ))}
        </>
    );
}

export default Card;