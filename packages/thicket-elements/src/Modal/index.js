import React, { Component } from 'react'
import styled from 'styled-components'
import { glow } from '../sharedStyles'
import onClickOutside from "react-onclickoutside"

const Background = styled.div`
  /* mobile
   * encapsulating div with padding
   * */
  padding: 1em;

  /* desktop
   * full sized transparent background
   * */
  @media (min-width: 600px) {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 12;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(16,33,49,0.9);
    padding: 0;
  }
`

const Wrap = styled.div`
  /* mobile
   * */
  width: 100%;
  background: #F6F9FD;
  box-shadow: ${glow};
  border-radius: 4px;
  overflow: hidden;

  /* desktop
   * centered container
   * */
  @media (min-width: 600px) {
    width: auto;
  }
`

const Wrapper = onClickOutside(Wrap)

class Modal extends Component {

  componentDidMount() {
    if (this.props.disableBodyScroll && document.documentElement.clientWidth > 600) {
      document.querySelector('body').style.overflow = 'hidden'
    }
  }

  componentWillUnmount() {
    document.querySelector('body').style.overflow = 'auto'
  }

  render() {
    const { children, onClose=()=>{}, ...props } = this.props
    return <Background>
      <Wrapper {...props} handleClickOutside={onClose}>
        {children}
      </Wrapper>
    </Background>
  }
}

export default Modal
