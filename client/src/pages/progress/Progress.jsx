import OtherHeader from "../../Components/otherHeader/OtherHeader"
import ProgressReport from "../../Components/progressReport/ProgressReport"
import '../../Components/herosection/heroSection.css'
import Footer from "../../Components/footer/Footer"
import './progress.css'
import PagePortion from "../../Components/pagePortion/PagePortion"
const Progress = () => {
    return (
        <>
            <OtherHeader/>
            <PagePortion heading="Progress Report"/>
            <ProgressReport/>
            <Footer />
        </>
    )
}

export default Progress
