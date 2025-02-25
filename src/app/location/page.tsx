import Location from "@/components/location/location";
import Head from "next/head";

const LocationPage = () => {
    return (
        <>
            <Head>
                <title>Find Us | Best Restaurant Near MMU & Mutiara Ville Cyberjaya</title>
                <meta 
                    name="description" 
                    content="Visit Habebee Lounge in Cyberjaya, conveniently located near MMU, Mutiara Ville, and the hospital. Enjoy the best food in the area today!" 
                />
            </Head>
            <Location />
        </>
    );
};

export default LocationPage; 
