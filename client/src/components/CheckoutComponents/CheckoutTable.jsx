import React from "react";
import "./CheckoutTable.css"; // Se till att CSS är importerad

const CheckoutTable = () => {
    return (
        <table className="checkouttable">
            <thead>
                <tr>                    
                    <th>Product</th>
                    <th>Price</th>                                                                                                                                                                          
                </tr>
            </thead>                                                                                                                                                                                                                                                                                                                                                                                          
            <tbody>
                <tr>                    
                    <td>Product 1</td>
                    <td>$19.99</td>                                                                                                                                                                                                                                                                                  
                </tr>
                <tr>                    
                    <td>Product 2</td>
                    <td>$29.99</td>                                                                                                                                                                                                                                                                                                                                                                                                                                                          
                </tr>
                <tr>                                            
                    <td>Product 3</td>
                    <td>$39.99</td> 
                </tr>
            </tbody>
        </table>
    );
}    
export default CheckoutTable;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                