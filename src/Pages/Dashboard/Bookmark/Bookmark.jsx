import DisplayBookmark from "../../../Hooks/DisplayBookmark/DisplayBookmark";
import SectionTittle from "../../../Shared/SectionTittle/SectionTittle";

const Bookmark = () => {

    const [bookmark] = DisplayBookmark()
    console.log(bookmark)

    return (
        <div className="mx-auto">
            <SectionTittle subTittle={'Bookmark'} tittle={"My Bookmark Products"}></SectionTittle>
            <div className="grid grid-cols-1 items-center md:grid-cols-2 gap-20 mt-10">
                {
                    bookmark?.map(item => <div key={item._id} className="card shadow-xl">
                        <img className='h-[300px] w-[300px] mx-auto' src={item?.image} alt="" />
                        <div className="card-body">
                            <h2 className="text-lg font-bold ">{item?.name}</h2>
                            <div className='flex md:flex-row  flex-col md:items-center font-semibold text-sm'>
                                <p>{item?.brand}</p>
                                <p>{item?.upload_date}</p>
                            </div>
                            <hr className='text-black text-lg my-4 border border-black' />
                            <button className="btn btn-outline">Remove from Bookmark</button>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Bookmark;