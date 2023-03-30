

function PhoneDetails(props) {

    const { color, description, imageFileName, manufacturer, name, price, processor, ram, screen } = props.phoneDetails

  return (
    <>
        <img src="" alt="phone img" />
        <h4>Name: {name}</h4>
        <h5>Manufacturer: {manufacturer}</h5>
        <h5>Price: {price} €</h5>
        <p><span>Description: </span>{description}</p>
        <p><span>Processor: </span>{processor}</p>
        <p><span>Ram: </span>{ram} Gb</p>
        <p><span>Screen: </span>{screen}</p>

    </>
  )
}

export default PhoneDetails