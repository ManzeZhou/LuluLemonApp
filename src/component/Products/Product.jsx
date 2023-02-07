import {useState} from "react";

const Products = ({product}) => {

    const [colorId, setColorId] = useState(0);

    return (
        <div>
            {product?.images && product?.images[`${colorId}`]?.mainCarousel?.media &&
                <div>
                    <img
                        src={
                            product?.images[colorId]?.mainCarousel?.media?.split('|')[0]

                        }
                        alt={product.name}
                        width='100px'
                        height='100px'

                        onMouseEnter={(e) => e.target.src = product?.images[`${colorId}`]?.mainCarousel?.media?.split('|')[1]}

                        onMouseLeave={(e) => e.target.src = product?.images[`${colorId}`]?.mainCarousel?.media?.split('|')[0]}
                    />

                    {product?.swatches && product?.swatches?.map((color, cindex) => {
                        return <img
                            src={color.swatch}
                            key={cindex}
                            id={cindex}
                            alt={color.swatchAlt}
                            style={{borderRadius: '50%', height: '20px', width: '20px'}}
                            onMouseEnter={(e) => {

                                setColorId(e.target.id);

                            }}
                        />
                    })}

                    <span>{product?.name}</span>
                    <p>{product?.price}</p>

                </div>
            }
        </div>

    )
}

export default Products;