
import React from 'react'

type Props= {
    params: {
        productId: string
        reviewId: string
    }
}
const ReviewIdPage = ({params}: Props) => {
    console.log(params.reviewId)
  return (
    <div>
      Product Id: {params.productId} <br />
      Review Id: {params.reviewId}
    </div>
  )
}

export default ReviewIdPage
