
const Title = ({heading,subHeading}) => {
    return (
        <div>
            <h1 className="text-4xl font-bold ">{heading}</h1>
            <p className="text-lg">{subHeading}</p>

            
        </div>
    );
};

export default Title;