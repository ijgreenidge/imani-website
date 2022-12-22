import { useState } from "react";

const useShowMore = () => {
    const [seeMore, setSeeMore] = useState(false);
    const seeText = seeMore ? "See Less" : "See More";

    return ({
        element : <h3 onClick={()=> setSeeMore(!seeMore)} className="center headingDesign">{seeText}</h3>, seeMore 
})
}

export default useShowMore;