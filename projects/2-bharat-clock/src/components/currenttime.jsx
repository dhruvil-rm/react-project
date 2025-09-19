let Clocktime = () => {
  let time = new Date();

  return <p className="lead">this is the current time:{time.toLocaleDateString()} -
    {time.toLocaleTimeString()}</p>
};

export default Clocktime;