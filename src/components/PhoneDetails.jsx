import { useEffect, useState } from "react"
import './PhoneDetails.css'


function PhoneDetails(props) {

    const { color, description, imageFileName, manufacturer, name, price, processor, ram, screen } = props.phoneDetails
    const [ image, setImage ] = useState(null)

    useEffect( () => {
        const importImage = async () => {
            const { default: importedImage} = await import(`../assets/images/${imageFileName}`)
            setImage(importedImage)
        }
        importImage()
    }, [imageFileName])

  return (
    <>
        {image && 
        <div className="image"><img src={image} alt="phone img"/></div>}
        <p><span>Name: </span>{name}</p>
        <p><span>Manufacturer: </span>{manufacturer}</p>
        <p><span>Price: </span>{price} €</p>
        <p><span>Description: </span>{description}</p>
        <p><span>Processor: </span>{processor}</p>
        <p><span>Ram: </span>{ram} Gb</p>
        <p><span>Color: </span>{color}</p>
        <p><span>Screen: </span>{screen}</p>

    </>
  )
}

export default PhoneDetails