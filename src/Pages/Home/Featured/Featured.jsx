import SectionTittle from "../../../Shared/SectionTittle/SectionTittle";
import DisplayFeatured from "./DisplayFeatured";
import useFeatured from "../../../Hooks/useFeatured/useFeatured";


const Featured = () => {

    const [featuredData] = useFeatured()

    return (
        <div className="my-20">
            <SectionTittle subTittle={"Latest"} tittle={"Featured Products"}></SectionTittle>
            <div className="grid grid-cols-3 items-center gap-10 mt-5">
                {
                    featuredData.map(featured => <DisplayFeatured key={featured._id} featured={featured}></DisplayFeatured>)
                }
            </div>
        </div>
    );
};

export default Featured;