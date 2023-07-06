import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {deleteProduct, getOneProduct, getProductUser} from '../../Redux/ProductSlice'
import Button from 'react-bootstrap/esm/Button'
import EditProduct from '../Edituser/EditProduct'
import Card from 'react-bootstrap/Card';


function CrdUserProduct() {
    const [showEditProduct, setShowEditProduct] = useState({});
    const dispatch = useDispatch()
    const user = useSelector((state) => state.auth.user)
    const products = useSelector((state) => state.product.userProduct.product)
    const oneProduct = useSelector((state) => state.product.productOne)
    const searchname = useSelector((state) => state.profile.searchname)

    useEffect(() => {
        dispatch(getProductUser(user._id));

    }, [dispatch, user._id])
    const handledelete = async (id) => {
        if (window.confirm(" Êtes vous sûres?")) {
            dispatch(deleteProduct(oneProduct?._id));
            dispatch(getProductUser(user._id));
        }
    };
    return (

        <div className='liste'>
            {
            products?.filter((product) => product.name.toLowerCase().includes(searchname.toLowerCase().trim()))?.map(product => <Card style={
                    {
                        width: '18rem',
                        "color": "#4e5052"
                    }
                }
                className="our-team">


                <div className="picture">
                    <img className="img-fluid"
                        src={
                            product?.photo
                        }
                        alt="product"/>


                </div>

                <Card.Body>
                    <h4 className="title">
                        {
                        product?.name
                    }</h4>
                    <h4 className="title">
                        {
                        product?.price
                    }</h4>
                    <h4 className="title">
                        {
                        product?.description
                    }</h4>


                    <Button variant='outline-primary' onClick= {()=>{dispatch(getOneProduct (product._id)); setShowEditProduct(prevState => ({
                                                                ...prevState,
                                                                [product._id]: true
                                                              }));}}>modifier ou supprimer le produit</Button>
                    <br/>
                    <br/> {
                    showEditProduct[product._id] && (
                        <Button variant="outline-primary"
                            onClick={handledelete}>
                            Confirmer la suppression
                        </Button>
                    )
                }
                    {
                    showEditProduct[product._id] && <EditProduct oneProduct={oneProduct}/>
                } </Card.Body>
            </Card>)
        } </div>

    )
}

export default CrdUserProduct
