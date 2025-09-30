export function CartCard({id,imgsrc,title,Slogan,price,quantity}){
    return (
    <>
        <tr class="product-row border-b">
            <td class="py-4">
                <div class="flex items-center">
                    <div class="h-30 w-30 mr-4  rounded-lg flex items-center justify-center">
                        <img src={imgsrc} alt="" />
                    </div>
                    <span class="font-semibold">{title}</span>
                </div>
            </td>
            <td class="py-4 font-semibold text-blue-600">₹{price}</td>
            <td class="py-4">
                <div class="flex items-center">
                    <button class="quantity-btn border rounded-md py-2 px-4 mr-2" data-action="decrease">-</button>
                    <span class="text-center w-8 quantity-display font-semibold">{quantity}</span>
                    <button class="quantity-btn border rounded-md py-2 px-4 ml-2" data-action="increase">+</button>
                </div>
            </td>
            <td class="py-4 font-bold text-lg total-price">₹{price*quantity}</td>
        </tr>
    </>
    )
}