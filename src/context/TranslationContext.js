import React, { Component, createContext } from "react";

const { Provider, Consumer } = createContext({});

class TranslationProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      initialTextLoaded: false,
      textLoaded: false,
      locale: "",
      setLocale: this.setLocale,
      texts: {}
    };
  }

  componentDidMount() {
    const locale =
      window.localStorage.getItem("lang") === ("hy-AM" || "en-GB")
        ? window.localStorage.getItem("lang")
        : "en-GB";
    this.setLocale(locale);
  }

  setLocale = locale => {
    if (this.state.locale !== locale) {
      this.setState({ textLoaded: false, locale });
      window.localStorage.setItem("lang", locale);
      fetch(`/locale/${locale}.json`)
        .then(res => res.json())
        .then(json => {
          this.setState({
            textLoaded: true,
            initialTextLoaded: true,
            texts: json
          });
        })
        .catch(ex => {
          this.setState({
            err: ex
          });
        });
    }
  };

  render() {
    return <Provider value={this.state}>{this.props.children}</Provider>;
  }
}

function connectTranslations(Component) {
  return props => (
    <Consumer>{value => <Component {...props} {...value} />}</Consumer>
  );
}

export { TranslationProvider, connectTranslations };