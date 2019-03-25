import React, { Component } from 'react';
// import { ThemeService } from './../';
// import { Modal } from '../';

const ThemeProvider_Context = React.createContext({ pageLoad: false });
class ThemeProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pageLoad: false,
      isShowingModal: false,
      modalChildren: undefined
    }
  }

  async componentDidMount() {
    this.setState({ pageLoad: false });
  }

  toggleModal = () => this.setState(
    ({ isShowingModal }) => ({ isShowingModal: !isShowingModal })
  )

  fillModal = modalChildren => {
    const { isShowingModal } = this.state;

    this.setState({ modalChildren });
    if (!isShowingModal) this.toggleModal();
  }

  render() {
    const { children } = this.props;
    const {
      pageLoad,
      isShowingModal,
      modalChildren
    } = this.state;

    return (
      <ThemeProvider_Context.Provider value={{
        pageLoad,
        isShowingModal,
        fillModal: this.fillModal.bind(this),
        toggleModal: this.toggleModal.bind(this),
      }}>
        { children }
        {/* { isShowingModal &&
          <Modal
            visible
            onToggleModal={this.toggleModal}
          >
            { modalChildren }
          </Modal>
        } */}
      </ThemeProvider_Context.Provider>
    );
  }
}

const ThemeProvider_Consumer = ThemeProvider_Context.Consumer;
export default ThemeProvider;
export { ThemeProvider_Consumer };
