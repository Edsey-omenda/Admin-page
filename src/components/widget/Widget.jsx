import { AccountBalanceWalletOutlined, KeyboardArrowUpOutlined, MonetizationOnOutlined, PersonOutlineOutlined, ShoppingCartCheckoutOutlined } from "@mui/icons-material";
import "./widget.scss";

const Widget = ({type}) => {

    let data;
    //testdata
    const amount=2000;
    const diff = 36;


    switch (type){
        case "user":
            data = {
                title: "USERS",
                isMoney: false,
                link:"see all users",
                icon: <PersonOutlineOutlined 
                className="icon" 
                style={{color: "crimson",
                 backgroundColor: "rgba(255, 0, 0, 0.2)",
            }}/>
            };
            break;
            case "order":
            data = {
                title: "ORDERS",
                isMoney: false,
                link:"view all orders",
                icon: <ShoppingCartCheckoutOutlined 
                className="icon"
                style={{color: "goldenrod",
                backgroundColor: "rgba(224, 171, 32, 0.2)",
           }}/>
            };
            break;
            case "earning":
                data = {
                    title: "EARNING",
                    isMoney: true,
                    link:"view net earnings",
                    icon: <MonetizationOnOutlined 
                    className="icon"
                    style={{color: "green",
                    backgroundColor: "rgba(0, 128, 0, 0.2)",
               }}/>
                };
                break;
            case "balance":
            data = {
                title: "BALANCE",
                isMoney: true,
                link:"view details",
                icon: <AccountBalanceWalletOutlined 
                className="icon"
                style={{color: "purple",
                backgroundColor: "rgba(128, 0, 128, 0.2)",
           }}/>
            };
            break;
            default:
                break;
    }
    return (
        <div className="widget">
        <div className="left">
            <spant className="title">{data.title}</spant>
            <spant className="counter">{data.isMoney && "$"} {amount}</spant>
            <spant className="link">{data.link}</spant>
        </div>
        <div className="right">
            <div className="percentage positive">
                <KeyboardArrowUpOutlined />
                {diff}%
            </div>
            {data.icon}
        </div>
        </div>
    );
}

export default Widget;
