

const Card = ({ data }) => {
    console.log(data)
    return (
        <div className="row">
            {data.map((item) => {
                // return(<div key={item.id}>
                //     <img src={item.image} alt={item.name} />
                //     <h5>{item.name}</h5>
                //     <p>{item.hour}</p>
                // </div>)
                return (
                    <div key={item.id} className="col-sm-6 col-md-4 g-3">
                    <div className="card d-flex align-items-center text-center p-5" >
                        <img src={item.image} className="w-25 img-thumbnail" alt={item.name} />
                        <div className="card-body">
                            <h5 className="card-text">{item.name}</h5>
                            <h5 className="card-text">{item.hour}</h5>
                        </div>
                    </div>
                    </div>
                )

            })}

        </div>

    )
}

export default Card