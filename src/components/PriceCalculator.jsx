import { useState } from "react"

 function Quantityinput({ quantity, onQuantityChange }) {
        return (<>

            <input type="number" 
                    min="1"
                value={quantity}
                onChange={(e) => onQuantityChange(Number(e.target.value))} />
        </>)
    }

 function PriceSummary({ quantity }) {
        let unitPrice = 50;
        let Total =quantity * unitPrice;
        return (<>
          <p> Total : ${Total}</p>
        </>)
    }

function PriceCalculator() {
    const [quantity, setQuantity] = useState(1);
    return (
        <>
            <Quantityinput quantity={quantity} onQuantityChange={setQuantity}/>
            <PriceSummary quantity={quantity} />
        </>
    )
}

export default PriceCalculator