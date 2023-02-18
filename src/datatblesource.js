export const userColumns = [
    { field: 'id', headerName: 'ID', width: 70 }, {
        field: "user", headerName: "User", width: 230, renderCell: (params) =>{
            return (
                <div className="cellWithImg">
                    <img className="cellImg" src={params.row.img} alt="" />
                    {params.row.username}
                </div>
            )
        }
    },
    {
        field: "email",
        headerName: "Email",
        width: 230,
    },
    {
        field: "age",
        headerName: "Age",
        width: 100,
    },
    {
        field: "status",
        headerName: "Status",
        width: 100,
        renderCell: (params) =>{
            return (
                <div className={`cellWithStatus ${params.row.status}`}>
                    {params.row.status}</div>
            )
        }
    },
]
//TEMPORARY DATA
export const userRows = [
    {
        id: 1,
        username: "John Snow",
        img: "https://media.istockphoto.com/id/1191064863/photo/portrait-of-handsome-knight-with-goatee-and-fur-coat-looking-at-camera-with-ocean-in.jpg?b=1&s=612x612&w=0&k=20&c=byuCc14sRxYTWhz_H9pkGd3X0vducn7kvHT0qdgwYGc=",
        status: "active",
        email: "Snow@gmail.com",
        age: 35,
    },
    {
        id: 2,
        username: "Jamie Lannister",
        img: "https://media.istockphoto.com/photos/happy-couple-is-hiking-in-mountain-picture-id1179593309?b=1&k=20&m=1179593309&s=612x612&w=0&h=Y5TtY8uG-R1sPwxEWZ2WHztV2tGv4FqdnypvlHS2g8I=",
        status: "passive",
        email: "jamie@gmail.com",
        age: 35,
    },
    {
        id: 3,
        username: "Lannister",
        img: "https://media.istockphoto.com/photos/woman-standing-near-big-tropical-river-picture-id522001766?b=1&k=20&m=522001766&s=612x612&w=0&h=OJjkhV2LL8l5Oq1egCpGtZtCvwRE5a1lQaJfrhmMyFE=",
        status: "active",
        email: "lannister@gmail.com",
        age: 35,
    },
    {
        id: 4,
        username: "Arya Stark",
        img: "https://images.pexels.com/photos/9962890/pexels-photo-9962890.jpeg?auto=compress&cs=tinysrgb&w=400",
        status: "passive",
        email: "stark@gmail.com",
        age: 35,
    },
    {
        id: 5,
        username: "Harvey Roxie",
        img: "https://images.pexels.com/photos/3415861/pexels-photo-3415861.jpeg?auto=compress&cs=tinysrgb&w=400",
        status: "pending",
        email: "roxie@gmail.com",
        age: 35,
    },
    {
        id: 6,
        username: "Rossini Frances",
        img: "https://images.pexels.com/photos/15267246/pexels-photo-15267246.jpeg?auto=compress&cs=tinysrgb&w=400",
        status: "passive",
        email: "rossini@gmail.com",
        age: 35,
    },
    {
        id: 7,
        username: "Ferrara Cliford",
        img: "https://images.pexels.com/photos/6196047/pexels-photo-6196047.jpeg?auto=compress&cs=tinysrgb&w=400",
        status: "active",
        email: "ferrara@gmail.com",
        age: 35,
    },
    {
        id: 8,
        username: "Mellisandre",
        img: "https://images.pexels.com/photos/10816544/pexels-photo-10816544.jpeg?auto=compress&cs=tinysrgb&w=400",
        status: "pending",
        email: "mellisandre@gmail.com",
        age: 35,
    },
    {
        id: 9,
        username: "Daenerys Targaryen",
        img: "https://images.pexels.com/photos/10960315/pexels-photo-10960315.jpeg?auto=compress&cs=tinysrgb&w=400",
        status: "active",
        email: "targaryen@gmail.com",
        age: 35,
    },
    {
        id: 10,
        username: "Hames Edsey",
        img: "https://media.istockphoto.com/id/1033774292/photo/panic-attack-in-public-place-woman-having-panic-disorder-in-city-psychology-solitude-fear-or.jpg?b=1&s=612x612&w=0&k=20&c=j-wPXDXF6NT4y202OFuwtr2EALuKM2nFMsk6k0B4yG0=",
        status: "active",
        email: "hames@gmail.com",
        age: 35,
    },
];