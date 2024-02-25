import "bootstrap/dist/css/bootstrap.min.css";
import Card from "./Card";

function Cart() {
  let cartDetails = [
    {
      id: 1,
      title: "iPhone 9",
      description: "An apple mobile which is nothing like apple",
      price: 549,
      discountPercentage: 12.96,
      rating: 4.69,
      stock: 94,
      brand: "Apple",
      category: "smartphones",
      thumbnail:
        "https://netrinoimages.s3.eu-west-2.amazonaws.com/2017/05/28/453344/208023/apple_iphone_9_all_colors_3d_model_c4d_max_obj_fbx_ma_lwo_3ds_3dm_stl_2192882.jpg",
      images: [
        "https://i.dummyjson.com/data/products/1/1.jpg",
        "https://i.dummyjson.com/data/products/1/2.jpg",
        "https://i.dummyjson.com/data/products/1/3.jpg",
        "https://i.dummyjson.com/data/products/1/4.jpg",
        "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
      ],
    },
    {
      id: 2,
      title: "iPhone X",
      description:
        "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
      price: 899,
      discountPercentage: 17.94,
      rating: 4.44,
      stock: 34,
      brand: "Apple",
      category: "smartphones",
      thumbnail:
        "https://www.refurbkart.com/cdn/shop/products/iphonexwhite_grande.png?v=1671625120",
      images: [
        "https://i.dummyjson.com/data/products/2/1.jpg",
        "https://i.dummyjson.com/data/products/2/2.jpg",
        "https://i.dummyjson.com/data/products/2/3.jpg",
        "https://i.dummyjson.com/data/products/2/thumbnail.jpg",
      ],
    },
    {
      id: 3,
      title: "Samsung Universe 9",
      description:
        "Samsung's new variant which goes beyond Galaxy to the Universe",
      price: 1249,
      discountPercentage: 15.46,
      rating: 4.09,
      stock: 36,
      brand: "Samsung",
      category: "smartphones",
      thumbnail: "https://pbs.twimg.com/media/Dr2wz4AU4AEXQeN.jpg",
      images: ["https://i.dummyjson.com/data/products/3/1.jpg"],
    },
    {
      id: 4,
      title: "OPPOF19",
      description: "OPPO F19 is officially announced on April 2021.",
      price: 280,
      discountPercentage: 17.91,
      rating: 4.3,
      stock: 123,
      brand: "OPPO",
      category: "smartphones",
      thumbnail:
        "https://opsg-img-cdn-gl.heytapimg.com/epb/202207/07/hxwnSiSJ89urUqAQ.png?x-amz-process=image/format,webp/quality,Q_80",
      images: [
        "https://i.dummyjson.com/data/products/4/1.jpg",
        "https://i.dummyjson.com/data/products/4/2.jpg",
        "https://i.dummyjson.com/data/products/4/3.jpg",
        "https://i.dummyjson.com/data/products/4/4.jpg",
        "https://i.dummyjson.com/data/products/4/thumbnail.jpg",
      ],
    },
    {
      id: 5,
      title: "Huawei P30",
      description:
        "Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.",
      price: 499,
      discountPercentage: 10.58,
      rating: 4.09,
      stock: 32,
      brand: "Huawei",
      category: "smartphones",
      thumbnail:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSu1fm7sS07mV0z5RzcTlyCmf1GfwBzY5VtZQ&usqp=CAU",
      images: [
        "https://i.dummyjson.com/data/products/5/1.jpg",
        "https://i.dummyjson.com/data/products/5/2.jpg",
        "https://i.dummyjson.com/data/products/5/3.jpg",
      ],
    },
  ];
  let discountPrice = (discount) => {
    return Math.round(
      discount.price - (discount.discountPercentage / 100) * discount.price
    );
  };

  return (
    <div className="row">
      <h1 className="text-center">SHOPPING CART</h1>
      <div className="col-sm-12 border-2">
        {" "}
        <div className="container-fluid">
          {cartDetails.map((cart) => {
            return (
              <Card
                key={cart.id}
                cart={cart}
                discountPrice={discountPrice(cart)}
              />
            );
          })}
        </div>
      </div>
      <div className="col-sm-3"></div>
    </div>
  );
}

export default Cart;
