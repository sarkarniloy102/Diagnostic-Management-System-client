
const TestDetails = ({ test }) => {
    const { name, image, description, price, slots } = test;
    return (
        <div>
            <div className="card card-compact h-96 text-black shadow-xl">
                <figure><img className="w-full" src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title font-bold">{name}</h2>
                    <div className="flex justify-between text-lg font-semibold">
                        <p className="">Price: {price}</p>
                        <p>available slot: {slots}</p>
                    </div>
                    <p>{description}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Appointment</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TestDetails;