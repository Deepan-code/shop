import React, { useEffect, useState } from "react";
import { Filter } from "../sidebar/filters"
import { Row } from "react-bootstrap"
import { ProductName, ProductPrice, ProductSubText, BuyNowBtn, ViewProduct, ProductRatings, ProductRatingCount } from "../styled/styledComponents"
import axios from 'axios'

export const Products = () => {

    const [getApiData, setGetApiData] = useState([])

    useEffect(() => {
        axios.get(`https://631c10dd4fa7d3264ca64f4f.mockapi.io/api/v1/todos`)
            .then((getData) => {
                setGetApiData(getData.data)
            })
    }, [setGetApiData])
    console.warn("res", getApiData)

    return (
        <>
            <Row className="mt-40">
                <div className='col-md-3'>
                    <Filter />
                </div>
                <div className='col-md-9'>

                    <div className="row">
                        {getApiData.map((data) => {
                            return (
                                <div className="col-md-4">
                                    <div className="products-sec">
                                        <div className="img-sec">
                                            <img src={data.ProductImg} alt="products" />
                                        </div>
                                        <div className="prod-details">
                                            <div className="row">
                                                <div className="col">
                                                    <ProductName>{data.productName}</ProductName>
                                                </div>
                                                <div className="col">
                                                    <ProductPrice> $ {data.ProductPrice} </ProductPrice>
                                                </div>
                                            </div>
                                            <div className="row hiderating">
                                                <div className="col">
                                                    <ProductSubText>Smart, Powerful, Helpful</ProductSubText>
                                                </div>
                                                <div className="col">
                                                    <ProductRatings>
                                                        <i className="fa fa-star" aria-hidden="true"></i>
                                                        <i className="fa fa-star" aria-hidden="true"></i>
                                                        <i className="fa fa-star" aria-hidden="true"></i>
                                                        <i className="fa fa-star-half" aria-hidden="true"></i>
                                                        <ProductRatingCount> (1.2k)</ProductRatingCount>
                                                    </ProductRatings>
                                                </div>
                                            </div>
                                            <div className="row hideproduct">
                                                <div className="col">
                                                    <div className="viewproduct">

                                                        <ViewProduct>View Product</ViewProduct>
                                                    </div>
                                                </div>
                                                <div className="col">
                                                    <div className="buynow-btn">
                                                        <BuyNowBtn className="buy-now">Buy Now</BuyNowBtn>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                        }
                    </div>
                </div>
            </Row>

        </>
    )
}



