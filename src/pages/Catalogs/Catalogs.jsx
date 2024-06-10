import axios from "axios";
import { useEffect, useState } from 'react'
import './Catalogs.scss'
import { getAllProducts } from '../../api/catalogs.api'

export const Catalogs = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const resp = await getAllProducts();
                setProducts(resp.data); 
            } catch (error) {
                console.error("Ошибка:", error);
            }
        };
        fetchProducts();
    }, []);

    return (
        <div className='container'>
            <div className='cards'>
                {products.slice(0, 50).map(product => (
                    <div className="card" key={product.id}>
                        <div className='image'>
                            <img src={product.url} alt="" />
                        </div>
                        <p className='title'>{product.title}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}



// import { useEffect, useState } from 'react'
// import './Catalogs.scss'
// import { getAllProducts } from '../../api/catalogs.api'

// export const Catalogs = () => {

//     const [products, setProducts] = useState([]);

//     useEffect(() => {
//         setProducts(getAllProducts())
//     }, []);

//     return (
//         <div className='container'>
//             <div className='cards'>
//                 <div className="card">
//                     <div className='image'>
//                         <img src="https://w7.pngwing.com/pngs/413/502/png-transparent-couch-table-living-room-bedroom-furniture-soft-angle-furniture-room.png" alt="" />
//                     </div>
//                     <p className='title'>accusamus beatae ad facilis cum similique qui sunt</p>
//                 </div>

//                 {
//                     products.map(product => {
//                         <div className="card">
//                             <div className='image'>
//                                 <img src={product.url} alt="" />
//                             </div>
//                             <p className='title'>{product.title}</p>
//                         </div>
//                     })
//                 }

//             </div>
//         </div>
//     )
// }