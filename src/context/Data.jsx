import axios from "axios";
import { createContext, useContext, useState } from "react";
import Category from "../components/Category";

export const Data = createContext(null);

export const DataProvider = ({ children }) => {
    const [data, setData] = useState();

    const fetchProducts = async () => {
        try {
            const res = await axios.get("https://fakestoreapi.com/products?limit=150");
            console.log(res);
            const productsData = res.data.products
            setData(productsData)

        } catch (error) {
            console.log(error);

        }
    };
    const getCategory = (data, property) => {
        let newVal = data?.map((currEle) => { return currEle[property] });
        newVal = ["All", ...new Set(newVal)];
        return newVal;
    };

    const categoryData = getCategory(data, "category");

    const BrandData = getCategory(data, "brand")



    return (
        <Data.Provider value={{ data, setData, fetchProducts, categoryData, BrandData }}>
            {children}
        </Data.Provider>
    );
};
export const getData = () => useContext(Data)
