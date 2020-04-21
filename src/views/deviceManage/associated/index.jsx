import React, {
  useMemo,
  useState,
  useCallback,
  forwardRef,
  useImperativeHandle
} from 'react'
import { Button, Modal } from 'antd'

const ModalHook = forwardRef(props => {
  const [modalTitle, setModalTitle] = useState('新增')
  const [visible, setVisible] = useState(false)
  const handleConfirmAddOrEdit = () => {}
  const handleCancelAddEditModel = () => {}
  const handleModelClose = () => {}
  const { cRef } = props
  useImperativeHandle(cRef, () => ({
    openModal: () => {
      setVisible(true)
    },
    closeModal: () => {
      setVisible(false)
    },
    setModalTitle: title => {
      setModalTitle(title)
    }
  }))
  return (
    <Modal
      title={modalTitle}
      visible={visible}
      onOk={handleConfirmAddOrEdit}
      onCancel={handleCancelAddEditModel}
      afterClose={handleModelClose}
    >
      <div>{props.children}</div>
    </Modal>
  )
})
export default function App() {
  const [target, setTarget] = useState(0)
  const [other, setOther] = useState(0)

  const sum = useMemo(() => {
    console.log('重新计算一次')
    let _sum = 0
    for (let i = 1; i <= target; i++) {
      _sum += i
    }
    return _sum
  }, [target])

  const inputChange = useCallback(e => {
    console.log(e.target.value)
  }, [])

  return (
    <div style={{ width: '200px', margin: 'auto' }}>
      <input type="text" onChange={inputChange} />{' '}
      {/* 一定会重新render input回调  */}
      <div style={{ width: '80px', margin: '100px auto', fontSize: '40px' }}>
        {target} {sum}
      </div>
      <Button onClick={() => setTarget(target + 1)}>递增</Button>
      <Button onClick={() => setTarget(target - 1)}>递减</Button>
      <div style={{ width: '80px', margin: '100px auto', fontSize: '20px' }}>
        干扰项 {other}
      </div>
      <Button onClick={() => setOther(other + 1)}>递增</Button>
      <Button onClick={() => setOther(other - 1)}>递减</Button>
      <ModalHook />
    </div>
  )
}
