import React from 'react'
import Modal from '../../../components/Modal'
import { Button } from 'thicket-elements'
import copy from 'copy-to-clipboard'

const Invite = props => {
  const link = ''
  return <Modal
    header={<div>Copy Community Invite Link</div>}
    main={[
      <div key="msg">Copy the Community Invite Link below and send to others to join and contribute to this community.</div>,
      <div key="input"><input type="text" readOnly value={link} /></div>,
      <div key="note">NOTE: Anyone with this link can join and contribute content. Only send to reliable users and do not post publically.</div>,
    ]}
    footer={[
        <Button key="cancel" onClick={props.onClose}>Cancel</Button>,
        <Button key="copy" onClick={() => copy(link)}>Copy Link</Button>,
    ]}
    onClose={props.onClose}
  />
}

export default Invite
