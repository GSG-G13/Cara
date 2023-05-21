import React from 'react';

const ProductDetails = () => {
  return (
    <section id="prodetails" className="section-p1">
    <div className="single-pro-image">
        <img src="../img/products/f1.jpg" width="100%" id="MainImg" />

        <div className="small-img-group">
            <div className="small-img-col">
              <img src="../img/products/f1.jpg" width="100%" className="small-img"  />
            </div>
            <div className="small-img-col">
                <img src="../img/products/f2.jpg" width="100%" className="small-img"  />
              </div>
              <div className="small-img-col">
                <img src="../img/products/f3.jpg" width="100%" className="small-img"  />
              </div>
              <div className="small-img-col">
                <img src="../img/products/f4.jpg" width="100%" className="small-img" />
              </div>
        </div>   

     </div>

     <div className="single-pro-details">
        <h4>Men's Fashion T Shirt</h4>
        <h2>$139.00</h2>
        <select>
          <option>Select Size</option>
          <option>XL</option>
          <option>XXL</option>
          <option>Small</option>
          <option>Largec</option>
      </select><br />
      <input type="number" value="1" />
      <button className="normal">Add To Cart</button>
      <h4>Product Details</h4>
    <span>The Gildan Ultra Cotton T-shirt is made from a substantial 6.0 oz. per
    sq. yd. fabric constructed from 100% cotton, this classNameic fit preshrunk jersey
    knit provides unmatched comfort with each wear. Featuring a taped neck and
    shoulder, and a seamless double-needle collar, and available in a range of
    colors, it offers it all in the ultimate head-turning package.k</span>

    </div>
           
</section>

  );
};

export default ProductDetails;
