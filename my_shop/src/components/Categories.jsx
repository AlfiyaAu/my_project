import React from "react";

export default function Categories (props){
    
        const categories=[
            {
                key:"all",
                name: "Все"
            },
            {
                key:"zara",
                name: "Zara"
            },
            {
                key:"Zolla",
                name: "Zolla"
            },
            {
                key:"SoftHome",
                name: "SoftHome"
            },
            {
                key:"Louis Vuitton",
                name: "Louis Vuitton"
            },
            {
                key:"Ekonika",
                name: "Ekonika"
            }
        ];

    return(
        <div className="categories">
            {categories.map(el=>(
                <div key={el.key} onClick={()=>props.chooseCategory(el.key)}>{el.name} </div>
            ))}

        </div>

    );

}