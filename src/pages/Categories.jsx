import React from 'react'
import { Link } from 'react-router-dom'
import "../styles/Categories.css"
const Categories = () => {
    const categories = [
        {
            name: 'ODORATA CINERE',
            description: 'To make up for its colourless, scraggy-looking petals, the Odorata Cinere emits an aroma so delicious that it is described as one of the most enticing and satisfying scents in the world. The compounds are so decadently abundant that they secrete from the floral tissue. This sticky coating catches pollen, as well as foreign particles like dirt that add to both the complexity of its rich fragrance and it appearance            ',
            image: 'https://uploads-ssl.webflow.com/61e8d5e2b0c7aed00cc0bddb/621e3e828af59d799c1c1288_Pulvis%20Dependant.jpg'
        },
        {
            name: 'TOXIC EXARYUM',
            description: "Toxic Exaryum is known for its complex scent - its petals smell intensely sweet and musky, almost to a point of smelling artificial and chemical, with sour undertones reminiscent of stale, yeasty fermentation. Bulbous growths that develop on the flower's stem drop to the earth, releasing acidic compounds into the ground as they decompose. This discourages other species from taking root, turning the surrounding environment barren.",
            image: 'https://uploads-ssl.webflow.com/61e8d5e2b0c7aed00cc0bddb/621a5b209d2790846675c009_Toxic%20Exaryum.jpg'
        },
        {
            name: 'ADAMO PERICOLOSUM',
            description: 'Despite the alluring, rich colour of its blood-red petals, Adamo Periculosum is a species to be cautious of. Brushing against it in the wrong direction, its sharp talons will stubbornly stick into whatever it has caught and infect its victim with a nasty bacterial infection.',
            image: 'https://uploads-ssl.webflow.com/61e8d5e2b0c7aed00cc0bddb/621a5aecc6cb847731dee4a6_Adamo%20Peri%20Colosum.jpg'
        },
        {
            name: 'FLUFFUS ALGAE',
            description: "The gentle giant of the plant world, the stalk of the Fluffus Algae is comprised of vascular bundles that are arranged in a loose and unstructured way. It is for this reason it has a relatively 'mellow' appearance. Its growth movements are quite slow compared to that of other flowers, also due to it being extremely tall and thus quite heavy.            ",
            image: 'https://uploads-ssl.webflow.com/61e8d5e2b0c7aed00cc0bddb/621a5b044501e0d319d52148_Fluffux%20Algae.jpg'
        },
        {
            name: 'LUNA STIPULA ',
            description: "The stalks of Luna Stipula branch and merge as it grows to form a web-like structure with circular holes. These strange stems have developed as a method to keep the flower stable and resistant to storms in the open landscape it inhabits. The holes are said to resemble the craters of the moon, a symbolism further bolstered by the fact that this flower only blooms at night.            ",
            image: "https://uploads-ssl.webflow.com/61e8d5e2b0c7aed00cc0bddb/621e40e2f1ad2b55e44d5731_Luna%20Stipula.jpg"
        },
    ]
    return (
        <div  className='category-container'   >
            {
                categories.map((category, index) => {
                    return (
                        <Link to="/details" className='category' key={index} >
                            <div className='categoryInfo' >
                                <h1>{category.name}</h1>
                                <p>{category.description}</p>
                            </div>
                            <img className='categoryImage' src={category.image} alt={category.name} />
                        </Link>
                    )
                })
            }
            <div className='categoryButton' >
                EXPLORE MORE
            </div>
        </div>
    )
}

export default Categories