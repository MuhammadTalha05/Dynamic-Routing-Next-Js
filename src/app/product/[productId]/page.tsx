import React from 'react'

type Props = {
    params:{
        productId : string
    }
}
const ProductId = ({params}: Props) => {
   console.log(params.productId)
    
  return (
    <div>
      product Id :{params.productId}
    </div>
  )
}

export default ProductId
