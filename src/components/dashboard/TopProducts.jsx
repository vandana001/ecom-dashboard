function TopProducts() {
  const products = [
    { name: "ASOS Ridley High Waist", price: "$79.49", quantity: 82, amount: "$6,518.18" },
    { name: "Marco Lightweight Shirt", price: "$128.50", quantity: 37, amount: "$4,754.50" },
    { name: "Half Sleeve Shirt", price: "$39.99", quantity: 64, amount: "$2,559.36" },
    { name: "Lightweight Jacket", price: "$20.00", quantity: 184, amount: "$3,680.00" },
    { name: "Marco Shoes", price: "$79.49", quantity: 64, amount: "$1,965.81" },
  ]

  return (
    <div className="top-products rounded-[20px] border border-[#e7e7e7] bg-white"style={{ padding: '20px' }}>
      <h3>Top Selling Products</h3>
      <div className="products-table">
        <div className="table-header" style={{color:'#85858566'}}>
          <div className="col">Name</div>
          <div className="col">Price</div>
          <div className="col">Quantity</div>
          <div className="col">Amount</div>
        </div>
        <div className="table-body">
          {products.map((product, idx) => (
            <div key={idx} className="table-row">
              <div className="col">{product.name}</div>
              <div className="col">{product.price}</div>
              <div className="col">{product.quantity}</div>
              <div className="col">{product.amount}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default TopProducts
