

const Card = ({ data }) => {
    // console.log(data)
    return (
        <div className="row">
            {data.map((item) => {
                return (
                    <div key={item.id} className="col-sm-6 col-md-4 g-2 card-out">
                        <div className="card d-flex flex-row" >
                            <div className="img-div">
                                <img src={item.image} className="w-100 img-fluid" alt={item.name}  />
                            </div>
                            
                            <div className="card-body">
                                <h6 className="card-text"><span>Lesson Name:</span>  {item.name}</h6>
                                <h6 className="card-text"><span>Lesson Hour:</span>  {item.hour}</h6>
                            </div>
                        </div>
                    </div>
                )

            })}

        </div>

    )
}

export default Card