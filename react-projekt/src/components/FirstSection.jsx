const FirstSection = () => {
  return (
    <section id="firstSection">
      <div className="shadow">
        <div className="container firstSectionElements">
          <h1 className="mainTop">
            Nasza firma oferuje najwyższej jakości produkty
          </h1>
          <h2 className="slogan">Nie wierz nam na słowo – sprawdź</h2>
          <a href="#offerSection" type="button" className="linkButton">
            oferta
          </a>
        </div>
      </div>
    </section>
  );
};

export default FirstSection;
