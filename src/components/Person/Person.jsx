export const Person = ({ person }) => {
  // const { person } = props;

  let sexPartner = person.sex === 'm' ? 'wife' : 'husband'


  return (
    <section className="Person">
      <h2 className="Person__name">
        {`My name is ${person.name}`}
      </h2>

      {person.age ? (
        <p className="Person__age">
          {`I am ${person.age}`}
        </p>
      ) : null}


      {person.isMarried ? (
        <p className="Person__partner">
          {`${person.partnerName} is my ${sexPartner}`}
        </p>
      ) : (
        <p className="Person__partner">I am not married</p>
      )}

      {/* <p className="Person__partner">Natasha is my wife</p> */}
    </section>
  );
};
