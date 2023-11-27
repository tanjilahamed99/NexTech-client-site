import UseMyProducts from "../../../Hooks/useMyProducts/UseMyProducts";
import SectionTittle from "../../../Shared/SectionTittle/SectionTittle";


const MyProducts = () => {

    const [myProducts] = UseMyProducts()
    console.log(myProducts)

    return (
        <div className="w-full">
            <SectionTittle subTittle={'Product'} tittle={'My Products'}></SectionTittle>
            <div className="overflow-x-auto w-full mt-5">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Products Name</th>
                            <th>Vote</th>
                            <th>Status</th>
                            <th>Action</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            myProducts.map((item,idx)=><tr key={item._id}>
                                <th>{idx + 1}</th>
                                <td>{item.name}</td>
                                <td>{item.upvote}</td>
                                <td>{item.status}</td>
                                <td>Update</td>
                                <td>delete</td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyProducts;