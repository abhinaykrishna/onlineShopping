import React, { useState } from "react";
import MenuItem from "../menu/menu-items";
import "./directory.styles.scss";

function Directory() {
  const products = [
    {
      id: 1,
      title: "Watches",
      imageUrl:
        "https://images.unsplash.com/photo-1548169874-53e85f753f1e?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=612&q=80",
    },
    {
      id: 2,
      title: "Sneakers",
      imageUrl:
        "https://images.unsplash.com/photo-1516478177764-9fe5bd7e9717?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
    },
    {
      id: 3,
      title: "Jeans",
      imageUrl:
        "https://images.unsplash.com/photo-1560243563-062bfc001d68?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=750&q=80",
    },

    {
      id: 4,
      title: "SunGlasses",
      imageUrl:
        "https://images.unsplash.com/photo-1590564310418-66304f55a2c2?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=750&q=80",
    },
    {
      id: 5,
      title: "Suits & Blazers",
      imageUrl:
        "https://images.unsplash.com/photo-1577204979921-ce69d69a88cf?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=750&q=80",
    },
    {
      id: 6,
      title: "Beauty & Care",
      imageUrl:
        "https://images.unsplash.com/photo-1591019479261-1a103585c559?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=750&q=80g",
    },
    {
      id: 7,
      title: "Male",
      size: "large",
      imageUrl:
        "https://images.unsplash.com/photo-1599751449303-536e27b4019a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=749&q=80",
    },
    {
      id: 8,
      title: "Female",
      size: "large",
      imageUrl:
        "https://images.unsplash.com/photo-1469334031218-e382a71b716b?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=750&q=80",
    },
  ];
  const [category, setCategory] = useState(products);
  return (
    <div className="directory-menu">
      {category.map((product) => (
        <MenuItem
          key={product.id}
          title={product.title}
          image={product.imageUrl}
          size={product.size}
        />
      ))}
    </div>
  );
}

export default Directory;
