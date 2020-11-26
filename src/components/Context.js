import React, { Component } from "react";

export const DataContext = React.createContext();

export class DataProvider extends Component {
  state = {
    products: [
      {
        _id: "1",
        title: "Nike Shoes 01",
        src: "https://www.upsieutoc.com/images/2020/06/27/img1.jpg",
        Description: "UI/UX designing, html css tutorials",
        Content: "lorem",
        price: 23,
        color: ["red", "black", "crimson", "teal"],
        count: 1,
      },
      {
        _id: "2",
        title: "Nike Shoes 02",
        src: "https://www.upsieutoc.com/images/2020/06/27/img2.jpg",
        Description: "UI/UX designing, html css tutorials",
        Content: "lorem",
        price: 19,
        color: ["red", "crimson", "teal"],
        count: 1,
      },
      {
        _id: "3",
        title: "Nike Shoes 03",
        src: "https://www.upsieutoc.com/images/2020/06/27/img3.jpg",
        Description: "UI/UX designing, html css tutorials",
        Content: "lorem",
        price: 50,
        color: ["lightblue", "white", "crimson", "teal"],
        count: 1,
      },
      {
        _id: "4",
        title: "Nike Shoes 04",
        src: "https://www.upsieutoc.com/images/2020/06/27/img4.jpg",
        Description: "UI/UX designing, html css tutorials",
        Content: "lorem",
        price: 15,
        color: ["orange", "black", "crimson", "teal"],
        count: 1,
      },
      {
        _id: "5",
        title: "Nike Shoes 05",
        src: "https://www.upsieutoc.com/images/2020/06/27/img5.jpg",
        Description: "UI/UX designing, html css tutorials",
        Content: "lorem",
        price: 10,
        color: ["orange", "black", "crimson", "teal"],
        count: 1,
      },
      {
        _id: "6",
        title: "Nike Shoes 06",
        src: "https://www.upsieutoc.com/images/2020/06/27/img6.jpg",
        Description: "UI/UX designing, html css tutorials",
        Content: "lorem",
        price: 17,
        color: ["orange", "black", "crimson", "teal"],
        count: 1,
      },
    ],
  };

  render() {
    const { products } = this.state;

    return (
      <DataContext.Provider value={{ products }}>
        {this.props.children}
      </DataContext.Provider>
    );
  }
}
