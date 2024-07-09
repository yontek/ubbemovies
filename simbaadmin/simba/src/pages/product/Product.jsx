import "./product.css"
import {Link } from "react-router-dom";
import Chart from '../../components/chart/Chart'
import {productData} from '../../dummyData'
import PublishIcon from '@mui/icons-material/Publish';



export default function Product() {
  return (
    <div className="product">
        <div className="productTitleContainer">
            <h1 className="productTitle">Product </h1>
                <Link to="/newproduct">
                <button className="productAddButton">Create</button>
                </Link> 
        </div>
        <div className="productTop">
            <div className="productTopLeft">
                <Chart data={productData} dataKey="Sales" title="Sales Performance"/>
            </div>
            <div className="productTopRight">
                <div className="productInforTop">
                    <img src="https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="productInfoImg" />
                    <span className="productInfoBottom">Apple Airpods</span>
                </div>
                <div className="productInfoBottom">
                    <div className="productInfoItem">
                        <span className="productInfoKey">id:</span>
                        <span className="productInfoKey">123</span>
                    </div>
                    <div className="productInfoItem">
                        <span className="productInfoKey">sales:</span>
                        <span className="productInfoKey">5123</span>
                    </div>
                    <div className="productInfoItem">
                        <span className="productInfoKey">active:</span>
                        <span className="productInfoKey">yes</span>
                        
                    </div>
                    <div className="productInfoItem">
                        <span className="productInfoKey">in stock</span>
                        <span className="productInfoKey">no</span>
                        
                    </div>
                </div>
            </div>
            <div className="productBottom">
                <form className="productForm">
                    <div className="productFormLeft">
                        <label>Product Name</label>
                        <input type="text" placeholder="Apple AirpPod"/>
                        <label>In Stock</label>
                        <select name="inStock" id="inStock">
                            <option value="yes">Yes</option>
                            <option value="yes">No</option>
                        </select>
                        <label>Active</label>
                        <select name="active" id="active">
                            <option value="yes">Yes</option>
                            <option value="yes">No</option>
                        </select>
                    </div>
                    <div className="productFormRight">
                        <div className="productUpload">
                            <img src="https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="productUploadImg" />
                            <label for="file">
                                <PublishIcon/>
                            </label>
                        <input type="file" id="file" style={{display:"none"}}/>
                        </div>
                        <button className="productButton">Update</button>
                    </div>
                </form>
            </div>
        </div>
        </div>
  )
}
