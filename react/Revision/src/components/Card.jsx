import PropTypes from 'prop-types';

const Card = (props) => {
  return (
    <div className="grid grid-cols-1 gap-[30px] md:grid-cols-3 pl-4">
    <div className="flex flex-col items-center text-start">
      <div
        className="relative flex h-[342px] w-full flex-col justify-end rounded-[10px] bg-red-300"
        style={{
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <img
          src={props.IMG}
          alt=""
          className="z-0 h-full w-full rounded-[10px] object-cover"
        />
        <div className="absolute bottom-4 left-4">
          <h1 className="text-xl font-semibold text-white">{props.Name}</h1>
          <h6 className="text-base text-white">{props.Role}</h6>
        </div>
      </div>
    </div>
  </div>
  )
}

Card.propTypes = {
  Name: PropTypes.string.isRequired,
  Role: PropTypes.string.isRequired,
  IMG: PropTypes.string.isRequired,
};

export default Card;