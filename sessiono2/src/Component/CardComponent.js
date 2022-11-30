import CardBodyComponent from "./CardBodyComponent"
import "./Card.style.css";
import atish from "./atish.jpg"

const datas = [
    {
        img: atish,
        name: 'Atish Kumar Kushwaha',
        adress: 'Varanasi U.P.',
        designation: 'SDE 1',
        Company: 'Zopsmart'
    },
    {
        img: atish,
        name: 'Prakash Kumar',
        adress: 'Ahemdabad Gujrat',
        designation: 'Frontend Developer',
        Company: 'Ftx infotech'
    },
    {
        img: atish,
        name: 'Garvit Joshi',
        adress: 'Jaipur, Rajsthan',
        designation: 'SDE',
        Company: 'Adobe'
    },
    {
        img: atish,
        name: 'krishna',
        adress: 'Andhra Pradesh',
        designation: 'SDE',
        Company: 'Rewaa'
    },
    {
        img: atish,
        name: 'Rishika Swaraj',
        adress: 'Nalanda, Bihar',
        designation: 'Student',
        Company: 'KIIT'
    },
    {
        img: atish,
        name: 'Rajashekhara bhat A B',
        adress: 'Bengaluru, Karnataka',
        designation: 'SDE',
        Company: 'Workllama software pvt ltd'
    },
    {
        img: atish,
        name: 'Sandeep Chaudhary',
        adress: 'Aurangabad, Maharashtra',
        designation: 'SDE',
        Company: 'accenture'
    },
    {
        img: atish,
        name: 'Vaibhav',
        adress: 'Kurukshetra',
        designation: 'SDE',
        Company: 'Newgen software '
    },
    {
        img: atish,
        name: 'Anuradha',
        adress: 'Banglore, Karnataka',
        designation: 'SDE',
        Company: 'Gainsight'
    },
    {
        img: atish,
        name: 'Jagadish',
        adress: 'Bellary, Karnataka',
        designation: 'SDE',
        Company: 'Deloitte'
    },

]

const CardComponent = () => {
    return (
        <div className="card-container">
            {
                datas.map((data) => {
                    return (<CardBodyComponent data={data} />)
                })
            }
        </div>
    )
}

export default CardComponent;