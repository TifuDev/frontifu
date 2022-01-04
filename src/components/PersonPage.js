import React from 'react';
import PropTypes from 'prop-types';
import { Person } from '../api/person';
import PersonLabel from './PersonLabel';

const nationality = {
  BR: 'Brasil',
  US: 'Estados Unidos da America',
};

const langs = {
  pt: 'portugues',
  en: 'ingles',
};

export default class PersonPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        firstName: 'Carregando...',
        familyName: '',
        details: {
          knowsLanguage: ['pt'],
          bio: 'Biografia do usuario.',
          profilePhotoUrl: '/svg/user-circle',
          nationality: 'US',
        },
        username: 'nomedousuario',
      },
      err: null,
    };
  }

  componentDidMount() {
    const { match } = this.props;

    new Person(match.params.username).get()
      .then((res) => {
        this.setState({ data: res });
      })
      .catch((err) => this.setState({ err }));
  }

  render() {
    const { data, err } = this.state;

    data.details.knowsLanguage.forEach((lang, index) => {
      data.details.knowsLanguage[index] = langs[lang];
    });

    if (err) {
      return (<h1>An error occured</h1>);
    }

    return (
      <div className="max-w-full md:max-w-md">
        <PersonLabel
          firstName={data.firstName}
          familyName={data.familyName}
          profilePhoto={data.details.profilePhotoUrl}
          desc={`${nationality[data.details.nationality]}, ${data.details.bio}`}
          thumbnailClassName="w-12 md:w-16 rounded-full mr-2"
        />
      </div>
    );
  }
}

PersonPage.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  match: PropTypes.object.isRequired,
};
