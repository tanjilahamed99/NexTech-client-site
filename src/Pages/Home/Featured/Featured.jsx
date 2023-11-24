import { useQuery } from "@tanstack/react-query";
import SectionTittle from "../../../Shared/SectionTittle/SectionTittle";
import UseAxiosPublic from "../../../Hooks/AxiosPublic/UseAxiosPublic";
import DisplayFeatured from "./DisplayFeatured";


const Featured = () => {

    const axiosPublic = UseAxiosPublic()

    const { data: featuredData = [] } = useQuery({
        queryKey: ['featured'],
        queryFn: async () => {
            const res = await axiosPublic('/featured')
            return res.data
        }
    })

    console.log(featuredData)

    return (
        <div className="my-20">
            <SectionTittle subTittle={"Latest"} tittle={"Featured Products"}></SectionTittle>
            <div className="grid grid-cols-3 items-center gap-10 mt-5">
              {
                featuredData.map(featured=><DisplayFeatured key={featured._id} featured={featured}></DisplayFeatured>)
              }
            </div>
        </div>
    );
};

export default Featured;