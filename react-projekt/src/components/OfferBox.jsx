const OfferBox = ({ isNew, serviceName }) => {
  return (
    <div className={isNew ? "service newService" : "service"}>
      <h5 className="serviceName">{serviceName}</h5>
      <p>(nowość)</p>
    </div>
  );
};

export default OfferBox;
