import "./Item.css";

function Item(props) {

    let item = (
        <div id={props.name} className='item'>
            <div className='left'>
                <div className='about'>
                    <p>
                        {props.about}
                    </p>
                </div>
                <div className="more">
                    <a className="button" href={props.link}>show more</a>
                </div>
            </div>
            <div className="right">
                <div className="name">
                    {props.name}
                </div>
                <img className="pfp" src={props.pfp} alt=""/>
            </div>
        </div>
    );

    return item;
}

export default Item;